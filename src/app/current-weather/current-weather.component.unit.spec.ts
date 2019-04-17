// import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { BehaviorSubject, of } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'
import { fakeWeather } from '../weather/weather.service.fake'
import { CurrentWeatherComponent } from './current-weather.component'

// import { MaterialModule } from '../material.module'

// ###################################################################
//
// Without the TestBed...
//    - Lifecycle hooks must be called manually
//    - Lifecycle helper funcs and funcs/getters called by HTML aren't called magically
//    - Which yields more accurate code coverage data
//    - Runs faster (~0.07s, compared to ~0.35s with the TestBed)
//    - Has fewer imports / requires less maintenance
//    - Forces higher knowledge of how the lifecycle interactes with your component
//    - Allows you to better separate Unit (fast) and Integration (slow) tests
//        into separate scripts or pipeline stages
//
// ###################################################################

// tslint:disable-next-line:max-line-length
// function addBehaviorSubject(object: object, propertyName: string, initialValue: object) {
//   Object.defineProperty(object, propertyName, {
//     get: () => new BehaviorSubject(initialValue),
//     enumerable: true,
//     configurable: true,
//   })
// }

fdescribe('CurrentWeatherComponent (no TestBed)', () => {
  let component: CurrentWeatherComponent
  let testWeather$: BehaviorSubject<ICurrentWeather>
  let weatherServiceMock: WeatherService

  // beforeEach(async(() => {
  beforeEach(() => {
    testWeather$ = new BehaviorSubject(fakeWeather)
    weatherServiceMock = new WeatherService(null)

    // Swap out the read-only property with one that can be controlled here
    spyOnProperty(weatherServiceMock, 'currentWeather$').and.returnValue(testWeather$)
    // addBehaviorSubject(weatherServiceMock, 'currentWeather$', fakeWeather)

    // TestBed.configureTestingModule({
    //   declarations: [CurrentWeatherComponent],
    //   providers: [{ provide: WeatherService, useValue: weatherServiceMock }],
    //   imports: [MaterialModule],
    // }).compileComponents()

    // The above can be done manually, because Components are just classes
    component = new CurrentWeatherComponent(weatherServiceMock)
  })
  // }))

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CurrentWeatherComponent)
  //   component = fixture.componentInstance
  //   // const weatherServiceMock2 = fixture.debugElement.injector.get(WeatherService)
  //   // spyOnProperty(weatherServiceMock2, 'currentWeather$').and.returnValue(
  //   //   new BehaviorSubject(fakeWeather)
  //   // )
  //   // console.log(weatherServiceMock.currentWeather$)
  // })

  it('should create', () => {
    // fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  it('should get currentWeather from weatherService', () => {
    // Arrange
    weatherServiceMock.currentWeather$.next(null)

    // Act
    component.ngOnInit() // You can call lifecycle hooks manually, if you want
    // fixture.detectChanges() // triggers ngOnInit()

    // Assert
    expect(component.current).toBeDefined()
    expect(component.current.city).toEqual('Bethesda')
    expect(component.current.temperature).toEqual(280.32)
  })

  xit('should get currentWeather from weatherService', () => {
    // Arrange
    const getCurrentWeatherSpy = spyOn(
      weatherServiceMock,
      'getCurrentWeather'
    ).and.callThrough()

    // Act
    component.ngOnInit() // You can call lifecycle hooks manually, if you want
    // fixture.detectChanges() // triggers ngOnInit()

    // Assert
    expect(getCurrentWeatherSpy).toHaveBeenCalledTimes(1)
  })

  xit('should eagerly load currentWeather in Bethesda from weatherService', () => {
    // Arrange
    spyOn(weatherServiceMock, 'getCurrentWeather').and.returnValue(of(fakeWeather))

    // Act
    component.ngOnInit() // You can call lifecycle hooks manually, if you want
    // fixture.detectChanges() // triggers ngOnInit()

    // Assert
    expect(component.current).toBeDefined()
    expect(component.current.city).toEqual('Bethesda')
    expect(component.current.temperature).toEqual(280.32)
  })
})
