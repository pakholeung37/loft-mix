import { Component } from 'solid-js'
import { IDisposable } from '../../types'

export interface ICommandHandler<T = any> {
  (...args: any[]): Promise<T> | T
}
export interface ICommand {
  id: string
  title: string
  handler: ICommandHandler
  description?: string
  icon?: Component
  group?: string
}

export type ICommandsMap = Map<string, ICommand>

export interface ICommandRegistry {
  // onDidRegisterCommand: Event<string>
  registerCommand(command: ICommand): IDisposable
  registerCommandAlias(oldId: string, newId: string): IDisposable
  getCommand(id: string): ICommand | undefined
  getCommands(): ICommandsMap
}

export interface ICommandEvent {
  commandId: string
  args: any[]
}

export interface ICommandService {
  // onWillExecuteCommand: Event<ICommandEvent>
  // onDidExecuteCommand: Event<ICommandEvent>
  executeCommand<T = any>(
    commandId: string,
    ...args: any[]
  ): Promise<T | undefined>
}

class CommandRegistry implements ICommandRegistry {
  private readonly _commands = new Map<string, ICommand>()
  // onDidRegisterCommand() {
  //   throw new Error('Method not implemented.')
  // }
  registerCommand(command: ICommand): IDisposable {
    const id = command.id
    const _command = this.getCommand(id)
    if (_command) {
      throw new Error(`Command '${id}' already exists.`)
    }
    this._commands.set(id, command)
    return {
      dispose: () => {
        this._commands.delete(id)
      },
    }
  }
  registerCommandAlias(oldId: string, newId: string): IDisposable {
    const oldCommand = this.getCommand(oldId)
    if (!oldCommand) {
      throw new Error(`Command '${oldId}' does not exist.`)
    }
    const newCommand = this.getCommand(newId)
    if (newCommand) {
      throw new Error(`Command '${newId}' already exists.`)
    }
    this._commands.set(newId, {
      ...oldCommand,
      id: newId,
    })
    return {
      dispose: () => {
        this._commands.delete(newId)
      },
    }
  }
  getCommand(id: string): ICommand | undefined {
    return this._commands.get(id)
  }
  getCommands(): ICommandsMap {
    return this._commands
  }
}

export const commandRegistry = new CommandRegistry()

export class CommandService implements ICommandService {
  executeCommand<T = any>(commandId: string, ...args: any[]): Promise<T> {
    const command = commandRegistry.getCommand(commandId)
    if (!command) {
      return Promise.reject(new Error(`command '${commandId}' not found`))
    }
    try {
      // this._onWillExecuteCommand.fire({ commandId: id, args })
      const result = command.handler(...args)
      // this._onDidExecuteCommand.fire({ commandId: id, args })
      return Promise.resolve(result)
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
