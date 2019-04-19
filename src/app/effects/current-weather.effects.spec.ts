import { TestBed, inject } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs'

import { CurrentWeatherEffects } from './current-weather.effects'

describe('CurrentWeatherEffects', () => {
  let actions$: Observable<any>
  let effects: CurrentWeatherEffects

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentWeatherEffects, provideMockActions(() => actions$)],
    })

    effects = TestBed.get(CurrentWeatherEffects)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
