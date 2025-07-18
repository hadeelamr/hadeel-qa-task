import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the website", () => {
  cy.visit("/");
});

When("I click on the Gear menu", () => {
  cy.contains("Gear").trigger("mouseover");
});

When("I select the Watches option", () => {
  cy.contains("Watches").click({ force: true });
});

When("I click on the List view", () => {
cy.get('.mode-list').first().click({ force: true });
});

Then("I add all watches with price greater than 55 to the cart", () => {
  cy.get(".product-item").each(($el) => {
    const priceText = $el.find(".price").text().replace("$", "").trim();
    const price = parseFloat(priceText);

    if (price > 55) {
      const addToCartButton = $el.find('button[title="Add to Cart"]');

      if (addToCartButton.length > 0) {
        cy.wrap(addToCartButton).click({ force: true });
      }
    }
  });
});