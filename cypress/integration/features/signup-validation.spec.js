describe('Signup form validation', () => {
  it('displays errors when the form is invalid', () => {
    cy.visit('/signup.html');

    cy.get('form')
      .get('input[type="submit"]')
      .click();

    cy.get('.main_error_message').should('have.text', 'Please correct the errors below');

    cy.get('#username').should('have.class', 'error');
    cy.get('.username_label .error_message').should('have.text', 'enter a username')

    cy.get('#password').should('have.class', 'error');
    cy.get('.password_label .error_message').should('have.text', 'must be at least 10 characters')
  });

  it('displays no errors when the form is valid', () => {
    cy.visit('/signup.html');

    cy.get('#username').type('methodman');
    cy.get('#password').type('oh-so-secure');

    cy.get('form')
      .get('input[type="submit"]')
      .click();

    cy.get('.error').should('not.exist');
    cy.get('.error_message').should('not.exist')
  });
});
