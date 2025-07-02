/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('Validate that the user can add the product to compare list', () => {
    it('should allow the user to add product to compare list', () => {

        cy.visit('/customer/account/login/');
        cy.get('#email').type('amrhadeel6@gmail.com', { delay: 30 });
        cy.get('#pass').type('Hadeel@123', { sensitive: true });
        cy.get('#send2').click();

        cy.contains('Welcome', { timeout: 10000 }).should('be.visible');

        cy.visit('/push-it-messenger-bag.html');

        cy.get('.product-info-main', { timeout: 15000 }).should('be.visible');

        cy.get('a.action.tocompare')
            .should('be.visible')
            .and('contain', 'Add to Compare')
            .click({ force: true });

        cy.get('.message-success')
            .should('be.visible')
            .and('contain', 'You added product Push It Messenger Bag');

    });
});