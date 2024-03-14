import { Icon } from "@iconify/react";

const Pagination = ({ current, total }) => {
  return (
    <div className="flex flex-row pb-3 justify-between items-center">
      <div></div>
      <div className="flex-[0_0_auto] flex flex-row items-center gap-[5px]">
        <div className="page-button bg-[#f3f3f3] dark:bg-[#030921] border-[1px] border-[#375873] dark:border-[#375873] flex items-center">
          <span className="text-[12px] leading-[18px] dark:text-darkFontPrimary text-fontSecondary">
            First
          </span>
        </div>
        <div className="page-button bg-[#f3f3f3] dark:bg-[#030921] border-[1px] border-[#375873] dark:border-[#375873] flex items-center">
          <span className="text-[12px] leading-[18px] dark:text-darkFontPrimary text-fontSecondary">
            <Icon icon="uiw:left" />
          </span>
        </div>

        <div className="page-button bg-[#f3f3f3] dark:bg-[#030921] border-[1px] border-[#375873] dark:border-[#375873] flex items-center">
          <span className="text-[12px] leading-[18px] dark:text-darkFontPrimary text-fontSecondary">
            Page {current} of {total}
          </span>
        </div>
        <div className="page-button bg-[#f3f3f3] dark:bg-[#030921] border-[1px] border-[#375873] dark:border-[#375873] flex items-center">
          <span className="text-[12px] leading-[18px] dark:text-darkFontPrimary text-fontSecondary">
            <Icon icon="uiw:right" />
          </span>
        </div>
        <div className="page-button bg-[#f3f3f3] dark:bg-[#030921] border-[1px] border-[#375873] dark:border-[#375873] flex items-center">
          <span className="text-[12px] leading-[18px] dark:text-darkFontPrimary text-fontSecondary">
            Last
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
