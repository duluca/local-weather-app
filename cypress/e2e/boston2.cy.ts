/* eslint-disable prettier/prettier */
import '../support/commands'

describe('LocalCast Weather', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  function searchByCity(city: string) {
    cy.intercept(
      'GET',
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=01ff1417eeb4a81b09ac68b15958d453`
    ).as('getWeather')

    cy.byTestId('search-input').type(`${city}{enter}`)
  }

  it('after searching for a city and clicking on signal button show the same result', () => {
    cy.byTestId('behavior').click()
    searchByCity('Boston')
    cy.byTestId('city').should('contain.text', 'Boston')

    cy.byTestId('signal').click()
    cy.get('.signal').should('have.class', 'active')
    cy.byTestId('city').should('contain.text', 'Boston')
  })

  it('after searching for a city and clicking on ngrx button should show the same result', () => {
    cy.byTestId('behavior').click()
    searchByCity('Boston')
    cy.byTestId('city').should('contain.text', 'Boston')

    cy.byTestId('ngrx').click()
    // cy.get('.NgRx').should('have.class', 'active')
    cy.byTestId('city').should('contain.text', 'Boston')
  })
})
