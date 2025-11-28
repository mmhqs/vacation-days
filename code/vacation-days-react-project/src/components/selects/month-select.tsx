import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { MONTHS } from "../../utils/constants";

type MonthSelectProps = {
  month: string;
  handleChange: (event: any) => void;
};

export const MonthSelect = ({ month, handleChange }: MonthSelectProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Mês</InputLabel>
      <Select value={month} label="Age" onChange={handleChange}>
        {MONTHS.map((month) => (
          <MenuItem key={month} value={month}>
            {month}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
