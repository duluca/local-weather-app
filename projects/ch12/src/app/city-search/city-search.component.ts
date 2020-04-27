import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { debounceTime, filter, tap } from 'rxjs/operators'

import { SearchActions } from '../actions/search.actions'
import * as fromSearch from '../reducers/search.reducer'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent {
  useNgRx = false
  search = new FormControl('', [Validators.required, Validators.minLength(2)])

  constructor(
    private weatherService: WeatherService,
    private store: Store<fromSearch.State>
  ) {
    this.search.valueChanges
      .pipe(
        debounceTime(1000),
        filter(() => !this.search.invalid),
        tap((searchValue: string) => this.doSearch(searchValue))
      )
      .subscribe()
  }

  doSearch(searchValue: string) {
    const userInput = searchValue.split(',').map((s) => s.trim())
    const searchText = userInput[0]
    const country = userInput.length > 1 ? userInput[1] : undefined

    if (this.useNgRx) {
      this.ngRxBasedSearch(searchText, country)
    } else {
      this.behaviorSubjectBasedSearch(searchText, country)
    }
  }

  behaviorSubjectBasedSearch(searchText: string, country?: string) {
    this.weatherService.updateCurrentWeather(searchText, country)
  }

  ngRxBasedSearch(searchText: string, country?: string) {
    this.store.dispatch(SearchActions.search({ searchText, country }))
  }
}
