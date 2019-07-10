import { Injectable } from '@angular/core'
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects'
import { EMPTY, Observable } from 'rxjs'
import { Action } from 'rxjs/internal/scheduler/Action'
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators'

import { SearchActions } from '../actions/search.actions'
import { WeatherService } from '../weather/weather.service'

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  getCurrentWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.search),
      exhaustMap(action => {
        return this.weatherService
          .getCurrentWeather(action.searchText, action.country)
          .pipe(
            map(weather => SearchActions.weatherLoaded({ current: weather })),
            catchError(() => EMPTY)
          )
      })
    )
  )
}
