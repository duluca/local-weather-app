import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    // Replace 'your-api-key' with your actual API key from OpenWeatherMap{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.appId}`
    return this.http.get(url)
  }
}
