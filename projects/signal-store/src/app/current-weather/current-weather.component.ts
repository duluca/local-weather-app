import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FlexModule } from '@ngbracket/ngx-layout'

import { WeatherStore } from '../store/weather.store'

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule, FlexModule],
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentWeatherComponent {
  readonly store = inject(WeatherStore)

  // Attribution: https://stackoverflow.com/a/44418732/178620
  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }
}
