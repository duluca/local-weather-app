import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  combineReducers,
  compose,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store'

import { environment } from '../../environments/environment'
import * as fromSearch from './search.reducer'

export interface State {
  search: fromSearch.State
}

export const reducers: ActionReducerMap<State> = {
  search: fromSearch.reducer,
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []

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
