import { Icon } from "@iconify/react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const SettingDropMenu = ({ darkModeEnabled, toggleMode }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900">
          <Icon icon="uiw:setting-o" width={24} height={24} color="white" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className="flex flex-row px-4 py-2 cursor-pointer text-left gap-2 items-center border-b-[1px] border-colorSeparator dark:border-darkColorSeparator"
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
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex flex-row px-4 py-2 cursor-pointer text-left items-center gap-2">
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
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SettingDropMenu;
