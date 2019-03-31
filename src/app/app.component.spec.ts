import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed, async } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { CitySearchComponent } from './city-search/city-search.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { MaterialModule } from './material.module'
import { WeatherService } from './weather/weather.service'
import { WeatherServiceFake } from './weather/weather.service.fake'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CurrentWeatherComponent, CitySearchComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('span').textContent).toContain('LocalCast Weather')
  }))
})
