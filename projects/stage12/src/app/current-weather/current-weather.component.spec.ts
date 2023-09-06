import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { Store } from '@ngrx/store'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import {
  autoSpyObj,
  injectSpy,
  ObservablePropertyStrategy,
} from 'angular-unit-test-helper'
import { first, of } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { defaultWeather, WeatherService } from '../weather/weather.service'
import { fakeWeather } from '../weather/weather.service.fake'
import { CurrentWeatherComponent } from './current-weather.component'

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>
  let weatherServiceMock: jasmine.SpyObj<WeatherService>
  let store: MockStore<{ search: { current: ICurrentWeather } }>
  const initialState = { search: { current: defaultWeather } }

  beforeEach(waitForAsync(() => {
    const weatherServiceSpy = autoSpyObj(
      WeatherService,
      ['currentWeather$'],
      ObservablePropertyStrategy.BehaviorSubject
    )

    TestBed.configureTestingModule({
      imports: [CurrentWeatherComponent],
      providers: [
        { provide: WeatherService, useValue: weatherServiceSpy },
        provideMockStore({ initialState }),
      ],
    }).compileComponents()

    weatherServiceMock = injectSpy(WeatherService)
    store = TestBed.inject(Store) as MockStore<{ search: { current: ICurrentWeather } }>
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

  it('should get currentWeather from weatherService', (done) => {
    // Arrange
    store.setState({ search: { current: fakeWeather } })
    weatherServiceMock.currentWeather$.next(fakeWeather)

    // Act
    fixture.detectChanges() // triggers ngOnInit()

    // Assert
    expect(component.current$).toBeDefined()

    component.current$.pipe(first()).subscribe((current) => {
      expect(current.city).toEqual('Bethesda')
      expect(current.temperature).toEqual(280.32)

      // Assert on DOM
      const debugEl = fixture.debugElement
      const titleEl: HTMLElement = debugEl.query(By.css('.mat-headline-6')).nativeElement
      expect(titleEl.textContent).toContain('Bethesda')
      done()
    })
  })
})
