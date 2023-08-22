describe('navigation tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to the home page', () => {
    cy.getDataTest('nav-home').click();
    cy.location('pathname').should('equal', '/men');
  });

  it('should navigate to the favorites page', () => {
    cy.getDataTest('nav-favorites').click();
    cy.get('[data-set="login-form"]').should('exist');
    cy.get('[data-set="login-form"] input[name="email"]').type(
      'roy@example.com',
    );
    cy.get('[data-set="login-form"] input[name="password"]').type('1234');
    cy.get('[data-set="login-btn"]').should('be.visible').click();
    cy.getDataTest('nav-favorites').click();
    cy.location('pathname').should('equal', '/favorites');
  });

  it('should navigate to the women sneaker page', () => {
    cy.getDataTest('nav-women').click();
    cy.location('pathname').should('equal', '/women');
  });

  it('should navigate to the kids sneaker page', () => {
    cy.getDataTest('nav-kids').click();
    cy.location('pathname').should('equal', '/kids');
  });
});
