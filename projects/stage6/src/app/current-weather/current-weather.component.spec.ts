import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  autoSpyObj,
  injectSpy,
  ObservablePropertyStrategy,
} from 'angular-unit-test-helper'
import { of } from 'rxjs'

import { WeatherService } from '../weather/weather.service'
import { CurrentWeatherComponent } from './current-weather.component'

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  beforeEach(waitForAsync(() => {
    const weatherServiceSpy = autoSpyObj(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.BehaviorSubject
    )

    TestBed.configureTestingModule({
      imports: [CurrentWeatherComponent],
      providers: [{ provide: WeatherService, useValue: weatherServiceSpy }],
    }).compileComponents()

    weatherServiceMock = injectSpy(WeatherService)
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    // Arrange
    weatherServiceMock.getCurrentWeather.and.returnValue(of())

    // Act
    fixture.detectChanges() // triggers ngOnInit

    // Assert
    expect(component).toBeTruthy()
  })
})
