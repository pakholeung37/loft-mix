import { For, VoidComponent } from 'solid-js'
import { CardWrapper } from '../CardWrapper'
import { Task, TaskProps } from './Task'
import { task_item_container, task_list } from './task-card.css'

export type TaskCardProps = {
  title: string
}
export const TaskCard: VoidComponent<TaskCardProps> = props => {
  return (
    <CardWrapper title={props.title}>
      <ul class={task_list}>
        <For each={tasks}>
          {task => (
            <li class={task_item_container}>
              <Task {...task}></Task>
            </li>
          )}
        </For>
      </ul>
    </CardWrapper>
  )
}

const tasks: TaskProps[] = [
  {
    status: 'pending',
    deadline: '2020-04-01',
    title: 'NFT Landing Page',
    description:
      'Design and build the NFT landing page with the a creative concept so that',
    subTaskCount: 4,
    commentCount: 13,
  },
  {
    status: 'completed',
    deadline: '2020-4-18',
    title: 'Dashboard Finance Management',
    description: 'Dsigning a financial themed dashboard for the company',
    subTaskCount: 2,
    commentCount: 3,
  },
  {
    status: 'pending',
    deadline: '2020-04-01',
    title: 'NFT Landing Page',
    description:
      'Design and build the NFT landing page with the a creative concept so that',
    subTaskCount: 4,
    commentCount: 13,
  },
  {
    status: 'completed',
    deadline: '2020-4-18',
    title: 'Dashboard Finance Management',
    description: 'Dsigning a financial themed dashboard for the company',
    subTaskCount: 2,
    commentCount: 3,
  },
  {
    status: 'inprogress',
    deadline: '2020-5-1',
    title: 'Logo Branding',
    description: 'Designing a branding logo with unique style',
    subTaskCount: 8,
    commentCount: 24,
  },
]
