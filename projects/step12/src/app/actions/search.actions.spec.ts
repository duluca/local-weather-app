import * as fromSearch from './search.actions'

describe('Search Actions', () => {
  describe('search', () => {
    it('should return an action', () => {
      expect(fromSearch.SearchActions.search.type).toBe('[Search] Search')
    })
  })

  describe('weatherLoaded', () => {
    it('should return an action', () => {
      expect(fromSearch.SearchActions.weatherLoaded.type).toBe(
        '[Search] CurrentWeather loaded'
      )
    })
  })
})
