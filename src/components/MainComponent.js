import React from "react";
import LeftComponent from "./LeftComponent/LeftComponent";
import RightComponent from "./RightComponent/RightComponent";
import SplitterContextProvider from "../context/SplitterContextProvider";
import SvgComponent from "./Svg/SvgComponent";
import { svgsObject } from "./Svg/svgsObject";

export default function MainComponent() {
  return (
    <SplitterContextProvider>
      <section className="main-component">
        <div className="logo-container d-flex justify-content-center">
          <SvgComponent classToAdd="logo">{svgsObject["logo"]}</SvgComponent>
        </div>
        <div className="main-component__container">
          <LeftComponent />
          <RightComponent />
        </div>
      </section>
    </SplitterContextProvider>
  );
}
