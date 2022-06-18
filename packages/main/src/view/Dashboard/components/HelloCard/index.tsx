import { VoidComponent } from 'solid-js'
import { CardWrapper } from '../CardWrapper'
import { hello_card, title } from './hello-card.css'

export const HelloCard: VoidComponent = () => {
  return (
    <CardWrapper variant="subtle">
      <div class={hello_card}>
        <h1 class={title}>Hi Pakho!</h1>
      </div>
    </CardWrapper>
  )
}
