import { Component, createSignal, JSX } from 'solid-js'
import {
  avatar,
  sm,
  md,
  lg,
  xl,
  no_avatar,
  avatar_image,
  avatar_text,
  status_container,
  avatar_container,
} from './avatar.css'
import { VscAccount } from 'solid-icons/vsc'
import { vars } from '../../theme/index.css'

export type AvatarProps = {
  name?: string
  src?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  style?: JSX.CSSProperties
  status?: { color?: string; icon?: JSX.Element; title?: string }
}
const sizeMap = { sm, md, lg, xl }
export const Avatar: Component<AvatarProps> = ({
  name,
  src,
  size = 'sm',
  style,
  status,
}) => {
  const [$srcLoaded, setSrcLoaded] = createSignal(false)

  const onLoad = () => {
    setSrcLoaded(true)
  }

  return (
    <div class={`${avatar_container} ${sizeMap[size]}`}>
      <div class={avatar} title={name} style={style}>
        {(!name && !src) || (src && !$srcLoaded()) ? (
          <VscAccount class={no_avatar} />
        ) : null}
        {src ? (
          <img class={avatar_image} src={src} onload={onLoad}></img>
        ) : name ? (
          <div class={avatar_text}>{initials(name)}</div>
        ) : null}
      </div>
      {status && (
        <div
          class={status_container}
          style={{ background: status.color ?? vars.color.success }}
          title={status.title}
        >
          {status.icon}
        </div>
      )}
    </div>
  )
}

function initials(name: string) {
  const [firstName, lastName] = name.split(' ')
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}
