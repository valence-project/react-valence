import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useMeter } from "@react-aria/meter";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";
import { ProgressBarBase } from "@react-valence/progress";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceMeterProps } from "@types-valence/meter";

// @valence-styles
import styles from "@valence-styles/components/barloader/vars.module.scss";

function Meter(props: ValenceMeterProps, ref: DOMRef<HTMLDivElement>) {
  let { variant, ...otherProps } = props;
  const { meterProps, labelProps } = useMeter(props);

  return (
    <ProgressBarBase
      {...otherProps}
      ref={ref}
      barProps={meterProps}
      labelProps={labelProps}
      barClassName={classNames(styles, "BarLoader", {
        "is-positive": variant === "positive",
        "is-warning": variant === "warning",
        "is-critical": variant === "critical",
      })}
    />
  );
}

/**
 * Meters are visual representations of a quantity or an achievement.
 * Their progress is determined by user actions, rather than system actions.
 */
let _Meter = React.forwardRef(Meter);
export { _Meter as Meter };
