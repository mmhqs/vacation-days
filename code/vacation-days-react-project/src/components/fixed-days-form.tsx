import React from "react";
import { DaysSlider } from "./days-slider";
import { MonthSelect } from "./selects/month-select";
import { NiceButton } from "./nice-button";

type FixedDaysFormProps = {
  onCalculate: (days: number, month: number) => void;
  startDate: Date | null;
  endDate: Date | null;
}

export const FixedDaysForm = ({ onCalculate, startDate, endDate }: FixedDaysFormProps) => {
  const [localMonth, setLocalMonth] = React.useState("");
  const [vacationDays, setVacationDays] = React.useState(5);

  return (
    <div className="flex flex-col gap-2">
      <div>Hmmmm, entendi. Quantos dias então?</div>
      <DaysSlider days={vacationDays} onChange={setVacationDays} />

      <div>Algum mês de preferência?</div>
      <MonthSelect 
        month={localMonth} 
        handleChange={(e) => setLocalMonth(e.target.value)} 
      />
      
      <NiceButton
        label="Calcular"
        enabled={true}
        onClick={() => onCalculate(vacationDays, Number(localMonth))}
      />
      
      {startDate && endDate && (
        <div>
          <strong>Período sugerido: </strong>
          {startDate.toLocaleDateString("pt-BR")} até {endDate.toLocaleDateString("pt-BR")}
        </div>
      )}
    </div>
  );
};