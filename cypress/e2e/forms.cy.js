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

describe('sign up form tests', () => {
  beforeEach(() => {
    cy.visit('/users');
  });

  it('creating a new user', () => {
    cy.get('[data-set="signup-form"]').should('exist');
    cy.get('[data-set="signup-form"] input[name="fullName"]').type('Natalie');
    cy.get('[data-set="signup-form"] input[name="email"]').type(
      'natalie@example.com',
    );
    cy.get('[data-set="signup-form"] input[name="password"]').type('12345678');
    cy.get('[data-set="signup-form"] input[name="passwordConfirm"]').type(
      '12345678',
    );
    cy.get('[data-set="signup-btn"]').should('be.visible').click();
    cy.contains(/Signing up.../i).should('exist');
  });

  it('displays error if the emails is invalid', () => {
    cy.get('[data-set="signup-form"]').should('exist');
    cy.get('[data-set="signup-form"] input[name="fullName"]').type('Natalie');
    cy.get('[data-set="signup-form"] input[name="email"]').type(
      'natalie@example',
    );
    cy.get('[data-set="signup-form"] input[name="password"]').type('12345678');
    cy.get('[data-set="signup-form"] input[name="passwordConfirm"]').type(
      '12345678',
    );
    cy.get('[data-set="signup-btn"]').should('be.visible').click();
    cy.contains(/Please enter a valid email address/i).should('exist');
  });

  it('displays error if the passwords do not match', () => {
    cy.get('[data-set="signup-form"]').should('exist');
    cy.get('[data-set="signup-form"] input[name="fullName"]').type('Natalie');
    cy.get('[data-set="signup-form"] input[name="email"]').type(
      'natalie@example.com',
    );
    cy.get('[data-set="signup-form"] input[name="password"]').type('12345678');
    cy.get('[data-set="signup-form"] input[name="passwordConfirm"]').type(
      '1234567',
    );
    cy.get('[data-set="signup-btn"]').should('be.visible').click();
    cy.contains(/Passwords need to match/i).should('exist');
  });

  it('displays error if the passwords are too short', () => {
    cy.get('[data-set="signup-form"]').should('exist');
    cy.get('[data-set="signup-form"] input[name="fullName"]').type('Natalie');
    cy.get('[data-set="signup-form"] input[name="email"]').type(
      'natalie@example.com',
    );
    cy.get('[data-set="signup-form"] input[name="password"]').type('1234567');
    cy.get('[data-set="signup-form"] input[name="passwordConfirm"]').type(
      '1234567',
    );
    cy.get('[data-set="signup-btn"]').should('be.visible').click();
    cy.contains(/Password needs a minimum of 8 characters/i).should('exist');
  });

  it('displays an error if the fields are empty', () => {
    cy.get('[data-set="signup-form"]').should('exist');
    cy.get('[data-set="signup-btn"]').should('be.visible').click();
    cy.contains(/This field is required/i).should('exist');
  });
});

describe('login form tests', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('logs in a user', () => {
    cy.get('[data-set="login-form"]').should('exist');
    cy.get('[data-set="login-form"] input[name="email"]').type(
      'roy@example.com',
    );
    cy.get('[data-set="login-form"] input[name="password"]').type('1234');
    cy.get('[data-set="login-btn"]').should('be.visible').click();
    cy.url().should('include', '/men');
  });
});
