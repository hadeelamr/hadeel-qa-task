/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('Validate that the user can add product to wishlist and taking full page screenshot', () => {
    it('should allow the user to add product to wishlist list', () => {

        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');

        cy.get('#email').type('amrhadeel6@gmail.com');
        cy.get('#pass').type('Hadeel@123', { log: false });
        cy.get('#send2').click();

        cy.wait(3000);
        cy.get('span.logged-in', { timeout: 15000 }).should('contain.text', 'Welcome');

        cy.visit('https://magento.softwaretestingboard.com/push-it-messenger-bag.html');

        cy.get('a[data-action="add-to-wishlist"]')
            .should('be.visible')
            .click({ force: true });

        cy.contains('Push It Messenger Bag has been added to your Wish List', { timeout: 15000 })
            .should('be.visible');

        cy.screenshot('wishlist-full-page', { capture: 'fullPage' });
    });
});
