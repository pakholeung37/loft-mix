import { VsEllipsis } from 'solid-icons/vs'
import { Component, JSXElement, mergeProps, Show } from 'solid-js'
import { IconButton } from '../../../../components/Button'
import { ellipsis } from '../../../../style/utilities.css'
import {
  action_bar,
  card_wrapper,
  header,
  more_button,
  subtle,
  title,
} from './card-wrapper.css'

export type CardWrapperProps = {
  variant?: 'default' | 'subtle'
  title?: string | JSXElement
  actions?: any[]
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
      <Show when={props.title || (props.actions && props.actions.length)}>
        <div class={header}>
          <Show when={props.title}>
            <div class={`${title} ${ellipsis}`}>{props.title}</div>
          </Show>
          <Show when={props.actions && props.actions.length}>
            <div class={action_bar}>
              <IconButton
                variant="text"
                size="xs"
                class={more_button}
                icon={<VsEllipsis />}
              ></IconButton>
            </div>
          </Show>
        </div>
      </Show>
      {props.children}
    </div>
  )
}
