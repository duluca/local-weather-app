import { TestBed, waitForAsync } from '@angular/core/testing'
import { createComponentMock } from 'angular-unit-test-helper'

import { AppMaterialModule } from './app-material.module'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        createComponentMock('CurrentWeatherComponent'),
        createComponentMock('CitySearchComponent'),
      ],
      imports: [AppMaterialModule],
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
