import { mergeProps, splitProps, JSX, ParentComponent } from 'solid-js'
import {
  bordered,
  lg,
  md,
  simple,
  sm,
  striped,
  table_base,
  unstyled,
  xs,
} from './table.css'

export type TableProps = JSX.IntrinsicElements['table'] & {
  variant?: 'simple' | 'striped' | 'bordered' | 'unstyled'
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

const defaultProps: Required<Pick<TableProps, 'variant' | 'size'>> = {
  variant: 'simple',
  size: 'md',
}

const variantMap = {
  simple,
  striped,
  bordered,
  unstyled,
}

const sizeMap = {
  xs,
  sm,
  md,
  lg,
}

export const Table: ParentComponent<TableProps> = oriProps => {
  const [props, restProps] = splitProps(mergeProps(defaultProps, oriProps), [
    'size',
    'variant',
    'children',
    'class',
  ])
  return (
    <table
      class={`${props.class ?? ''} ${table_base} ${variantMap[props.variant]} ${
        sizeMap[props.size]
      }`}
      {...restProps}
    >
      {props.children}
    </table>
  )
}
