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

  const selectLanguageFrom = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTranslateFrom(e.currentTarget.value);
  };

  const selectLanguageTo = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTranslateTo(e.currentTarget.value);
  };

  const handleGetTranslated = () => {
    fetchData();
  };

  const copyInputToClipboard = () => {
    navigator.clipboard.writeText(inputText);
  };

  const copyOutputToClipboard = () => {
    navigator.clipboard.writeText(outputText);
  };

  const speakText = (text: string, language: string) => {
    if (!text) return;
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    if (language === "en") {
      utterance.lang = "en-US";
    } else if (language === "fr") {
      utterance.lang = "fr-FR";
    }
    synth.speak(utterance);
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
          handleSelectLanguage={selectLanguageFrom}
          handleCopy={copyInputToClipboard}
          speakText={() => speakText(inputText, translateFrom)}
        />
        <TranslateForm
          isInput={false}
          outputText={outputText}
          translateTo={translateTo}
          handleSwitchLanguages={handleSwitchLanguages}
          handleSelectLanguage={selectLanguageTo}
          handleCopy={copyOutputToClipboard}
          speakText={() => speakText(outputText, translateTo)}
        />
      </div>
    </div>
  );
};
