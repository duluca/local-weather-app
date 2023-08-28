import { TestBed, waitForAsync } from '@angular/core/testing'

import { MaterialModule } from './material.module'
import { AppComponent } from './app.component'

import { MockComponents } from 'ng-mocks'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { CitySearchComponent } from './city-search/city-search.component'

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ...MockComponents(CurrentWeatherComponent, CitySearchComponent),
      ],
      imports: [MaterialModule],
    }).compileComponents()
  }))
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
  it('should render title in a h1 tag', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('span').textContent).toContain('LocalCast Weather')
  }))
})
