import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _StarSLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 25.5l-8.817 5.385 2.397 -10.05 -7.845 -6.72 10.297 -0.825L18 3.75l3.968 9.54 10.299 0.825 -7.846 6.72 2.397 10.05L18 25.5zm0 -3.516l4.226 2.58 -1.149 -4.815 3.761 -3.22 -4.935 -0.396L18 11.562l-1.902 4.571 -4.935 0.396 3.761 3.22 -1.149 4.815L18 21.986z" />
      </svg>
    </Icon>
  );
}
