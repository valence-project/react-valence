import React, { useRef, useState } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useColorSlider } from "@react-aria/color";
import { useFocus, useFocusVisible } from "@react-aria/interactions";
import { useLocale } from "@react-aria/i18n";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useColorSliderState } from "@react-stately/color";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  useFocusableRef,
  useStyleProps,
} from "@react-valence/utils";
import { Flex } from "@react-valence/layout";
import { Label } from "@react-valence/label";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceColorSliderProps } from "@types-valence/color";

// @valence-styles
import styles from "@valence-styles/components/colorslider/vars.module.scss";

import { ColorThumb } from "./ColorThumb";

function ColorSlider(
  props: ValenceColorSliderProps,
  ref: FocusableRef<HTMLDivElement>
) {
  props = useProviderProps(props);

  let {
    isDisabled,
    channel,
    orientation,
    label,
    showValueLabel,
    "aria-label": ariaLabel,
  } = props;
  let vertical = orientation === "vertical";

  let { styleProps } = useStyleProps(props);
  let { locale } = useLocale();

  let inputRef = useRef(null);
  let trackRef = useRef(null);
  let domRef = useFocusableRef(ref, inputRef);

  let state = useColorSliderState({ ...props, locale });

  // If vertical and a label is provided, use it as an aria-label instead.
  if (vertical && label) {
    ariaLabel = ariaLabel || (typeof label === "string" ? label : undefined);
    label = null;
  }

  // If no external label, aria-label or aria-labelledby is provided,
  // default to displaying the localized channel value.
  // Specifically check if label is undefined. If label is `null` then display no visible label.
  // A default aria-label is provided by useColorSlider in that case.
  if (
    label === undefined &&
    !ariaLabel &&
    !props["aria-labelledby"] &&
    !vertical
  ) {
    label = state.value.getChannelName(channel, locale);
  }

  // Show the value label by default if there is a visible label
  if (showValueLabel == null) {
    showValueLabel = !!label;
  }

  let { inputProps, thumbProps, trackProps, labelProps, outputProps } =
    useColorSlider(
      {
        ...props,
        label,
        "aria-label": ariaLabel,
        trackRef,
        inputRef,
      },
      state
    );

  let { isFocusVisible } = useFocusVisible();
  let [isFocused, setIsFocused] = useState(false);
  let { focusProps } = useFocus({
    isDisabled,
    onFocusChange: setIsFocused,
  });

  let alignLabel;
  if (vertical) {
    alignLabel = "center";
  } else if (label != null && showValueLabel) {
    alignLabel = "space-between";
  } else if (label != null) {
    alignLabel = "flex-start";
  } else if (showValueLabel) {
    alignLabel = "flex-end";
  }

  return (
    <div
      ref={domRef}
      {...styleProps}
      className={classNames(styles, {
        "ColorSlider-container--horizontal": !vertical,
        "ColorSlider-container--vertical": vertical,
      })}
    >
      {label && (
        <Flex direction="row" justifyContent={alignLabel}>
          <Label {...labelProps}>{label}</Label>
          {showValueLabel && (
            <Label elementType="span">
              <output {...outputProps}>
                {state.value.formatChannelValue(channel, locale)}
              </output>
            </Label>
          )}
        </Flex>
      )}
      <div
        {...trackProps}
        ref={trackRef}
        className={classNames(styles, "ColorSlider", {
          "is-disabled": isDisabled,
          "ColorSlider--vertical": vertical,
        })}
      >
        <ColorThumb
          value={state.getDisplayColor()}
          isFocused={isFocused && isFocusVisible}
          isDisabled={isDisabled}
          isDragging={state.isThumbDragging(0)}
          className={classNames(styles, "ColorSlider-handle")}
          {...thumbProps}
        >
          <input
            {...inputProps}
            {...focusProps}
            ref={inputRef}
            className={classNames(styles, "ColorSlider-slider")}
          />
        </ColorThumb>
      </div>
    </div>
  );
}

/**
 * ColorSliders allow users to adjust an individual channel of a color value.
 */
let _ColorSlider = React.forwardRef(ColorSlider);
export { _ColorSlider as ColorSlider };
