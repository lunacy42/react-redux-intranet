Cypress.Commands.add('loginAdmin', () => {
  Cypress.log({ name: 'login admin user' });

  cy.visit('http://localhost:3000/login');
  cy.get('[data-testid="input-email"]').type('admin@test.de');
  cy.get('[data-testid="input-password"]').type('test');
  cy.get('[data-testid="submit"]').click();
});
