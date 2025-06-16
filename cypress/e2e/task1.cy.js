describe('Selectors Task', () => {
    it('Test all red box elements', () => {
        cy.visit('https://demo.productionready.io/#/register');
        cy.get('a.navbar-brand.ng-binding');
        cy.get('h1.text-xs-center.ng-binding');
        cy.contains('a', 'Have an account?');
        cy.get('input[placeholder="Username"]').type('Hadeel');
        cy.get('input[placeholder="Email"]').type('hadeel@gmail.com');
        cy.get('input[placeholder="Password"]').type('hadeel123@123');
        cy.contains('button', 'Sign up');
        cy.contains('a', 'Sign up');
        cy.contains('a', 'Home');
        cy.get('a.logo-font.ng-binding');
        cy.get('span.attribution.ng-binding');














    });
});
