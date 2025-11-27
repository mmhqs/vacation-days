import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { BRAZILIAN_STATES } from "../utils/constants";

export const Form = () => {
  const [state, setState] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  return (
    <div className="bg-[#FFF4DA] border-3 border-r-12 border-b-12 rounded-xl p-4 w-300 h-100">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Qual seu estado?</InputLabel>
        <Select
          value={state}
          label="Age"
          onChange={handleChange}
        >
          {BRAZILIAN_STATES.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
