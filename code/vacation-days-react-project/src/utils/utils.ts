export function organizeHolidays(holidays: any[]): {
    nationalHolidays: any[];
    stateHolidays: any[];
    mandatoryHolidays: any[];
} {
    const nationalHolidays = holidays.filter(holiday => holiday.level === 'nacional');
    const stateHolidays = holidays.filter(holiday => holiday.level === 'estadual');
    const mandatoryHolidays = holidays.filter(holiday => holiday.type === 'feriado');

    return {
        nationalHolidays, stateHolidays, mandatoryHolidays
    }
}