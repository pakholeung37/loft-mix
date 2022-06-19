import { For, VoidComponent } from 'solid-js'
import { CardWrapper } from '../CardWrapper'
import { ListItem, ListItemProps } from './ListItem'
import { list_item_container, rating_list } from './rating-card.css'

export type RatingCardProps = {
  title: string
}

export const RatingCard: VoidComponent<RatingCardProps> = props => {
  return (
    <CardWrapper title={props.title} actions={['any']}>
      <ul class={rating_list}>
        <For each={list}>
          {item => (
            <li class={list_item_container}>
              <ListItem {...item} />
            </li>
          )}
        </For>
      </ul>
    </CardWrapper>
  )
}

const list: ListItemProps[] = [
  {
    title: 'Apple Watch Series 7',
    pic: 'http://placeimg.com/100/100/peoples',
    description: '$499',
  },
  {
    title: 'Iphone 13 Pro Max',
    pic: 'http://placeimg.com/100/100/animals',
    description: '$1,299',
  },
  {
    title: 'Airpod Gen 2 Airpod Gen 2Airpod Gen 2',
    pic: 'http://placeimg.com/100/100/abstract',
    description: '$199',
  },
]
