import { Component, JSX, JSXElement, Show, VoidComponent } from 'solid-js'
import {
  button,
  ghost,
  outline,
  primary,
  neutral,
  link,
  xs,
  sm,
  md,
  lg,
  icon_only,
} from './button.css'

export type ButtonProps = {
  children?: JSX.Element
  variant?: 'neutral' | 'primary' | 'outline' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  disabled?: boolean
  leftIcon?: JSXElement
  rightIcon?: JSXElement
  rounded?: boolean
  className?: string
}

const variantMap = {
  neutral,
  primary,
  outline,
  ghost,
  link,
}

const sizeMap = {
  xs,
  sm,
  md,
  lg,
}
export const Button: Component<ButtonProps> = ({
  children,
  size = 'sm',
  variant = 'neutral',
  leftIcon,
  rightIcon,
  className,
}) => {
  return (
    <button
      class={`${button} ${variantMap[variant]} ${sizeMap[size]} ${className}`}
    >
      <Show when={leftIcon}>{leftIcon}</Show>
      {children}
      <Show when={rightIcon}>{rightIcon}</Show>
    </button>
  )
}

export type IconButtonProps = Omit<ButtonProps, 'leftIcon' | 'rightIcon'> & {
  icon?: JSX.Element
}

export const IconButton: VoidComponent<IconButtonProps> = props => {
  const { icon, className, ...restProps } = props
  return (
    <Button className={`${icon_only} ${className}`} {...restProps}>
      {icon}
    </Button>
  )
}
