import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useProgressBar } from "@react-aria/progress";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceProgressBarProps } from "@types-valence/progress";

// @valence-styles
import styles from "@valence-styles/components/barloader/vars.module.scss";

import { ProgressBarBase } from "./ProgressBarBase";

function ProgressBar(
  props: ValenceProgressBarProps,
  ref: DOMRef<HTMLDivElement>
) {
  let { variant, ...otherProps } = props;
  const { progressBarProps, labelProps } = useProgressBar(props);

  return (
    <ProgressBarBase
      {...otherProps}
      ref={ref}
      barProps={progressBarProps}
      labelProps={labelProps}
      barClassName={classNames(styles, {
        "BarLoader--overBackground": variant === "overBackground",
      })}
    />
  );
}

/**
 * ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way.
 * They can represent either determinate or indeterminate progress.
 */
let _ProgressBar = React.forwardRef(ProgressBar);
export { _ProgressBar as ProgressBar };
