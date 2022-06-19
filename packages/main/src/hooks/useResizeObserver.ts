import { createEffect, createSignal, onCleanup } from 'solid-js'

export const useResizeObserver = <T extends HTMLElement>(
  {
    option,
  }: {
    option: 'borderBoxSize' | 'contentBoxSize' | 'contentRect'
  } = { option: 'contentRect' },
) => {
  const [ref, setRef] = createSignal<T | undefined>(undefined)
  const [width, setWidth] = createSignal<number | undefined>(undefined)
  const [height, setHeight] = createSignal<number | undefined>(undefined)

  let observer: ResizeObserver | undefined
  createEffect(() => {
    const element = ref()
    if (element) {
      observer = new ResizeObserver(entries => {
        handleResize(entries)
      })
      observer.observe(element)
    }
  })

  onCleanup(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  const handleResize = (entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      if (
        option === 'borderBoxSize' &&
        entry.borderBoxSize &&
        entry.borderBoxSize.length > 0
      ) {
        setHeight(entry.borderBoxSize[0].blockSize)
        setWidth(entry.borderBoxSize[0].inlineSize)
      } else if (
        option === 'contentBoxSize' &&
        entry.contentBoxSize &&
        entry.contentBoxSize.length > 0
      ) {
        setHeight(entry.contentBoxSize[0].blockSize)
        setWidth(entry.contentBoxSize[0].inlineSize)
      } else {
        setHeight(entry.contentRect.height)
        setWidth(entry.contentRect.width)
      }
    }
  }

  return {
    ref: (el: T) => {
      setRef(el as any)
    },
    width,
    height,
  }
}
