/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Validate adding product to wishlist and taking full page screenshot', () => {
    it('should login, add product to wishlist, and take screenshot', () => {

        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');

        cy.get('#email').type('amrhadeel6@gmail.com');
        cy.get('#pass').type('Hadeel@123');
        cy.get('#send2').click();

        cy.get('.header .greet.welcome').should('contain', 'Welcome');

        cy.visit('/push-it-messenger-bag.html');

        cy.get('a[data-action="add-to-wishlist"]').click();

        cy.contains('Push It Messenger Bag has been added to your Wish List', { timeout: 10000 })
            .should('be.visible');

        cy.screenshot('wishlist-full-page', { capture: 'fullPage' });
    });
});
