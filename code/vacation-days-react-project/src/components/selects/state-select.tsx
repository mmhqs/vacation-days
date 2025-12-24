import { BRAZILIAN_STATES } from "../../utils/constants";
import { BeautifulSelectIMade } from "./beautiful-select-i-made";

type StateSelectProps = {
  state: string;
  handleChange: (event: any) => void;
};

export const StateSelect = ({ state, handleChange }: StateSelectProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-bold text-gray-900 ml-1">
        Qual seu estado?
      </label>

      <BeautifulSelectIMade value={state} onChange={handleChange}>
        {BRAZILIAN_STATES.map((stateName) => (
          <option key={stateName} value={stateName}>
            {stateName}
          </option>
        ))}
      </BeautifulSelectIMade>
    </div>
  );
};
