import React from "react";

interface BeautifulSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

export const BeautifulSelectIMade = ({ children, ...props }: BeautifulSelectProps) => {
  return (
    <div className="relative w-full">
      <select
        {...props}
        className="w-full p-3 bg-white border-[3px] border-gray-900 rounded-sm 
                   appearance-none cursor-pointer focus:outline-none 
                   shadow-[4px_4px_0_#000] active:shadow-none 
                   active:translate-x-[1px] active:translate-y-[1px] 
                   transition-all text-gray-900 font-bold"
      >
        {children}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
        <svg 
          className="w-5 h-5 text-gray-900" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};