export const LawContent = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-3xl">
        1. Você tem direito a <strong>30 dias corridos</strong> de férias a cada
        12 meses de trabalho ✨
      </div>
      <>
        <div className="text-3xl">
          2. Você pode dividir suas férias em no máximo{" "}
          <strong>3 períodos</strong> desde que:
        </div>
        <div className="text-xl">
          - Um dos períodos não seja inferior a{" "}
          <strong>14 dias corridos</strong>
        </div>
        <div className="text-xl">
          - Os demais períodos não sejam inferiores a{" "}
          <strong> 5 dias corridos cada</strong>
        </div>
      </>
      <>
        <div className="text-3xl">
          3. Você não pode iniciar suas férias <strong>2 dias</strong> antes de
          fim de semana ou feriado
          <a
            className="hover:text-[#646cff] text-5xl"
            href="https://www.jusbrasil.com.br/artigos/ferias-podem-comecar-as-sextas-feiras-ou-feriados/715842679"
          >
            *
          </a>
        </div>
        <div className="text-xl">
          (Exemplo: se você folga no sábado, você tem que iniciar suas férias
          antes de quinta)
        </div>
      </>
      <div className="text-3xl">
        4. Caso queira, você tem o direito de "vender" até 1/3 do seu período de
        férias
      </div>
    </div>
  );
};
