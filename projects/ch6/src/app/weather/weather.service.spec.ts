import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed, inject, waitForAsync } from '@angular/core/testing'
import { autoSpyObj, injectClass, injectSpy } from 'angular-unit-test-helper'
import { of } from 'rxjs'

import { environment } from '../../environments/environment'
import {
  IPostalCode,
  PostalCodeService,
  defaultPostalCode,
} from '../postal-code/postal-code.service'
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
  let postalCodeServiceMock: jasmine.SpyObj<PostalCodeService>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: PostalCodeService, useValue: autoSpyObj(PostalCodeService) },
      ],
    })

    weatherService = injectClass(WeatherService)
    postalCodeServiceMock = injectSpy(PostalCodeService)
  })

  it('should be created', waitForAsync(
    inject([WeatherService], (service: WeatherService) => {
      expect(service).toBeTruthy()
    })
  ))

  describe('getCurrentWeather', () => {
    it('should return value given city name', () => {
      // Arrange
      const httpMock = TestBed.inject(HttpTestingController)
      const uriParams = 'q=Bursa'
      postalCodeServiceMock.resolvePostalCode.and.returnValue(of(defaultPostalCode))

      // Act
      weatherService.getCurrentWeather('Bursa').subscribe((data) => {
        // Assert
        expect(data.city).toEqual('Bursa')
      })

      // Assert
      const request = httpMock.expectOne(
        `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
          `${uriParams}&appid=01ff1417eeb4a81b09ac68b15958d453`,
        'call to api'
      )

      expect(request.request.method).toBe('GET')

      request.flush(fakeWeatherData)

      httpMock.verify()
    })

    it('should return value given zip code', () => {
      // Arrange
      const httpMock = TestBed.inject(HttpTestingController)
      const uriParams = 'lat=38.887103&lon=-77.093197'
      postalCodeServiceMock.resolvePostalCode.and.returnValue(
        of({
          postalCode: '22201',
          lat: 38.887103,
          lng: -77.093197,
          countryCode: 'US',
          placeName: 'Arlington',
        } as IPostalCode)
      )

      // Act
      weatherService.getCurrentWeather('22201').subscribe()

      // Assert
      const request = httpMock.expectOne(
        `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
          `${uriParams}&appid=01ff1417eeb4a81b09ac68b15958d453`,
        'call to api'
      )

      expect(request.request.method).toBe('GET')
    })
  })
})
