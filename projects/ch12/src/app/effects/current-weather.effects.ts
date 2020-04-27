import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs'
import { catchError, exhaustMap, map } from 'rxjs/operators'

import { SearchActions } from '../actions/search.actions'
import { WeatherService } from '../weather/weather.service'

@Injectable()
export class CurrentWeatherEffects {
  constructor(private actions$: Actions, private weatherService: WeatherService) {}

  getCurrentWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.search),
      exhaustMap((action) => this.doSearch(action))
    )
  )

  private doSearch(action: { searchText: string; country?: string }) {
    return this.weatherService.getCurrentWeather(action.searchText, action.country).pipe(
      map((weather) => SearchActions.weatherLoaded({ current: weather })),
      catchError(() => EMPTY)
    )
  }
}
