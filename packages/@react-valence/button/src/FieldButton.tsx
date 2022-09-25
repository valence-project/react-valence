import React, { RefObject } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useButton } from "@react-aria/button";
import { useHover } from "@react-aria/interactions";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  SlotProvider,
  useFocusableRef,
  useSlotProps,
  useStyleProps,
} from "@react-valence/utils";

// @types-valence
import { ButtonProps } from "@types-valence/button";
import { DOMProps, FocusableRef, StyleProps } from "@types-valence/shared";

// @valence-styles
import styles from "@valence-styles/components/button/vars.module.scss";

interface FieldButtonProps extends ButtonProps, DOMProps, StyleProps {
  isQuiet?: boolean;
  isActive?: boolean;
  validationState?: "valid" | "invalid";
  focusRingClass?: string;
}

// @private
function FieldButton(props: FieldButtonProps, ref: FocusableRef) {
  props = useSlotProps(props, "button");
  let {
    isQuiet,
    isDisabled,
    validationState,
    children,
    autoFocus,
    isActive,
    focusRingClass,
    ...otherProps
  } = props;
  let domRef = useFocusableRef(ref) as RefObject<HTMLButtonElement>;
  let { buttonProps, isPressed } = useButton(props, domRef);
  let { hoverProps, isHovered } = useHover({ isDisabled });
  let { styleProps } = useStyleProps(otherProps);

  return (
    <FocusRing
      {...{
        focusRingClass: classNames(styles, "focus-ring", focusRingClass),
        autoFocus,
      }}
    >
      <button
        {...{
          ...mergeProps(buttonProps, hoverProps),
          ref: domRef,
          className: classNames(
            styles,
            "FieldButton",
            {
              "FieldButton--quiet": isQuiet,
              "is-active": isActive || isPressed,
              "is-disabled": isDisabled,
              "FieldButton--invalid": validationState === "invalid",
              "is-hovered": isHovered,
            },
            styleProps.className
          ),
        }}
      >
        <SlotProvider
          slots={{
            icon: {
              size: "S",
              UNSAFE_className: styles["Icon"],
            },
          }}
        >
          {children}
        </SlotProvider>
      </button>
    </FocusRing>
  );
}

let _FieldButton = React.forwardRef(FieldButton);
export { _FieldButton as FieldButton };
