import { Component, For, Match, Switch, VoidComponent } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { Key } from '../../types'
import { CardWrapper } from './components/CardWrapper'
import { HelloCard } from './components/HelloCard'
import { SimpleChartCard } from './components/SimpleChartCard'
import { card_container, content_layout } from './dashboard.css'

export const Dashboard: VoidComponent = () => {
  return (
    <div class={content_layout}>
      <For each={cards}>
        {card => (
          <div
            class={card_container}
            style={{
              'grid-area': getCardGridArea(card),
            }}
          >
            <Switch
              fallback={
                <CardWrapper>
                  <div>void</div>
                </CardWrapper>
              }
            >
              <Match when={card.component}>
                <Dynamic component={card.component!} />
              </Match>
            </Switch>
          </div>
        )}
      </For>
    </div>
  )
}

type CardMeta = {
  key: Key
  position: [number, number]
  component: Component | null
  width: number
  height: number
}
const cards: CardMeta[] = [
  {
    key: 'hello',
    component: HelloCard,
    position: [0, 0],
    width: 6,
    height: 2,
  },
  {
    key: 1,
    component: null,
    position: [0, 2],
    width: 4,
    height: 12,
  },
  {
    key: 2,
    component: SimpleChartCard,
    position: [4, 2],
    width: 2,
    height: 4,
  },
  {
    key: 3,
    component: null,
    position: [4, 6],
    width: 2,
    height: 4,
  },
  {
    key: 4,
    component: null,
    position: [4, 10],
    width: 2,
    height: 4,
  },
  {
    key: 5,
    component: null,
    position: [0, 14],
    width: 2,
    height: 4,
  },
  {
    key: 6,
    component: null,
    position: [0, 18],
    width: 2,
    height: 8,
  },
  {
    key: 7,
    component: null,
    position: [2, 14],
    width: 4,
    height: 12,
  },
  {
    key: 8,
    component: null,
    position: [6, 0],
    width: 2,
    height: 26,
  },
]

const getCardGridArea = (card: CardMeta) => {
  const [x, y] = card.position
  const [width, height] = [card.width, card.height]
  return `${y + 1} / ${x + 1} / ${y + height + 1} / ${x + width + 1}`
}
