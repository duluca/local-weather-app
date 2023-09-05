import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NgSwitch, NgSwitchDefault, NgSwitchCase],
})
export class AppComponent {
  title = 'local-weather-app'
}
