import { Form } from "../components/form";
import { Header } from "../components/header";
import { MainTitle } from "../components/main-title";

export const OneAndOnly = () => {
  return (
    <>
      <Header />
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <MainTitle />
        <Form />
      </div>
    </>
  );
};
