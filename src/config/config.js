exports.PATHFILE = "src/config/EmployeesData.txt"

exports.laboralDays = ["MO","TU","WE","TH","FR"]

exports.weekendDays = ["SA","SU"]

exports.MINHOUR = 0

exports.MAXHOUR = 23

exports.CURRENCY = "USD"

exports.valuesInLaboralDays = {
    specialHours : {
        minHour: 0,
        maxHour: 8,
        value: 25
    },
    normalHours : {
        minHour: 9,
        maxHour: 17,
        value: 15
    },
    extraHours : {
        minHour: 18,
        maxHour: 23,
        value: 20
    },
}

exports.valuesInWeekendDays = {
    specialHours : {
        minHour: 0,
        maxHour: 8,
        value: 30
    },
    normalHours : {
        minHour: 9,
        maxHour: 17,
        value: 20
    },
    extraHours : {
        minHour: 18,
        maxHour: 23,
        value: 25
    },
}
