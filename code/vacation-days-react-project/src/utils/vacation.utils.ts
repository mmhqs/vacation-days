export function calculateBestVacationPeriod(vacationDays: number, month: number, year: number): { startDay: number; endDay: number } | null {
    const startDay = 1;
    const endDay = 31;
    return { startDay, endDay };
}