import { Component } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { FlexModule } from '@ngbracket/ngx-layout'
import { debounceTime, filter, tap } from 'rxjs/operators'

import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class CitySearchComponent {
  // implements OnInit { // Imperative-style
  // @Output() searchEvent = new EventEmitter<string>() // Alternate event-based implementation

  search = new FormControl('', [Validators.required, Validators.minLength(2)])
  constructor(private weatherService: WeatherService) {
    this.search.valueChanges
      .pipe(
        filter(() => this.search.valid),
        debounceTime(1000),
        tap((searchValue) => this.doSearch(searchValue)),
        takeUntilDestroyed()
      )
      .subscribe()
  }

  // // Imperative-style
  // ngOnInit(): void {
  //   this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue: string) => {
  //     if (!this.search.invalid) {
  //       // this.searchEvent.emit(searchValue) // Alternate event-based implementation
  //       const userInput = searchValue.split(',').map((s) => s.trim())
  //       this.weatherService.updateCurrentWeather(
  //         userInput[0],
  //         userInput.length > 1 ? userInput[1] : undefined
  //       )
  //     }
  //   })
  // }

  doSearch(searchValue: string | null) {
    if (searchValue === null) return
    const userInput = searchValue.split(',').map((s) => s.trim())
    const searchText = userInput[0]
    const country = userInput.length > 1 ? userInput[1] : undefined
    this.weatherService.updateCurrentWeather(searchText, country)
  }
}
