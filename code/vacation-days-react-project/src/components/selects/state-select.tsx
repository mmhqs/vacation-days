import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { BRAZILIAN_STATES } from "../../utils/constants";

type StateSelectProps = {
  state: string;
  handleChange: (event: any) => void;
};

export const StateSelect = ({ state, handleChange }: StateSelectProps) => {
  return (
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
  );
};
