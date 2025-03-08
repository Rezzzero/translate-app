import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

export const LanguageDrop = ({ isInput }: { isInput: boolean }) => {
  const [open, setOpen] = useState(false);
  const toggleDropDown = () => {
    setOpen(!open);
  };
  return (
    <div className="relative">
      <button
        onClick={toggleDropDown}
        className="flex items-center gap-1 py-[5px] cursor-pointer"
      >
        Spanish <KeyboardArrowDownIcon />
      </button>
      {open && (
        <div
          className={`absolute top-10 right-2 ${
            isInput ? "bg-gray-800" : "bg-slate-900"
          }
           border border-gray-300 rounded-md shadow-lg z-10`}
        >
          <ul className="py-2">
            <li className="px-4 py-2 cursor-pointer hover:opacity-50">
              English
            </li>
            <li className="px-4 py-2 cursor-pointer hover:opacity-50">
              French
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
