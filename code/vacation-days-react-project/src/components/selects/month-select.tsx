import { MONTHS } from "../../utils/constants";
import { BeautifulSelectIMade } from "./beautiful-select-i-made";

type MonthSelectProps = {
  month: string;
  handleChange: (event: any) => void;
};

export const MonthSelect = ({ month, handleChange }: MonthSelectProps) => {
  return (
      <BeautifulSelectIMade value={month} onChange={handleChange}>
        {MONTHS.map((month) => (
          <option key={month.name} value={month.value}>
            {month.name}
          </option>
        ))}
      </BeautifulSelectIMade>
  );
};
