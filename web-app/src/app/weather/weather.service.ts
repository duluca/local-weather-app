import { Observable } from 'rxjs/Rx'
import { ICurrentWeather } from '../interfaces'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import { environment } from '../../environments/environment'

interface ICurrentWeatherData {
  weather: [
    {
      description: string
      icon: string
    }
  ]
  main: {
    temp: number
  }
  sys: {
    country: string
  }
  dt: number
  name: string
}

@Injectable()
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return this.httpClient
      .get<ICurrentWeatherData>(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`
      )
      .map(data => this.transformToICurrentWeather(data))
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    }
  }

  private convertKelvinToFahrenheit(kelvin: number): number {
    return kelvin * 9 / 5 - 459.67
  }
}
