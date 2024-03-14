import { Icon } from "@iconify/react";
import TitleItem from "../TitleItem";

const StateItem = ({ title, value }) => {
  return (
    <tr>
      <TitleItem title={title} />
      <td className="text-left bg-transparent py-4 px-2 w-2/3 border-b-[1px] dark:border-darkColorSeparator border-colorSeparator">
        <div className="max-w-[700px] items-baseline flex flex-row w-full">
          <div
            className={`rounded-md py-[3px] px-2 flex flex-row items-center ${
              value ? "dark:bg-[#6afabc3b] bg-[#6afabc70] gap-[5px]" : ""
            }`}
          >
            {value ? (
              <>
                <Icon
                  icon="gg:check-o"
                  width={12}
                  height={12}
                  className="text-[#14a266] dark:text-[#69FABD]"
                />
                <span className="text-[14px] text-[#14a266] dark:text-[#69FABD] leading-[20px]">
                  Success
                </span>
              </>
            ) : (
              <>
                <Icon
                  icon="gg:check-o"
                  width={12}
                  height={12}
                  className="text-[#14a266] dark:text-[#00d67b]"
                />
                <span className="text-[14px] text-[#14a266] dark:text-[#00d67b] leading-[20px]">
                  Failed
                </span>
              </>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default StateItem;
