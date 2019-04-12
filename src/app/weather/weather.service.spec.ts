import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed, async, inject } from '@angular/core/testing'

import { ICurrentWeatherData, WeatherService } from './weather.service'

const fakeWeatherData: ICurrentWeatherData = {
  weather: [
    {
      description: 'sunny',
      icon: '',
    },
  ],
  main: {
    temp: 280.32,
  },
  sys: {
    country: 'TR',
  },
  dt: 1485789600,
  name: 'Bursa',
}

describe('WeatherService', () => {
  let weatherService: WeatherService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    })

    weatherService = TestBed.get(WeatherService)
  })

  it('should be created', async(
    inject([WeatherService], (service: WeatherService) => {
      expect(service).toBeTruthy()
    })
  ))

  describe('getCurrentWeather', () => {
    it('should return value given city name', () => {
      // Arrange
      const httpMock = TestBed.get(HttpTestingController)
      const uriParams = 'q=Bursa'

      // Act
      weatherService.getCurrentWeather('Bursa').subscribe(data => {
        // Assert
        expect(data.city).toEqual('Bursa')
      })

      // Assert
      const request = httpMock.expectOne(
        `http://api.openweathermap.org/data/2.5/weather?` +
          `${uriParams}&appid=01ff1417eeb4a81b09ac68b15958d453`,
        'call to api'
      )

      expect(request.request.method).toBe('GET')

      request.flush(fakeWeatherData)

      httpMock.verify()
    })

    it('should return value given zip code', () => {
      // Arrange
      const httpMock = TestBed.get(HttpTestingController)
      const uriParams = 'zip=22201'

      // Act
      weatherService.getCurrentWeather(22201).subscribe()

      // Assert
      const request = httpMock.expectOne(
        `http://api.openweathermap.org/data/2.5/weather?` +
          `${uriParams}&appid=01ff1417eeb4a81b09ac68b15958d453`,
        'call to api'
      )

      expect(request.request.method).toBe('GET')
    })
  })
})
