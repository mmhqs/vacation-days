export function calculateBestVacationPeriodKnowingTheDays(
    vacationDays: number, 
    month: number, 
    year: number
): { startDay: number; endDay: number } | null {
    
    const daysInMonth = new Date(year, month, 0).getDate();

    let bestPeriod = { startDay: 1, endDay: vacationDays, businessDays: 0 };
    let maxBusinessDays = -1;

    // Percorre todos os dias possíveis de início
    for (let start = 1; start <= daysInMonth - vacationDays + 1; start++) {
        let currentBusinessDays = 0;
        const end = start + vacationDays - 1;

        // Conta quantos dias úteis existem nessa janela de dias
        for (let day = start; day <= end; day++) {
            const date = new Date(year, month - 1, day);
            const dayOfWeek = date.getDay();
            
            // 0 = Domingo, 6 = Sábado. Dias úteis são 1 a 5.
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                currentBusinessDays++;
            }
        }

        // Critérios de escolha: 1) mais dias úteis, 2) começa na segunda
        const startDateObj = new Date(year, month - 1, start);
        const startsOnMonday = startDateObj.getDay() === 1;

        if (currentBusinessDays > maxBusinessDays || (currentBusinessDays === maxBusinessDays && startsOnMonday)) {
            maxBusinessDays = currentBusinessDays;
            bestPeriod = { startDay: start, endDay: end, businessDays: currentBusinessDays };
        }
    }

    return { 
        startDay: bestPeriod.startDay, 
        endDay: bestPeriod.endDay 
    };
}