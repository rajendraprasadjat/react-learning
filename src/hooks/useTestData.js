import { useState } from "react";

export default function useTestData() {
  const [isShowDescription, setIsShowDescription] = useState(true);
  const [isChecked, setIsChecked] = useState(true);

  return {
    isShowDescription,
    setIsShowDescription,
    isChecked,
    setIsChecked,
  };
}
