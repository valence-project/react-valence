import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _DisqusFill(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 3c8.284 0 15 6.716 15 15s-6.716 15 -15 15c-3.795 0 -7.26 -1.41 -9.902 -3.732L2.25 30l2.136 -5.696C3.495 22.388 3 20.252 3 18 3 9.716 9.716 3 18 3zM12 10.5v15h5.599l0.395 -0.006c5.063 -0.154 8.005 -3.316 8.005 -7.538v-0.041l-0.005 -0.323C25.845 13.434 22.815 10.5 17.685 10.5H12zm5.747 3.687c2.442 0 4.064 1.392 4.064 3.793v0.042l-0.007 0.274c-0.118 2.25 -1.707 3.518 -4.056 3.518h-1.662V14.187h1.662z" />
      </svg>
    </Icon>
  );
}
