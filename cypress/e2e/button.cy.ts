/* eslint-disable prettier/prettier */
// cypress/integration/button_spec.js
import '../support/commands'

describe('LocalCast Weather', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the same behavior for Signal button', () => {
    cy.byTestId('signal').click()
    cy.byTestId('signal').should('have.class', 'mat-button-toggle-checked')
  })

  it('has the same behavior for Behavior button', () => {
    cy.byTestId('behavior').click()
    cy.get('.behavior-button').should('have.class', 'active')
  })

  it('has the same behavior for NxRx button', () => {
    cy.byTestId('ngrx').click()
    cy.get('.NxRx-button').should('have.class', 'active')
  })
})
