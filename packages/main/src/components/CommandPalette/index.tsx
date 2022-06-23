import { IconTypes } from 'solid-icons'
import {
  AiFillCloseCircle,
  AiOutlineHome,
  AiOutlineSearch,
} from 'solid-icons/ai'
import {
  createMemo,
  createRenderEffect,
  createSignal,
  For,
  JSX,
  Show,
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

export const CommandPalette = () => {
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

  let ref: HTMLInputElement | undefined

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
    setInputValue(value)
    setResultGroups(
      _resultGroups.reduce((acc, group) => {
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

  const handleItemMouseEnter = (key: Key) => {
    setActiveKey(key)
  }

  return (
    <div class={command_palette}>
      <div class={header}>
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
          <IconButton
            class={close_button}
            size="xs"
            variant="text"
            icon={<AiFillCloseCircle size={16} />}
          ></IconButton>
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
                          <div class={`${result_title} ${ellipsis}`}>
                            {result.title}
                          </div>
                          <div class={action_description}>
                            {result.actionDescription}
                          </div>
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
  title: string
  actionDescription: string
  icon: IconTypes
}

const _resultGroups = [
  {
    groupTitle: 'Recent',
    results: [
      {
        key: 'recent-1',
        title: 'Recent 1',
        actionDescription: 'Jump to',
        icon: AiOutlineHome,
      },
      {
        key: 'recent-2',
        title: 'Recent 2',
        actionDescription: 'Jump to',
        icon: AiOutlineHome,
      },
      {
        key: 'recent-3',
        title: 'Recent 3',
        actionDescription: 'Jump to',
        icon: AiOutlineHome,
      },
    ],
  },
  {
    groupTitle: 'Search',
    results: [
      {
        key: 'search-1',
        title: 'Search 1',
        actionDescription: 'Jump to',
        icon: AiOutlineHome,
      },
      {
        key: 'search-2',
        title: 'Search 2',
        actionDescription: 'Jump to',
        icon: AiOutlineHome,
      },
      {
        key: 'search-3',
        title: 'Search 3',
        actionDescription: 'Jump to',
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
        actionDescription: 'Jump to',
        icon: AiOutlineHome,
      },
      {
        key: 'favorites-2',
        title: 'Favorites 2',
        actionDescription: 'Jump to',
        icon: AiOutlineHome,
      },
      {
        key: 'favorites-3',
        title: 'Favorites 3',
        actionDescription: 'Jump to',
        icon: AiOutlineHome,
      },
    ],
  },
]
