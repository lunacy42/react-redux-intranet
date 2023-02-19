describe('Dashboard', () => {
  beforeEach(() => {
    cy.loginAdmin();
  });
  it('shows three fields with titles', () => {
    cy.contains('Announcements');
    cy.contains('New Staff Members');
    cy.contains('Upcoming Events');
  });
  it('navigates through pages', () => {
    cy.contains('Staff').click();
    cy.get('h2').contains('Staff');
    cy.contains('My Page').click();
    cy.get('#root').find('img').should('have.length', 1);
    cy.contains('Announcements').click();
    cy.contains('Administrate Announcements');
    cy.contains('Users').click();
    cy.contains('Administrate Users');
    cy.contains('Events').click();
    cy.contains('Administrate Events');
  });
});
