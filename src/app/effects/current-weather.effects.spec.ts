import { TestBed, inject } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Store } from '@ngrx/store'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { Observable } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { WeatherService, defaultWeather } from '../weather/weather.service'
import { CurrentWeatherEffects } from './current-weather.effects'

describe('CurrentWeatherEffects', () => {
  let actions$: Observable<any>
  let effects: CurrentWeatherEffects
  let store: MockStore<{ search: { current: ICurrentWeather } }>
  const initialState = { search: { current: defaultWeather } }
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  beforeEach(() => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
      'getCurrentWeather',
    ])

    TestBed.configureTestingModule({
      providers: [
        CurrentWeatherEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: WeatherService, useValue: weatherServiceSpy },
      ],
    })

    effects = TestBed.get(CurrentWeatherEffects)
    store = TestBed.get(Store)
    weatherServiceMock = TestBed.get(WeatherService)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
