import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from '../material.module'
import { WeatherService } from '../weather/weather.service'
import { WeatherServiceFake } from '../weather/weather.service.fake'
import { CitySearchTpldrivenComponent } from './city-search-tpldriven.component'

describe('CitySearchTpldrivenComponent', () => {
  let component: CitySearchTpldrivenComponent
  let fixture: ComponentFixture<CitySearchTpldrivenComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CitySearchTpldrivenComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
      imports: [FormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchTpldrivenComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
