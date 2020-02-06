import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { Store } from '@ngrx/store'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { ObservablePropertyStrategy, autoSpyObj } from 'angular-unit-test-helper'
import { of } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { MaterialModule } from '../material.module'
import { WeatherService, defaultWeather } from '../weather/weather.service'
import { fakeWeather } from '../weather/weather.service.fake'
import { CurrentWeatherComponent } from './current-weather.component'

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>
  let weatherServiceMock: jasmine.SpyObj<WeatherService>
  let store: MockStore<{ search: { current: ICurrentWeather } }>
  const initialState = { search: { current: defaultWeather } }

  beforeEach(async(() => {
    const weatherServiceSpy = autoSpyObj(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.BehaviorSubject
    )

    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [
        { provide: WeatherService, useValue: weatherServiceSpy },
        provideMockStore({ initialState }),
      ],
      imports: [MaterialModule],
    }).compileComponents()

    weatherServiceMock = TestBed.inject(WeatherService) as any
    store = TestBed.inject(Store) as any
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

  it('should get currentWeather from weatherService', () => {
    // Arrange
    store.setState({ search: { current: fakeWeather } })
    weatherServiceMock.currentWeather$.next(fakeWeather)

    // Act
    fixture.detectChanges() // triggers ngOnInit()

    // Assert
    expect(component.current$).toBeDefined()

    component.current$.subscribe(current => {
      expect(current.city).toEqual('Bethesda')
      expect(current.temperature).toEqual(280.32)
    })
  })

  xit('should get currentWeather from weatherService', () => {
    // Arrange
    weatherServiceMock.getCurrentWeather.and.returnValue(of())

    // Act
    fixture.detectChanges() // triggers ngOnInit()

    // Assert
    expect(weatherServiceMock.getCurrentWeather).toHaveBeenCalledTimes(1)
  })

  xit('should eagerly load currentWeather in Bethesda from weatherService', () => {
    // Arrange
    weatherServiceMock.getCurrentWeather.and.returnValue(of(fakeWeather))

    // Act
    fixture.detectChanges() // triggers ngOnInit()

    // Assert
    expect(component.current$).toBeDefined()
    component.current$.subscribe(current => {
      expect(current.city).toEqual('Bethesda')
      expect(current.temperature).toEqual(280.32)
    })

    // Assert on DOM
    const debugEl = fixture.debugElement
    const titleEl: HTMLElement = debugEl.query(By.css('.mat-title')).nativeElement
    expect(titleEl.textContent).toContain('Bethesda')
  })
})
