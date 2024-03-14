import { useState } from "react";
import { Icon } from "@iconify/react";

const MobileColorTheme = ({ darkModeEnabled, toggleMode }) => {
  const [IsOpen, SetIsOpen] = useState(false);
  const OpenMenu = () => {
    SetIsOpen(!IsOpen);
  };
  return (
    <div className="py-1 px-4 dark:bg-darkPrimary">
      <div
        className="p-2 flex flex-row justify-between items-center w-full"
        onClick={OpenMenu}
      >
        <span
          className={`text-[16px] leading-[24px] font-semibold ${
            !IsOpen
              ? "text-fontSecondary dark:text-darkFontPrimary"
              : "text-primary dark:text-darkIconColor"
          }`}
        >
          Appearance
        </span>
        {!IsOpen ? (
          <Icon
            icon="ri:arrow-down-s-fill"
            width="16"
            height="16"
            className="text-fontSecondary dark:text-darkFontPrimary"
          />
        ) : (
          <Icon
            icon="ri:arrow-up-s-fill"
            width="16"
            height="16"
            className="dark:text-darkIconColor text-[#00AEE9]"
          />
        )}
      </div>
      {IsOpen && (
        <div className="relative flex flex-col">
          <div className="absolute ml-3 bg-primary dark:bg-darkIconColor text-fontSecondary flex flex-col w-[2px] h-full"></div>
          <div
            className="flex flex-row px-8 py-2 cursor-pointer text-left gap-2 items-center"
            onClick={toggleMode}
          >
            {darkModeEnabled ? (
              <>
                <Icon
                  icon="basil:moon-outline"
                  width="24"
                  height="24"
                  className="dark:text-darkFontPrimary text-fontSecondary"
                />
                <span className="text-[14px] leading-[20px] dark:text-darkFontPrimary text-fontSecondary select-none">
                  Switch to Light Mode
                </span>
              </>
            ) : (
              <>
                <Icon
                  icon="basil:sun-outline"
                  width="24"
                  height="24"
                  className="dark:text-darkFontPrimary text-fontSecondary"
                />
                <span className="text-[14px] leading-[20px] text-fontSecondary select-none">
                  Switch to Dark Mode
                </span>
              </>
            )}
          </div>

          <div className="flex flex-row px-8 py-2 cursor-pointer text-left items-center gap-2">
            <Icon
              icon="basil:clock-outline"
              className="dark:text-darkFontPrimary text-fontSecondary"
              width="24"
              height="24"
            />
            <span className="text-[14px] leading-[20px] dark:text-darkFontPrimary text-fontSecondary select-none">
              Switch to Relative dates
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileColorTheme;
