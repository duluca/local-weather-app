import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { effect } from '@angular/core'
import { WritableSignal } from '@angular/core'
import { FlexLayoutModule } from '@ngbracket/ngx-layout'
import { select, Store } from '@ngrx/store'
import { merge, Observable } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import * as appStore from '../reducers'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule],
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
  usingSignal = true
  readonly currentSignal: WritableSignal<ICurrentWeather>
  current$: Observable<ICurrentWeather>

  constructor(
    private weatherService: WeatherService,
    private store: Store<appStore.State>
  ) {
    this.currentSignal = this.weatherService.currentWeatherSignal
    this.current$ = merge(
      this.store.pipe(select(appStore.selectCurrentWeather)),
      this.weatherService.currentWeather$
    )
    effect(() => {
      this.usingSignal = this.weatherService.reactivityMode() === 'signal'
    })
  }

  // Attribution: https://stackoverflow.com/a/44418732/178620
  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }
}
