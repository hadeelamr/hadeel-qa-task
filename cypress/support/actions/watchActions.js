import GearWatchesPage from "../pageObjects/gearWatchesPage";

class GearWatchesActions {
  constructor() {
    this.page = new GearWatchesPage();
  }

  clickGearMenu() {
    this.page.getGearMenu().click();
  }

  clickWatchesOption() {
    this.page.getWatchesOption().click();
  }

  switchToListView() {
    this.page.getListViewButton().click();
  }

  addWatchesAbove55ToCart() {
    cy.get('.product-item').each(($el) => {
      cy.wrap($el).find('.price').then(($price) => {
        const priceText = $price.text().replace('$', '').trim();
        const priceValue = parseFloat(priceText);

        if (priceValue > 55) {
          cy.wrap($el).find('button[title="Add to Cart"]').click();
        }
      });
    });
  }
}

export default GearWatchesActions;
