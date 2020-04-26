import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { Observable, of } from 'rxjs'
import { WeatherService, defaultWeather } from '../weather/weather.service'
import { autoSpyObj, injectClass, injectSpy } from 'angular-unit-test-helper'

import { CurrentWeatherEffects } from './current-weather.effects'
import { ICurrentWeather } from '../interfaces'
import { Store } from '@ngrx/store'
import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'

describe('CurrentWeatherEffects', () => {
  const actions$: Observable<any> = null
  const initialState = { search: { current: defaultWeather } }

  let effects: CurrentWeatherEffects
  let store: MockStore<{ search: { current: ICurrentWeather } }>
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrentWeatherEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: WeatherService, useValue: autoSpyObj(WeatherService) },
      ],
    })

    effects = injectClass(CurrentWeatherEffects)
    store = TestBed.inject(Store) as any
    weatherServiceMock = injectSpy(WeatherService)
  })

  it('should be created', () => {
    store.complete()
    weatherServiceMock.getCurrentWeather.and.returnValue(of(null))
    expect(effects).toBeTruthy()
  })
})
