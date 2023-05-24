import { createContext, useState } from "react";
import useTestData from "../hooks/useTestData";
import useLayout from "../hooks/useLayout";

export const GlobalContext = createContext({});

function GlobalProvider({ children, ...props }) {
  const { isShowDescription, setIsShowDescription, isChecked, setIsChecked } =
    useTestData();
  const { isDarkMode, setIsDarkMode } = useLayout();
  const [inputValue, setInputValue] = useState("");
  const [listData, setListData] = useState([
    { id: 1, name: "Test - 1" },
    { id: 2, name: "Test - 2" },
    { id: 3, name: "Test - 3" },
    { id: 4, name: "Test - 4" },
    { id: 5, name: "Test - 5" },
  ]);

  const data = {
    isShowDescription,
    setIsShowDescription,
    isChecked,
    setIsChecked,
    isDarkMode,
    setIsDarkMode,
    googleApiKey: props.googleApiKey,
    inputValue,
    setInputValue,
    listData,
    setListData,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}

export default GlobalProvider;
