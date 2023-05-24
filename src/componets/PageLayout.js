import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../provider/GlobalProvider";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";

function PageLayout({ children }) {
  const {
    isShowDescription,
    setIsShowDescription,
    isChecked,
    setIsChecked,
    isDarkMode,
    setIsDarkMode,
    inputValue,
    setInputValue,
  } = useContext(GlobalContext);

  const [className, setClassName] = useState("active");

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("test--------------");
    return () => {
      console.log("unmount------------");
    };
  });

  console.log("inputRef.current.value", inputRef.current);
  useEffect(() => {
    console.log("called when input change");
    if (inputRef.current) {
    }
  }, [inputValue]);

  useEffect(() => {
    console.log("called when button change");
    if (isShowDescription) {
      setClassName("");
    } else {
      setClassName("active");
    }
  }, [isShowDescription]);

  return (
    <div
      style={{ background: isDarkMode ? "black" : "white" }}
      className={`${className}`}
    >
      {children}
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />

      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />

      {isShowDescription && <p>Value is true</p>}
      <button onClick={() => setIsShowDescription(!isShowDescription)}>
        {isShowDescription ? "Hide" : "Show"}
      </button>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default PageLayout;
