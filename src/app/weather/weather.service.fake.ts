import { Observable } from 'rxjs/Rx'

import { IWeatherService } from './weather.service'
import { ICurrentWeather } from '../interfaces'

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  }

  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return Observable.of(this.fakeWeather)
  }
}
