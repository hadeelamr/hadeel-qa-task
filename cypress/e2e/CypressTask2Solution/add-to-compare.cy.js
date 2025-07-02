/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('Validate that the user can add the product to compare list', () => {
    it('should allow the user to add product to compare list', () => {
        cy.visit('/customer/account/login/');
        cy.get('#email').type('amrhadeel6@gmail.com', { delay: 30 });
        cy.get('#pass').type('Hadeel@123', { log: false });
        cy.get('#send2').click();

        cy.contains('Welcome', { timeout: 10000 }).should('be.visible');

        cy.get('a.product-item-link').contains('Push It Messenger Bag').click();

        cy.get('.page-title span').should('contain', 'Push It Messenger Bag');

        cy.get('a.action.tocompare')
            .should('be.visible')
            .click({ force: true });

        cy.get('.message-success div', { timeout: 15000 })
            .should('contain.text', 'You added product Push It Messenger Bag to the');
    });
});
