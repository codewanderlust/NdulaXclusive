describe('sneakers spec', () => {
  beforeEach(() => {
    cy.visit('/men');
  });
  it('contains the correct header text', () => {
    cy.getDataTest('featured-header').should(
      'contain.text',
      'Featured Sneakers',
    );
  });

  it('displays the sneaker description when navigating to the details page', () => {
    cy.getDataTest('sneaker-4').click();
    cy.contains(/The radiance lives on in the Nike Air Force 1 '07/i).should(
      'be.visible',
    );
  });

  it('verifies that initial shortened description is present', () => {
    cy.getDataTest('sneaker-4').click();
    cy.contains(
      /This time it's dressed in a mix of materials that give a nod to the OG while playing up what's new/i,
    ).should('not.exist');
  });

  it('expands and collapses the description using "Show More" and "Show Less" buttons', () => {
    cy.getDataTest('sneaker-4').click();
    cy.contains(/Show More/i).click();

    cy.contains(/Show Less/i).should('be.visible');
    cy.contains(
      /This time it's dressed in a mix of materials that give a nod to the OG while playing up what's new/i,
    ).should('be.visible');
  });

  it('contains the correct header text', () => {
    cy.getDataTest('sneaker-4').click();
    cy.getDataTest('similar-products').should(
      'contain.text',
      'Similar sponsored items',
    );
  });

  it('displays the add to cart button and the delete button', () => {
    cy.getDataTest('sneaker-4').click();
    cy.contains(/delete/i).should('not.exist');
    cy.contains(/add to cart/i).click({ force: true });
    cy.contains(/add to cart/i).should('not.exist');
    cy.contains(/delete/i).should('be.visible');
  });

  it('the add button updates the cart count', () => {
    cy.getDataTest('sneaker-4').click();
    cy.contains(/add to cart/i).click({ force: true });
    cy.contains('1').should('be.visible');
    cy.contains(/delete/i).click({ force: true });
    cy.contains(/add to cart/i).should('be.visible');
  });

  it('the cart icon navigates to the cart page', () => {
    cy.getDataTest('sneaker-4').click();
    cy.contains(/add to cart/i).click({ force: true });
    cy.get('[data-set="cart-icon"]').should('exist').click();
    cy.url().should('include', '/cart');
  });

  it('the added item is present in the cart page', () => {
    cy.getDataTest('sneaker-4').click();
    cy.contains(/add to cart/i).click({ force: true });
    cy.get('[data-set="cart-icon"]').should('exist').click();
    cy.url().should('include', '/cart');
    cy.contains(/ Nike Air Force 1 '07/i).should('be.visible');
  });

  it('the proceed to confirm order button navigates to the new order page', () => {
    cy.getDataTest('sneaker-4').click();
    cy.contains(/add to cart/i).click({ force: true });
    cy.get('[data-set="cart-icon"]').should('exist').click();
    cy.get('[data-set="proceed-to-confirm-order"]').should('exist').click();
    cy.url().should('include', '/order/new');
  });
});
