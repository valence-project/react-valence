import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _HeartLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M18.002 6.793c3.524 -3.163 8.969 -3.059 12.363 0.342 3.393 3.402 3.51 8.82 0.354 12.354l-12.72 12.738 -12.717 -12.738c-3.156 -3.534 -3.037 -8.961 0.354 -12.354 3.397 -3.396 8.832 -3.51 12.366 -0.342zm10.239 2.462c-2.25 -2.253 -5.88 -2.345 -8.235 -0.229l-2.002 1.797 -2.004 -1.796c-2.362 -2.118 -5.985 -2.025 -8.241 0.231 -2.235 2.235 -2.348 5.813 -0.288 8.176L18 27.981l10.53 -10.545c2.061 -2.365 1.948 -5.939 -0.289 -8.181z" />
      </svg>
    </Icon>
  );
}
