import { Component } from '@angular/core'
import { Observable } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
  // implements OnInit, OnDestroy { // Imperative implementation

  // current: ICurrentWeather // Imperative implementation
  // @Input() current: ICurrentWeather // Alternate event-based implementation
  current$: Observable<ICurrentWeather>

  // private subscriptions = new SubSink() // Imperative implementation

  constructor(private weatherService: WeatherService) {
    this.current$ = this.weatherService.currentWeather$
  }

  // ngOnInit(): void { // Imperative implementation
  //   this.subscriptions.add(
  //     this.weatherService.currentWeather$.subscribe(data => (this.current = data))
  //   )
  // }

  // ngOnDestroy(): void { // Imperative implementation
  //   this.subscriptions.unsubscribe()
  // }

  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }
}
