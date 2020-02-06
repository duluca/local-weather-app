import { Action, createReducer, on } from '@ngrx/store'

import { SearchActions } from '../actions/search.actions'
import { ICurrentWeather } from '../interfaces'
import { defaultWeather } from '../weather/weather.service'

export interface State {
  current: ICurrentWeather
}

export const initialState: State = {
  current: defaultWeather,
}

const searchReducer = createReducer(
  initialState,
  on(SearchActions.weatherLoaded, (state, action) => {
    return {
      ...state,
      current: action.current,
    }
  })
)

export function reducer(state: State | undefined, action: Action) {
  return searchReducer(state, action)
}
