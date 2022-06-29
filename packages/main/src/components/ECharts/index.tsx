import {
  createEffect,
  createRenderEffect,
  onCleanup,
  Ref,
  untrack,
  VoidComponent,
} from 'solid-js'
import * as echarts from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'
import type { EChartsOption } from 'echarts'
import { useResizeObserver } from '../../hooks/useResizeObserver'
import { light } from './theme/light'
import { dark } from './theme/dark'

echarts.use([SVGRenderer])
echarts.registerTheme('light', light)
echarts.registerTheme('dark', dark)

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
  ref?: (ref: Ref<EChartRef>) => void
}
export type EChartRef = { getInstance: () => EChartInstance | undefined }
export type EChartInstance = echarts.ECharts

export const EChart: VoidComponent<EChartProps> = props => {
  let domRef: HTMLDivElement | undefined
  let chartInstance: EChartInstance | undefined
  const {
    ref: containerRef,
    width: containerWidth,
    height: containerHeight,
  } = useResizeObserver<HTMLDivElement>()

  createEffect(() => {
    const theme = props.theme
    const opts = props.opts

    if (chartInstance) {
      chartInstance.dispose()
      chartInstance = undefined
    }
    if (domRef) {
      const instance = echarts.init(domRef, theme, {
        renderer: 'svg',
        ...opts,
      })
      chartInstance = instance
      props.ref?.({ getInstance: () => instance })
      untrack(() => {
        chartInstance?.setOption(props.option)
      })
    }
  })

  {
    let activate = false
    createEffect(() => {
      if (!activate) {
        activate = true
        return
      }
      chartInstance?.setOption(props.option)
    })
  }

  {
    // resize upon width/height change
    let activate = false
    createRenderEffect(() => {
      const deps = [
        props.autoResize ? containerWidth() : props.width,
        props.autoResize ? containerHeight() : props.height,
      ]
      if (!activate) {
        activate = true
        return
      }
      if (!deps[0] || !deps[1]) return
      chartInstance?.resize()
      return deps
    })
  }

  onCleanup(() => {
    chartInstance?.dispose()
    chartInstance = undefined
    props.ref?.({ getInstance: () => undefined })
  })

  return (
    <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
      <div
        ref={domRef}
        style={{
          width: props.autoResize ? '100%' : `${props.width}px`,
          height: props.autoResize ? '100%' : `${props.height}px`,
        }}
      ></div>
    </div>
  )
}
