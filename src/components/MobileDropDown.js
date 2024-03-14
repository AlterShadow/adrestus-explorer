import { useState } from "react";
import { Icon } from "@iconify/react";

const MobileDropDown = ({ title, content }) => {
  const [IsOpen, SetIsOpen] = useState(false);
  const OpenMenu = () => {
    SetIsOpen(!IsOpen);
  };
  return (
    <div className="py-1 px-4 dark:bg-darkPrimary">
      <div
        className="p-2 flex flex-row justify-between items-center w-full "
        onClick={OpenMenu}
      >
        <span
          className={`text-[16px] leading-[24px] font-semibold ${
            !IsOpen
              ? "text-fontSecondary dark:text-darkFontPrimary"
              : "text-primary dark:text-darkIconColor"
          }`}
        >
          {title}
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
          <div className="absolute ml-3 bg-primary dark:bg-darkIconColor text-fontSecondary dark:text-darkFontPrimary flex flex-col w-[2px] h-full"></div>
          {content.map((item, index) => {
            return (
              <div
                className="flex flex-col px-8 py-2 cursor-pointer text-left"
                key={index}
              >
                <a href={item.link}>
                  <span className="text-[14px] leading-[20px] dark:text-darkFontPrimary">
                    {item.content_title}
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileDropDown;
