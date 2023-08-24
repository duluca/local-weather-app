import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
  private apiKey = environment.appId

  constructor(private http: HttpClient) {}

  getWeatherData(city: string) {
    return this.http.get(`${this.baseURL}${city}&appid=${this.apiKey}`)
  }
}
