import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _RadarLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18.759 5.434l-1.534 2.658c-4.365 -1.319 -8.271 -0.675 -9.616 1.657 -1.767 3.06 1.185 8.478 7.017 11.846s12 3.213 13.767 0.154c1.347 -2.333 -0.05 -6.036 -3.373 -9.158l1.534 -2.658c4.623 4.064 6.694 9.405 4.437 13.316 -2.79 4.833 -10.784 5.032 -17.865 0.945C6.043 20.103 2.22 13.082 5.01 8.25c2.257 -3.911 7.92 -4.788 13.749 -2.816zm5.067 -2.775l2.598 1.5 -7.5 12.99 -2.598 -1.5 7.5 -12.99zM10.098 30H25.5v3H7.526a1.492 1.492 0 0 1 -1.325 -0.75 1.507 1.507 0 0 1 0 -1.5l3.375 -5.845 2.598 1.5L10.098 30z" />
      </svg>
    </Icon>
  );
}
