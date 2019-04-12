import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { of } from 'rxjs'

import { MaterialModule } from '../material.module'
import { WeatherService } from '../weather/weather.service'
import { fakeWeather } from '../weather/weather.service.fake'
import { CurrentWeatherComponent } from './current-weather.component'

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>
  let weatherService: WeatherService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [WeatherService],
      imports: [MaterialModule, HttpClientTestingModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
    weatherService = fixture.debugElement.injector.get(WeatherService)
  })

  it('should create', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  it('should get currentWeather from weatherService', () => {
    // Arrange
    weatherService.currentWeather.next(fakeWeather)

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
      weatherService,
      'getCurrentWeather'
    ).and.callThrough()

    // Act
    fixture.detectChanges() // triggers ngOnInit()

    // Assert
    expect(getCurrentWeatherSpy).toHaveBeenCalledTimes(1)
  })

  xit('should eagerly load currentWeather in Bethesda from weatherService', () => {
    // Arrange
    spyOn(weatherService, 'getCurrentWeather').and.returnValue(of(fakeWeather))

    // Act
    fixture.detectChanges() // triggers ngOnInit()

    // Assert
    expect(component.current).toBeDefined()
    expect(component.current.city).toEqual('Bethesda')
    expect(component.current.temperature).toEqual(280.32)
  })
})
