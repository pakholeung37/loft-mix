import { VoidComponent } from 'solid-js'
import dayjs from 'dayjs'
import { ellipsis, ellipsis_2 } from '../../../../style/utilities.css'
import {
  task,
  overhead,
  deadline,
  title,
  description,
  footer,
  status_label,
  status_inprogress,
  status_completed,
  status_pending,
} from './task-card.css'
import { Button } from '../../../../components/Button'
import { AiOutlineComment, AiOutlineProfile } from 'solid-icons/ai'
export type TaskProps = {
  status: 'inprogress' | 'completed' | 'pending'
  deadline: string
  title: string
  description: string
  subTaskCount: number
  commentCount: number
}

export const statusMap = {
  inprogress: status_inprogress,
  completed: status_completed,
  pending: status_pending,
}

export const Task: VoidComponent<TaskProps> = props => {
  return (
    <div class={task}>
      <div class={overhead}>
        <div class={`${status_label} ${statusMap[props.status]}`}>
          {props.status}
        </div>
        <div class={deadline}>
          {dayjs(props.deadline).format('MMM/DD/YYYY')}
        </div>
      </div>
      <div class={`${title} ${ellipsis}`}>{props.title}</div>
      <div class={`${description} ${ellipsis_2}`}>{props.description}</div>
      <div class={footer}>
        <Button size="xs" variant="ghost" leftIcon={<AiOutlineProfile />}>
          {props.subTaskCount} Tasks
        </Button>
        <Button size="xs" variant="ghost" leftIcon={<AiOutlineComment />}>
          {props.subTaskCount} Tasks
        </Button>
      </div>
    </div>
  )
}
