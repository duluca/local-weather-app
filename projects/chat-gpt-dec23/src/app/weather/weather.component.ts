// weather.component.ts
import { Component, inject } from '@angular/core'
import { WeatherService } from './weather.service'
import { MatFormFieldModule } from '@angular/material/form-field'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { FlexModule } from '@ngbracket/ngx-layout'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatSidenavModule } from '@angular/material/sidenav'
import { environment } from '../environments/environment'

export interface ICurrentWeather {
  city: string
  country: string
  date: number
  image: string
  temperature: number
  description: string
}

export interface ICurrentWeatherData {
  weather: [
    {
      description: string
      icon: string
    },
  ]
  main: {
    temp: number
  }
  sys: {
    country: string
  }
  dt: number
  name: string
}

export const defaultWeather: ICurrentWeather = {
  city: '--',
  country: '--',
  date: Date.now(),
  image: '',
  temperature: 0,
  description: '',
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    FlexModule,
    MatButtonModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
  ],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  userInput: string = ''
  weatherData: ICurrentWeather | null = null
  isLoading: boolean = false
  errorStatus: string = ''

  forecast = [
    {
      day: 'Monday',
      temperatureHigh: 55,
      temperatureLow: 45,
    },
    {
      day: 'Tuesday',
      temperatureHigh: 60,
      temperatureLow: 50,
    },
    {
      day: 'Wednesday',
      temperatureHigh: 65,
      temperatureLow: 55,
    },
    {
      day: 'Thursday',
      temperatureHigh: 70,
      temperatureLow: 60,
    },
    {
      day: 'Friday',
      temperatureHigh: 75,
      temperatureLow: 65,
    },
  ]

  departingCity: string = ''
  saveDepartingCity() {}

  private weatherService = inject(WeatherService)
  private snackBar = inject(MatSnackBar)

  getWeatherData() {
    if (!this.userInput.trim()) {
      this.snackBar.open('Please enter a valid city, country, or postal code', 'Close', {
        duration: 3000,
      })
      return
    }

    this.isLoading = true
    this.weatherService.getWeather(this.userInput).subscribe({
      next: (data) => {
        this.weatherData = this.transformToICurrentWeather(data as ICurrentWeatherData)
        this.errorStatus = ''
        this.isLoading = false
      },
      error: (error) => {
        // Handle the error here
        this.errorHandling(error)
        this.isLoading = false
      },
    })
  }

  private errorHandling(error: any) {
    // Customize your error handling here
    const errorResponse = error.error
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      this.errorStatus = 'An error occurred: ' + errorResponse.message
    } else {
      // Server-side error
      this.errorStatus = `Server returned code: ${errorResponse.status}, error message is: ${errorResponse.message}`
    }

    // Show a user-friendly message
    this.snackBar.open(this.errorStatus, 'Close', {
      duration: 5000,
    })

    // Optionally, you can reset the weather data if an error occurs
    this.weatherData = null
  }

  // Attribution: https://stackoverflow.com/a/44418732/178620
  getOrdinal(date?: number) {
    const n = new Date(date ?? 0).getDate()
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `${environment.baseUrl}openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    }
  }

  private convertKelvinToFahrenheit(kelvin: number): number {
    return (kelvin * 9) / 5 - 459.67
  }
}
