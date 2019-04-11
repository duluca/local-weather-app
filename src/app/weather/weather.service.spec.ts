import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  // let debugElement: DebugElement
  // let httpClient: HttpClientTestingModule
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    })

    // https://offering.solutions/blog/articles/2017/10/02/testing-angular-2-http-service/
    // fixture = TestBed.createComponent(AppComponent)
    // debugElement = fixture.debugElement
    // httpClient = debugElement.injector.get(IncrementDecrementService)
  })

  it('should be created', async(
    inject([WeatherService], (service: WeatherService) => {
      expect(service).toBeTruthy()
    })
  ))

  describe('getCurrentWeather', () => {
    it('should return value given city name') {

    }

    it('should return value given zip code') {

    }
  })

  // add a component test where you spy on the fact that a service function is called
})
