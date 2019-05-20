import { SearchActions } from '../actions/search.actions'
import { ICurrentWeather } from '../interfaces'
import { defaultWeather } from '../weather/weather.service'

export interface State {
  current: ICurrentWeather
}

export const initialState: State = {
  current: defaultWeather,
}

export function reducer(state = initialState, action: SearchActions): State {
  switch (action.type) {
    case SearchActions.weatherLoaded.type:
      return {
        ...state,
        current: action.current,
      }
    default:
      return state
  }
}
