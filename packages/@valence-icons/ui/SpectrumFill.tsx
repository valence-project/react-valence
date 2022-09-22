import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SpectrumFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.8 3.009C31.86 3.139 33 4.875 33 18l-0.009 1.8C32.861 31.86 31.125 33 18 33l-1.8 -0.009c-11.487 -0.124 -13.067 -1.704 -13.191 -13.192L3 17.537l0.009 -1.335c0.128 -11.775 1.785 -13.14 14.073 -13.2l2.716 0.007zM12.375 10.5h-0.874a1.001 1.001 0 0 0 -0.99 0.852L10.5 11.5v5.499c0 0.503 0.37 0.918 0.852 0.99l0.149 0.011h0.874a5.625 5.625 0 0 1 5.617 5.325l0.007 0.3v0.874c0 0.503 0.37 0.918 0.852 0.99l0.149 0.011h5.499a1.001 1.001 0 0 0 0.99 -0.852l0.011 -0.149v-0.874a13.125 13.125 0 0 0 -12.738 -13.119L12.375 10.5z" />
      </svg>
    </Icon>
  );
}
