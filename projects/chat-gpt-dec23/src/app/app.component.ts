import { Component } from '@angular/core'

import { RouterOutlet } from '@angular/router'
import { WeatherComponent } from './weather/weather.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
