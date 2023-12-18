import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common'
import { Component } from '@angular/core'
import { FlexModule } from '@ngbracket/ngx-layout/flex'
import { select, Store } from '@ngrx/store'
import { merge, Observable } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import * as appStore from '../reducers'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
  standalone: true,
  imports: [FlexModule, AsyncPipe, DecimalPipe, DatePipe],
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

  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }
}
