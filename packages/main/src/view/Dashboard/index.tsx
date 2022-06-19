import { Component, For, Match, Switch, VoidComponent } from 'solid-js'
import { vars } from '../../style/index.css'
import { Key } from '../../types'
import { CardWrapper } from './components/CardWrapper'
import { HelloCard } from './components/HelloCard'
import { RatingCard } from './components/RatingCard'
import { SimpleChartCard } from './components/SimpleChartCard'
import { SimpleGaugeChart } from './components/SimpleGaugeChart'
import { SimpleLineChart } from './components/SimpleLineChart'
import { card_container, content_layout } from './dashboard.css'
import { LineChartCard } from './components/LineChartCard'
import { TableCard } from './components/TableCard'

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
              <Match when={card.key === 0}>
                <HelloCard />
              </Match>
              <Match when={card.key === 1}>
                <LineChartCard title="Sales Report" />
              </Match>
              <Match when={card.key === 2}>
                <SimpleChartCard
                  title="Net Income"
                  main="$21.779"
                  footer={
                    <span style={{ color: vars.color.green5 }}>+2,519</span>
                  }
                  chart={
                    <SimpleLineChart
                      data={[5, 20, 36, 24, 30, 20]}
                      color={vars.color.green5}
                    ></SimpleLineChart>
                  }
                />
              </Match>
              <Match when={card.key === 3}>
                <SimpleChartCard
                  title="Total Revenue"
                  main="$35,514"
                  footer={
                    <span style={{ color: vars.color.green5 }}>+$5,125</span>
                  }
                  chart={
                    <SimpleLineChart
                      data={[5, 20, 40, 24, 32, 26, 24, 26, 36, 42]}
                      color={vars.color.green5}
                    ></SimpleLineChart>
                  }
                />
              </Match>
              <Match when={card.key === 4}>
                <SimpleChartCard
                  title="Total Purchasement"
                  main="$14,714"
                  footer={
                    <span style={{ color: vars.color.red }}>-$1,520</span>
                  }
                  chart={
                    <SimpleLineChart
                      data={[20, 25, 22, 15, 10, 20, 30, 20, 10, 5, 7, 3]}
                      color={vars.color.red}
                    ></SimpleLineChart>
                  }
                />
              </Match>
              <Match when={card.key === 5}>
                <SimpleChartCard
                  layout="reverse"
                  title="Income Target"
                  main="$13,735"
                  footer={
                    <span style={{ color: vars.color.fg_default1 }}>
                      /$15,000
                    </span>
                  }
                  chart={
                    <SimpleGaugeChart
                      data={46}
                      color={vars.color.red}
                    ></SimpleGaugeChart>
                  }
                />
              </Match>
              <Match when={card.key === 6}>
                <RatingCard title={'Popular Products'} />
              </Match>
              <Match when={card.key === 7}>
                <TableCard title={'Customer Traffic Detail'} />
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
    key: 0,
    component: null,
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
    component: null,
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
