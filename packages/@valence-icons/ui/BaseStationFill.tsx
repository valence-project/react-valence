import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _BaseStationFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 19.5l9 13.5H9l9 -13.5zm-1.59 -3.66a2.25 2.25 0 1 1 3.18 -3.18 2.25 2.25 0 0 1 -3.18 3.18zM7.921 4.175l2.123 2.123a11.25 11.25 0 0 0 0 15.909l-2.123 2.123a14.25 14.25 0 0 1 0 -20.154zm20.154 0a14.25 14.25 0 0 1 0 20.154l-2.123 -2.123a11.25 11.25 0 0 0 0 -15.909l2.123 -2.123zM12.165 8.416l2.121 2.121a5.25 5.25 0 0 0 0 7.425l-2.121 2.121a8.25 8.25 0 0 1 0 -11.667zm11.667 0a8.25 8.25 0 0 1 0 11.667l-2.121 -2.121a5.25 5.25 0 0 0 0 -7.425l2.121 -2.121z" />
      </svg>
    </Icon>
  );
}
