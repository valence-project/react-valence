import React, { useCallback, useEffect, useRef, useState } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useColorWheel } from "@react-aria/color";
import { useFocusRing } from "@react-aria/focus";
import { useResizeObserver } from "@react-aria/utils";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useColorWheelState } from "@react-stately/color";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  dimensionValue,
  useFocusableRef,
  useStyleProps,
} from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceColorWheelProps } from "@types-valence/color";

// @valence-styles
import styles from "@valence-styles/components/colorwheel/vars.module.scss";

import { ColorThumb } from "./ColorThumb";

const WHEEL_THICKNESS = 24;

function ColorWheel(
  props: ValenceColorWheelProps,
  ref: FocusableRef<HTMLDivElement>
) {
  props = useProviderProps(props);

  let { isDisabled } = props;
  let size = props.size && dimensionValue(props.size);
  let { styleProps } = useStyleProps(props);

  let inputRef = useRef(null);
  let containerRef = useFocusableRef(ref, inputRef);

  let [wheelRadius, setWheelRadius] = useState<number>(0);
  let [wheelThickness, setWheelThickness] = useState(WHEEL_THICKNESS);

  let resizeHandler = useCallback(() => {
    if (containerRef.current) {
      setWheelRadius(containerRef.current.offsetWidth / 2);
      let thickness = window
        .getComputedStyle(containerRef.current)
        .getPropertyValue("--valence-colorwheel-track-thickness");
      if (thickness) {
        setWheelThickness(parseInt(thickness, 10));
      }
    }
  }, [containerRef, setWheelRadius, setWheelThickness]);

  useEffect(() => {
    // the size observer's fallback to the window resize event doesn't fire on mount
    if (wheelRadius === 0) {
      resizeHandler();
    }
  }, [wheelRadius, resizeHandler]);

  useResizeObserver({
    ref: containerRef,
    onResize: resizeHandler,
  });

  let state = useColorWheelState(props);

  let { trackProps, inputProps, thumbProps } = useColorWheel(
    {
      ...props,
      innerRadius: wheelRadius - wheelThickness,
      outerRadius: wheelRadius,
    },
    state,
    inputRef
  );

  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      className={classNames(
        styles,
        "ColorWheel",
        {
          "is-disabled": isDisabled,
        },
        styleProps.className
      )}
      ref={containerRef}
      style={{
        ...styleProps.style,
        // Workaround around https://github.com/adobe/spectrum-css/issues/1032
        // @ts-ignore
        width: size,
        height: size,
      }}
    >
      <div
        {...trackProps}
        className={classNames(styles, "ColorWheel-gradient")}
      />
      <ColorThumb
        value={state.getDisplayColor()}
        isFocused={isFocusVisible}
        isDisabled={isDisabled}
        isDragging={state.isDragging}
        className={classNames(styles, "ColorWheel-handle")}
        {...thumbProps}
      >
        <input
          {...focusProps}
          className={classNames(styles, "ColorWheel-slider")}
          {...inputProps}
          ref={inputRef}
        />
      </ColorThumb>
    </div>
  );
}

/**
 * ColorWheels allow users to adjust the hue of an HSL or HSB color value on a circular track.
 */
let _ColorWheel = React.forwardRef(ColorWheel);
export { _ColorWheel as ColorWheel };
