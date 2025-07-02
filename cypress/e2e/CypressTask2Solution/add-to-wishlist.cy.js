/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('Validate adding product to wishlist and taking full page screenshot', () => {
    it('should login, add product to wishlist, and take screenshot', () => {

        cy.visit('/customer/account/login/');

        cy.get('#email').type('amrhadeel6@gmail.com');
        cy.get('#pass').type('Hadeel@123', { log: false });
        cy.get('#send2').click();

        cy.contains('Welcome', { timeout: 10000 }).should('be.visible');

        cy.get('a.product-item-link').contains('Push It Messenger Bag').click();

        cy.get('a[data-action="add-to-wishlist"]')
            .should('be.visible')
            .click({ force: true });

        cy.get('.message-success ', { timeout: 10000 })
            .should('contain', 'Push It Messenger Bag has been added to your Wish List');

        cy.screenshot('wishlist-full-page', { capture: 'fullPage' });
    });
});
