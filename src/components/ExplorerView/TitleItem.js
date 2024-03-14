import { Icon } from "@iconify/react";

const TitleItem = ({ title }) => {
  return (
    <th className="bg-transparent py-4 px-2 m-0 w-1/3 text-start border-b-[1px] dark:border-darkColorSeparator border-colorSeparator">
      <div className="flex flex-row gap-[5px] items-center">
        <Icon
          icon="octicon:question-16"
          width={12}
          height={12}
          className="dark:text-darkFontPrimary text-fontSecondary"
        />
        <span className="text-[14px] dark:text-darkFontPrimary text-fontSecondary font-light">
          {title}
        </span>
      </div>
    </th>
  );
};

export default TitleItem;
