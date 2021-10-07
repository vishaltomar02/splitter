import React from "react";

export default function TipTag(props) {
  const { tipValue, handleTip, selected } = props;
  return (
    <span
      className={`tip-tag${selected ? " selected" : ""}`}
      role="button"
      onClick={() => handleTip(tipValue)}
    >
      <p className="tip-tag-text">{tipValue}%</p>
    </span>
  );
}
