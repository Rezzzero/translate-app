import logo from "./assets/logo/logo.svg";
import { TranslateForm } from "./components/TranslateForm";

export const App = () => {
  return (
    <div className="container mx-auto mt-20 flex flex-col justify-center text-white">
      <img src={logo} alt="logo" className="w-1/8 mx-auto mb-10" />
      <div className="flex gap-4 justify-center">
        <TranslateForm isInput={true} />
        <TranslateForm isInput={false} />
      </div>
    </div>
  );
};
