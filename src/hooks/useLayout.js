import { useState } from "react";

function useLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return {
    isDarkMode,
    setIsDarkMode,
  };
}

export default useLayout;
