import { TestBed, waitForAsync } from '@angular/core/testing'

import { AppComponent } from './app.component'

import { MockComponents } from 'ng-mocks'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { CitySearchComponent } from './city-search/city-search.component'
import { CitySearchTpldrivenComponent } from './city-search-tpldriven/city-search-tpldriven.component'
import { MaterialModule } from 'projects/step5/src/app/material.module'

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ...MockComponents(
          CurrentWeatherComponent,
          CitySearchComponent,
          CitySearchTpldrivenComponent
        ),
      ],
      imports: [MaterialModule],
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
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('span').textContent).toContain('LocalCast Weather')
  })
})
