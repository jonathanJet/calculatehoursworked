
const { getName, getSchedulesFromStringInput } = require("../core/coreFile");

describe('Evaluate the file text', () => {

    it('get name from string input ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00', () => {
        const stringInput = "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00"
        const result = getName(stringInput)
        expect(result).toBe("ASTRID");
    });

    it('get schedules from string input ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00', () => {
        const stringInput = "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00"
        const result = getSchedulesFromStringInput(stringInput)
        expect(result).toStrictEqual([
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
        ]);
    });

});