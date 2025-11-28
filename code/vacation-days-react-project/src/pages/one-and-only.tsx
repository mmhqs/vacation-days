import { useState } from "react";
import { Footer } from "../components/footer";
import { Form } from "../components/form";
import { Header } from "../components/header";
import { MainTitle } from "../components/main-title";
import { LawContent } from "../components/law-content";

export const OneAndOnly = () => {
      const [activeContent, setActiveContent] = useState<"form" | "law">("form");

  return (
    <>
      <Header activeContent={activeContent} setActiveContent={setActiveContent}/>
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <MainTitle />
        <div className="bg-[#FFF4DA] border-3 border-r-12 border-b-12 rounded-xl p-4 w-300 h-120">
          {activeContent === 'form' && <Form /> }
          {activeContent === 'law' && <LawContent /> }
        </div>
      </div>
      <Footer />
    </>
  );
};
