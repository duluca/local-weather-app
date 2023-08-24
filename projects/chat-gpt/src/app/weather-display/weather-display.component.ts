import { Component } from '@angular/core'
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css'],
})
export class WeatherDisplayComponent {
  city: string
  weatherData: any

  constructor(private weatherService: WeatherService) {
    this.city = ''
  }

  fetchWeather() {
    this.weatherService.getWeatherData(this.city).subscribe((data) => {
      this.weatherData = data
    })
  }
}
