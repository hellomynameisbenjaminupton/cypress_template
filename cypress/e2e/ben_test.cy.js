describe('This is my first test', () => {
  it('Visits my site', () => {
    cy.visit('https://www.hellomynameisbenjaminupton.com')
    cy.contains('about').click()
    cy.url().should('include', 'about')
  })
  it('Go to admin', () => {
    cy.visit('https://www.hellomynameisbenjaminupton.com/admin')
    cy.get('#jsusername').type('fake@email.com')
    cy.get('#jspassword').type('fakepassword')
    cy.get('.btn-primary').click()
    cy.get('.btn-primary').should('exist')
  })
})