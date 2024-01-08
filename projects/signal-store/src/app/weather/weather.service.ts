import { HttpClient, HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { lastValueFrom } from 'rxjs'

import { environment } from '../../environments/environment'
import { defaultPostalCode, PostalCodeService } from '../postal-code/postal-code.service'
import { ICurrentWeather } from '../store/interfaces'

export interface ICurrentWeatherData {
  weather: [
    {
      description: string
      icon: string
    },
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

export interface IWeatherService {
  getCurrentWeather(city: string, country?: string): Promise<ICurrentWeather>
  getCurrentWeatherByCoords(coords: GeolocationCoordinates): Promise<ICurrentWeather>
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService implements IWeatherService {
  private readonly httpClient = inject(HttpClient)
  private readonly postalCodeService = inject(PostalCodeService)

  async getCurrentWeather(
    searchText: string,
    country?: string
  ): Promise<ICurrentWeather> {
    const postalCode = await this.postalCodeService.resolvePostalCode(searchText)

    if (postalCode && postalCode !== defaultPostalCode) {
      return this.getCurrentWeatherByCoords({
        latitude: postalCode.lat,
        longitude: postalCode.lng,
      })
    } else {
      const uriParams = new HttpParams().set(
        'q',
        country ? `${searchText},${country}` : searchText
      )

      return this.getCurrentWeatherHelper(uriParams)
    }
  }

  getCurrentWeatherByCoords(coords: {
    latitude: number
    longitude: number
  }): Promise<ICurrentWeather> {
    const uriParams = new HttpParams()
      .set('lat', coords.latitude.toString())
      .set('lon', coords.longitude.toString())

    return this.getCurrentWeatherHelper(uriParams)
  }

  private getCurrentWeatherHelper(uriParams: HttpParams): Promise<ICurrentWeather> {
    uriParams = uriParams.set('appid', environment.appId)

    const httpCall$ = this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseUrl}api.openweathermap.org/data/2.5/weather`,
      { params: uriParams }
    )

    return lastValueFrom(httpCall$).then((data) => this.transformToICurrentWeather(data))
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
