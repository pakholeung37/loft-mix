import { VoidComponent } from 'solid-js'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { LegendComponent, GridComponent } from 'echarts/components'
import { EChart } from '../../../components/ECharts'

echarts.use([LineChart, LegendComponent, GridComponent])

export type SimpleLineChartProps = {
  data: number[]
  xAxis?: string[]
  color?: string
}
export const SimpleLineChart: VoidComponent<SimpleLineChartProps> = props => {
  return (
    <EChart
      option={{
        grid: {
          left: 0,
          right: 0,
          top: 2,
          bottom: 0,
        },
        xAxis: {
          show: false,
          data: props.xAxis ?? props.data,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: 'line',
            data: props.data,
            symbol: 'none',
            lineStyle: {
              color: props.color,
            },
            emphasis: { disabled: true },
          },
        ],
      }}
      autoResize
      theme="light"
    />
  )
}
