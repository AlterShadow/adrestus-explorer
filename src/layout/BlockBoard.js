import { Link } from "react-router-dom";
import {
  BlockPanelBodyParams,
  BlockPanelHeaderParams,
} from "../utils/constants/BlockParams";

const BlockBoard = () => {
  return (
    <div className="flex flex-col p-0 bg-white border-[1px] dark:bg-darkPrimary border-colorSeparator dark:border-darkColorSeparator rounded-lg max-w-full w-[49%]">
      <div className="p-4 h-[62px] border-b-[1px] border-colorSeparator dark:border-darkColorSeparator flex flex-row justify-between items-center">
        <span className="text-[18px] leading-[24px] font-bold text-fontSecondary dark:text-darkFontPrimary">
          Latest Blocks
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
                {BlockPanelHeaderParams.map((item, index) => {
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
              {BlockPanelBodyParams.map((item, index) => {
                return (
                  <tr
                    className="[&>*:last-child]:text-right text-[14px]"
                    key={index}
                  >
                    <td className="text-start py-4 border-b-[1px] border-colorSeparator dark:border-darkColorSeparator">
                      <div className="max-w-[125px] text-fontPrimary dark:text-darkIconColor">
                        {item.Hash}
                      </div>
                    </td>
                    <td className="text-start py-4 border-b-[1px] border-colorSeparator dark:border-darkColorSeparator">
                      <Link to={`/block/${item.Height}`}>
                        <div className="max-w-[125px] text-primary dark:text-darkIconColor">
                          {item.Height}
                        </div>
                      </Link>
                    </td>
                    <td className="text-start py-4 border-b-[1px] border-colorSeparator dark:border-darkColorSeparator">
                      <div className="max-w-[125px] text-fontPrimary">
                        {item.Size}
                      </div>
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
          {/* <Link to="/blocks/"> */}
          <button className="w-full border-[1px] border-colorSeparator dark:border-darkColorSeparator text-primary dark:text-darkIconColor text-[12px] font-bold rounded-[4px] py-2 px-[5px] bg-transparent transition-all duration-300 delay-0 hover:tracking-[0.3px]">
            VIEW ALL BLOCKS
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default BlockBoard;
