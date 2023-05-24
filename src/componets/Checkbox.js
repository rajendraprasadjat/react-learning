import React, { useContext, useState } from "react";
import { GlobalContext } from "../provider/GlobalProvider";

function Checkbox() {
//   const { isChecked, setIsChecked } = useContext(GlobalContext);
    const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        id="checkbox"
        onClick={(e) => setIsChecked(!isChecked)}
        checked={isChecked}
      />
    </div>
  );
}

export default Checkbox;
