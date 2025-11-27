export const Header = () => {
    const REPO_URL = "https://github.com/mmhqs/vacation-days";
    return <div className="border-b-2 py-6 px-50 flex flex-row justify-between items-center">
        <div className="text-lg font-bold">Dias de férias</div>
        <button onClick={() => window.open(REPO_URL, "_blank")} className=" text-lg font-bold cursor-pointer hover:text-[#646cff]">Github</button>
        </div>;
}