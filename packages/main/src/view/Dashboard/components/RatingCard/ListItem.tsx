import { VoidComponent } from 'solid-js'
import { ellipsis } from '../../../../style/utilities.css'
import {
  content_container,
  list_item,
  pic,
  title,
  description,
} from './rating-card.css'

export type ListItemProps = {
  title?: string
  pic?: string
  description?: string
}

export const ListItem: VoidComponent<ListItemProps> = props => {
  return (
    <div class={list_item}>
      <img class={pic} src={props.pic}></img>
      <div class={content_container}>
        <div class={`${title} ${ellipsis}`}>{props.title}</div>
        <div class={`${description} ${ellipsis}`}>{props.description}</div>
      </div>
    </div>
  )
}
