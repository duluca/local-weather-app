import { WeatherService } from '../weather/weather.service'
import { FormControl } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/throttle'
import 'rxjs/add/observable/interval'

const zipCodeRegex = /^(\d{5})$/

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
  search = new FormControl()
  constructor(public weatherService: WeatherService) {}

  ngOnInit() {
    this.search.valueChanges
      .throttle(val => Observable.interval(1000))
      .subscribe(this.doSearch)
  }

  doSearch(searchValue: string) {
    if (searchValue) {
      const userInput = searchValue.split(',').map(s => s.trim())
      this.weatherService.getCurrentWeather(
        userInput[0],
        userInput.length > 1 ? userInput[1] : undefined
      )
    }
  }
}
