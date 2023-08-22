describe('form tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.getDataTest('sneaker-4').click();
    cy.contains(/add to cart/i).click({ force: true });
    cy.get('[data-set="cart-icon"]').should('exist').click();
    cy.get('[data-set="proceed-to-confirm-order"]').should('exist').click();
  });

  it('creating a new order form', () => {
    cy.get('[data-set="create-order-header"]').should('exist');

    cy.get('[data-set="create-order-form"] input[name="name"]').type('Roy');
    cy.get('[data-set="create-order-form"] input[name="phone"]').type(
      '1234567890',
    );
    cy.get('[data-set="create-order-form"] input[name="address"]').type(
      '123 Main St',
      { force: true },
    );
    cy.get('[data-set="create-order-btn"]').should('be.visible').click();
  });
});
