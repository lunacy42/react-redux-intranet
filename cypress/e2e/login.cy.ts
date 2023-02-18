describe('Login', () => {
  it('shows inputs and button', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="input-email"]').should('exist');
    cy.get('[data-testid="input-password"]').should('exist');
    cy.get('[data-testid="submit"]').should('exist');
  });

  it('should show error message for email input', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="submit"]').click();
    cy.contains('This field is required');
  });

  it('should not except wrong validated email address', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="input-email"]').type('test');
    cy.get('[data-testid="input-password"]').type('test');
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="input-email"]').should('exist');
  });

  it('redirects after login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid="input-email"]').type('test@test.de');
    cy.get('[data-testid="input-password"]').type('test');
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="input-email"]').should('not.exist');
  });
});
