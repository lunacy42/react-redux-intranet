describe('Login', () => {
  it('shows inputs and button', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="input-email"]').should('exist');
    cy.get('[data-testid="input-password"]').should('exist');
    cy.get('[data-testid="login-submit"]').should('exist');
  });

  it('should show error message for email input', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="error-email"]').should('not.exist');
    cy.get('[data-testid="error-password"]').should('not.exist');
    cy.get('[data-testid="login-submit"]').click();
    cy.get('[data-testid="error-email"]').should('exist');
    cy.get('[data-testid="error-password"]').should('exist');
  });

  it('should not except wrong validated email address', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="input-email"]').type('test');
    cy.get('[data-testid="input-password"]').type('test');
    cy.get('[data-testid="login-submit"]').click();
    cy.get('[data-testid="input-email"]').should('exist');
  });

  it('redirects after login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="input-email"]').type('test@test.de');
    cy.get('[data-testid="input-password"]').type('test');
    cy.get('[data-testid="login-submit"]').click();
    cy.get('[data-testid="input-email"]').should('not.exist');
  });
});
