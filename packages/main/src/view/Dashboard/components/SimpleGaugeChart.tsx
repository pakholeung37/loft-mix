import { VoidComponent } from 'solid-js'
import * as echarts from 'echarts/core'
import { GaugeChart } from 'echarts/charts'
import { EChart } from '../../../components/ECharts'
import { vars } from '../../../style/index.css'
import { useTheme } from '../../../context/theme'
import { access } from '../../../util'

echarts.use([GaugeChart])
export type SimpleGaugeChartProps = {
  data: number
  color?: string
}
export const SimpleGaugeChart: VoidComponent<SimpleGaugeChartProps> = props => {
  const { theme } = useTheme()
  return (
    <EChart
      option={{
        series: [
          {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            radius: '90%',
            pointer: {
              show: false,
            },
            animation: false,
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
            },
            axisLine: {
              lineStyle: {
                width: 8,
              },
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            data: [
              {
                value: props.data,
                detail: {
                  // valueAnimation: true,
                  offsetCenter: ['0%', '0%'],
                },
              },
            ],
            detail: {
              fontSize: vars.fontSizes.sm,
              color: 'auto',
              formatter: '{value}%',
            },
          },
        ],
      }}
      autoResize
      theme={access(theme)}
    />
  )
}
