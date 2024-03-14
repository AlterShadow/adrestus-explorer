import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const AddressBodyContent = ({
  hash,
  method,
  from,
  state,
  to,
  value,
  timestamp,
}) => {
  return (
    <tr>
      <th className="px-2 py-4 text-start m-0 border-t-[1px] dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex flex-row items-center gap-[5px]">
          <CopyToClipboard text="">
            <Icon
              icon="mingcute:copy-3-line"
              rotate={3}
              width={14}
              height={14}
              className="text-primary dark:text-[#69FABD] mb-1 cursor-pointer"
            />
          </CopyToClipboard>
          <Link to={`/tx/${hash}`}>
            <span className="text-[14px] text-primary dark:text-[#69FABD] leading-[20px] w-[170px] text-ellipsis overflow-hidden whitespace-nowrap block">
              {hash}
            </span>
          </Link>
        </div>
      </th>
      <td className="px-2 py-4 m-0 border-t-[1px] text-start dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex text-start">
          <span className="w-[100px] block rounded px-1 py-[2px] text-center whitespace-nowrap overflow-hidden text-ellipsis text-[12px] leading-[24px] bg-[#eff8ff] dark:bg-[#3660ad] text-fontSecondary dark:text-darkFontPrimary">
            {method}
          </span>
        </div>
      </td>
      <td className="px-2 py-4 text-start m-0 border-t-[1px] dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex flex-row items-center gap-[5px]">
          <CopyToClipboard text="">
            <Icon
              icon="mingcute:copy-3-line"
              rotate={3}
              width={14}
              height={14}
              className="text-primary dark:text-[#69FABD] mb-1 cursor-pointer"
            />
          </CopyToClipboard>
          <Link to={`/address/${from}`}>
            <span className="text-[14px] text-fontSecondary dark:text-darkFontPrimary leading-[20px] w-[180px] text-ellipsis overflow-hidden whitespace-nowrap block">
              {from}
            </span>
          </Link>
        </div>
      </td>
      <td className="px-2 py-4 m-0 border-t-[1px] text-start dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex text-start">
          <span className="w-[35px] rounded px-[5px] py-[6px] text-center font-bold whitespace-nowrap overflow-hidden text-ellipsis text-[10.8px] leading-normal bg-[#eff8ff] dark:bg-[#f7eacc] text-fontSecondary dark:text-[#b47d00]">
            {state}
          </span>
        </div>
      </td>
      <td className="px-2 py-4 text-start m-0 border-t-[1px] dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex flex-row items-center gap-[5px]">
          <CopyToClipboard text="">
            <Icon
              icon="mingcute:copy-3-line"
              rotate={3}
              width={14}
              height={14}
              className="text-primary dark:text-[#69FABD] mb-1 cursor-pointer"
            />
          </CopyToClipboard>
          <Link to={`/address/${to}`}>
            <span className="text-[14px] text-primary dark:text-[#69FABD] leading-[20px] w-[180px] text-ellipsis overflow-hidden whitespace-nowrap block">
              {to}
            </span>
          </Link>
        </div>
      </td>
      <td className="px-2 py-4 m-0 border-t-[1px] text-start dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex text-start">
          <span className="w-full rounded font-bold text-[14px] leading-[20px] text-start text-fontSecondary dark:text-darkFontPrimary">
            {value}&nbsp;ADR
          </span>
        </div>
      </td>
      <td className="px-2 py-4 m-0 border-t-[1px] text-start dark:border-darkColorSeparator border-colorSeparator">
        <div className="flex text-start">
          <span className="w-full min-w-[125px] rounded font-normal text-[14px] leading-[20px] text-start text-[#5f98c7]">
            {timestamp}
          </span>
        </div>
      </td>
    </tr>
  );
};

export default AddressBodyContent;
