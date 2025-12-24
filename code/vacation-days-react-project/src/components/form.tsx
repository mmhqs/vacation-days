import React from "react";
// import { useGetHolidays } from "../hooks/useGetHolidays";
import { organizeHolidays } from "../utils/utils";
import { HolidayInfo } from "./holidays-info";
import { NiceButton } from "./nice-button";
import { RAW_HOLIDAYS_MOCK } from "../utils/mocks";
import { ReloadButton } from "./reload-button";
import type { SelectChangeEvent } from "@mui/material/Select";
import { StateSelect } from "./selects/state-select";
import { calculateBestVacationPeriodKnowingTheDays } from "../utils/vacation.utils";
import { FixedDaysForm } from "./fixed-days-form";

export const Form = () => {
  const [state, setState] = React.useState("");
  const [iKnowHowManyDays, setIKnowHowManyDays] = React.useState(false);
  const [iWannaSplitMyVacation, setIWannaSplitMyVacation] =
    React.useState(false);
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const handleChangeState = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  /* const { data: rawHolidays } = useGetHolidays("2026", state); */

  // Development use
  const rawHolidays = RAW_HOLIDAYS_MOCK;

  const { nationalHolidays, stateHolidays } = React.useMemo(() => {
    if (rawHolidays) {
      return organizeHolidays(rawHolidays);
    }
    return { nationalHolidays: [], stateHolidays: [], mandatoryHolidays: [] };
  }, [rawHolidays]);

  const calculateVacationDays = (days: number, month: number, year: number) => {
    const result = calculateBestVacationPeriodKnowingTheDays(days, month, year);

    if (result) {
      const { startDay, endDay } = result;

      setStartDate(new Date(year, month, startDay));
      setEndDate(new Date(year, month, endDay));
    } else {
      console.error("Período de férias inválido para este mês.");
    }
  };

  return (
    <>
      <StateSelect state={state} handleChange={handleChangeState} />
      {state && (
        <>
          <HolidayInfo
            year="2026"
            nationalHolidaysCount={nationalHolidays.length}
            stateHolidaysCount={stateHolidays.length}
          />

          <div className="flex flex-row gap-4 mt-4 justify-center">
            <NiceButton
              label="Já sei quantos dias de férias eu quero tirar"
              onClick={() => setIKnowHowManyDays(true)}
              enabled={!iKnowHowManyDays && !iWannaSplitMyVacation}
            />
            <NiceButton
              label="Só quero saber como dividir minhas férias"
              onClick={() => setIWannaSplitMyVacation(true)}
              enabled={!iKnowHowManyDays && !iWannaSplitMyVacation}
            />
            {iKnowHowManyDays && (
              <FixedDaysForm
                startDate={startDate}
                endDate={endDate}
                onCalculate={(days, month) =>
                  calculateVacationDays(days, month, 2026)
                }
              />
            )}
            {iWannaSplitMyVacation && (
              <div>Hmmmm, entendi. Qual mês de preferência?</div>
            )}
          </div>
        </>
      )}
      <div className="absolute bottom-4 right-4">
        <ReloadButton />
      </div>
    </>
  );
};
