import { Accessor } from 'solid-js'

import { MaybeAccessor, MaybeAccessorValue } from '../types'
export const isAccessor = <T>(value: any): value is Accessor<T> => {
  return typeof value === 'function'
}

export const access = <T extends MaybeAccessor<any>>(
  v: T,
): MaybeAccessorValue<T> => (typeof v === 'function' ? v() : v)
