import { useNavigate } from 'solid-app-router'
import { IconTypes } from 'solid-icons'
import {
  AiFillCloseCircle,
  AiOutlineAppstore,
  AiOutlineCheckSquare,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlineTeam,
} from 'solid-icons/ai'
import {
  createEffect,
  createMemo,
  createRenderEffect,
  createSignal,
  For,
  JSX,
  Match,
  onMount,
  Show,
  Switch,
  VoidComponent,
} from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { useHotkeys } from '../../hooks/useHotkeys'
import { ellipsis } from '../../style/utilities.css'
import { Key } from '../../types'
import { IconButton } from '../Button'
import {
  action_description,
  close_button,
  command_palette,
  header,
  input,
  left_container,
  results,
  result_active,
  result_container,
  result_group,
  result_group_item,
  result_group_title,
  result_icon,
  result_item,
  result_title,
  right_container,
} from './command-palette.css'

export type CommandPaletteProps = {
  onAction?: (result: Result) => void
}
export const CommandPalette: VoidComponent<CommandPaletteProps> = props => {
  const [resultGroups, setResultGroups] =
    createSignal<ResultGroup[]>(_resultGroups)
  const resultKeys = createMemo(() =>
    resultGroups().reduce((acc, group) => {
      return [...acc, ...group.results.map(result => result.key)]
    }, [] as Key[]),
  )
  const [activeKey, setActiveKey] = createSignal<Key | null>(
    resultKeys()[0] ?? null,
  )

  const navigate = useNavigate()
  const handleAction = (result: Result): void => {
    if (result.type === 'link' && result.para) {
      navigate(result.para)
    }
    props.onAction?.(result)
  }

  let ref: HTMLInputElement | undefined

  onMount(() => {
    ref?.focus()
  })

  useHotkeys(
    () => ref,
    'ArrowUp',
    e => {
      e.preventDefault()
      setActiveKey(activeKey => {
        const _resultKeys = resultKeys()
        if (activeKey === null) return _resultKeys[0]
        const index = _resultKeys.indexOf(activeKey)
        const nextIndex = (index - 1 + _resultKeys.length) % _resultKeys.length
        return _resultKeys[nextIndex]
      })
    },
  )

  useHotkeys(
    () => ref,
    'ArrowDown',
    e => {
      e.preventDefault()
      setActiveKey(activeKey => {
        const _resultKeys = resultKeys()
        if (activeKey === null) return _resultKeys[0]
        const index = _resultKeys.indexOf(activeKey)
        const nextIndex = (index + 1) % _resultKeys.length
        return _resultKeys[nextIndex]
      })
    },
  )

  useHotkeys(
    () => ref,
    'Enter',
    e => {
      e.preventDefault()
      const _resultGroups = resultGroups()
      const _activeKey = activeKey()
      if (_activeKey === null) return
      const _result = _resultGroups.reduce(
        (acc, group) =>
          acc ||
          (group.results.find(result => result.key === _activeKey) ?? null),
        null as Result | null,
      )
      if (_result === null) return
      handleAction(_result)
    },
  )
  let resultRefs: Record<Key, HTMLLIElement> = {}

  createRenderEffect(() => {
    const _activeKey = activeKey()
    if (_activeKey === null) return
    const item = resultRefs[_activeKey]
    if (item) {
      item.scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
      })
    }
  })

  const [inputValue, setInputValue] = createSignal('')
  const handleKeyDown: JSX.EventHandlerUnion<
    HTMLInputElement,
    Event
  > = event => {
    const value = event.currentTarget.value
    if (value === inputValue()) return
    setInputValue(value)

    const _resultKeys = resultKeys()
    setActiveKey(_resultKeys[0] ?? null)
  }

  createEffect(() => {
    const _inputValue = inputValue()
    setResultGroups(
      _resultGroups.reduce((acc, group) => {
        const results = group.results.filter(result =>
          result.title
            .toLowerCase()
            .split(' ')
            .join('')
            .includes(_inputValue.toLowerCase().split(' ').join('')),
        )
        if (results.length > 0) {
          return [...acc, { ...group, results }]
        }
        return acc
      }, [] as ResultGroup[]),
    )
  })

  const handleItemMouseEnter = (key: Key) => {
    setActiveKey(key)
  }

  return (
    <div class={command_palette} role="dialog">
      <div class={header} onClick={() => ref?.focus()}>
        <div class={left_container}>
          <AiOutlineSearch size={16} />
        </div>
        <input
          ref={ref}
          class={input}
          type="text"
          placeholder="Search Everywhere"
          role="combobox"
          value={inputValue()}
          onKeyUp={handleKeyDown}
        />
        {/* <div class={placeholder}>{}</div> */}
        <div class={right_container}>
          <Show when={inputValue() !== ''}>
            <IconButton
              class={close_button}
              size="xs"
              variant="text"
              icon={<AiFillCloseCircle size={16} />}
              onClick={() => setInputValue('')}
            ></IconButton>
          </Show>
        </div>
      </div>
      <div class={result_container}>
        <ul class={result_group}>
          <For each={resultGroups()}>
            {resultGroup => (
              <li class={result_group_item}>
                <div class={`${result_group_title} ${ellipsis}`}>
                  {resultGroup.groupTitle}
                </div>
                <ul class={results}>
                  <For each={resultGroup.results}>
                    {result => (
                      <Show when={resultKeys().includes(result.key)}>
                        <li
                          ref={ref => (resultRefs[result.key] = ref)}
                          class={`${result_item} ${
                            activeKey() === result.key ? result_active : ''
                          }`}
                          onMouseEnter={() => handleItemMouseEnter(result.key)}
                        >
                          <Dynamic
                            class={result_icon}
                            component={result.icon}
                          />
                          <Switch
                            fallback={
                              <>
                                <div class={`${result_title} ${ellipsis}`}>
                                  {result.title}
                                </div>
                                <div class={action_description}>
                                  {/* {result.actionDescription} */}
                                </div>
                              </>
                            }
                          >
                            <Match when={result.type === 'link'}>
                              <div
                                class={`${result_title} ${ellipsis}`}
                                onClick={() => handleAction(result)}
                              >
                                {result.title}
                              </div>
                              <div class={action_description}>Jump to</div>
                            </Match>
                          </Switch>
                        </li>
                      </Show>
                    )}
                  </For>
                </ul>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  )
}

type ResultGroup = {
  groupTitle: string
  results: Result[]
}
type Result = {
  key: Key
  type?: 'link'
  para?: string
  title: string
  icon: IconTypes
}

const _resultGroups: ResultGroup[] = [
  {
    groupTitle: 'Pages',
    results: [
      {
        key: 'dashboard',
        title: 'Dashboard',
        icon: AiOutlineHome,
        type: 'link',
        para: '/',
      },
      {
        key: 'app',
        title: 'App',
        icon: AiOutlineAppstore,
        type: 'link',
        para: '/app',
      },
      {
        key: 'todo',
        title: 'Todo',
        icon: AiOutlineCheckSquare,
        type: 'link',
        para: '/todo',
      },
      {
        key: 'chat',
        title: 'Chat',
        icon: AiOutlineMessage,
        type: 'link',
        para: '/chat',
      },
      {
        key: 'people',
        title: 'People',
        icon: AiOutlineTeam,
        type: 'link',
        para: '/people',
      },
    ],
  },
  {
    groupTitle: 'Search',
    results: [
      {
        key: 'search-1',
        title: 'Search 1',
        icon: AiOutlineHome,
      },
      {
        key: 'search-2',
        title: 'Search 2',
        icon: AiOutlineHome,
      },
      {
        key: 'search-3',
        title: 'Search 3',
        icon: AiOutlineHome,
      },
    ],
  },
  {
    groupTitle: 'Favorites',
    results: [
      {
        key: 'favorites-1',
        title: 'Favorites 1',
        icon: AiOutlineHome,
      },
      {
        key: 'favorites-2',
        title: 'Favorites 2',
        icon: AiOutlineHome,
      },
      {
        key: 'favorites-3',
        title: 'Favorites 3',
        icon: AiOutlineHome,
      },
    ],
  },
]
