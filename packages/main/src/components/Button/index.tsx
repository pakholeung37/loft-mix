import { Component, JSX } from 'solid-js'
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
} from './button.css'

export type ButtonProps = {
  children: JSX.Element
  variant?: 'neutral' | 'primary' | 'outline' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  disabled?: boolean
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
}) => {
  return (
    <button class={`${button} ${variantMap[variant]} ${sizeMap[size]}`}>
      {children}
    </button>
  )
}
