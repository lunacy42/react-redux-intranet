Cypress.Commands.add('loginAdmin', () => {
  Cypress.log({ name: 'login admin user' });

  cy.visit('http://localhost:3000/login');
  // cy.get('[data-testid="input-email"]').type('admin@test.de');
  // cy.get('[data-testid="input-password"]').type('test');
  // cy.get('[data-testid="submit"]').click();
});

Cypress.Commands.add('createEvent', () => {
  cy.get('#root').find('a').contains('Events').click();
  cy.contains('New Event').click();
  cy.get('[data-testid="event-title"]').type('test');
  cy.get('[data-testid="event-text"]').type('test text');
  cy.get('[data-testid="event-date"] > div').type('5/2/2023 07:30 PM');
  cy.get('[data-testid="submit"]').click();
  // msw requests can't be intercepted so far, so I just wait some time
  // see https://github.com/mswjs/msw/issues/374 on this
  cy.wait(1000);
});

Cypress.Commands.add('createAnnouncement', () => {
  cy.get('#root').find('a').contains('Announcements').click();
  cy.contains('New Announcement').click();
  cy.get('[data-testid="announcement-title"]').type('test');
  cy.get('[data-testid="announcement-text"]').type('test text');
  cy.get('[data-testid="submit"]').click();
  cy.wait(1000);
});

Cypress.Commands.add('createUser', () => {
  cy.get('#root').find('a').contains('Users').click();
  cy.contains('New User').click();
  cy.get('[data-testid="user-username"]').type('test');
  cy.get('[data-testid="user-email"]').type('test@test.de');
  cy.get('[data-testid="user-firstname"]').type('test');
  cy.get('[data-testid="user-lastname"]').type('test');
  cy.get('[data-testid="user-department"]').type('test');
  cy.get('[data-testid="user-team"]').type('test');
  cy.get('[data-testid="user-jobtitle"]').type('test');
  cy.get('[data-testid="user-telephone"]').type('test');
  cy.get('[data-testid="user-location"]').type('test');
  cy.get('[data-testid="user-room"]').type('test');
  cy.get('[data-testid="user-role"]').type('user');
  cy.get('[data-testid="submit"]').click();
  cy.wait(1000);
});
