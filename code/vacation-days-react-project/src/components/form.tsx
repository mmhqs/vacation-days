import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { BRAZILIAN_STATES } from "../utils/constants";
import { useGetHolidays } from "../hooks/useGetHolidays";
import { organizeHolidays } from "../utils/utils";
import { HolidayInfo } from "./holidays-info";
import { NiceButton } from "./nice-button";

export const Form = () => {
  const [state, setState] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  const { data: rawHolidays } = useGetHolidays("2026", state);

  const { nationalHolidays, stateHolidays } = React.useMemo(() => {
    if (rawHolidays) {
      return organizeHolidays(rawHolidays);
    }
    return { nationalHolidays: [], stateHolidays: [], mandatoryHolidays: [] };
  }, [rawHolidays]);

  return (
    <div className="bg-[#FFF4DA] border-3 border-r-12 border-b-12 rounded-xl p-4 w-300 h-100">
      <FormControl fullWidth>
        <InputLabel>Qual seu estado?</InputLabel>
        <Select value={state} label="Age" onChange={handleChange}>
          {BRAZILIAN_STATES.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <HolidayInfo
        year="2026"
        nationalHolidaysCount={nationalHolidays.length}
        stateHolidaysCount={stateHolidays.length}
      />
      <div className="flex flex-row gap-4 mt-4">
        <NiceButton label="Eu sei quantos dias de férias eu quero tirar" />
        <NiceButton label="Eu quero saber como dividir minhas férias" />
      </div>
    </div>
  );
};
