Feature: As a Tourist on holiday
  I want to see 5 days weather conditions for my location
  So I can plan my daily trips

  Background:
    Given I launch the Weather Forecast

  Scenario: When I enter a new city location, the new location name will be displayed
    When I enter "Edinburgh" in the city location
    Then I expect the new location of "Edinburgh" to be displayed

  Scenario: When I enter a new location a five day forecast will be displayed
    When I enter "Edinburgh" in the city location
    Then I expect a 5 day forecast for the new location to be displayed

  Scenario: When I enter a city with no data an error message will be displayed
    When I enter "Paris" in the city location
    Then I expect an error message "Error retrieving the forecast" to be displayed
    And I expect no forecast for the missing location to be displayed

