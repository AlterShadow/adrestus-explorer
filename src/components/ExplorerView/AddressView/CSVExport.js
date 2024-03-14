import { Link } from "react-router-dom";

const CSVExport = ({ id }) => {
  return (
    <div className="flex flex-row w-full justify-end">
      <span className="text-[12px] inline-block dark:text-[#5f98c7] text-[#758796]">
        [ Download{" "}
        <Link
          to={`/exportData/${id}`}
          className=" dark:text-darkIconColor text-primary"
        >
          CSV export
        </Link>{" "}
        ]
      </span>
    </div>
  );
};

export default CSVExport;
