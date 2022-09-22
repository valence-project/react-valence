import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _UsbLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18 1.5l4.5 7.5h-3v11.072l4.5 -2.248 -0.002 -1.323H22.5V10.5h6v6h-1.501L27 19.677l-7.5 3.75v2.329c1.749 0.618 3 2.284 3 4.244 0 2.486 -2.014 4.5 -4.5 4.5s-4.5 -2.014 -4.5 -4.5c0 -1.78 1.035 -3.32 2.535 -4.05L9 21l-0.002 -3.402C8.103 17.079 7.5 16.11 7.5 15c0 -1.657 1.343 -3 3 -3s3 1.343 3 3c0 1.11 -0.603 2.08 -1.5 2.598V19.5l4.5 3.129V9H13.5l4.5 -7.5zm0 27c-0.828 0 -1.5 0.672 -1.5 1.5s0.672 1.5 1.5 1.5 1.5 -0.672 1.5 -1.5 -0.672 -1.5 -1.5 -1.5z" />
      </svg>
    </Icon>
  );
}
