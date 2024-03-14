import { CopyToClipboard } from "react-copy-to-clipboard";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchResultItem = ({ value }) => {
  const [searchState, setSearchState] = useState("");
  const [linkTo, setLinkTo] = useState("");
  const handleSearch = () => {
    window.location.href = `/${linkTo}/${value}`;
  };
  useEffect(() => {
    if (value.length === 42) {
      setSearchState("Address");
      setLinkTo("address");
    } else if (value.length <= 10) {
      setSearchState("Block");
      setLinkTo("block");
    } else if (value.length > 45) {
      setSearchState("Hash");
      setLinkTo("tx");
    }
  }, [value]);
  return (
    <div className="flex flex-row w-full border-b-[1px] py-2 px-3 border-colorSeparator dark:border-darkColorSeparator items-center">
      <div className="rounded-md py-[2px] px-2 flex flex-row items-center dark:bg-[#6afabc3b] bg-[#6afabc70] gap-[5px]">
        <span className="text-[12px] text-[#14a266] dark:text-[#69FABD] leading-[20px]">
          {searchState}
        </span>
      </div>
      <div className="flex flex-row items-center pl-5 gap-[5px]">
        <CopyToClipboard text={value}>
          <Icon
            icon="mingcute:copy-3-line"
            rotate={3}
            width={14}
            height={14}
            className="text-primary dark:text-darkViewColor cursor-pointer"
          />
        </CopyToClipboard>
        <div onClick={handleSearch} className="cursor-pointer">
          <span className="text-[14px] text-primary dark:text-[#69FABD] leading-[20px]">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
