import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../material.module'
import { WeatherService } from '../weather/weather.service'
import { WeatherServiceFake } from '../weather/weather.service.fake'
import { CitySearchComponent } from './city-search.component'

describe('CitySearchComponent', () => {
  let component: CitySearchComponent
  let fixture: ComponentFixture<CitySearchComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CitySearchComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
