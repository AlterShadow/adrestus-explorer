import { Icon } from "@iconify/react";
const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row ad:flex-col gap-5 justify-between rounded-lg overflow-hidden w-full mb-6 p-6 border-colorSeparator dark:border-darkColorSeparator border-[1px] bg-white dark:bg-darkPrimary">
        <div className="flex flex-row ad:w-full w-1/2">
          <div className="flex flex-1 pr-6 justify-between flex-col h-[140px] w-full">
            <div className="flex flex-row items-stretch gap-1">
              <div className="flex items-center md:pl-[6px] md:pr-3 pr-[6px] pl-[3px]">
                <Icon
                  icon="grommet-icons:line-chart"
                  width="32"
                  height="32"
                  className="text-primary dark:text-darkIconColor"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[14px] leading-[20px] text-fontPrimary dark:text-darkHeaderColor">
                  ONE PRICE
                </span>
                <span className="text-[14px] leading-[20px] text-fontSecondary font-bold dark:text-darkFontPrimary">
                  $ 0.0000
                </span>
              </div>
            </div>
            <div className="bg-colorSeparator dark:bg-darkColorSeparator w-full h-[1px]"></div>
            <div className="flex flex-row items-stretch gap-1">
              <div className="flex items-center md:pl-[6px] md:pr-3 pr-[6px] pl-[3px]">
                <Icon
                  icon="grommet-icons:transaction"
                  className="text-primary dark:text-darkIconColor"
                  width="32"
                  height="32"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[14px] leading-[20px] text-fontPrimary dark:text-darkHeaderColor">
                  TRANSACTION VOLUME
                </span>
                <span className="text-[14px] leading-[20px] text-fontSecondary dark:text-darkFontPrimary font-bold">
                  788,400,090
                </span>
              </div>
            </div>
          </div>
          <div className="h-[140px] w-[1px] bg-colorSeparator dark:bg-darkColorSeparator"></div>
          <div className="flex flex-1 px-6 ad:pr-0 justify-between flex-col h-[140px]">
            <div className="flex flex-row items-stretch gap-1">
              <div className="flex items-center md:pl-[6px] md:pr-3 pr-[6px] pl-[3px]">
                <Icon
                  icon="grommet-icons:cubes"
                  width="32"
                  height="32"
                  className="text-primary dark:text-darkIconColor"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[14px] leading-[20px] text-fontPrimary dark:text-darkHeaderColor">
                  SHARD COUNT
                </span>
                <span className="text-[14px] leading-[20px] text-fontSecondary dark:text-darkFontPrimary font-bold">
                  2
                </span>
              </div>
            </div>
            <div className="bg-colorSeparator dark:bg-darkColorSeparator w-full h-[1px]"></div>
            <div className="flex flex-row items-stretch gap-1">
              <div className="flex items-center md:pl-[6px] md:pr-3 pr-[6px] pl-[3px]">
                <Icon
                  icon="radix-icons:timer"
                  className="text-primary dark:text-darkIconColor"
                  width="32"
                  height="32"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[14px] leading-[20px] text-fontPrimary dark:text-darkHeaderColor">
                  BLOCK LATENCY
                </span>
                <span className="text-[14px] leading-[20px] text-fontSecondary dark:text-darkFontPrimary font-bold">
                  2.00s
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ad:w-full ad:h-[1px] w-[1px] h-[140px] bg-colorSeparator dark:bg-darkColorSeparator" />
        <div className="flex w-1/2 ad:w-full ad:pl-6 ad:pt-1 md:pl-3 flex-row justify-between gap-5">
          <div className="flex flex-col w-1/2">
            <span className="text-fontPrimary dark:text-darkHeaderColor text-[14px] text-left">
              TRANSACTION HISTORY
            </span>
          </div>
          <div className="flex flex-col w-1/2">
            <span className="text-fontPrimary dark:text-darkHeaderColor text-[14px] text-left">
              ACTIVE WALLETS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
