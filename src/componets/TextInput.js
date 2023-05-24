import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../provider/GlobalProvider";

const TextInput = ({ className }) => {
  const [inputValue, setInputValue] = useState("");
    // const { inputValue, setInputValue } = useContext(GlobalContext);
  return (
    <div>
      <input
        className={`input-element ${className}`}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={(e) => console.log("key-down", e)}
        onKeyUp={(e) => console.log("key-up", e)}
        onFocus={(e) => console.log("focus", e)}
      />
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  className: "",
};

export default TextInput;
