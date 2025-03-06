import { useState } from "react";
import logo from "./assets/logo/logo.svg";
import { TranslateForm } from "./components/TranslateForm";

export const App = () => {
  const [inputText, setInputText] = useState("Hello, how are you?");
  const [outputText, setOutputText] = useState("Bonjour, comment allez-vous?");
  const [translateFrom, setTranslateFrom] = useState("en");
  const [translateTo, setTranslateTo] = useState("fr");
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          inputText
        )}&langpair=${translateFrom}|${translateTo}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setOutputText(data.responseData.translatedText);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSwitchLanguages = () => {
    setTranslateFrom(translateTo);
    setTranslateTo(translateFrom);
  };

  const handleGetTranslated = () => {
    fetchData();
  };

  return (
    <div className="container mx-auto mt-20 flex flex-col justify-center text-white">
      <img src={logo} alt="logo" className="w-1/8 mx-auto mb-14" />
      <div className="flex flex-col md:flex-row max-md:mx-auto gap-3 justify-center">
        <TranslateForm
          isInput={true}
          inputText={inputText}
          onChangeInput={handleChangeInput}
          handleGetTranslated={handleGetTranslated}
          translateFrom={translateFrom}
        />
        <TranslateForm
          isInput={false}
          outputText={outputText}
          translateTo={translateTo}
          handleSwitchLanguages={handleSwitchLanguages}
        />
      </div>
    </div>
  );
};
