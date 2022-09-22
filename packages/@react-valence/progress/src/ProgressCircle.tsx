import React, { CSSProperties } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { clamp } from "@react-aria/utils";
import { useProgressBar } from "@react-aria/progress";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceProgressCircleProps } from "@types-valence/progress";

// @valence-styles
import styles from "@valence-styles/components/circleloader/vars.module.scss";

function ProgressCircle(
  props: ValenceProgressCircleProps,
  ref: DOMRef<HTMLDivElement>
) {
  let {
    value = 0,
    minValue = 0,
    maxValue = 100,
    size = "M",
    variant,
    isIndeterminate = false,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    ...otherProps
  } = props;
  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(otherProps);

  value = clamp(value, minValue, maxValue);
  let { progressBarProps } = useProgressBar({ ...props, value });

  let subMask1Style: CSSProperties = {};
  let subMask2Style: CSSProperties = {};
  if (!isIndeterminate) {
    let percentage = ((value - minValue) / (maxValue - minValue)) * 100;
    let angle;
    if (percentage > 0 && percentage <= 50) {
      angle = -180 + (percentage / 50) * 180;
      subMask1Style.transform = `rotate(${angle}deg)`;
      subMask2Style.transform = "rotate(-180deg)";
    } else if (percentage > 50) {
      angle = -180 + ((percentage - 50) / 50) * 180;
      subMask1Style.transform = "rotate(0deg)";
      subMask2Style.transform = `rotate(${angle}deg)`;
    }
  }

  if (!ariaLabel && !ariaLabelledby) {
    console.warn(
      "ProgressCircle requires an aria-label or aria-labelledby attribute for accessibility"
    );
  }

  return (
    <div
      {...styleProps}
      {...progressBarProps}
      ref={domRef}
      className={classNames(
        styles,
        "CircleLoader",
        {
          "CircleLoader--indeterminate": isIndeterminate,
          "CircleLoader--small": size === "S",
          "CircleLoader--large": size === "L",
          "CircleLoader--overBackground": variant === "overBackground",
        },
        styleProps.className
      )}
    >
      <div className={classNames(styles, "CircleLoader-track")} />
      <div className={classNames(styles, "CircleLoader-fills")}>
        <div className={classNames(styles, "CircleLoader-fillMask1")}>
          <div
            className={classNames(styles, "CircleLoader-fillSubMask1")}
            data-testid="fillSubMask1"
            style={subMask1Style}
          >
            <div className={classNames(styles, "CircleLoader-fill")} />
          </div>
        </div>
        <div className={classNames(styles, "CircleLoader-fillMask2")}>
          <div
            className={classNames(styles, "CircleLoader-fillSubMask2")}
            data-testid="fillSubMask2"
            style={subMask2Style}
          >
            <div className={classNames(styles, "CircleLoader-fill")} />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ProgressCircles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way.
 * They can represent determinate or indeterminate progress.
 */
let _ProgressCircle = React.forwardRef(ProgressCircle);
export { _ProgressCircle as ProgressCircle };
