import { Component, JSX, Match, mergeProps, Switch } from 'solid-js'
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
import { VsAccount } from 'solid-icons/vs'
import { vars } from '../../style/index.css'

export type AvatarProps = {
  name?: string
  src?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  style?: JSX.CSSProperties
  status?: { color?: string; icon?: JSX.Element; title?: string }
}
const sizeMap = { sm, md, lg, xl }

const defaultProps: Required<Pick<AvatarProps, 'size'>> = {
  size: 'md',
}
export const Avatar: Component<AvatarProps> = oriProps => {
  const props = mergeProps(defaultProps, oriProps)

  return (
    <div class={`${avatar_container} ${sizeMap[props.size]}`}>
      <div class={avatar} title={props.name} style={props.style}>
        <Switch fallback={<VsAccount class={no_avatar} />}>
          <Match when={props.src}>
            <img class={avatar_image} src={props.src}></img>
          </Match>
          <Match when={props.name}>
            <div class={avatar_text}>{initials(props.name!)}</div>
          </Match>
        </Switch>
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
