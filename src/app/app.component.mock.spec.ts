import { TestBed, async } from '@angular/core/testing'
import { createComponentMock } from 'angular-unit-test-helper'

import { AppComponent } from './app.component'
import { MaterialModule } from './material.module'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        createComponentMock('CurrentWeatherComponent'),
        createComponentMock('CitySearchComponent'),
      ],
      imports: [MaterialModule],
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
