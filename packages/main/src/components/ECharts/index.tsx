import {
  createEffect,
  createRenderEffect,
  createSignal,
  onCleanup,
  onMount,
  Ref,
  VoidComponent,
} from 'solid-js'
import * as echarts from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'
import type { EChartsOption } from 'echarts'
import { useResizeObserver } from '../../hooks/useResizeObserver'
import { light } from './theme/light'

echarts.use([SVGRenderer])
echarts.registerTheme('light', light)

export type EChartProps = {
  /**
   * 图表配置，和 ECharts 的 option 对象一致
   *
   * 具体配置项参考 https://echarts.apache.org/zh/option.html#title
   */
  option: EChartsOption
  /**
   * 图表配置，和 ECharts 的 init 的 opts 对象一致
   *
   * 具体配置项参考 https://echarts.apache.org/zh/api.html#echarts.init
   */
  opts?: Parameters<typeof echarts.init>[2]
  /**
   * 图表配置，和 ECharts 的 theme 对象一致，如要使用和工作台一致的主题，使用 'trantor'
   *
   * 具体配置项参考 https://echarts.apache.org/zh/theme.html
   */
  theme?: Parameters<typeof echarts.init>[1]
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

export const EChart: VoidComponent<EChartProps> = props => {
  let domRef: HTMLDivElement | undefined
  const [chartInstance, setChartInstance] = createSignal<
    echarts.ECharts | undefined
  >()
  const {
    ref: containerRef,
    width: containerWidth,
    height: containerHeight,
  } = useResizeObserver<HTMLDivElement>()

  // useImperativeHandle(ref, () => ({
  //   getInstance: () => chartInstanceRef.current,
  // }))

  onMount(() => {
    if (domRef) {
      setChartInstance(
        echarts.init(domRef, props.theme, {
          renderer: 'svg',
          ...props.opts,
        }),
      )
    }
  })

  onCleanup(() => {
    chartInstance()?.dispose()
    setChartInstance(undefined)
  })

  createEffect(() => {
    chartInstance()?.setOption(props.option)
  })

  // resize upon width/height change
  createRenderEffect(() => {
    chartInstance()?.resize({
      width: props.autoResize ? containerWidth() : props.width,
      height: props.autoResize ? containerHeight() : props.height,
    })
  })

  return (
    <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
      <div
        ref={domRef}
        style={{
          width: `${props.width}px` ?? '100%',
          height: `${props.height}px` ?? '100%',
        }}
      ></div>
    </div>
    // <div ref={sentryRef} style={{ width: '100%', height: '100%' }}>
    // </div>
  )
}
