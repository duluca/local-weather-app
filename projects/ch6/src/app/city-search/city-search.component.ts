import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { debounceTime } from 'rxjs/operators'

import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
  // @Output() searchEvent = new EventEmitter<string>() // Alternate event-based implementation

  search = new FormControl('', [Validators.minLength(2)])
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue: string) => {
      if (!this.search.invalid) {
        // this.searchEvent.emit(searchValue) // Alternate event-based implementation
        const userInput = searchValue.split(',').map(s => s.trim())
        this.weatherService.updateCurrentWeather(
          userInput[0],
          userInput.length > 1 ? userInput[1] : undefined
        )
      }
    })
  }
}
