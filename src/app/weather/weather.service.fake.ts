import { BehaviorSubject, Observable, of } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { IWeatherService } from './weather.service'

export const fakeWeather: ICurrentWeather = {
  city: 'Bethesda',
  country: 'US',
  date: 1485789600,
  image: '',
  temperature: 280.32,
  description: 'light intensity drizzle',
}

export class WeatherServiceFake implements IWeatherService {
  currentWeather = new BehaviorSubject<ICurrentWeather>(fakeWeather)

  public getCurrentWeather(
    city: string | number,
    country?: string
  ): Observable<ICurrentWeather> {
    return of(fakeWeather)
  }

  public updateCurrentWeather(search: string | number, country?: string) {
    this.getCurrentWeather(search, country).subscribe(weather =>
      this.currentWeather.next(weather)
    )
  }
}
