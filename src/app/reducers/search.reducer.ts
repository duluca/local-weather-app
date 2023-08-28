import { Action, createReducer, on } from '@ngrx/store'

import { SearchActions } from '../actions/search.actions'
import { ICurrentWeather } from '../interfaces'
import { defaultWeather } from '../weather/weather.service'

export interface WeatherState {
  current: ICurrentWeather
}

export const initialState: WeatherState = {
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

export function reducer(state: WeatherState | undefined, action: Action) {
  return searchReducer(state, action)
}
