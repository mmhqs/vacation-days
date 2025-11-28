type HeaderProps = {
  activeContent: "form" | "law";
  setActiveContent: (content: "form" | "law") => void;
};

export const Header = ({ activeContent, setActiveContent }: HeaderProps) => {
  const REPO_URL = "https://github.com/mmhqs/vacation-days";
  return (
    <div className="border-b-2 py-6 px-50 flex flex-row justify-between items-center">
      <button
        onClick={() =>
          setActiveContent(activeContent === "form" ? "law" : "form")
        }
        className="text-lg font-bold cursor-pointer hover:text-[#646cff]"
      > {activeContent === "form" ? "Dicas da CLT" : "Escolha suas férias"}
      </button>
      <button
        onClick={() => window.open(REPO_URL, "_blank")}
        className=" text-lg font-bold cursor-pointer hover:text-[#646cff]"
      >
        Github
      </button>
    </div>
  );
};
