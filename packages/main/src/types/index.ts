import { Accessor } from 'solid-js'

export type Key = string | number

export type MaybeAccessor<T> = T | Accessor<T>

export type MaybeAccessorValue<T extends MaybeAccessor<any>> =
  T extends () => any ? ReturnType<T> : T
