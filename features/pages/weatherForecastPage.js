/**
 * Created by stuart1 on 08/11/2019.
 */
import Page from './page';

class WeatherForecastPage extends Page {

    get city() { return $('#city') }
    get today() { return $('[data-test="day-1"]') }
    get tomorrow() { return $('[data-test="day-2"]') }
    get errorMessage() { return $('[data-test="error"]')}

    get dailySummary() { return $$('.summary') }
    get dayNames() { return $$('[data-test^="day-"]') }
    get dayDates() { return $$('[data-test^="date-"]') }
    get threeHourPeriods() { return $$('[data-test^="hour"]') }

    open() {
        super.open('/')
    }

    enterNewLocation (location) {
        this.city.clearValue();
        this.city.setValue(location);
        super.keys("Enter");
    }

    namesOfDays () {
        let list = '';
        var i;
        for (i = 0; i < this.dayNames.length; i++) {
            if (this.dayNames[i].isDisplayed()) {
                list = list + this.dayNames[i].getText() + ','
            }
        }

        return list.slice(0, -1);  // return the comma separated list minus the last comma
    }

    datesOfDays () {
        let list = '';
        var i;
        for (i = 0; i < this.dayDates.length; i++) {
            if (this.dayDates[i].isDisplayed()) {
                list = list + this.dayDates[i].getText() + ','
            }
        }

        return list.slice(0, -1);  // return the comma separated list minus the last comma
    }

    descriptionDailySummary (day, summaryCondition) {
        let dayIndex = this.dayIndex(day);
        let sel = '[data-test=' + '"' + "description" + "-" + dayIndex + '"] > path.' + summaryCondition;

        return $(sel).isDisplayed()
    }

    temperatureDailySummary (day, limit) {
        let dayIndex = this.dayIndex(day);
        let sel = '[data-test=' + '"' + limit + "-" + dayIndex + '"]';

        return $(sel).getText();
    }

    windSpeedDailySummary (day) {
        let dayIndex = this.dayIndex(day);
        let sel = '[data-test=' + '"' + "speed" + "-" + dayIndex + '"]';

        return $(sel).getText()
    }

    pressureDailySummary () {
        let list = '';
        var i = 1;
        for (; i <= 5; i++) {
            let sel = '[data-test=' + '"' + "pressure" + "-" + i + '"]';
            list = list + $(sel).getText() + ','
        }

        return list.slice(0, -1);  // return the comma separated list minus the last comma
    }

    selectDay( day) {
        switch (day) {
            case 'today':
                this.today.click();
                break;
            case 'tomorrow':
                this.tomorrow.click();
                break;
        }
    }

    threeHourPeriodsVisible () {
        let count = 0;
        var i;
        for (i = 0; i < this.threeHourPeriods.length; i++) {
            if (this.threeHourPeriods[i].isDisplayed()) {
                count = count + 1
            }
        }

        return count
    }

    threeHourPeriodsList (day) {
        let dayIndex = this.dayIndex(day);
        let threeHourPeriods = $$('[data-test^="hour-' + dayIndex + '"]');
        let list = '';
        var i = 1;
        for (; i <= threeHourPeriods.length; i++) {
            let sel = '[data-test=' + '"' + "hour-" + dayIndex + "-" + i + '"]';
            list = list + $(sel).getText() + ','
        }

        return list.slice(0, -1);  // return the comma separated list minus the last comma
    }

    threeHourPeriodsTemp (day, limit) {
        let dayIndex = this.dayIndex(day);
        let threeHourPeriods = $$('[data-test^=' + '"' + limit + "-" + dayIndex + "-" + '"]');
        let list = '';
        var i = 1;
        for (; i <= threeHourPeriods.length; i++) {
            let sel = '[data-test=' + '"' + limit + "-" + dayIndex + "-" + i + '"]';
            list = list + $(sel).getText() + ','
        }

        return list.slice(0, -1);  // return the comma separated list minus the last comma
    }

    threeHourPeriodsWind (day, speed) {
        let dayIndex = this.dayIndex(day);
        let threeHourPeriods = $$('[data-test^=' + '"' + speed + "-" + dayIndex + "-" + '"]');
        let list = '';
        var i = 1;
        for (; i <= threeHourPeriods.length; i++) {
            let sel = '[data-test=' + '"' + speed + "-" + dayIndex + "-" + i + '"]';
            list = list + $(sel).getText() + ','
        }

        return list.slice(0, -1);  // return the comma separated list minus the last comma
    }

    rainfallDailySummary (day) {
        let dayIndex = this.dayIndex(day);
        let sel = '[data-test=' + '"' + "rainfall" + "-" + dayIndex + '"]';

        return $(sel).getText()
    }

    cityName () {
        return this.city.getValue()
    }

    getPageTitle () {
        return super.pageTitle()
    }

    errorMessageText () {
        return this.errorMessage.getText()
    }

    dayIndex (day) {
        let dayIndex = 0;
        switch (day.toLowerCase()) {
            case 'today':
            case 'todays':
                dayIndex = 1;
                break;
            case 'tomorrow':
            case 'tomorrows':
                dayIndex = 2;
        }

        return dayIndex
    }
}

export default new WeatherForecastPage()
