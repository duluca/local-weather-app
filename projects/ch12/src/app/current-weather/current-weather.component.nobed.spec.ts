import { Store } from '@ngrx/store'
import { addPropertyAsBehaviorSubject } from 'angular-unit-test-helper'
import { of } from 'rxjs'

import { State } from '../reducers'
import { WeatherService } from '../weather/weather.service'
import { fakeWeather } from '../weather/weather.service.fake'
import { CurrentWeatherComponent } from './current-weather.component'

// @ts-ignore

// ###################################################################
// Advanced High-Performance Unit Test Setup sans TestBed
// By Brendon Caulkins
// Effects of running tests without the TestBed:
//    - Lifecycle hooks must be called manually
//    - Lifecycle helper funcs and funcs/getters called by HTML aren't called magically
//    - Which yields more accurate code coverage data
//    - Runs ~8-10x faster (0.066s, compared to 0.571s with the TestBed)
//    - Has fewer imports / requires less maintenance
//    - Forces higher knowledge of how the lifecycle interactes with your component
//    - Allows you to better separate Unit (fast) and Integration (slow) tests
//        into separate scripts or pipeline stages
// Note that with Angular 9+ tests run faster compared to prior versions. So,
//  the performance gains will likely be less.
// ###################################################################

describe('CurrentWeatherComponent (no TestBed)', () => {
  let component: CurrentWeatherComponent
  let weatherServiceMock: jasmine.SpyObj<WeatherService>
  let store: jasmine.SpyObj<Store<State>>

  beforeEach(() => {
    weatherServiceMock = jasmine.createSpyObj(WeatherService.name, ['getCurrentWeather'])
    addPropertyAsBehaviorSubject(weatherServiceMock, 'currentWeather$')

    // ngrx data store must be created manually
    store = jasmine.createSpyObj('AppState Store', ['pipe'])
    store.pipe.and.returnValue(of())
  })

  it('should create', () => {
    // Arrange
    weatherServiceMock.getCurrentWeather.and.returnValue(of())

    // Act
    // After migrating to ngrx, everything happens in the constructor...
    //  ... which is normally called by fixture.detectChanges() ...
    //  ... so that action is up to us to call manually as our Act
    // @ts-ignore
    component = new CurrentWeatherComponent(weatherServiceMock, store)

    // Assert
    expect(component).toBeTruthy()
  })

  // When testing data inside a subscribe block, using a callback like 'done'...
  // ...ensures the code inside get called, and causes an AsyncTimeout if not
  // Jasmine tests pass by default, so ensuring the expect(s) are called is critical
  it('should get currentWeather from weatherService', (done) => {
    // Arrange
    weatherServiceMock.currentWeather$.next(fakeWeather)

    // Act
    // @ts-ignore
    component = new CurrentWeatherComponent(weatherServiceMock, store)

    // Assert
    expect(component.current$).toBeDefined()
    component.current$.subscribe((current) => {
      if (current) {
        expect(current.city).toEqual('Bethesda')
        expect(current.temperature).toEqual(280.32)
        done()
      }
    })
  })

  // Disabled with migration to ngrx
  xdescribe('(pre-ngrx)', () => {
    beforeEach(() => {
      // @ts-ignore
      component = new CurrentWeatherComponent(weatherServiceMock, store)
    })

    it('should call getCurrentWeather from weatherService', () => {
      // Arrange
      weatherServiceMock.getCurrentWeather.and.returnValue(of())

      // Act
      // Lifecycle hooks must be called manually
      // @ts-ignore
      component.ngOnInit()

      // Assert
      expect(weatherServiceMock.getCurrentWeather).toHaveBeenCalledTimes(1)
    })

    it('should eagerly load currentWeather in Bethesda from weatherService', (done) => {
      // Arrange
      weatherServiceMock.getCurrentWeather.and.returnValue(of(fakeWeather))

      // Act
      // Lifecycle hooks must be called manually
      // @ts-ignore
      component.ngOnInit()

      // Assert
      expect(component.current$).toBeDefined()
      component.current$.subscribe((current) => {
        if (current) {
          expect(current.city).toEqual('Bethesda')
          expect(current.temperature).toEqual(280.32)
          done()
        }
      })
    })
  })
})
