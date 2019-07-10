import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store'
import { storeFreeze } from 'ngrx-store-freeze'

import { environment } from '../../environments/environment'
import * as fromSearch from './search.reducer'

export interface AppState {
  search: fromSearch.State
}

export const reducers: ActionReducerMap<AppState> = {
  search: fromSearch.reducer,
}

export const selectCurrentWeather = (state: AppState) => state.search.current

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const result = reducer(state, action)
    console.groupCollapsed(action.type)
    console.log('prev state', state)
    console.log('action', action)
    console.log('next state', result)
    console.groupEnd()

    return result
  }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger, storeFreeze]
  : []
