import { VoidComponent } from 'solid-js'
import { CardWrapper } from '../CardWrapper'
import {
  chart_container,
  container,
  left_container,
  text_1,
  text_2,
  text_3,
} from './simpe-chart-card.css'

export const SimpleChartCard: VoidComponent = () => {
  return (
    <CardWrapper>
      <div class={container}>
        <div class={left_container}>
          <div class={text_1}>Net Income</div>
          <div class={text_2}>$21.779</div>
          <div class={text_3}>+2.519</div>
        </div>
        <div class={chart_container}>chart</div>
      </div>
    </CardWrapper>
  )
}
