import { ComponentClass } from 'react'
import AppState, { AppStateTypes as AST } from './appState'

export const stores = {
  appState: new AppState()
}

export interface StorageTypes {
  stores: {
    appState: AST
  }
}

export interface AppStateTypes extends ComponentClass {
  appState?: AST
}
