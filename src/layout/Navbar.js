import { useState } from "react";
import { Icon } from "@iconify/react";

import DropDownMenu from "../components/DropDownMenu";
import MobileDropDown from "../components/MobileDropDown";
import MobileColorTheme from "../components/MobileColorTheme";
import MenuItems from "../utils/constants/MenuItems";
import SettingDropMenu from "../components/SettingDropMenu";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar = ({ darkModeEnabled, toggleMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tokenButton, setTokenButton] = useState(false);
  const OpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleTokenButton = () => {
    setTokenButton(!tokenButton);
  };

  return (
    <>
      <div className="w-full py-3 bg-primary dark:bg-darkPrimary shadow-[0px_4px_8px_rgba(0,0,0,0.12)]">
        <div className="max-w-[1408px] min-w-[343px] w-full flex flex-row justify-between items-center px-5 mx-auto">
          <div className="max-w-[384px] m-0 cursor-pointer text-white text-[16px] leading-[22px] font-semibold">
            <div className="flex flex-row max-w-full items-center">
              <Logo />
              <div className="flex-col items-start justify-between pl-[7px] pt-2 ad:hidden flex">
                <span className="text-[1.2em] leading-[0.5em] m-0 p-0">
                  Adrestus
                </span>
                <span className="text-[14px] leading-[20px] m-0 pt-[3px]">
                  Block Explorer
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row max-w-full min-w-0 min-h-0 gap-2 ad:gap-10">
            <div className="flex items-center flex-row">
              <div className="pr-4 ad:hidden flex">
                <span className="text-white text-[14px] leading-[20px]">
                  Address Format
                </span>
              </div>
              <div className="flex flex-row max-w-full relative rounded-[8px] text-[14px] shadow-[0_0_0_1px_rgb(243,243,243)_inset] dark:shadow-[0_0_0_1px_rgb(3,9,33)_inset]">
                <div
                  id="TokenButton"
                  className={`left-select bg-[#f3f3f3] dark:bg-[#030921] ${
                    tokenButton ? "translate-x-full" : "translate-x-0"
                  }`}
                ></div>
                <div
                  className={`middle-select ${
                    tokenButton
                      ? "text-colorSeparator cursor-pointer"
                      : "text-primary dark:text-darkIconColor cursor-auto"
                  }`}
                  onClick={handleTokenButton}
                >
                  ADR
                </div>
                <div
                  className={`right-select ${
                    tokenButton
                      ? "text-primary dark:text-darkIconColor cursor-auto"
                      : "text-colorSeparator cursor-pointer"
                  }`}
                  onClick={handleTokenButton}
                >
                  ETH
                </div>
              </div>
            </div>
            <div className="ad:hidden items-center flex-row flex">
              {MenuItems.map((item, index) => {
                return (
                  <DropDownMenu
                    key={index}
                    title={item.title}
                    content={item.content}
                  />
                );
              })}
              <SettingDropMenu
                darkModeEnabled={darkModeEnabled}
                toggleMode={toggleMode}
              />
            </div>
            <div
              id="hamburger_menu"
              className="flex-end ad:flex hidden"
              onClick={OpenMenu}
            >
              {!isMenuOpen ? (
                <Icon
                  icon="solar:hamburger-menu-linear"
                  color="white"
                  width="32"
                  height="32"
                />
              ) : (
                <Icon
                  icon="ic:baseline-close"
                  width="32"
                  height="32"
                  color="white"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-full py-2 min-[961px]:hidden flex flex-col dark:bg-darkPrimary">
          <div className="py-1 px-4">
            <div className="p-2 flex flex-row justify-between items-center w-full">
              <span className="text-[18px] leading-[24px] text-fontSecondary dark:text-darkFontPrimary">
                Home
              </span>
            </div>
          </div>
          {MenuItems.map((item, index) => {
            return (
              <MobileDropDown
                key={index}
                title={item.title}
                content={item.content}
              />
            );
          })}
          <MobileColorTheme
            darkModeEnabled={darkModeEnabled}
            toggleMode={toggleMode}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
