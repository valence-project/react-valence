import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ListSettingsLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M3 27h10.5v3H3v-3zm0 -10.5h13.5v3H3v-3zm0 -10.5h30v3H3V6zm28.011 13.538l1.734 -0.587 1.5 2.598 -1.374 1.208a6.026 6.026 0 0 1 0 2.487l1.374 1.208 -1.5 2.598 -1.734 -0.587c-0.615 0.555 -1.347 0.983 -2.152 1.245L28.5 31.5h-3l-0.36 -1.794a5.994 5.994 0 0 1 -2.151 -1.245l-1.734 0.588 -1.5 -2.598 1.374 -1.208a6.026 6.026 0 0 1 0 -2.487l-1.374 -1.208 1.5 -2.598 1.734 0.587c0.615 -0.555 1.347 -0.983 2.152 -1.245L25.5 16.5h3l0.36 1.794c0.804 0.261 1.536 0.69 2.151 1.245zM27 27a3 3 0 1 0 0 -6 3 3 0 0 0 0 6z" />
      </svg>
    </Icon>
  );
}
