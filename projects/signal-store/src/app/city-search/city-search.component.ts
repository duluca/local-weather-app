import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { FlexModule } from '@ngbracket/ngx-layout'
import { debounceTime, filter } from 'rxjs/operators'

import { WeatherStore } from '../store/weather.store'

@Component({
  selector: 'app-city-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitySearchComponent {
  private readonly store = inject(WeatherStore)

  search = new FormControl('', [Validators.required, Validators.minLength(2)])

  readonly searchSignal = toSignal(
    this.search.valueChanges.pipe(
      filter(() => this.search.valid),
      debounceTime(1000)
    )
  )

  constructor() {
    effect(() => {
      this.doSearch(this.searchSignal())
    })
  }

  doSearch(searchValue?: string | null) {
    if (typeof searchValue !== 'string') return
    const userInput = searchValue.split(',').map((s) => s.trim())
    const searchText = userInput[0]
    const country = userInput.length > 1 ? userInput[1] : undefined

    this.store.updateWeather(searchText, country)
  }
}
