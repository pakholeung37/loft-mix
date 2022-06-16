import { VoidComponent, mergeProps, splitProps } from 'solid-js'
import { IconButton, IconButtonProps } from '../Button'
import { nav_button, nav_button_active } from './sidebar.css'

export type NavButtonProps = IconButtonProps & {
  title: String
  active?: boolean
}

const defaultProps: Required<Pick<NavButtonProps, 'active'>> = {
  active: false,
}

export const NavButton: VoidComponent<NavButtonProps> = oriProps => {
  const [props, restProps] = splitProps(mergeProps(defaultProps, oriProps), [
    'active',
  ])
  return (
    <IconButton
      class={`${nav_button} ${props.active ? nav_button_active : ''} ${
        restProps.class ?? ''
      }`}
      variant="text"
      size="md"
      {...restProps}
    ></IconButton>
  )
}
