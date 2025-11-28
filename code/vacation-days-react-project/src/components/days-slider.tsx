import { useState } from 'react';

export function DaysSlider() {
  const [days, setDays] = useState(1);

  const min = 1;
  const max = 30;
  const percentage = ((days - min) / (max - min)) * 100;
  const backgroundSize = `${percentage}% 100%`;

  const handleChange = (event: any) => {
    setDays(Number(event.target.value));
  };

  return (
    <div>
      <p><strong>{days}</strong> { days === 1 ? 'dia' : 'dias'}</p>
      
      <input
        type="range"
        min={min}
        max={max}
        required
        value={days} 
        onChange={handleChange}
        className={`w-full h-3 bg-[#FAFAFA] bg-no-repeat bg-[length:50%_100%] bg-[#ebdbb7] appearance-none 
          border-[3px] border-gray-900 rounded-sm focus:outline-none 
          bg-gradient-to-r from-[#FE4A60] to-[#FE4A60] 
          [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-7 
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white 
          [&::-webkit-slider-thumb]:rounded-sm [&::-webkit-slider-thumb]:cursor-pointer 
          [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-[3px] 
          [&::-webkit-slider-thumb]:border-gray-900 [&::-webkit-slider-thumb]:shadow-[3px_3px_0_#000]`}
        
        style={{ backgroundSize: backgroundSize }} 
      />
    </div>
  );
}