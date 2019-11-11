/**
 * Created by stuart1 on 08/11/2019.
 */
import { Given, When, Then} from 'cucumber';
import weatherForecastPage from '../pages/weatherForecastPage';

Given('I launch the Weather Forecast', () => {
    weatherForecastPage.open()
});

Given('The 3 hourly maximum temperature forecast source data is', (table) => {
    console.log("This could be part of a data setup " + table.raw().toString())
});

Given('The 3 hourly wind speed forecast source data is', (table) => {
    console.log("This could be part of a data setup " + table.raw().toString())
});

When('I enter {string} in the city location', (location) => {
    weatherForecastPage.enterNewLocation(location)
});

When('I select {string} to display/close the three hourly forecast', (day) => {
    weatherForecastPage.selectDay(day)
});

Then('I expect a page entitled {string} to be displayed', (title) => {
    expect(weatherForecastPage.getPageTitle()).to.equal(title)
});

Then('I expect the default/new location of {string} to be displayed', (location) => {
    expect(weatherForecastPage.cityName()).to.equal(location)
});

Then('I expect the day of the week to be displayed', (table) => {
    expect(weatherForecastPage.namesOfDays()).to.equal(table.raw().toString())
});

Then('I expect the day date of the week to be displayed', (table) => {
    expect(weatherForecastPage.datesOfDays()).to.equal(table.raw().toString())
});

Then('I expect the barometric pressure for each day to be displayed', (table) => {
    expect(weatherForecastPage.pressure()).to.equal(table.raw().toString())
});

Then('I expect a {int} day forecast for the default/new/missing location to be displayed', (days) => {
  expect(weatherForecastPage.dailySummary.length).to.equal(days)
});

Then('I expect no forecast for the missing location to be displayed', () => {
    expect(weatherForecastPage.dailySummary.length).to.equal(0)
});

Then('I expect an error message {string} to be displayed', (message) => {
    expect(weatherForecastPage.errorMessageText()).to.equal(message)
});

Then('I expect {int} three hour periods to be visible', (periods) => {
    expect(weatherForecastPage.threeHourPeriodsVisible()).to.equal(periods)
});

Then('I expect these three hour periods will be displayed', (table) => {
    expect(weatherForecastPage.threeHourPeriodsList()).to.equal(table.raw().toString())
});

Then('I expect {string} to display a {string} temperature of {string} degrees', (day, limit, tempValue) => {
    expect(weatherForecastPage.temperature(day, limit)).to.equal(tempValue)
});

Then('I expect {string} the rainfall total of {string} will be displayed', (day, rainfall) => {
    expect(weatherForecastPage.rainfall(day)).to.equal(rainfall)
});

Then('I expect the current/dominant condition of {string} to be displayed in {string} description', (summary, day) => {
   expect(weatherForecastPage.descriptionSummary(day, summary)).to.be.true
});

Then('I expect the current/highest wind speed {string} to be displayed for {string} summary', (speed, day) => {
    expect(weatherForecastPage.windSummary(day)).to.equal(speed)
});

Then('I expect the displayed {string} temperature of each 3 hourly period for {string} to be rounded down', (limit, day, table) => {
    expect(weatherForecastPage.threeHourPeriodsTemp(day, limit)).to.equal(table.raw().toString())
});

Then('I expect the displayed wind {string} of each 3 hourly period for {string} to be rounded down', (speed, day, table) => {
    expect(weatherForecastPage.threeHourPeriodsWind(day, speed)).to.equal(table.raw().toString())
});

