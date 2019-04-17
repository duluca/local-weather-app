import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';

import { MaterialModule } from '../material.module';
import { WeatherService } from '../weather/weather.service';
import { fakeWeather } from '../weather/weather.service.fake';
import { CurrentWeatherComponent } from './current-weather.component';

function addProperty(object: object, propertyName: string, valueToReturn: object) {
  Object.defineProperty(object, propertyName, {
    get: () => valueToReturn,
    enumerable: true,
    configurable: true,
  })
}

export function addPropertyAsBehaviorSubject(object: object, propertyName: string) {
  addProperty(object, propertyName, new BehaviorSubject(null))
}

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>
  let weatherServiceMock: WeatherService

  beforeEach(async(() => {
    weatherServiceMock = jasmine.createSpyObj('WeatherService', ['getCurrentWeather'])
    addPropertyAsBehaviorSubject(weatherServiceMock, 'currentWeather$')

    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [{ provide: WeatherService, useValue: weatherServiceMock }],
      imports: [MaterialModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  it('should get currentWeather from weatherService', () => {
    // Arrange
    weatherServiceMock.currentWeather$.next(fakeWeather)

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
