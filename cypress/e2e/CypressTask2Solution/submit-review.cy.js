/// <reference types="cypress" />
Cypress.on('uncaught:exception', () => false);

describe('Validate that the user can submit a review on the product page', () => {
    it('should allow the user to submit a review', () => {
        cy.visit('/push-it-messenger-bag.html');

        cy.get("a").contains("Add Your Review").scrollIntoView().click({ force: true });

        cy.get(".block-content", { timeout: 10000 }).should('be.visible');

        cy.get('label[for="Rating_5"]', { timeout: 10000 }).click({ force: true });

        cy.get("#nickname_field", { timeout: 10000 }).should('be.visible').type("Hadeel");
        cy.get("#summary_field", { timeout: 10000 }).should('be.visible').type("good");
        cy.get("#review_field", { timeout: 10000 }).should('be.visible').type("good bag");

        cy.get("button.action.submit.primary", { timeout: 10000 }).click({ force: true });
        cy.contains('You submitted your review for moderation.').should('be.visible');


    });
});
