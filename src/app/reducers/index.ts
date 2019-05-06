import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  combineReducers,
  compose,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store'
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

// console.log all actions
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

// const developmentReducer: ActionReducer<State> = compose(
//   storeFreeze,
//   combineReducers
// )(reducers)
// const productionReducer: ActionReducer<State> = combineReducers(reducers)

// export function reducer(state: any, action: any) {
//   if (environment.production) {
//     return productionReducer(state, action);
//   } else {
//     return developmentReducer(state, action);
//   }
// }
