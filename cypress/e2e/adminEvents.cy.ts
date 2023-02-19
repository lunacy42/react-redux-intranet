import { createEvent } from '../../src/features/events/eventsSlice';

describe('Events Administration', () => {
  beforeEach(() => {
    cy.loginAdmin();
  });
  it('should be able to create event', () => {
    cy.get('#root').find('a').contains('Events').click();
    cy.contains('New Event').click();
    cy.get('[data-testid="event-title"]').type('test');
    cy.get('[data-testid="event-text"]').type('test text');
    cy.get('[data-testid="event-date"] > div').type('5/2/2023 07:30 PM');
    cy.get('[data-testid="submit"]').click();
    // msw requests can't be intercepted so far, so I just wait some time
    // see https://github.com/mswjs/msw/issues/374 on this
    cy.wait(1000);
    cy.get('[data-testid="alert"]').should('exist');
    cy.contains('test');
    cy.contains('test text');
  });

  it('should be able to update event', () => {
    cy.createEvent();
    cy.get('#root').find('a').contains('Events').click();
    // find edit button of created event
    cy.get('table > tbody')
      .children()
      .first()
      .children()
      .last()
      .children()
      .children()
      .first()
      .click();
    cy.get('[data-testid="event-title"]').type(' edited');
    cy.get('[data-testid="event-text"]').type(' edited');
    cy.get('[data-testid="submit"]').click();
    cy.wait(1000);
    cy.get('[data-testid="alert"]').should('exist');
    cy.contains('test edited');
    cy.contains('test text edited');
  });

  it('should be able to delete event', () => {
    cy.createEvent();
    cy.get('#root').find('a').contains('Events').click();
    // find delete button of created event
    cy.get('table > tbody')
      .children()
      .first()
      .children()
      .last()
      .children()
      .children()
      .last()
      .click();
    cy.wait(1000);
    cy.get('[data-testid="alert"]').should('exist');
    cy.contains('test').should('not.exist');
    cy.contains('test text').should('not.exist');
  });
});
