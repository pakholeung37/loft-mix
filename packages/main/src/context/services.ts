import { createContextProvider } from '@solid-primitives/context'
import { ICommandService } from '../services/commands/CommandService'

export type ServicesContext = {
  commandService: ICommandService
}

export const [ServicesProvider, useServices] = createContextProvider<
  ServicesContext,
  ServicesContext
>(_ => _, { commandService: {} as any })
