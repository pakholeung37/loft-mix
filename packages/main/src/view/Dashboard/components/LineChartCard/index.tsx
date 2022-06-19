import { JSXElement, VoidComponent } from 'solid-js'
import { EChart } from '../../../../components/ECharts'
import { CardWrapper } from '../CardWrapper'

export type LineChartCardProps = {
  title: string | JSXElement
}
export const LineChartCard: VoidComponent<LineChartCardProps> = props => {
  return (
    <CardWrapper title={props.title}>
      <EChart
        option={{
          grid: {
            right: 0,
            bottom: '8%',
            top: '14%',
          },
          legend: {
            left: 0,
            icon: 'rect',
            data: ['Revenue', 'purchasement'],
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
          ],
          yAxis: [
            {
              type: 'value',
              interval: 50,
              max: 200,
              axisLabel: {
                formatter: '{value}k',
              },
            },
          ],
          series: [
            {
              name: 'Revenue',
              type: 'line',
              data: [
                2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
                3.3,
              ],
              symbol: 'none',
              emphasis: { disabled: true },
            },
            {
              name: 'purchasement',
              type: 'line',
              data: [
                2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
                2.3,
              ],
              symbol: 'none',
              emphasis: { disabled: true },
            },
          ],
        }}
        theme="light"
        autoResize
      ></EChart>
    </CardWrapper>
  )
}
