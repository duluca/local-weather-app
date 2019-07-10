import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable, Subscription, merge } from 'rxjs'
import { map } from 'rxjs/operators'
import { SubSink } from 'subsink'

import { ICurrentWeather } from '../interfaces'
import * as appStore from '../reducers'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit, OnDestroy {
  // current: ICurrentWeather
  current$: Observable<ICurrentWeather>
  // currentWeatherSubscription: Subscription
  // private subscriptions = new SubSink()

  constructor(
    private weatherService: WeatherService,
    private store: Store<appStore.State>
  ) {
    this.current$ = merge(
      this.store.pipe(select(appStore.selectCurrentWeather)),
      this.weatherService.currentWeather$
    )
  }

  ngOnInit() {
    // initial implementation
    // this.weatherService
    //   .getCurrentWeather('Bethesda', 'US')
    //   .subscribe(data => (this.current = data))
    // final implementation
    // this.subscriptions.add(
    //   this.weatherService.currentWeather$.subscribe(data => (this.current = data))
    // )
  }

  // Attribution: https://stackoverflow.com/a/44418732/178620
  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }

  ngOnDestroy(): void {
    // this.currentWeatherSubscription.unsubscribe()
    // this.subscriptions.unsubscribe()
  }
}
