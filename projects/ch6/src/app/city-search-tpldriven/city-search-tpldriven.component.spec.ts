import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import {
  ObservablePropertyStrategy,
  autoSpyObj,
  injectSpy,
} from 'angular-unit-test-helper'
import { of } from 'rxjs'

import { MaterialModule } from '../material.module'
import { WeatherService } from '../weather/weather.service'
import { CitySearchTpldrivenComponent } from './city-search-tpldriven.component'

describe('CitySearchTpldrivenComponent', () => {
  let component: CitySearchTpldrivenComponent
  let fixture: ComponentFixture<CitySearchTpldrivenComponent>
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  beforeEach(waitForAsync(() => {
    const weatherServiceSpy = autoSpyObj(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.BehaviorSubject
    )

    TestBed.configureTestingModule({
      declarations: [CitySearchTpldrivenComponent],
      providers: [{ provide: WeatherService, useValue: weatherServiceSpy }],
      imports: [FormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents()

    weatherServiceMock = injectSpy(WeatherService)
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchTpldrivenComponent)
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
