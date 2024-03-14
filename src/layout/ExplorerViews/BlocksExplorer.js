import { useParams } from "react-router-dom";
const BlocksExplorer = () => {
  const Id = useParams();

  return (
    <>
      <h2 className="dark:text-white text-black">BlocksExplorer</h2>
    </>
  );
};

export default BlocksExplorer;
