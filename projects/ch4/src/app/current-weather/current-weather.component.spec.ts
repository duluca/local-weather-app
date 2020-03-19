import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { WeatherService } from '../weather/weather.service'
import { CurrentWeatherComponent } from './current-weather.component'

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
