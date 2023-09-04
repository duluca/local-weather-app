import { Component } from '@angular/core'
import { WeatherDisplayComponent } from './weather-display/weather-display.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [WeatherDisplayComponent],
})
export class AppComponent {
  title = 'chat-gpt'
}
