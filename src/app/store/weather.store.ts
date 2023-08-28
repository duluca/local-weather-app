import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { defaultWeather } from '../weather/weather.service'
import { WeatherState } from '../reducers/search.reducer'

export const initialState: WeatherState = {
  current: defaultWeather,
}

@Injectable()
export class WeatherStore extends ComponentStore<WeatherState> {
  constructor() {
    super(initialState)
  }
}
