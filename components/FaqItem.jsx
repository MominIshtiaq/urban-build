import React from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";

const FaqItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full border-b">
      <div className="flex items-center justify-between py-6">
        <h4 className="h4 max-w-[300px] sm:max-w-md md:max-w-max">{title}</h4>
        <button
          className="w-[44px] h-[44px] bg-[#ffca3b] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiSubtractFill
              className={`text-[#121315] text-2xl transition-opacity duration-700 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : (
            <RiAddFill
              className={`text-[#121315] text-2xl transition-opacity duration-700 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen
            ? "max-h-[200px] opacity-100 p-[16px] transition-all duration-500 ease-in-out"
            : "max-h-0 opacity-0 p-0 transition-all duration-300 ease-in-out"
        }`}
      >
        <p className="pb-8 flex items-center max-w-[860px]">{description}</p>
      </div>
    </div>
  );
};

export default FaqItem;
