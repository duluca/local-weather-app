import '../support/commands'

describe('LocalCast Weather', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('can search for a city by name', () => {
    searchByCity('Bursa', 'Bursa')
    searchByCity('Arlington', 'Arlington')
    searchByCity('Bethesda', 'Bethesda')
  })
})

function searchByCity(city: string, expectedCity: string) {
  cy.intercept(
    'GET',
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=01ff1417eeb4a81b09ac68b15958d453`
  ).as('getWeather')

  cy.byTestId('search-input').type(`${city}{enter}`)

  cy.wait('@getWeather')
  cy.get('@getWeather').its('request.url').should('contain', `q=${city}`)
  cy.get('@getWeather').its('response.statusCode').should('eq', 200)

  cy.byTestId('city').should('contain', expectedCity)
  cy.byTestId('description').should('not.be.empty')
  cy.byTestId('temperature').should('not.equal', '0')
  cy.byTestId('date').should('not.be.empty')
}
