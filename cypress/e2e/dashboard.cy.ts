describe('Dashboard', () => {
  beforeEach(() => {
    cy.loginAdmin();
  });
  it('shows three fields with titles', () => {
    cy.contains('Announcements');
    cy.contains('New Staff Members');
    cy.contains('Upcoming Events');
    cy.intercept('GET', '/api/users', { fixture: 'example.json' });
  });
});
