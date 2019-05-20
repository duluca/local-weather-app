import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'

import { environment } from '../../environments/environment'
import { ICurrentWeather } from '../interfaces'
import { IPostalCode, PostalCodeService } from '../postal-code/postal-code.service'

export interface ICurrentWeatherData {
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

export const defaultWeather: ICurrentWeather = {
  city: '--',
  country: '--',
  date: Date.now(),
  image: '',
  temperature: 0,
  description: '',
}

export interface IWeatherService {
  readonly currentWeather$: BehaviorSubject<ICurrentWeather>
  getCurrentWeather(city: string, country?: string): Observable<ICurrentWeather>
  getCurrentWeatherByCoords(coords: Coordinates): Observable<ICurrentWeather>
  updateCurrentWeather(searchText: string, country?: string)
}

@Injectable()
export class WeatherService implements IWeatherService {
  readonly currentWeather$ = new BehaviorSubject<ICurrentWeather>(defaultWeather)

  constructor(
    private httpClient: HttpClient,
    private postalCodeService: PostalCodeService
  ) {}

  getCurrentWeatherByCoords(coords: {
    latitude: number
    longitude: number
  }): Observable<ICurrentWeather> {
    const uriParams = `lat=${coords.latitude}&lon=${coords.longitude}`
    return this.getCurrentWeatherHelper(uriParams)
  }

  updateCurrentWeather(searchText: string, country?: string) {
    this.getCurrentWeather(searchText, country).subscribe(weather =>
      this.currentWeather$.next(weather)
    )
  }

  getCurrentWeather(searchText: string, country?: string): Observable<ICurrentWeather> {
    return this.postalCodeService.resolvePostalCode(searchText).pipe(
      switchMap(postalCode => {
        if (postalCode) {
          return this.getCurrentWeatherByCoords({
            latitude: postalCode.lat,
            longitude: postalCode.lng,
          })
        } else {
          let uriParams = `q=${searchText}`
          uriParams = country ? `${uriParams},${country}` : uriParams
          return this.getCurrentWeatherHelper(uriParams)
        }
      })
    )
  }

  private getCurrentWeatherHelper(uriParams: string): Observable<ICurrentWeather> {
    return this.httpClient
      .get<ICurrentWeatherData>(
        `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
          `${uriParams}&appid=${environment.appId}`
      )
      .pipe(map(data => this.transformToICurrentWeather(data)))
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `${environment.baseUrl}openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    }
  }

  private convertKelvinToFahrenheit(kelvin: number): number {
    return (kelvin * 9) / 5 - 459.67
  }
}
