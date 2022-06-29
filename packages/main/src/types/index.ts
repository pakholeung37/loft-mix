import { Accessor } from 'solid-js'

export type Key = string | number

export type MaybeAccessor<T> = T | Accessor<T>

export type MaybeAccessorValue<T extends MaybeAccessor<any>> =
  T extends () => any ? ReturnType<T> : T

export type DeepNull<T extends object> = {
  [K in keyof T]: T[K] extends object ? DeepNull<T[K]> : null
}

export interface IDisposable {
  dispose: () => void
}

export interface Event<T> {
  (
    listener: (e: T) => any,
    thisArgs?: any,
    disposables?: IDisposable[],
  ): IDisposable
}
