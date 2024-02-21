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

  // Şehir araması yapılıyor ve buton davranışları test ediliyor
  it('can search for a city by name and test button behavior', () => {
    // Şehir araması yap
    searchByCity('Boston')

    // Buton davranışlarını test et
    cy.byTestId('signal-button').click()
    cy.get('.signal button').should('have.class', 'active')
    cy.get('.result').should('contain.text', 'Boston')

    cy.byTestId('behavior-button').click()
    cy.get('.behavior-button').should('have.class', 'active')
    cy.get('.result').should('contain.text', 'Boston')

    cy.byTestId('nxrx-button').click()
    cy.get('.NxRx-button').should('have.class', 'active')
    cy.get('.result').should('contain.text', 'Boston')
  })
})
