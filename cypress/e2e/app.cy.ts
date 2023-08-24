import '../support/commands'

describe('LocalCast Weather', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the correct title', () => {
    cy.byTestId('title').should('have.text', 'LocalCast Weather')
  })

  it('can toggle dark mode', () => {
    cy.byTestId('darkmode-toggle').click()

    cy.byTestId('darkmode-toggle').should('have.class', 'mat-mdc-slide-toggle-checked')

    cy.get('.dark-theme').should('exist')

    cy.byTestId('darkmode-toggle').click()
    cy.byTestId('darkmode-toggle').should(
      'not.have.class',
      'mat-mdc-slide-toggle-checked'
    )
    cy.get('.dark-theme').should('not.exist')
  })

  it('can remember dark mode preference', () => {
    cy.byTestId('darkmode-toggle').click()
    cy.reload()
    cy.byTestId('darkmode-toggle').should('have.class', 'mat-mdc-slide-toggle-checked')
    cy.get('.dark-theme').should('exist')
  })
})
