const fs = require('fs')
const { CURRENCY } = require('../config/config')
const { getTotalPay } = require('./coreSchedule')

exports.evaluateFile = (pathFile) => {

    fs.readFile(pathFile, 'utf8', (err,data) => {

        if (err) {
          return console.log(err);
        }

        // split line by line the file
        let scheduleStringInputArrays = data.split(/\r?\n/);

        // evaluate each line
        for (const key in scheduleStringInputArrays){
            //get the horary into a Array
            let schedules = this.getSchedulesFromStringInput(scheduleStringInputArrays[key])

            //show the OUTPUT
            console.log(`the amount to pay ${this.getName(scheduleStringInputArrays[key])} is: ${getTotalPay(schedules)} ${CURRENCY}`);
        }

      });
}

exports.getName = (stringInput) => {
    return stringInput.split("=")[0]
}

exports.getSchedulesFromStringInput = (stringInput) => {
    let schedulesResult = []
    // get the horary string
    const schedulesString = stringInput.split("=")[1]
    // separate the horarys 
    const schedulesArrayStrings = schedulesString.split(",")
    // evaluate the horarys
    schedulesArrayStrings.map( (schedulesArrayString) => {
        const day = schedulesArrayString.slice(0,2);
        const hoursString = schedulesArrayString.slice(2);
        const hoursStringSplit = hoursString.split("-")
        const hourStringInit = hoursStringSplit[0]
        const hourStringEnd = hoursStringSplit[1]
        schedulesResult.push({
            day,
            fromHour: Number(hourStringInit.split(":")[0]),
            toHour: Number(hourStringEnd.split(":")[0])
        })
        
    })
    return schedulesResult
}