import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _Heart2Line(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M30.364 7.135c3.393 3.402 3.51 8.82 0.354 12.354l-12.72 12.738 -12.717 -12.738c-3.156 -3.534 -3.037 -8.961 0.354 -12.354 3.397 -3.396 8.832 -3.51 12.366 -0.342 3.524 -3.163 8.969 -3.059 12.363 0.342zM7.758 9.258c-2.235 2.235 -2.348 5.813 -0.288 8.176L18 27.981l10.53 -10.545c2.061 -2.365 1.948 -5.939 -0.289 -8.181 -2.231 -2.235 -5.821 -2.343 -8.18 -0.279l-6.303 6.305 -2.123 -2.121 4.238 -4.24 -0.123 -0.104c-2.362 -1.897 -5.816 -1.736 -7.992 0.443z" />
      </svg>
    </Icon>
  );
}
