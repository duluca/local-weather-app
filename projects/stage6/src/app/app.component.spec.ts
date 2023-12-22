import { TestBed, waitForAsync } from '@angular/core/testing'
import { getNativeElementByTestId } from 'angular-unit-test-helper'
import { MockComponents } from 'ng-mocks'

import { AppComponent } from './app.component'
import { CitySearchComponent } from './city-search/city-search.component'
import { CitySearchTpldrivenComponent } from './city-search-tpldriven/city-search-tpldriven.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppComponent,
        ...MockComponents(
          CurrentWeatherComponent,
          CitySearchComponent,
          CitySearchTpldrivenComponent
        ),
      ],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const titleElement = getNativeElementByTestId(fixture, 'title')
    expect(titleElement.textContent).toContain('LocalCast Weather')
  })
})
