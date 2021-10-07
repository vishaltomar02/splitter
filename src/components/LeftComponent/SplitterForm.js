import React, { useState, useContext, useEffect } from "react";
import { SplitterContext } from "../../context/SpitterContext";
import SvgComponent from "../Svg/SvgComponent";
import { svgsObject } from "../Svg/svgsObject";
import TipTag from "./TipTag";

const tipTags = [5, 10, 15, 25, 50];

export default function SplitterForm() {
  const [formValues, setFormValues] = useState({
    bill: "",
    tipValue: "",
    noOfPeople: "",
  });

  const [errors, setErrors] = useState({
    billError: "",
    noOfPeopleError: "",
  });

  const { changeSplitterValues, reset, setReset } = useContext(SplitterContext);

  useEffect(() => {
    changeSplitterValues({ ...formValues });
  }, [formValues]);

  useEffect(() => {
    if (reset) {
      setFormValues({
        bill: "",
        noOfPeople: "",
        tipValue: "",
      });

      setReset(false);
    }
  }, [reset]);

  function handleFormValues(e, inputName) {
    const value = e.target.value;
    if (value >= 0) {
      setFormValues((prev) => {
        return { ...prev, [inputName]: e.target.value };
      });
      setErrors((prev) => {
        return {
          ...prev,
          [e.target.name + "Error"]: e.target.value > 0 ? "" : "Can't be zero",
        };
      });
    } else {
      setFormValues((prev) => {
        return { ...prev, [inputName]: "0" };
      });
    }
  }

  function handleTip(value) {
    if (value >= 0) {
      setFormValues((prev) => {
        return { ...prev, tipValue: prev.tipValue === value ? "" : value };
      });
    } else {
      setFormValues((prev) => {
        return { ...prev, tipValue: "0" };
      });
    }
    // if (value > 0) changeSplitterValues(formValues);
  }
  return (
    <form onSubmit={() => console.log(formValues)}>
      <div className="input-container">
        <div className="d-flex justify-content-between">
          <label htmlFor="bill">Bill</label>
          {errors.billError && <p className="error-text">{errors.billError}</p>}
        </div>
        <div className="input-content">
          <SvgComponent classToAdd="absolute-positioned-svg">
            {svgsObject["dollar-icon"]}
          </SvgComponent>
          <input
            className={`${errors.billError ? "error-input" : ""}`}
            name="bill"
            id="bill-amount"
            value={formValues.bill}
            onChange={(e) => handleFormValues(e, "bill")}
            type="number"
            placeholder="0.00"
            // onBlur={(e) => handleBlurErrors(e)}
          />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="tipAmount">Select Tip %</label>
        <div className="tags-container">
          {tipTags.map((el) => {
            return (
              <TipTag
                key={el}
                selected={el === Number(formValues.tipValue)}
                tipValue={el}
                handleTip={handleTip}
              />
            );
          })}
          <input
            className="tip-tag tip-tag--input"
            name="tipValue"
            id="tip-value"
            value={formValues.tipValue}
            onChange={(e) => handleTip(e.target.value)}
            type="number"
            placeholder="Custom"
          />
        </div>
      </div>
      <div className="input-container">
        <div className="d-flex justify-content-between">
          <label htmlFor="billAmount">Number of People</label>
          {errors.noOfPeopleError && (
            <p className="error-text">{errors.noOfPeopleError}</p>
          )}
        </div>
        <div className="input-content">
          <SvgComponent classToAdd="absolute-positioned-svg">
            {svgsObject["person-icon"]}
          </SvgComponent>
          <input
            className={`${errors.noOfPeopleError ? "error-input" : ""}`}
            name="noOfPeople"
            id="no-of-people"
            value={formValues.noOfPeople}
            onChange={(e) => handleFormValues(e, "noOfPeople")}
            type="number"
            // onBlur={(e) => handleBlurErrors(e)}
            placeholder="0"
          />
        </div>
      </div>
    </form>
  );
}
