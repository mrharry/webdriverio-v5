Feature: As a Tourist on holiday
  I want to be able to see a 3 hour Period Summary forecast
  So I can plan my daily trips to make the most of the weather

  Background:
    Given I launch the Weather Forecast

  Scenario: Selecting the Summary row forecast for Today will display the remaining three hour periods for today
    When I select "today" to display the three hourly forecast
    Then I expect 4 three hour periods to be visible

  Scenario: Selecting Today's Summary row will reveal the remaining three hour periods for today
    When I select "today" to display the three hourly forecast
    Then I expect these three hour periods will be displayed
      | 1300 | 1600 | 1900 | 2200 |

  Scenario: Selecting a Future Summary row forecast will reveal the available three hour periods for that day
    When I select "tomorrow" to display the three hourly forecast
    Then I expect 8 three hour periods to be visible

  Scenario: Selecting a Future Summary row will reveal the day broken into eight three hour periods
    When I select "tomorrow" to display the three hourly forecast
    Then I expect these three hour periods will be displayed
      | 0100 | 0400 | 0700 | 1000 | 1300 | 1600 | 1900 | 2200 |

  Scenario: Selecting a day currently showing a three hour period forecast will return to the Summary row display
    When I select "today" to display the three hourly forecast
    And I select "today" to close the three hourly forecast
    Then I expect 0 three hour periods to be visible
