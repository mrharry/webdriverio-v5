Feature: As a Tourist on holiday
  I want to see 5 days weather conditions for my location
  So I can plan my daily trips

  Background:
    Given I launch the Weather Forecast

  Scenario: When I launch the Weather Forecast, the Weather Forecast Page Title will be displayed
    Then I expect a page entitled "5 Weather Forecast" to be displayed

  Scenario: When I first launch the Weather Forecast the city location will be "Glasgow"
    Then I expect the default location of "Glasgow" to be displayed

  Scenario: When I first launch the Weather Forecast a five day forecast is displayed
    Then I expect a 5 day forecast for the default location to be displayed

  Scenario: When I first launch the Weather Forecast, a day literal is displayed starting with the current day
    Then I expect the day of the week to be displayed
      | Tue | Wed | Thu | Fri | Sat |

  Scenario: When I first launch the Weather Forecast, a day date is displayed starting with the current day
    Then I expect the day date of the week to be displayed
      | 20 | 21 | 22 | 23 | 24 |

  Scenario: When I first launch the Weather Forecast, a barometric pressure is displayed starting with the current day
    Then I expect the barometric pressure for each day to be displayed
      | 1015mb |1013mb | 1008mb | 1008mb | 1000mb |
