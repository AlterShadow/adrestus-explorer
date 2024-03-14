const StakedView = ({ value }) => {
  return (
    <>
      <div className="mb-3 pb-3 flex flex-row w-full items-center border-b-[1px] dark:border-darkColorSeparator border-colorSeparator">
        <span className="w-1/5 text-[14px] leading-[20px] text-[#5f98c7] text-left">
          Staked
        </span>
        <span className="w-4/5 break-all">
          <span className="max-w-[600px] transition-all rounded-sm flex flex-row w-full items-baseline">
            <div className="flex flex-row items-center gap-[5px]">
              <span className="text-[14px] text-fontSecondary dark:text-darkFontPrimary leading-[20px]">
                {value}&nbsp;ADR
              </span>
            </div>
          </span>
        </span>
      </div>
    </>
  );
};

export default StakedView;
