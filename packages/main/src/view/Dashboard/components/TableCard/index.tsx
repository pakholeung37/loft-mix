import {
  createTable,
  createTableInstance,
  getCoreRowModel,
} from '@tanstack/solid-table'
import { createSignal, For, JSXElement, VoidComponent } from 'solid-js'
import { Table } from '../../../../components/Table'
import { CardWrapper } from '../CardWrapper'

export type TableCardProps = {
  title: string | JSXElement
}

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const table = createTable().setRowType<Person>()

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
]

const defaultColumns = [
  table.createDataColumn('firstName', {
    header: 'First Name',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  table.createDataColumn('lastName', {
    header: 'Last Name',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  table.createDataColumn('age', {
    header: 'Age',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  table.createDataColumn('visits', {
    header: 'Visits',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  table.createDataColumn('status', {
    header: 'Status',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  table.createDataColumn('progress', {
    header: 'Progress',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
]

export const TableCard: VoidComponent<TableCardProps> = props => {
  const [data] = createSignal(defaultData)

  const instance = createTableInstance(table, {
    get data() {
      return data()
    },
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <CardWrapper title={props.title} actions={['any']}>
      <Table size="sm" variant="striped">
        <thead>
          <For each={instance.getHeaderGroups()}>
            {headerGroup => (
              <tr>
                <For each={headerGroup.headers}>
                  {header => (
                    <th colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : header.renderHeader()}
                    </th>
                  )}
                </For>
              </tr>
            )}
          </For>
        </thead>
        <tbody>
          <For each={instance.getRowModel().rows}>
            {row => (
              <tr>
                <For each={row.getVisibleCells()}>
                  {cell => <td>{cell.renderCell()}</td>}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </Table>
    </CardWrapper>
  )
}
