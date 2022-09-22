import React, { CSSProperties, HTMLAttributes } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { clamp } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ProgressBarProps } from "@types-valence/progress";
import { ValenceProgressBarBaseProps } from "@types-valence/progress";

// @valence-styles
import styles from "@valence-styles/components/barloader/vars.module.scss";

interface ProgressBarBaseProps
  extends ValenceProgressBarBaseProps,
    ProgressBarProps {
  barClassName?: string;
  barProps?: HTMLAttributes<HTMLDivElement>;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
}

// Base ProgressBar component shared with Meter.
function ProgressBarBase(
  props: ProgressBarBaseProps,
  ref: DOMRef<HTMLDivElement>
) {
  let {
    value = 0,
    minValue = 0,
    maxValue = 100,
    size = "L",
    label,
    barClassName,
    showValueLabel = !!label,
    labelPosition = "top",
    isIndeterminate = false,
    barProps,
    labelProps,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    ...otherProps
  } = props;
  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(otherProps);

  value = clamp(value, minValue, maxValue);

  let barStyle: CSSProperties = {};
  if (!isIndeterminate) {
    let percentage = (value - minValue) / (maxValue - minValue);
    barStyle.width = `${Math.round(percentage * 100)}%`;
  }

  // Ideally this should be in useProgressBar, but children
  // are not supported in ProgressCircle which shares that hook...
  if (!label && !ariaLabel && !ariaLabelledby) {
    console.warn(
      "If you do not provide a visible label via children, you must specify an aria-label or aria-labelledby attribute for accessibility"
    );
  }
  // use inline style for fit-content because cssnano is too smart for us and will strip out the -moz prefix in css files
  return (
    <div
      {...barProps}
      ref={domRef}
      className={classNames(
        styles,
        "BarLoader",
        {
          "BarLoader--small": size === "S",
          "BarLoader--large": size === "L",
          "BarLoader--indeterminate": isIndeterminate,
          "BarLoader--sideLabel": labelPosition === "side",
        },
        barClassName,
        styleProps.className
      )}
      style={{ minWidth: "-moz-fit-content", ...styleProps.style }}
    >
      {label && (
        <span
          {...labelProps}
          className={classNames(styles, "BarLoader-label")}
        >
          {label}
        </span>
      )}
      {showValueLabel && (
        <div className={classNames(styles, "BarLoader-percentage")}>
          {barProps["aria-valuetext"]}
        </div>
      )}
      <div className={classNames(styles, "BarLoader-track")}>
        <div
          className={classNames(styles, "BarLoader-fill")}
          style={barStyle}
        />
      </div>
    </div>
  );
}

let _ProgressBarBase = React.forwardRef(ProgressBarBase);
export { _ProgressBarBase as ProgressBarBase };
