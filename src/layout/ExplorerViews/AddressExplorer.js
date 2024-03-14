import { useParams } from "react-router-dom";

import AddressView from "../../components/ExplorerView/AddressView/AddressView";
import BalanceView from "../../components/ExplorerView/AddressView/BalanceView";
import StakedView from "../../components/ExplorerView/AddressView/StakedView";
import TokenView from "../../components/ExplorerView/AddressView/TokenView";
import Pagination from "../../components/ExplorerView/AddressView/Pagination";
import AddressHeader from "../../components/ExplorerView/AddressView/AddressHeader";
import AddressBodyContent from "../../components/ExplorerView/AddressView/AddressBodyContent";
import CSVExport from "../../components/ExplorerView/AddressView/CSVExport";

import filter_address from "../../utils/filterParams/filter_address";

const AddressExplorer = () => {
  const { id } = useParams();

  let content = filter_address(id);

  return (
    <>
      <div className="max-w-[1408px] min-w-[343px] w-full flex flex-col px-5 mx-auto pb-6">
        <div className="pb-6">
          <h1 className="text-[26px] font-semibold max-w-[1200px] leading-normal dark:text-darkFontPrimary text-fontSecondary text-left">
            Address
          </h1>
        </div>
        <div className="rounded-lg overflow-x-auto flex flex-col bg-white dark:bg-darkPrimary p-6 border-[1px] dark:border-darkColorSeparator border-colorSeparator">
          <div className="flex flex-col">
            <AddressView value={id} />
            <BalanceView value="4885.308" />
            <StakedView value="0" />
            <TokenView value="ADR" />
          </div>
        </div>
        <div className="pt-4">
          <div className="rounded-lg overflow-x-auto flex flex-col bg-white dark:bg-darkPrimary p-6 border-[1px] dark:border-darkColorSeparator border-colorSeparator">
            <div className="flex flex-col">
              {/* Tab Index */}
              <div className=""></div>
              {/* MainBoard */}
              <div className="p-[10px] flex flex-col">
                <Pagination current={1} total={1} />
                <div
                  className="overflow-auto transition-all duration-100 min-h-[600px] flex flex-col"
                  id="Scrollbar"
                >
                  <table className="w-full min-w-[1266px] table-auto relative border-spacing-0 border-separate h-auto">
                    <AddressHeader />
                    <tbody>
                      {content.map((item, index) => (
                        <AddressBodyContent
                          key={index}
                          hash={item.Hash}
                          method="Deposit"
                          from={item.From}
                          state="OUT"
                          to={item.To}
                          value="123"
                          timestamp={item.Timestamp}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="pt-6 flex flex-row justify-between items-center">
                  <div></div>
                  <Pagination current={1} total={1} />
                </div>
                <CSVExport id={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressExplorer;
