import type { Component, JSX } from 'solid-js'
import c from 'clsx'
import { avatar, sm, md, lg } from './avatar.css'
import { vars } from '../../theme/index.css'

export type AvatarProps = {
  name?: string
  src?: string
  size?: 'sm' | 'md' | 'lg'
  style?: JSX.CSSProperties
}
const sizeMap = { sm, md, lg }
export const Avatar: Component<AvatarProps> = ({
  name,
  src,
  size = 'md',
  style,
}) => {
  return (
    <div
      class={c(avatar, sizeMap[size])}
      title={name}
      style={
        src
          ? { 'background-image': `url(${src})`, ...style }
          : { 'backgound-color': vars.color.avatar_bg, ...style }
      }
    >
      {src || !name ? null : initials(name)}
    </div>
  )
}

function initials(name: string) {
  const [firstName, lastName] = name.split(' ')
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}
