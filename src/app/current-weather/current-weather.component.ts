import { Component } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable, merge } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import * as appStore from '../reducers'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
  current$: Observable<ICurrentWeather>

  constructor(
    private weatherService: WeatherService,
    private store: Store<appStore.State>
  ) {
    this.current$ = merge(
      this.store.pipe(select(appStore.selectCurrentWeather)),
      this.weatherService.currentWeather$
    )
  }

  // Attribution: https://stackoverflow.com/a/44418732/178620
  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }
}
