import { TestBed, waitForAsync } from '@angular/core/testing'
import { createComponentMock } from 'angular-unit-test-helper'

import { AppComponent } from './app.component'
import { MaterialModule } from './material.module'

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, createComponentMock('CurrentWeatherComponent')],
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
