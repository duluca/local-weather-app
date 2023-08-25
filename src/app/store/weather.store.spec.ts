import { TestBed } from '@angular/core/testing'

import { WeatherStoreService } from './weather.store'

describe('WeatherStoreService', () => {
  let service: WeatherStoreService

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [WeatherStoreService] })
    service = TestBed.inject(WeatherStoreService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
