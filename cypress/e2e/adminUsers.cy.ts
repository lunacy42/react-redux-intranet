import { createEvent } from '../../src/features/events/eventsSlice';

describe('Users Administration', () => {
  beforeEach(() => {
    cy.loginAdmin();
  });
  it('should be able to create user', () => {
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
    // msw requests can't be intercepted so far, so I just wait some time
    // see https://github.com/mswjs/msw/issues/374 on this
    cy.wait(1000);
    cy.get('[data-testid="alert"]').should('exist');
    cy.contains('test');
    cy.contains('test@test.de');
  });

  it('should be able to update user', () => {
    cy.createUser();
    cy.get('#root').find('a').contains('Users').click();
    // find edit button of created event
    cy.get('table > tbody')
      .children()
      .last()
      .children()
      .last()
      .children()
      .children()
      .first()
      .click();
    cy.get('[data-testid="user-username"]').type(' edited');
    cy.get('[data-testid="user-email"]').type(' edited');
    cy.get('[data-testid="user-firstname"]').type(' edited');
    cy.get('[data-testid="user-lastname"]').type(' edited');
    cy.get('[data-testid="user-department"]').type(' edited');
    cy.get('[data-testid="user-team"]').type(' edited');
    cy.get('[data-testid="user-jobtitle"]').type(' edited');
    cy.get('[data-testid="user-telephone"]').type(' edited');
    cy.get('[data-testid="user-location"]').type(' edited');
    cy.get('[data-testid="user-room"]').type(' edited');
    cy.get('[data-testid="submit"]').click();
    cy.wait(1000);
    cy.get('[data-testid="alert"]').should('exist');
    cy.get('#root').find('a').contains('Users').click();
    cy.contains('test edited');
    cy.contains('test@test.de edited');
  });

  it('should be able to delete user', () => {
    cy.createUser();
    cy.get('#root').find('a').contains('Users').click();
    // find delete button of created event
    cy.get('table > tbody')
      .children()
      .last()
      .children()
      .last()
      .children()
      .children()
      .last()
      .click();
    cy.wait(1000);
    cy.get('[data-testid="alert"]').should('exist');
    cy.get('#root').find('a').contains('Users').click();
    cy.contains('test').should('not.exist');
    cy.contains('test@test.de').should('not.exist');
  });
});
