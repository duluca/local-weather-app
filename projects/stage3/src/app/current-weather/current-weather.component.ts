import { DatePipe, DecimalPipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { noop } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
  standalone: true,
  imports: [DecimalPipe, DatePipe],
})
export class CurrentWeatherComponent implements OnInit {
  current!: ICurrentWeather
  constructor(private weatherService: WeatherService) {
    // Dummy data initially used, later removed
    // this.current = {
    //   city: 'Bethesda',
    //   country: 'US',
    //   date: new Date(),
    //   image: 'assets/img/sunny.svg',
    //   temperature: 72,
    //   description: 'sunny',
    // } as ICurrentWeather
    //
    // Null guarding: Strategy 1, Property initialization
    // this.current = {
    //   city: '',
    //   country: '',
    //   date: 0,
    //   image: '',
    //   temperature: 0,
    //   description: '',
    // } as ICurrentWeather
  }

  ngOnInit(): void {
    noop()
    // this.weatherService
    //   .getCurrentWeather('Bethesda', 'US')
    //   .pipe(first())
    //   .subscribe(data => (this.current = data))
  }
}
