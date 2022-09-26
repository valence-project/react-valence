import React, { RefObject, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useHover } from "@react-aria/interactions";
import { useSliderThumb } from "@react-aria/slider";
import { VisuallyHidden } from "@react-aria/visually-hidden";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { SliderState } from "@react-stately/slider";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @types-valence
import { AriaSliderThumbProps } from "@types-valence/slider";

// @valence-styles
import styles from "@valence-styles/components/slider/vars.module.scss";

interface SliderThumbProps extends AriaSliderThumbProps {
  trackRef: RefObject<HTMLElement>;
  inputRef?: RefObject<HTMLInputElement>;
  state: SliderState;
}

export function SliderThumb(props: SliderThumbProps) {
  let { inputRef, state } = props;
  let backupRef = useRef<HTMLInputElement>();
  inputRef = inputRef || backupRef;

  let { thumbProps, inputProps, isDragging, isFocused } = useSliderThumb(
    {
      ...props,
      inputRef,
    },
    state
  );

  let { hoverProps, isHovered } = useHover({});

  return (
    <FocusRing within focusRingClass={styles["is-focused"]}>
      <div
        {...{
          className: classNames(styles, "Slider-handle", {
            "is-hovered": isHovered,
            "is-dragged": isDragging,
            "is-tophandle": isFocused,
          }),
          ...mergeProps(thumbProps, hoverProps),
          role: "presentation",
        }}
      >
        <VisuallyHidden>
          <input
            {...{
              className: styles["Slider-input"],
              ref: inputRef,
              ...inputProps,
            }}
          />
        </VisuallyHidden>
      </div>
    </FocusRing>
  );
}
