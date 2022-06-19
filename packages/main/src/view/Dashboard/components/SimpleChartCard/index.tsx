import { JSXElement, Show, VoidComponent } from 'solid-js'
import { CardWrapper } from '../CardWrapper'
import {
  chart_container,
  container,
  flex_reverse,
  text_1,
  text_2,
  text_3,
  text_container,
} from './simpe-chart-card.css'

export type SimpleChartCardProps = {
  title: string | JSXElement
  main: string | JSXElement
  footer: string | JSXElement
  chart?: JSXElement
  layout?: 'default' | 'reverse'
}

export const SimpleChartCard: VoidComponent<SimpleChartCardProps> = props => {
  return (
    <CardWrapper>
      <div
        class={`${container} ${props.layout === 'reverse' ? flex_reverse : ''}`}
      >
        <div class={text_container}>
          <div class={text_1}>{props.title}</div>
          <div class={text_2}>{props.main}</div>
          <div class={text_3}>{props.footer}</div>
        </div>
        <div class={chart_container}>
          <Show when={props.chart} fallback={null}>
            {props.chart}
          </Show>
        </div>
      </div>
    </CardWrapper>
  )
}
