import React from "react";
// import { useGetHolidays } from "../hooks/useGetHolidays";
import { organizeHolidays } from "../utils/utils";
import { HolidayInfo } from "./holidays-info";
import { NiceButton } from "./nice-button";
import { RAW_HOLIDAYS_MOCK } from "../utils/mocks";
import { DaysSlider } from "./days-slider";
import { ReloadButton } from "./reload-button";
import { MonthSelect } from "./selects/month-select";
import type { SelectChangeEvent } from "@mui/material/Select";
import { StateSelect } from "./selects/state-select";

export const Form = () => {
  const [state, setState] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [iKnowHowManyDays, setIKnowHowManyDays] = React.useState(false);
  const [iWannaSplitMyVacation, setIWannaSplitMyVacation] =
    React.useState(false);

  const handleChangeState = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  const handleChangeMonth = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
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

  return (
    <div className="bg-[#FFF4DA] border-3 border-r-12 border-b-12 rounded-xl p-4 w-300 h-100">
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
              <div>
                <div>Hmmmm, entendi. Quantos dias então?</div>
                <DaysSlider />

                <div>Qual mês de preferência?</div>
                <MonthSelect month={month} handleChange={handleChangeMonth}/>
              </div>
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
    </div>
  );
};
