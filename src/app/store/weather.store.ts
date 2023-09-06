import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'

import { WeatherState } from '../reducers/search.reducer'
import { defaultWeather } from '../weather/weather.service'

export const initialState: WeatherState = {
  current: defaultWeather,
}

@Injectable()
export class WeatherStore extends ComponentStore<WeatherState> {
  constructor() {
    super(initialState)
  }
}
