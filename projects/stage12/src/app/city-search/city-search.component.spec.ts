import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { Store } from '@ngrx/store'
import {
  autoSpyObj,
  injectSpy,
  ObservablePropertyStrategy,
} from 'angular-unit-test-helper'
import { of } from 'rxjs'

import { WeatherService } from '../weather/weather.service'
import { CitySearchComponent } from './city-search.component'

describe('CitySearchComponent', () => {
  let component: CitySearchComponent
  let fixture: ComponentFixture<CitySearchComponent>

  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  beforeEach(waitForAsync(() => {
    const weatherServiceSpy = autoSpyObj(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.BehaviorSubject
    )

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        CitySearchComponent,
      ],
      providers: [
        { provide: WeatherService, useValue: weatherServiceSpy },
        { provide: Store, useValue: null },
      ],
    }).compileComponents()

    weatherServiceMock = injectSpy(WeatherService)
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchComponent)
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
