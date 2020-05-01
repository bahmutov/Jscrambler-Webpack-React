/// <reference types="cypress" />
describe('application', () => {
  it('loads', () => {
    cy.visit('/')
    cy.contains('Hello from react!').should('be.visible')
      // check if the style has been applied
      .and('have.css', 'color', 'rgb(255, 0, 0)')
  })
})
