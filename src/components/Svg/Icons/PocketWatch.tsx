import React from "react";
import uniqueId from "lodash/uniqueId";
import Svg from "../Svg";
import {SvgProps} from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId("svg");

  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 14V24H34" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z"
        stroke="white" strokeWidth="4" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.1284 4.00049L6 9.14279" stroke="white" strokeWidth="4" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M42.0082 9.1423L35.8799 4" stroke="white" strokeWidth="4" strokeLinecap="round"
            strokeLinejoin="round"/>
    </svg>

  );
};

export default Icon;
