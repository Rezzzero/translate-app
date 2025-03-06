import arrows from "../assets/icons/Horizontal_top_left_main.svg";
import { Icon } from "./Icon";
import { SelectLanguageProps } from "../types";

export const SelectLanguage = ({
  isInput,
  translateFrom,
  translateTo,
  handleSwitchLanguages,
}: SelectLanguageProps) => {
  return (
    <div
      className={`flex border-b-2 border-[#464b61] pl-2 pb-4 justify-between mb-6`}
    >
      <div className="flex gap-6 h-[36px]">
        {isInput && <button className="text-gray-200">Detect Language</button>}
        <button
          className={`text-gray-200 ${
            translateFrom === "en" || translateTo === "en"
              ? "bg-[#4D5562] rounded-xl px-3 py-[5px] cursor-pointer"
              : ""
          }`}
        >
          English
        </button>
        <button
          className={`text-gray-200 ${
            translateTo === "fr" || translateFrom === "fr"
              ? "bg-[#4D5562] rounded-xl px-3 cursor-pointer"
              : ""
          }`}
        >
          French
        </button>
      </div>
      {!isInput && <Icon handleClick={handleSwitchLanguages}>{arrows}</Icon>}
    </div>
  );
};
