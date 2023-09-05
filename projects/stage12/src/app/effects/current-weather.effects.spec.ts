import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Store } from '@ngrx/store'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { autoSpyObj, injectClass, injectSpy } from 'angular-unit-test-helper'
import { Observable, of } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { defaultWeather, WeatherService } from '../weather/weather.service'
import { CurrentWeatherEffects } from './current-weather.effects'

describe('CurrentWeatherEffects', () => {
  const actions$: Observable<unknown> = of(null)
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
    store = TestBed.inject(Store) as MockStore<{ search: { current: ICurrentWeather } }>
    weatherServiceMock = injectSpy(WeatherService)
  })

  it('should be created', () => {
    store.complete()
    weatherServiceMock.getCurrentWeather.and.returnValue(of(defaultWeather))
    expect(effects).toBeTruthy()
  })
})
