import {
  createEffect,
  createRenderEffect,
  onCleanup,
  onMount,
  Ref,
  VoidComponent,
} from 'solid-js'
import * as charts from 'echarts'

export type EChartsProps = {
  /**
   * 图表配置，和 ECharts 的 option 对象一致
   *
   * 具体配置项参考 https://echarts.apache.org/zh/option.html#title
   */
  option: echarts.EChartsOption
  /**
   * 图表配置，和 ECharts 的 init 的 opts 对象一致
   *
   * 具体配置项参考 https://echarts.apache.org/zh/api.html#echarts.init
   */
  opts?: Parameters<typeof charts.init>[2]
  /**
   * 图表配置，和 ECharts 的 theme 对象一致，如要使用和工作台一致的主题，使用 'trantor'
   *
   * 具体配置项参考 https://echarts.apache.org/zh/theme.html
   */
  theme?: Parameters<typeof charts.init>[1]
  /**
   * 图表宽度
   */
  width?: number
  /**
   * 图表高度
   */
  height?: number
  /**
   * 是否自动根据容器大小自动调整宽高，默认为
   */
  autoResize?: boolean
  /**
   * 回传的图表 ref，使用 ref.current.getInstance 获取 echarts 实例
   *
   * 具体实例api参考 https://echarts.apache.org/zh/api.html#echartsInstance
   */
  ref?: Ref<EChartRef>
}
export type EChartRef = { getInstance: () => EChartInstance | undefined }
export type EChartInstance = echarts.ECharts
export const EChart: VoidComponent<EChartsProps> = props => {
  let domRef: HTMLDivElement | undefined
  let chartInstance: charts.ECharts | undefined
  // const {
  //   ref: sentryRef,
  //   width: containerWidth,
  //   height: containerHeight,
  // } = useResizeObserver()

  // useImperativeHandle(ref, () => ({
  //   getInstance: () => chartInstanceRef.current,
  // }))

  onMount(() => {
    if (domRef) {
      chartInstance = charts.init(domRef, props.theme, {
        ...props.opts,
        width: props.width ?? 600,
        height: props.height ?? 400,
      })
    }
  })

  onCleanup(() => {
    chartInstance?.dispose()
    chartInstance = undefined
  })

  createEffect(() => {
    if (chartInstance) {
      chartInstance.setOption(props.option)
    }
  })

  // resize upon width/height change
  createRenderEffect(() => {
    if (chartInstance) {
      chartInstance.resize({
        width: props.width ?? 600,
        height: props.height ?? 400,
      })
    }
  })

  return (
    <div
      ref={domRef}
      style={{
        width: `${props.width}px` ?? '100%',
        height: `${props.height}px` ?? '100%',
      }}
    ></div>
    // <div ref={sentryRef} style={{ width: '100%', height: '100%' }}>
    // </div>
  )
}
