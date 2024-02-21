/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import '../support/commands'

describe('LocalCast Weather', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('can search for a zipcode', () => {
    searchByZipCode(16140, 'Bursa')
    searchByZipCode(34000, 'Istanbul')
  })
})

function searchByZipCode(zipcode: Number, expectedCity: String) {
  cy.intercept(
    'GET',
    `http://api.openweathermap.org/data/2.5/weather?q=${zipcode}&appid=01ff1417eeb4a81b09ac68b15958d453`
  ).as('getWeather')

  cy.byTestId('search-input').type(`${zipcode}{enter}`)

  cy.wait('@getWeather')
  cy.get('@getWeather').its('request.url').should('contain', `q=${zipcode}`)
  cy.get('@getWeather').its('response.statusCode').should('eq', 200)

  cy.byTestId('city').should('contain', expectedCity)
  cy.byTestId('description').should('not.be.empty')
  cy.byTestId('temperature').should('not.equal', '0')
  cy.byTestId('date').should('not.be.empty')
}
