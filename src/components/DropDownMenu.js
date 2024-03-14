import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DropDownMenu = ({ title, content }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-[2px] rounded-md bg-transparent px-3 py-2 text-sm font-bold text-[14px] leading-[20px] text-white">
          {title}
          <Icon icon="ri:arrow-down-s-fill" width="24" height="24" />
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
            {content.map((item, index) => {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      href={item.link}
                      className={classNames(
                        active
                          ? "bg-gray-100 dark:bg-black text-gray-900 dark:text-darkIconColor"
                          : "text-gray-700 dark:text-darkFontPrimary",
                        "block px-4 py-2 text-sm border-b-[1px] border-colorSeparator dark:border-darkColorSeparator last:border-none"
                      )}
                    >
                      {item.content_title}
                    </a>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDownMenu;
