/* eslint-disable prettier/prettier */
// cypress/integration/button_spec.js
import '../support/commands'

describe('LocalCast Weather', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("Signal button's check functionality works ", () => {
    cy.byTestId('signal').click()
    cy.byTestId('signal').should('have.class', 'mat-button-toggle-checked')
    cy.byTestId('behavior').should('not.have.class', 'mat-button-toggle-checked')
  })

  it("Behavior button's check functionality works", () => {
    cy.byTestId('behavior').click()
    cy.byTestId('behavior').should('have.class', 'mat-button-toggle-checked')
    cy.byTestId('ngrx').should('not.have.class', 'mat-button-toggle-checked')
  })

  it('has the same behavior for NxRx button', () => {
    cy.byTestId('ngrx').click()
    cy.byTestId('ngrx').should('have.class', 'mat-button-toggle-checked')
    cy.byTestId('signal').should('not.have.class', 'mat-button-toggle-checked')
  })
})
