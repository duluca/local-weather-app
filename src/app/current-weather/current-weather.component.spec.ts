import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { BehaviorSubject, of } from 'rxjs'

import { MaterialModule } from '../material.module'
import { WeatherService } from '../weather/weather.service'
import { fakeWeather } from '../weather/weather.service.fake'
import { CurrentWeatherComponent } from './current-weather.component'

function addBehaviorSubject(object: object, propertyName: string, initialValue: object) {
  Object.defineProperty(object, propertyName, {
    get: () => new BehaviorSubject(initialValue),
    enumerable: true,
    configurable: true,
  })
}

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>
  let weatherServiceMock: WeatherService

  beforeEach(async(() => {
    weatherServiceMock = jasmine.createSpyObj('weatherService', ['getCurrentWeather'])
    addBehaviorSubject(weatherServiceMock, 'currentWeather$', fakeWeather)

    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [{ provide: WeatherService, useValue: weatherServiceMock }],
      imports: [MaterialModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
    // const weatherServiceMock2 = fixture.debugElement.injector.get(WeatherService)
    // spyOnProperty(weatherServiceMock2, 'currentWeather$').and.returnValue(
    //   new BehaviorSubject(fakeWeather)
    // )
    // console.log(weatherServiceMock.currentWeather$)
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  it('should get currentWeather from weatherService', () => {
    // Arrange

    // weatherServiceMock.currentWeather$.next(null)

    // Act
    fixture.detectChanges() // triggers ngOnInit()

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
    fixture.detectChanges() // triggers ngOnInit()

    // Assert
    expect(getCurrentWeatherSpy).toHaveBeenCalledTimes(1)
  })

  xit('should eagerly load currentWeather in Bethesda from weatherService', () => {
    // Arrange
    spyOn(weatherServiceMock, 'getCurrentWeather').and.returnValue(of(fakeWeather))

    // Act
    fixture.detectChanges() // triggers ngOnInit()

    // Assert
    expect(component.current).toBeDefined()
    expect(component.current.city).toEqual('Bethesda')
    expect(component.current.temperature).toEqual(280.32)
  })
})
