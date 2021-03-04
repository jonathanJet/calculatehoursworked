
const { MINHOUR, MAXHOUR, laboralDays, weekendDays, valuesInLaboralDays, valuesInWeekendDays } = require('../config/config')

exports.between = (x, min, max) => {
    return x >= min && x <= max;
}

exports.validDay = (day) => {
    const days = [...laboralDays,...weekendDays]
    if (days.includes(day))
        return true
    return false
}

exports.getValueOfSchedule = (valuesPerSchedule,hour) => {

    if(this.between(hour,valuesPerSchedule.specialHours.minHour,valuesPerSchedule.specialHours.maxHour))
        return valuesPerSchedule.specialHours.value

    if(this.between(hour,valuesPerSchedule.normalHours.minHour,valuesPerSchedule.normalHours.maxHour))
        return valuesPerSchedule.normalHours.value

    if(this.between(hour,valuesPerSchedule.extraHours.minHour,valuesPerSchedule.extraHours.maxHour))
        return valuesPerSchedule.extraHours.value

    return 0
}

exports.valuePerHour = (day,hour) => {

    if (!this.between(hour,MINHOUR,MAXHOUR))
        return 0
    if(!this.validDay(day))
        return 0

    const valuesPerSchedule = (weekendDays.includes(day)) ? valuesInWeekendDays : valuesInLaboralDays

    return this.getValueOfSchedule(valuesPerSchedule,hour)

}

exports.valuePerDay = (day,initHour,endHour) => {
    let acum = 0
    for (let i = initHour; i<endHour; i++){
        acum += this.valuePerHour(day,i)
    }
    return acum
}

exports.getTotalPay = (workedSchedules) => {
    return workedSchedules.reduce((currentPay,schedule)=>{
        return currentPay + this.valuePerDay(schedule.day,schedule.fromHour,schedule.toHour)
    },0)
}










