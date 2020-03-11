import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Store } from '@ngrx/store'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { Observable, of } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { WeatherService, defaultWeather } from '../weather/weather.service'
import { CurrentWeatherEffects } from './current-weather.effects'

describe('CurrentWeatherEffects', () => {
  const actions$: Observable<any> = null
  const initialState = { search: { current: defaultWeather } }

  let effects: CurrentWeatherEffects
  let store: MockStore<{ search: { current: ICurrentWeather } }>
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

    effects = TestBed.inject(CurrentWeatherEffects)
    store = TestBed.inject(Store) as any
    weatherServiceMock = TestBed.inject(WeatherService) as any
  })

  it('should be created', () => {
    store.complete()
    weatherServiceMock.getCurrentWeather.and.returnValue(of(null))
    expect(effects).toBeTruthy()
  })
})
