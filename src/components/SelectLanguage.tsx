import { Button } from "./Button";
import arrows from "../assets/icons/Horizontal_top_left_main.svg";
import { Icon } from "./Icon";

export const SelectLanguage = ({ isInput }: { isInput: boolean }) => {
  return (
    <div className="flex border-b-2 border-[#464b61] pl-2 pb-4 justify-between mb-6">
      <div className="flex gap-2">
        {isInput && <Button>Detect Language</Button>}
        <Button>English</Button>
        <Button>French</Button>
      </div>
      {!isInput && <Icon>{arrows}</Icon>}
    </div>
  );
};
