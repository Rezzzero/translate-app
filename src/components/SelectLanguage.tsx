import arrows from "../assets/icons/Horizontal_top_left_main.svg";
import { Icon } from "./Icon";
import { SelectLanguageProps } from "../types";
import { LanguageDrop } from "./LanguageDrop";

export const SelectLanguage = ({
  isInput,
  translateFrom,
  translateTo,
  handleSwitchLanguages,
  handleSelectLanguage,
}: SelectLanguageProps) => {
  const isEnSelected = translateFrom === "en" || translateTo === "en";
  const isFrSelected = translateFrom === "fr" || translateTo === "fr";

  return (
    <div
      className={`flex border-b-2 border-[#464b61] pl-2 pb-4 justify-between mb-6`}
    >
      <div className="flex gap-4 h-[36px]">
        {isInput && <button className="text-gray-200">Detect Language</button>}
        <button
          onClick={(e) => handleSelectLanguage(e)}
          className={`text-gray-200 px-3 py-[5px] cursor-pointer rounded-xl ${
            isEnSelected ? "bg-[#4D5562]" : ""
          }`}
          value={"en"}
        >
          English
        </button>
        <button
          onClick={(e) => handleSelectLanguage(e)}
          className={`text-gray-200 px-3 cursor-pointer rounded-xl ${
            isFrSelected ? "bg-[#4D5562]" : ""
          }`}
          value={"fr"}
        >
          French
        </button>
      </div>
      {!isInput && <Icon handleClick={handleSwitchLanguages}>{arrows}</Icon>}
    </div>
  );
};
