import { HttpClientModule } from '@angular/common/http'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed, async, inject } from '@angular/core/testing'

import { WeatherService } from './weather.service'

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    })
  })

  it('should be created', async(
    inject([WeatherService], (service: WeatherService) => {
      expect(service).toBeTruthy()
    })
  ))
})
