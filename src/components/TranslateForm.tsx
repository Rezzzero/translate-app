import { SelectLanguage } from "./SelectLanguage";
import sound from "../assets/icons/sound_max_fill.svg";
import copy from "../assets/icons/Copy.svg";
import { Icon } from "./Icon";

export const TranslateForm = ({ isInput }: { isInput: boolean }) => {
  return (
    <div className="bg-[#121826CC] opacity-95 w-[450px] h-[300px] p-6 rounded-3xl border-2 border-[#464b61]">
      <SelectLanguage isInput={isInput} />
      <div className="flex gap-3">
        <Icon>{sound}</Icon>
        <Icon>{copy}</Icon>
      </div>
    </div>
  );
};
