import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import GearWatchesActions from "../../support/actions/gearWatchesActions";

const actions = new GearWatchesActions();

Given("I open the website", () => {
  cy.visit("https://magento.softwaretestingboard.com/");
});

When("I click on the Gear menu", () => {
  actions.clickGearMenu();
});

When("I select the Watches option", () => {
  actions.clickWatchesOption();
});

When("I click on the List view", () => {
  actions.switchToListView();
});

Then("I add all watches with price greater than 55 to the cart", () => {
  actions.addWatchesAbove55ToCart();
});
