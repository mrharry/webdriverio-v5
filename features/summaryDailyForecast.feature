Feature: As a Tourist on holiday
  I want to see a summary of my Daily forecast
  So I can plan my daily trips

  Background:
    Given I launch the Weather Forecast

  Scenario Outline: The current weather condition summary icon should be displayed for Today's Daily Summary
    When I enter "<cityname>" in the city location
    Then I expect the current condition of "<the summary weather>" to be displayed in "Todays" description
    Examples:
      | cityname  | the summary weather |
      | Glasgow   | rain                |
      | Edinburgh | cloud               |

  Scenario Outline: The most dominant weather condition summary icon should be displayed for Future Daily Summaries
    When I enter "<cityname>" in the city location
    Then I expect the dominant condition of "<the summary weather>" to be displayed in "Tomorrows" description
    Examples:
      | cityname  | the summary weather |
      | Glasgow   | rain                |
      | Edinburgh | rain                |

  Scenario Outline: The current wind speed should be displayed for Today's Daily Summary
    When I enter "<cityname>" in the city location
    Then I expect the current wind speed "<speed>" to be displayed for "todays" summary
    Examples:
      | cityname  | speed |
      | Glasgow   | 3kph  |
      | Edinburgh | 1kph  |

  Scenario Outline: The highest wind speed should be displayed for Future Daily Summaries
    When I enter "<cityname>" in the city location
    Then I expect the highest wind speed "<speed>" to be displayed for "tomorrows" summary
    Examples:
      | cityname  | speed |
      | Perth     | 4kph  |
      | Edinburgh | 5kph  |

  Scenario: The aggregate rainfall for the day will be shown on the Daily Summary
    When I enter "Perth" in the city location
    Then I expect for "Tomorrow" the rainfall total of "7mm" will be displayed

  Scenario Outline: The Daily Summary will display the Maximum and Minimum temperatures
    When I enter "<cityname>" in the city location
    Then I expect "Today" to display a "<boundary>" temperature of "<temp>" degrees
    Examples:
      | cityname | boundary | temp  |
      | Perth    | maximum  |  14°  |
      | Perth    | minimum  |  5°   |
