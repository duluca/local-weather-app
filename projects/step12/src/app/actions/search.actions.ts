import { createAction, props, union } from '@ngrx/store'

import { ICurrentWeather } from '../interfaces'

export const SearchActions = {
  search: createAction(
    '[Search] Search',
    props<{ searchText: string; country?: string }>()
  ),
  weatherLoaded: createAction(
    '[Search] CurrentWeather loaded',
    props<{ current: ICurrentWeather }>()
  ),
}

const all = union(SearchActions)
export type SearchActions = typeof all
