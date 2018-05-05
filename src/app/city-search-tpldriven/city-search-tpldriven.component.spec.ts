import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CitySearchTpldrivenComponent } from './city-search-tpldriven.component'
import { MaterialModule } from '../material.module'
import { FormsModule } from '@angular/forms'
import { WeatherService } from '../weather/weather.service'
import { WeatherServiceFake } from '../weather/weather.service.fake'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

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
