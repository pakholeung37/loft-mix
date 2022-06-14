import { Component, createSignal, JSX, mergeProps } from 'solid-js'
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

const defaultProps: Required<Pick<AvatarProps, 'size'>> = {
  size: 'sm',
}
export const Avatar: Component<AvatarProps> = oriProps => {
  const props = mergeProps(defaultProps, oriProps)
  const [$srcLoaded, setSrcLoaded] = createSignal(false)

  const onLoad = () => {
    setSrcLoaded(true)
  }

  return (
    <div class={`${avatar_container} ${sizeMap[props.size]}`}>
      <div class={avatar} title={props.name} style={props.style}>
        {(!props.name && !props.src) || (props.src && !$srcLoaded()) ? (
          <VscAccount class={no_avatar} />
        ) : null}
        {props.src ? (
          <img class={avatar_image} src={props.src} onload={onLoad}></img>
        ) : props.name ? (
          <div class={avatar_text}>{initials(props.name)}</div>
        ) : null}
      </div>
      {props.status && (
        <div
          class={status_container}
          style={{ background: props.status?.color ?? vars.color.success }}
          title={props.status?.title}
        >
          {props.status?.icon}
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
