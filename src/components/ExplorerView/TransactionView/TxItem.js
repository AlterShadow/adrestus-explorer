import TitleItem from "../TitleItem";

const TxItem = ({ title, value }) => {
  return (
    <tr>
      <TitleItem title={title} />
      <td className="text-left bg-transparent py-4 px-2 w-2/3 border-b-[1px] dark:border-darkColorSeparator border-colorSeparator">
        <div className="max-w-[700px] items-baseline flex flex-row w-full">
          <div className="flex flex-row items-center gap-[5px]">
            <span className="text-[14px] text-fontSecondary dark:text-darkFontPrimary leading-[20px]">
              {value}
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TxItem;
