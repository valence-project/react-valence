import React, { RefObject } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useButton } from "@react-aria/button";
import { useHover } from "@react-aria/interactions";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";
import { useProvider, useProviderProps } from "@react-valence/provider";

// @types-valence
import { AriaButtonProps } from "@types-valence/button";

// @valence-icons
import Plus from "@valence-icons/ui/AddLine";
import CaretDown from "@valence-icons/ui/ArrowDownSLine";
import CaretUp from "@valence-icons/ui/ArrowUpSLine";
import Dash from "@valence-icons/ui/SubtractLine";

// @valence-styles
import stepperStyle from "@valence-styles/components/stepper/vars.module.scss";

interface StepButtonProps extends AriaButtonProps {
  isQuiet: boolean;
  direction: "up" | "down";
}

function StepButton(props: StepButtonProps, ref: RefObject<HTMLDivElement>) {
  props = useProviderProps(props);
  let { scale } = useProvider();
  let { direction, isDisabled, isQuiet } = props;
  /**
   * Must use div for now because Safari pointer event bugs on disabled form elements.
   * Link https://bugs.webkit.org/show_bug.cgi?id=219188.
   */
  let { buttonProps, isPressed } = useButton(
    { ...props, elementType: "div" },
    ref
  );
  let { hoverProps, isHovered } = useHover(props);
  return (
    <FocusRing focusRingClass={classNames(stepperStyle, "focus-ring")}>
      <div
        className={classNames(stepperStyle, "Stepper-button", {
          "Stepper-button--stepUp": direction === "up",
          "Stepper-button--stepDown": direction === "down",
          "Stepper-button--isQuiet": isQuiet,
          "is-hovered": isHovered,
          "is-active": isPressed,
          "is-disabled": isDisabled,
        })}
        {...mergeProps(hoverProps, buttonProps)}
        ref={ref}
      >
        {direction === "up" && scale === "large" && (
          <Plus
            UNSAFE_className={classNames(
              stepperStyle,
              "Stepper-button-icon",
              "Stepper-stepUpIcon"
            )}
            size="S"
          />
        )}
        {direction === "up" && scale === "medium" && (
          <CaretUp
            UNSAFE_className={classNames(
              stepperStyle,
              "Stepper-button-icon",
              "Stepper-stepUpIcon"
            )}
          />
        )}
        {direction === "down" && scale === "large" && (
          <Dash
            UNSAFE_className={classNames(
              stepperStyle,
              "Stepper-button-icon",
              "Stepper-stepDownIcon"
            )}
            size="S"
          />
        )}
        {direction === "down" && scale === "medium" && (
          <CaretDown
            UNSAFE_className={classNames(
              stepperStyle,
              "Stepper-button-icon",
              "Stepper-stepDownIcon"
            )}
          />
        )}
      </div>
    </FocusRing>
  );
}

/**
 * Buttons for NumberField.
 */
let _StepButton = React.forwardRef(StepButton);
export { _StepButton as StepButton };
