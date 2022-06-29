import { createContextProvider } from '@solid-primitives/context'
import {
  commandRegistry,
  ICommandRegistry,
} from '../services/commands/CommandService'

export type RegistriesContextType = {
  commandRegistry: ICommandRegistry
}

export const [RegistriesProvider, useRegistries] = createContextProvider<
  RegistriesContextType,
  RegistriesContextType
>(_ => _, { commandRegistry })
