import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HeartAddLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M28.5 21v4.5h4.5v3h-4.502L28.5 33h-3l-0.002 -4.5H21v-3h4.5v-4.5h3zm1.865 -13.864c3.393 3.402 3.51 8.82 0.354 12.352l-2.13 -2.127c1.996 -2.286 1.891 -5.871 -0.348 -8.106 -2.254 -2.248 -5.88 -2.345 -8.235 -0.229l-2.002 1.797 -2.004 -1.796c-2.362 -2.118 -5.987 -2.025 -8.241 0.231 -2.235 2.235 -2.348 5.813 -0.288 8.176l12.648 12.669L18 32.227 5.28 19.489c-3.156 -3.534 -3.037 -8.961 0.354 -12.354 3.397 -3.396 8.832 -3.51 12.366 -0.342 3.524 -3.163 8.969 -3.059 12.363 0.342z" />
      </svg>
    </Icon>
  );
}
