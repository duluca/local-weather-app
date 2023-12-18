import { Component } from '@angular/core'
import { WeatherService } from '../weather.service'

import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
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
