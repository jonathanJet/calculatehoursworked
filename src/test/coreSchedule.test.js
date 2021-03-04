
const { valuePerHour, validDay, between, getValueOfSchedule, valuePerDay, getTotalPay } = require("../core/coreSchedule");
const { valuesInLaboralDays, valuesInWeekendDays } = require("../config/config")

describe('Evaluate the schedule', () => {

    it('if hour is more than 23 in any day return 0', () => {
        const hour = 24
        const day = "MO"
        const expected = 0
        const result = valuePerHour(hour,day)
        expect(result).toBe(expected);
    });

    it('if hour is less than 0 in any day return 0', () => {
        const hour = -1
        const day = "MO"
        const expected = 0
        const result = valuePerHour(hour,day)
        expect(result).toBe(expected);
    });

    it('if the abbreviation of the day is valid', () => {
        const day = "FR"
        const result = validDay(day)
        expect(result).toBeTruthy();
    });

    it('if the day is invalid return 0', () => {
        const hour = 18
        const day = "XS"
        const expected = 0
        const result = valuePerHour(hour,day)
        expect(result).toBe(expected);
    });

    it('if 10 is between 0 and 23 return true', () => {
        const val = 10
        const init = 0
        const end = 23
        const result = between(val,init,end) 
        expect(result).toBeTruthy();
    });

    it('if 24 is not between 0 and 23 return false', () => {
        const val = 24
        const init = 0
        const end = 23
        const result = between(val,init,end) 
        expect(result).toBeFalsy();
    });

    it('if the hour is 12 in a laboral day the value is 15', () => {
        const hour = 12
        const result = getValueOfSchedule(valuesInLaboralDays,hour) 
        expect(result).toBe(15);
    });

    it('if the hour is 22 in a laboral day the value is 20', () => {
        const hour = 22
        const result = getValueOfSchedule(valuesInLaboralDays,hour) 
        expect(result).toBe(20);
    });

    it('if the hour is 5 in a laboral day the value is 25', () => {
        const hour = 5
        const result = getValueOfSchedule(valuesInLaboralDays,hour) 
        expect(result).toBe(25);
    });

    it('if the hour is 22 in a weekend day the value is 25', () => {
        const hour = 22
        const result = getValueOfSchedule(valuesInWeekendDays,hour) 
        expect(result).toBe(25);
    });

    it('if the hour is 12 in a day whit abbrevation "SU" the value is 20', () => {
        const hour = 12
        const day = "SU"
        const result = valuePerHour(day,hour) 
        expect(result).toBe(20);
    });

    it('if the worked hours in a day whit abbrevation "MO" is of 10 to 12 the value should be 30', () => {
        const day = "MO"
        const initHour = 10
        const endHour = 12
        const result = valuePerDay(day,initHour,endHour) 
        expect(result).toBe(30);
    });

    it('if the worked hours in a day whit abbrevation "TH" is of 12 to 14 the value should be 30', () => {
        const day = "TH"
        const initHour = 12
        const endHour = 14
        const result = valuePerDay(day,initHour,endHour) 
        expect(result).toBe(30);
    });

    it('if the worked hours in a day whit abbrevation "SU" is of 20 to 21 the value should be 25', () => {
        const day = "SU"
        const initHour = 20
        const endHour = 21
        const result = valuePerDay(day,initHour,endHour) 
        expect(result).toBe(25);
    });

    it('if the worked hours are: ["MO" from 10 to 12] ["TH" from 12 to 14] and ["SU" from 20 to 21] the value is 85', () => {
        const workedSchedules = [
            {
                day: "MO",
                fromHour: 10,
                toHour: 12
            },
            {
                day: "TH",
                fromHour: 12,
                toHour: 14
            },
            {
                day: "SU",
                fromHour: 20,
                toHour: 21
            }
        ]
        const result = getTotalPay(workedSchedules) 
        expect(result).toBe(85);
    });

    it('if the worked hours are: ["MO" from 10 to 12] ["TU" from 10 to 12] ["TH" from 1 to 3] ["SA" from 14 to 18] and ["SU" from 20 to 21] the value is 215', () => {
        const workedSchedules = [
            {
                day: "MO",
                fromHour: 10,
                toHour: 12
            },
            {
                day: "TU",
                fromHour: 10,
                toHour: 12
            },
            {
                day: "TH",
                fromHour: 1,
                toHour: 3
            },
            {
                day: "SA",
                fromHour: 14,
                toHour: 18
            },
            {
                day: "SU",
                fromHour: 20,
                toHour: 21
            }
        ]
        const result = getTotalPay(workedSchedules) 
        expect(result).toBe(215);
    });

});