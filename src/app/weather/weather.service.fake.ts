import { BehaviorSubject, Observable, of } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { IWeatherService } from './weather.service'

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  }

  currentWeather = new BehaviorSubject<ICurrentWeather>(this.fakeWeather)

  public getCurrentWeather(
    city: string | number,
    country?: string
  ): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }

  public updateCurrentWeather(search: string | number, country?: string) {
    this.getCurrentWeather(search, country).subscribe(weather =>
      this.currentWeather.next(weather)
    )
  }
}
