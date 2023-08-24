import { Component } from '@angular/core'
import { first } from 'rxjs/operators'

import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-city-search-tpldriven',
  templateUrl: './city-search-tpldriven.component.html',
  styleUrls: ['./city-search-tpldriven.component.css'],
})
export class CitySearchTpldrivenComponent {
  model = {
    search: '',
  }
  constructor(private weatherService: WeatherService) {}

  doSearch(searchValue: string) {
    const userInput = searchValue.split(',').map((s) => s.trim())
    this.weatherService
      .getCurrentWeather(userInput[0], userInput.length > 1 ? userInput[1] : undefined)
      .pipe(first())
      .subscribe((data) => console.log(data))
  }
}
