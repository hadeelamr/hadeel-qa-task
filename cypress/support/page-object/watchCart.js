class GearWatchesPage {
  gearMenu = 'a[href*="gear"]';
  watchesOption = 'a[href*="watches"]';
  listViewButton = '.mode-list';
  watchItems = '.product-item';
  watchPrice = '.price';
  addToCartButton = 'button[title="Add to Cart"]';

  getGearMenu() {
    return cy.get(this.gearMenu);
  }

  getWatchesOption() {
    return cy.get(this.watchesOption);
  }

  getListViewButton() {
    return cy.get(this.listViewButton);
  }

  getWatchItems() {
    return cy.get(this.watchItems);
  }
}

export default GearWatchesPage;
