describe('fundamentals test', () => {
  it('passes', () => {
    cy.visit('/fundamentals')
    cy.get('[data-test="fundamentals-header"]').should('contain', 'Testing Fundamentals')
  })
})