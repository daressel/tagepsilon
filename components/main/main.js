import MainLayout from "./main.layout";
import { memo, useState } from "react";

const Main = () => {
  const [qwe, setQwe] = useState("asd");

  return <MainLayout qwe={qwe} />;
};

export default memo(Main);
