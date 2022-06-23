import { createSignal } from 'solid-js'
import { EChart } from '../index'
import * as echarts from 'echarts/core'
import * as allCharts from 'echarts/charts'
import * as allComponents from 'echarts/components'
import { defineStories } from '../../../util/storybook'

echarts.use([...Object.values(allCharts), ...Object.values(allComponents)])

export default defineStories({
  title: 'ECharts',
})

export const Basic = () => {
  return (
    <div style={{ height: '400px', width: '800px' }}>
      <EChart
        option={{
          title: {
            text: 'ECharts 入门示例',
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        }}
        autoResize
      ></EChart>
    </div>
  )
}

export const LightTheme = () => {
  return (
    <div>
      <EChart
        option={{
          legend: {
            data: ['Evaporation', 'Precipitation', 'Temperature'],
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisPointer: {
                type: 'shadow',
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: 'Precipitation',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} ml',
              },
            },
            {
              type: 'value',
              name: 'Temperature',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} °C',
              },
            },
          ],
          series: [
            {
              name: 'Evaporation',
              type: 'bar',
              data: [
                2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
                3.3,
              ],
            },
            {
              name: 'Precipitation',
              type: 'bar',
              data: [
                2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
                2.3,
              ],
            },
            {
              name: 'Temperature',
              type: 'line',
              yAxisIndex: 1,
              data: [
                2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0,
                6.2,
              ],
            },
          ],
        }}
        width={800}
        height={400}
        theme="light"
      ></EChart>
      <EChart
        option={{
          legend: {
            orient: 'vertical',
            left: 'right',
            top: 'center',
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
              },
            },
          ],
        }}
        width={800}
        height={400}
        theme="light"
        autoResize
      ></EChart>
      <EChart
        option={{
          legend: {
            data: [
              'Email',
              'Union Ads',
              'Video Ads',
              'Direct',
              'Search Engine',
            ],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: 'Video Ads',
              type: 'line',
              stack: 'Total',
              data: [150, 232, 201, 154, 190, 330, 410],
            },
            {
              name: 'Direct',
              type: 'line',
              stack: 'Total',
              data: [320, 332, 301, 334, 390, 330, 320],
            },
            {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              data: [820, 932, 901, 934, 1290, 1330, 1320],
            },
          ],
        }}
        width={800}
        height={400}
        theme="light"
        autoResize
      ></EChart>
      <EChart
        option={{
          legend: {
            data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
            orient: 'vertical',
            left: 'right',
            top: 'center',
          },
          series: [
            {
              name: 'Funnel',
              type: 'funnel',
              left: '10%',
              top: 60,
              bottom: 60,
              width: '80%',
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'descending',
              gap: 2,
              label: {
                show: true,
                position: 'inside',
              },
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid',
                },
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
              },
              emphasis: {
                label: {
                  fontSize: 20,
                },
              },
              data: [
                { value: 60, name: 'Visit' },
                { value: 40, name: 'Inquiry' },
                { value: 20, name: 'Order' },
                { value: 80, name: 'Click' },
                { value: 100, name: 'Show' },
              ],
            },
          ],
        }}
        width={800}
        height={400}
        theme="light"
        autoResize
      ></EChart>
      <EChart
        option={{
          legend: {
            data: ['Allocated Budget', 'Actual Spending'],
            left: 'center',
            top: 'bottom',
          },
          radar: {
            indicator: [
              { name: 'Sales', max: 6500 },
              { name: 'Administration', max: 16000 },
              { name: 'Information Technology', max: 30000 },
              { name: 'Customer Support', max: 38000 },
              { name: 'Development', max: 52000 },
              { name: 'Marketing', max: 25000 },
            ],
          },
          series: [
            {
              name: 'Budget vs spending',
              type: 'radar',
              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000],
                  name: 'Allocated Budget',
                },
                {
                  value: [5000, 14000, 28000, 26000, 42000, 21000],
                  name: 'Actual Spending',
                },
              ],
            },
          ],
        }}
        width={800}
        height={400}
        theme="light"
        autoResize
      ></EChart>
      <EChart
        option={{
          series: [
            {
              type: 'gauge',
              startAngle: 90,
              endAngle: -270,
              pointer: {
                show: false,
              },
              progress: {
                show: true,
                overlap: false,
                roundCap: true,
                clip: false,
                itemStyle: {
                  borderWidth: 1,
                  borderColor: '#464646',
                },
              },
              axisLine: {
                lineStyle: {
                  width: 40,
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
                distance: 50,
              },
              data: [
                {
                  value: 20,
                  name: 'Perfect',
                  title: {
                    offsetCenter: ['0%', '-30%'],
                  },
                  detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '-20%'],
                  },
                },
                {
                  value: 40,
                  name: 'Good',
                  title: {
                    offsetCenter: ['0%', '0%'],
                  },
                  detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '10%'],
                  },
                },
                {
                  value: 60,
                  name: 'Commonly',
                  title: {
                    offsetCenter: ['0%', '30%'],
                  },
                  detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '40%'],
                  },
                },
              ],
              title: {
                fontSize: 14,
              },
              detail: {
                width: 50,
                height: 4,
                fontSize: 14,
                color: 'auto',
                borderColor: 'auto',
                borderRadius: 20,
                borderWidth: 1,
                formatter: '{value}%',
              },
            },
          ],
        }}
        width={800}
        height={400}
        theme="light"
        autoResize
      ></EChart>
    </div>
  )
}

export const AutoResize = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <EChart
        option={{
          title: {
            text: 'ECharts 入门示例',
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        }}
        autoResize
      ></EChart>
    </div>
  )
}

export const ChangeWidth = () => {
  const [width, setWidth] = createSignal(800)
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div>
        width:{' '}
        <input onChange={el => setWidth(+el.currentTarget.value)}></input>
        <span>{width()}</span>
      </div>
      <EChart
        option={{
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'line',
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        }}
        height={400}
        width={width()}
      ></EChart>
    </div>
  )
}
