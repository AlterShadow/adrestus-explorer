import { Icon } from "@iconify/react";

const AddressHeader = () => {
  return (
    <thead>
      <tr>
        <th className="font-bold py-4 px-2 m-0 text-start border-t-[1px] dark:bg-[#1b3e7f] bg-[#f4f7f9] border-colorSeparator dark:border-darkColorSeparator">
          <div className="flex flex-col text-start">
            <span className="w-[95px] text-[14px] leading-[20px] text-[#5f98c7] font-bold text-start">
              Hash
            </span>
          </div>
        </th>
        <th className="font-bold py-4 px-2 m-0 text-start border-t-[1px] dark:bg-[#1b3e7f] bg-[#f4f7f9] border-colorSeparator dark:border-darkColorSeparator">
          <div className="flex flex-col text-start">
            <span className="text-[14px] leading-[20px] text-[#5f98c7] font-bold text-start">
              Method
            </span>
          </div>
        </th>
        <th className="font-bold py-4 px-2 m-0 text-start border-t-[1px] dark:bg-[#1b3e7f] bg-[#f4f7f9] border-colorSeparator dark:border-darkColorSeparator">
          <div className="flex flex-col text-start">
            <span className="w-[180px] text-[14px] leading-[20px] text-[#5f98c7] font-bold text-start">
              From
            </span>
          </div>
        </th>
        <th className="font-bold py-4 px-2 m-0 text-start border-t-[1px] dark:bg-[#1b3e7f] bg-[#f4f7f9] border-colorSeparator dark:border-darkColorSeparator">
          <div className="flex flex-col text-start">
            <span className="text-[14px] leading-[20px] text-[#5f98c7] font-bold text-start"></span>
          </div>
        </th>
        <th className="font-bold py-4 px-2 m-0 text-start border-t-[1px] dark:bg-[#1b3e7f] bg-[#f4f7f9] border-colorSeparator dark:border-darkColorSeparator">
          <div className="flex flex-col text-start">
            <div className="w-[180px] flex flex-row gap-2 items-center">
              <span className="text-[14px] leading-[20px] text-[#5f98c7] font-bold text-start">
                To
              </span>
              <button className="p-1 rounded-[4px] border-[1px] outline-none bg-transparent border-colorSeparator dark:border-darkColorSeparator">
                <Icon
                  icon="cil:filter"
                  width={14}
                  height={14}
                  className="text-fontSecondary dark:text-darkFontPrimary"
                />
              </button>
            </div>
          </div>
        </th>
        <th className="font-bold py-4 px-2 m-0 text-start border-t-[1px] dark:bg-[#1b3e7f] bg-[#f4f7f9] border-colorSeparator dark:border-darkColorSeparator">
          <div className="flex flex-col text-start">
            <span className="w-[120px] text-[14px] leading-[20px] text-[#5f98c7] font-bold text-start">
              Value
            </span>
          </div>
        </th>
        <th className="font-bold py-4 px-2 m-0 text-start border-t-[1px] dark:bg-[#1b3e7f] bg-[#f4f7f9] border-colorSeparator dark:border-darkColorSeparator">
          <div className="flex flex-col text-start">
            <span className="w-[140px] text-[14px] leading-[20px] text-[#5f98c7] font-bold text-start">
              Timestamp
            </span>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default AddressHeader;
