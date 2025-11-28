type NiceButtonProps = {
  label: string;
  onClick?: () => void;
};

export const NiceButton = ({ label, onClick }: NiceButtonProps) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 
        border-2 border-r-6 border-b-6 border-[#000000] rounded
        text-white text-2xl font-bold py-2 px-4 
        cursor-pointer max-w-80`}
    >
      {label}
    </button>
  );
};
