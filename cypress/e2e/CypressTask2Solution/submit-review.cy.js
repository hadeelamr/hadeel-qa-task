/// <reference types="cypress" />

describe('Validate that the user can submit a review on the product page', () => {
    it('should allow the user to submit a review', () => {
        cy.visit('https://magento.softwaretestingboard.com/push-it-messenger-bag.html');
        cy.get("a").contains("Add Your Review").click({ force: true });
        cy.get(".block-content").should('be.visible');

        cy.get('label[for="Rating_5"]').click({ force: true });
        cy.get("#nickname_field", { timeout: 10000 }).type("Hadeel").click({ force: true });
        cy.get("#summary_field", { timeout: 10000 }).type("good").click({ force: true });
        cy.get("#review_field", { timeout: 10000 }).type("good bag").click({ force: true });
        cy.get("button.action.submit.primary", { timeout: 10000 }).click({ force: true });
        cy.contains('You submitted your review for moderation.').should('be.visible');

    });
});