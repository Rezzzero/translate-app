import { Button } from "./Button";

export const SelectLanguage = () => {
  return (
    <div className="flex border-b-2 border-[#D2D5DA] px-2 pb-4">
      <Button>Detect Language</Button>
      <Button>English</Button>
      <Button>French</Button>
    </div>
  );
};
