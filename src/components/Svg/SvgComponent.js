import React from "react";

export default function SvgComponent(props) {
  return <span className={`d-flex ${props.classToAdd}`}>{props.children}</span>;
}
