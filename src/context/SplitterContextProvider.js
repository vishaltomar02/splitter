import React, { useState } from "react";
import { SplitterContext } from "./SpitterContext";

export default function SplitterContextProvider({ children }) {
  const [reset, setReset] = useState(false);

  const [splitterValues, setSplitterValues] = useState({
    bill: "",
    noOfPeople: "",
    tipValue: "",
  });

  function changeSplitterValues(values) {
    setSplitterValues((prev) => {
      return {
        ...prev,
        ...values,
      };
    });
  }

  return (
    <SplitterContext.Provider
      value={{ reset, setReset, splitterValues, changeSplitterValues }}
    >
      {children}
    </SplitterContext.Provider>
  );
}
