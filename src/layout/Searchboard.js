import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import { TxPanelBodyParams } from "../utils/constants/TxParams";
import { BlockPanelBodyParams } from "../utils/constants/BlockParams";
import HandleSearchKeyDown from "../utils/handleSearchKeyDown";
import SearchResultItem from "./SearchResultItem";

const Searchboard = () => {
  const [value, setValue] = useState("");
  const [closeState, setCloseState] = useState(false);
  const [fromAddressResults, setFromAddressResults] = useState([]);
  const [toAddressResults, setToAddressResults] = useState([]);
  const [blockResults, setBlockResults] = useState([]);
  const [hashResults, setHashResults] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      HandleSearchKeyDown(value);
    }
  };

  const onChange = useCallback((event) => {
    const { value: newValue } = event.target;
    setValue(newValue);
  }, []);

  const HandleCloseButton = () => {
    setCloseState(false);
    setValue("");
  };

  useEffect(() => {
    let from_address_content = [],
      block_content = [],
      to_address_content = [],
      hash_content = [];

    from_address_content = TxPanelBodyParams.filter((item) => {
      return item.From.indexOf(value) >= 0 && value;
    }).map((item) => item.From);
    setFromAddressResults(from_address_content);

    to_address_content = TxPanelBodyParams.filter((item) => {
      return item.To.indexOf(value) >= 0 && value;
    }).map((item) => item.To);
    setToAddressResults(to_address_content);

    block_content = BlockPanelBodyParams.filter((item) => {
      return item.Height.indexOf(value) >= 0 && value;
    }).map((item) => item.Height);
    setBlockResults(block_content);

    hash_content = TxPanelBodyParams.filter((item) => {
      return item.Hash.indexOf(value) >= 0 && value;
    }).map((item) => item.Hash);
    setHashResults(hash_content);
  }, [value]);

  useEffect(() => {
    if (
      hashResults.length ||
      blockResults.length ||
      toAddressResults.length ||
      fromAddressResults.length
    )
      setCloseState(true);
    else setCloseState(false);
  }, [fromAddressResults, toAddressResults, hashResults, blockResults]);

  return (
    <div className="max-w-[1408px] min-w-[343px] w-full flex flex-col justify-between items-center px-5 mx-auto">
      <div className="w-full py-6">
        <div className="flex flex-row w-full relative border-colorSeparator dark:border-darkColorSeparator bg-white dark:bg-transparent border-[1px] rounded-lg items-center px-3">
          <div className="absolute top-1/2 flex translate-y-[-50%] left-3 pointer-events-none">
            <Icon
              icon="fluent:search-12-regular"
              width="24"
              height="24"
              className="text-primary dark:text-darkIconColor"
            />
          </div>
          <input
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            className="p-[10px] pl-12 w-full font-medium text-[14px] focus:outline-none bg-white dark:bg-transparent border-none text-fontSecondary dark:text-darkFontPrimary"
            placeholder="Search by Address / Transaction Hash / Block / Token"
          ></input>
          {closeState && (
            <div className="flex cursor-pointer" onClick={HandleCloseButton}>
              <Icon
                icon="ic:sharp-close"
                width="24"
                height="24"
                className="text-primary dark:text-darkIconColor"
              />
            </div>
          )}
        </div>
        {closeState && (
          <div
            id="Scrollbar"
            className={`w-full dark:bg-darkPrimary bg-white max-h-[300px] overflow-auto rounded-md flex-col items-start mt-1 ${
              value === "" ? "hidden" : "flex"
            }`}
          >
            <div className="flex flex-row p-3 w-full gap-1">
              <span className="dark:text-darkFontPrimary text-fontSecondary text-[14px] leading-[20px] font-bold">
                {fromAddressResults.length +
                  toAddressResults.length +
                  hashResults.length +
                  blockResults.length}
              </span>
              <span className="dark:text-darkFontPrimary text-fontSecondary text-[14px] leading-[20px]">
                found
              </span>
            </div>
            {fromAddressResults.map((item, index) => (
              <SearchResultItem value={item} key={index} />
            ))}
            {toAddressResults.map((item, index) => (
              <SearchResultItem value={item} key={index} />
            ))}
            {hashResults.map((item, index) => (
              <SearchResultItem value={item} key={index} />
            ))}
            {blockResults.map((item, index) => (
              <SearchResultItem value={item} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchboard;
