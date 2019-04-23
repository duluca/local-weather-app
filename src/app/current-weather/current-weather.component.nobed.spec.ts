import { Store } from '@ngrx/store'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { addPropertyAsBehaviorSubject } from 'angular-unit-test-helper'
import { of } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { AppState } from '../reducers'
import { WeatherService, defaultWeather } from '../weather/weather.service'
import { fakeWeather } from '../weather/weather.service.fake'
import { CurrentWeatherComponent } from './current-weather.component'

// ###################################################################
// Advanced High-Performance Unit Test Setup sans TestBed
// By Brendon Caulkins
// Effects of running tests without the TestBed:
//    - Lifecycle hooks must be called manually
//    - Lifecycle helper funcs and funcs/getters called by HTML aren't called magically
//    - Which yields more accurate code coverage data
//    - Runs ~10x faster (0.037s, compared to 0.44s with the TestBed)
//    - Has fewer imports / requires less maintenance
//    - Forces higher knowledge of how the lifecycle interactes with your component
//    - Allows you to better separate Unit (fast) and Integration (slow) tests
//        into separate scripts or pipeline stages
//
// ###################################################################

describe('CurrentWeatherComponent (no TestBed)', () => {
  let component: CurrentWeatherComponent
  let weatherServiceMock: jasmine.SpyObj<WeatherService>
  let store: jasmine.SpyObj<Store<AppState>>
  const initialState = { search: { current: defaultWeather } }

  beforeEach(() => {
    weatherServiceMock = jasmine.createSpyObj('WeatherService', ['getCurrentWeather'])
    addPropertyAsBehaviorSubject(weatherServiceMock, 'currentWeather$')
    store = jasmine.createSpyObj('AppState Store', ['pipe'])
    store.pipe.and.returnValue(of())

    // Create the class under test manually
    component = new CurrentWeatherComponent(weatherServiceMock, store)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should get currentWeather from weatherService', () => {
    // Arrange
    weatherServiceMock.currentWeather$.next(fakeWeather)

    // Act
    component.ngOnInit() // You have to call lifecycle hooks manually

    // Assert
    expect(component.current$).toBeDefined()
    component.current$.subscribe(current => {
      expect(current.city).toEqual('Bethesda')
      expect(current.temperature).toEqual(280.32)
    })
  })
})
