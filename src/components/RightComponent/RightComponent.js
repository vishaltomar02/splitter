import React, { useContext } from "react";
import { SplitterContext } from "../../context/SpitterContext";

export default function RightComponent() {
  const {
    splitterValues: { tipValue, noOfPeople, bill },
    setReset,
  } = useContext(SplitterContext);

  function showPerPerson(type) {
    const tipPercentOfbill = (Number(bill) * Number(tipValue)) / 100;
    if (bill && tipValue && noOfPeople && noOfPeople !== "0") {
      return (
        (type === "tip" ? tipPercentOfbill : Number(bill) + tipPercentOfbill) /
        Number(noOfPeople)
      ).toFixed(2);
    }
  }

  return (
    <div className="right-component">
      <div className="amount-wrapper">
        <div className="amount">
          <div className="amount__type">
            <h5 className="amount__heading">Tip Amount</h5>
            <p className="amount__sub-heading">/ person</p>
          </div>
          <h3 className="amount__value">${showPerPerson("tip")}</h3>
        </div>
        <div className="amount">
          <div className="amount__type">
            <h5 className="amount__heading">Total</h5>
            <p className="amount__sub-heading">/ person</p>
          </div>
          <h3 className="amount__value">${showPerPerson("total-bill")}</h3>
        </div>
      </div>
      <div className="reset-button-container">
        <button
          className="reset-button"
          type="button"
          onClick={() => setReset(true)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
