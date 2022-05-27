import { Component, createSignal, JSX } from 'solid-js'
import c from 'clsx'
import { avatar, sm, md, lg, no_avatar } from './avatar.css'
import { vars } from '../../theme/index.css'
import { VscAccount } from 'solid-icons/vsc'

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
  const [$srcLoaded, setSrcLoaded] = createSignal(false)

  const onLoad = () => {
    setSrcLoaded(true)
  }

  return (
    <div
      class={c(avatar, sizeMap[size])}
      title={name}
      style={{ 'backgound-color': vars.color.avatar_bg, ...style }}
    >
      {src || !name ? <img src={src} onload={onLoad}></img> : initials(name)}
      {!$srcLoaded() && <VscAccount class={no_avatar} />}
    </div>
  )
}

function initials(name: string) {
  const [firstName, lastName] = name.split(' ')
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}
