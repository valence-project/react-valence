import React, { ReactElement, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { mergeProps } from "@react-aria/utils";
import { useColorArea } from "@react-aria/color";
import { useFocusRing } from "@react-aria/focus";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useColorAreaState } from "@react-stately/color";

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
import { ValenceColorAreaProps } from "@types-valence/color";

// @valence-styles
import styles from "@valence-styles/components/colorarea/vars.module.scss";

import { ColorThumb } from "./ColorThumb";

function ColorArea(
  props: ValenceColorAreaProps,
  ref: FocusableRef<HTMLDivElement>
) {
  props = useProviderProps(props);

  let { isDisabled } = props;
  let size = props.size && dimensionValue(props.size);
  let { styleProps } = useStyleProps(props);

  let inputXRef = useRef(null);
  let inputYRef = useRef(null);
  let containerRef = useFocusableRef(ref, inputXRef);

  let state = useColorAreaState(props);

  let { colorAreaProps, gradientProps, xInputProps, yInputProps, thumbProps } =
    useColorArea({ ...props, inputXRef, inputYRef, containerRef }, state);
  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      {...colorAreaProps}
      className={classNames(
        styles,
        "ColorArea",
        {
          "is-disabled": isDisabled,
        },
        styleProps.className
      )}
      ref={containerRef}
      style={{
        ...colorAreaProps.style,
        ...styleProps.style,
        // Workaround around https://github.com/adobe/spectrum-css/issues/1032
        width: size,
        height: size,
      }}
    >
      <div
        {...gradientProps}
        className={classNames(styles, "ColorArea-gradient")}
      />
      <ColorThumb
        value={state.getDisplayColor()}
        isFocused={isFocusVisible}
        isDisabled={isDisabled}
        isDragging={state.isDragging}
        className={classNames(styles, "ColorArea-handle")}
        {...thumbProps}
      >
        <div role="presentation">
          <input
            className={classNames(styles, "ColorArea-slider")}
            {...mergeProps(xInputProps, focusProps)}
            ref={inputXRef}
          />
          <input
            className={classNames(styles, "ColorArea-slider")}
            {...mergeProps(yInputProps, focusProps)}
            ref={inputYRef}
          />
        </div>
      </ColorThumb>
    </div>
  );
}

/**
 * ColorArea allows users to adjust two channels of an RGB, HSL or HSB color value against a two-dimensional gradient background.
 */
let _ColorArea = React.forwardRef(ColorArea) as (
  props: ValenceColorAreaProps & { ref?: FocusableRef<HTMLDivElement> }
) => ReactElement;
export { _ColorArea as ColorArea };
