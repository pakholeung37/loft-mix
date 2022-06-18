import { Component, JSXElement, mergeProps } from 'solid-js'
import { card_wrapper, subtle } from './card-wrapper.css'

export type CardWrapperProps = {
  variant?: 'default' | 'subtle'
  children: JSXElement
}

const variantMap = {
  default: '',
  subtle,
}

const defaultProps: Required<Pick<CardWrapperProps, 'variant'>> = {
  variant: 'default',
}

export const CardWrapper: Component<CardWrapperProps> = oriProps => {
  const props = mergeProps(defaultProps, oriProps)
  return (
    <div class={`${card_wrapper} ${variantMap[props.variant]}`}>
      {props.children}
    </div>
  )
}
