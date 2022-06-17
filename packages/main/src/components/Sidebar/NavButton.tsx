import { VoidComponent, mergeProps, splitProps } from 'solid-js'
import { IconButton, IconButtonProps } from '../Button'
import { nav_button } from './sidebar.css'

export type NavButtonProps = IconButtonProps & {
  title: String
}

export const NavButton: VoidComponent<NavButtonProps> = oriProps => {
  const [props, restProps] = splitProps(oriProps, [
    'class',
  ])
  return (
    <IconButton
      class={`${nav_button} ${
        props.class ?? ''
      }`}
      variant="text"
      size="md"
      {...restProps}
    ></IconButton>
  )
}
