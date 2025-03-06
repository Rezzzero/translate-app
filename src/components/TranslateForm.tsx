import { SelectLanguage } from "./SelectLanguage";
import sound from "../assets/icons/sound_max_fill.svg";
import copy from "../assets/icons/Copy.svg";
import { Icon } from "./Icon";
import { InputComponent } from "./InputComponent";
import { OutputComponent } from "./OutputComponent";
import { TranslateFormProps } from "../types";
import TextFormatIcon from "@mui/icons-material/TextFormat";

export const TranslateForm = ({
  isInput,
  inputText,
  outputText,
  onChangeInput,
  handleGetTranslated,
}: TranslateFormProps) => {
  return (
    <div className="bg-[#121826CC] flex flex-col opacity-95 w-[565px] h-[350px] p-6 rounded-3xl border-2 border-[#464b61]">
      <SelectLanguage isInput={isInput} />
      {isInput ? (
        <InputComponent text={inputText} onChange={onChangeInput} />
      ) : (
        <OutputComponent text={outputText} />
      )}
      <div className="flex gap-3">
        <Icon>{sound}</Icon>
        <Icon>{copy}</Icon>

        {isInput && (
          <button
            onClick={handleGetTranslated}
            className="bg-[#263FA9] py-3 px-5 rounded-xl ml-auto flex gap-2 border-2 border-[#7CA9F3] cursor-pointer"
          >
            <TextFormatIcon />
            Translate
          </button>
        )}
      </div>
    </div>
  );
};
