import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _VolumeMuteLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M15 10.83L9.904 15H4.5v6h5.405L15 25.17V10.83zM8.834 24H3a1.5 1.5 0 0 1 -1.5 -1.5V13.5a1.5 1.5 0 0 1 1.5 -1.5h5.833l7.941 -6.498a0.75 0.75 0 0 1 1.225 0.581v23.835a0.75 0.75 0 0 1 -1.225 0.581L8.835 24zm21.788 -6l5.304 5.304 -2.121 2.121L28.5 20.121l-5.304 5.304 -2.121 -2.121L26.379 18 21.075 12.696l2.121 -2.121L28.5 15.879l5.304 -5.304 2.121 2.121L30.621 18z" />
      </svg>
    </Icon>
  );
}
