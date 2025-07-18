import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I go to the What's New page", () => {
  cy.contains("What's New").click();
});

Then("I print all categories in the New In Women's section", () => {
  cy.contains("New in women's")
    .parent()           
    .next("ul")         
    .find("li")         
    .each(($el, index) => {
      cy.wrap($el)
        .invoke("text")
        .then((text) => {
          cy.log(`Category ${index + 1}: ${text.trim()}`);
        });
    });
});