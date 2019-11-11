Feature: As a Tourist on holiday
  I want to see the temperature and wind speed values for 5 days rounded down to a whole number
  So I can plan my daily trips

  Background:
    Given I launch the Weather Forecast

  Scenario: Maximum Temperature values are rounded down
    Given The 3 hourly maximum temperature forecast source data is
      | 16.22 | 16.03 | 13.76 | 7.99 |
    When I select "today" to display the three hourly forecast
    Then I expect the displayed "maximum" temperature of each 3 hourly period for "today" to be rounded down
      | 16°   | 16°    | 13°    | 7°    |

  Scenario: Wind Speed values are rounded down
    Given The 3 hourly wind speed forecast source data is
      | 3.21  | 3.42   | 1.76   | 2.07  |
    When I select "today" to display the three hourly forecast
    Then I expect the displayed wind "speed" of each 3 hourly period for "today" to be rounded down
      | 3kph  | 3kph   | 1kph   | 2kph  |
