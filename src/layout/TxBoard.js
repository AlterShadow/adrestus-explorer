import { Link } from "react-router-dom";
import {
  TxPanelHeaderParams,
  TxPanelBodyParams,
} from "../utils/constants/TxParams";
import { abbreviateString } from "../utils/abbreviateString.js";

const TxBoard = () => {
  return (
    <div className="flex flex-col p-0 bg-white dark:bg-darkPrimary border-[1px] border-colorSeparator dark:border-darkColorSeparator rounded-lg max-w-full w-[49%]">
      <div className="p-4 h-[62px] border-b-[1px] border-colorSeparator dark:border-darkColorSeparator flex flex-row justify-between items-center">
        <span className="text-[18px] leading-[24px] font-bold text-fontSecondary dark:text-darkFontPrimary">
          Latest Transactions
        </span>
        <div className=""></div>
      </div>
      <div className="flex flex-col p-6 max-w-full min-w-0 min-h-0 h-[690px] justify-between">
        <div
          className="overflow-x-auto overflow-y-hidden flex flex-col max-w-full"
          id="Scrollbar"
        >
          <table className="w-full min-w-[620px] relative border-spacing-0 border-separate h-auto">
            <thead>
              <tr className="[&>*:last-child]:text-right">
                {TxPanelHeaderParams.map((item, index) => {
                  return (
                    <th key={index} className="p-0 m-0 text-start">
                      <span className="text-[14px] text-fontPrimary dark:text-darkHeaderColor font-light leading-[20px]">
                        {item}
                      </span>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {TxPanelBodyParams.map((item, index) => {
                return (
                  <tr
                    className="[&>*:last-child]:text-right text-[14px]"
                    key={index}
                  >
                    <td className="text-start py-4 border-b-[1px] border-colorSeparator dark:border-darkColorSeparator">
                      <Link to={`/tx/${item.Hash}`}>
                        <div className="max-w-[125px]  text-primary dark:text-darkIconColor">
                          {abbreviateString(item.Hash)}
                        </div>
                      </Link>
                    </td>
                    <td className="text-start py-4 border-b-[1px] border-colorSeparator dark:border-darkColorSeparator">
                      <div className="max-w-[125px] text-fontPrimary">
                        {item.TxType}
                      </div>
                    </td>
                    <td className="text-start py-4 border-b-[1px] border-colorSeparator dark:border-darkColorSeparator">
                      <Link to={`/address/${item.From}`}>
                        <div className="max-w-[125px] text-primary dark:text-darkIconColor">
                          {abbreviateString(item.From)}
                        </div>
                      </Link>
                    </td>
                    <td className="text-start py-4 border-b-[1px] border-colorSeparator dark:border-darkColorSeparator">
                      <Link to={`/address/${item.To}`}>
                        <div className="max-w-[125px] text-primary dark:text-darkIconColor">
                          {abbreviateString(item.To)}
                        </div>
                      </Link>
                    </td>
                    <td className="text-left py-4 border-b-[1px] border-colorSeparator dark:border-darkColorSeparator">
                      <span className="max-w-[125px] text-fontPrimary">
                        {item.Timestamp}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="w-full pt-6">
          {/* <Link to="/transactions/"> */}
          <button className="w-full border-[1px] border-colorSeparator dark:border-darkColorSeparator text-primary dark:text-darkIconColor text-[12px] font-bold rounded-[4px] py-2 px-[5px] bg-transparent transition-all duration-300 delay-0 hover:tracking-[0.3px]">
            VIEW ALL TRANSACTIONS
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default TxBoard;
