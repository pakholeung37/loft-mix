import { useNavigate } from 'solid-app-router'
import {
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineCheckSquare,
  AiOutlineMessage,
  AiOutlineTeam,
} from 'solid-icons/ai'
import { createSignal, VoidComponent } from 'solid-js'
import {
  CommandPalette,
  CommandPaletteProps,
  Result,
  ResultGroup,
} from '../components/CommandPalette'
import { useRegistries } from '../context/registries'
import { commandRegistry } from '../services/commands/CommandService'

export type CommandPaletteContainerProps = Pick<CommandPaletteProps, 'onAction'>

export const CommandPaletteContainer: VoidComponent<
  CommandPaletteContainerProps
> = props => {
  const navigate = useNavigate()

  const { commandRegistry } = useRegistries()
  const commands = Array.from(commandRegistry.getCommands().values())
  const allResultGroups = commands.reduce((acc, command) => {
    const group = command?.group || 'General'
    const result: Result = {
      id: command.id,
      group,
      title: command.title,
      handler: () => command.handler({ navigate }),
      actionDescription: 'Jump to',
      icon: command.icon,
    }
    const groupIndex = acc.findIndex(_group => _group.groupTitle === group)
    if (groupIndex === -1) {
      return [
        ...acc,
        {
          groupTitle: group,
          results: [result],
        },
      ]
    }
    return [
      ...acc.slice(0, groupIndex),
      {
        ...acc[groupIndex],
        results: [...acc[groupIndex].results, result],
      },
      ...acc.slice(groupIndex + 1),
    ]
  }, [] as ResultGroup[])

  const [resultGroups, setResultGroups] =
    createSignal<ResultGroup[]>(allResultGroups)

  const handleSearchValueChange = (value: string) => {
    setResultGroups(
      allResultGroups.reduce((acc, group) => {
        const results = group.results.filter(result =>
          result.title
            .toLowerCase()
            .split(' ')
            .join('')
            .includes(value.toLowerCase().split(' ').join('')),
        )
        if (results.length > 0) {
          return [...acc, { ...group, results }]
        }
        return acc
      }, [] as ResultGroup[]),
    )
  }

  return (
    <CommandPalette
      onSearchValueChange={handleSearchValueChange}
      resultGroups={resultGroups()}
      onAction={props.onAction}
    />
  )
}

const navigation = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: AiOutlineHome,
    path: '/',
  },
  {
    id: 'app',
    title: 'App',
    icon: AiOutlineAppstore,
    path: '/app',
  },
  {
    id: 'todo',
    title: 'Todo',
    icon: AiOutlineCheckSquare,
    path: '/todo',
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: AiOutlineMessage,
    path: '/chat',
  },
  {
    id: 'people',
    title: 'People',
    icon: AiOutlineTeam,
    path: '/people',
  },
]

navigation.forEach(navigation => {
  commandRegistry.registerCommand({
    id: `main.navigation.${navigation.id}`,
    title: navigation.title,
    group: 'Pages',
    handler: ({ navigate }) => {
      navigate(navigation.path)
    },
    icon: navigation.icon,
  })
})
