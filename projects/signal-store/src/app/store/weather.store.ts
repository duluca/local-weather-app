import { inject } from '@angular/core'
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals'

import { WeatherService } from '../weather/weather.service'
import { ICurrentWeather } from './interfaces'

export const defaultWeather: ICurrentWeather = {
  city: '--',
  country: '--',
  date: Date.now(),
  image: '',
  temperature: 0,
  description: '',
}

export const WeatherStore = signalStore(
  {
    providedIn: 'root',
  },
  withState({
    current: defaultWeather,
  }),
  withMethods((store, weatherService = inject(WeatherService)) => ({
    async updateWeather(searchText: string, country?: string) {
      patchState(store, {
        current: await weatherService.getCurrentWeather(searchText, country),
      })
    },
  }))
)
