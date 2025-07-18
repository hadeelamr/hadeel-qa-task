Feature: Add watches priced above 55 to the cart

  Scenario: Add all watches with price > $55
    Given I open the website
    When I click on the Gear menu
    And I select the Watches option
    And I click on the List view
    Then I add all watches with price greater than 55 to the cart
