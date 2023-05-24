import React, { useState } from "react";

function withConfigData(Component) {
  function NewComponent(props) {
    const [value, setValue] = useState("");
    return (
      <Component
        {...props}
        value={value}
        setValue={(value) => setValue(value)}
      />
    );
  }
  return NewComponent;
}

export default withConfigData;
