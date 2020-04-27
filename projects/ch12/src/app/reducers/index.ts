import { ActionReducer, ActionReducerMap, MetaReducer, createSelector } from '@ngrx/store'

import { environment } from '../../environments/environment'
import * as fromSearch from './search.reducer'

export interface State {
  search: fromSearch.State
  // [fromSearch.searchFeatureKey]: fromSearch.State;
}

export const reducers: ActionReducerMap<State> = {
  search: fromSearch.reducer,
  // [fromSearch.searchFeatureKey]: fromSearch.reducer,
}

export const selectCurrentWeather = createSelector(
  (state: State) => state.search.current,
  (current) => current
)

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
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

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : []
