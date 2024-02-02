/* eslint-disable prettier/prettier */
// cypress/integration/button_spec.js
import '../support/commands'

describe('LocalCast Weather', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the same behavior for Signal button', () => {
    cy.byTestId('signal-button').click()
    cy.get('.signal-button').should('have.class', 'active')
  })

  it('has the same behavior for Behavior button', () => {
    cy.byTestId('behavior-button').click()
    cy.get('.behavior-button').should('have.class', 'active')
  })

  it('has the same behavior for NxRx button', () => {
    cy.byTestId('nxrx-button').click()
    cy.get('.NxRx-button').should('have.class', 'active')
  })
})
