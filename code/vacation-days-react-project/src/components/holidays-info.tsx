type HolidayInfoProps = {
  year: string;
  nationalHolidaysCount: number;
  stateHolidaysCount: number;
};

export const HolidayInfo = ({
  year,
  nationalHolidaysCount,
  stateHolidaysCount,
}: HolidayInfoProps) => {
  return (
    <>
      {nationalHolidaysCount && (
        <div className="mt-5 text-2xl">
          Em {year}, você terá <strong>{nationalHolidaysCount}</strong> feriados
          nacionais
        </div>
      )}
      {stateHolidaysCount ? (
        <div className="mt-5 text-2xl">
          e <strong>{stateHolidaysCount}</strong>{" "}
          {stateHolidaysCount === 1
            ? "feriado estadual."
            : "feriados estaduais."}
        </div>
      ) : (
        <div className="mt-5 text-2xl">
          e nenhum feriado estadual (tristeza).
        </div>
      )}
    </>
  );
};
