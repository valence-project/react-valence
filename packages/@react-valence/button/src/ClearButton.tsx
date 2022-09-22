import React, { ElementType } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useButton } from "@react-aria/button";
import { useHover } from "@react-aria/interactions";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  useFocusableRef,
  useStyleProps,
} from "@react-valence/utils";

// @types-valence
import { AriaButtonElementTypeProps, ButtonProps } from "@types-valence/button";
import { DOMProps, FocusableRef, StyleProps } from "@types-valence/shared";

// @valence-icons
import Close from "@valence-icons/ui/CloseFill";

// @valence-styles
import styles from "@valence-styles/components/button/vars.module.scss";

interface ClearButtonProps<T extends ElementType = "button">
  extends ButtonProps,
    AriaButtonElementTypeProps<T>,
    DOMProps,
    StyleProps {
  focusClassName?: string;
  variant?: "overBackground";
  excludeFromTabOrder?: boolean;
  preventFocus?: boolean;
}

function ClearButton(
  props: ClearButtonProps,
  ref: FocusableRef<HTMLButtonElement>
) {
  let {
    children = <Close UNSAFE_className={styles["Icon"]} />,
    focusClassName,
    variant,
    autoFocus,
    isDisabled,
    preventFocus,
    elementType = preventFocus ? "div" : ("button" as ElementType),
    ...otherProps
  } = props;
  let domRef = useFocusableRef(ref);
  let { buttonProps, isPressed } = useButton({ ...props, elementType }, domRef);
  let { hoverProps, isHovered } = useHover({ isDisabled });
  let { styleProps } = useStyleProps(otherProps);

  // For cases like the clear button in a search field, remove the tabIndex so
  // iOS 14 with VoiceOver doesn't focus the button and hide the keyboard when
  // moving the cursor over the clear button.
  if (preventFocus) {
    delete buttonProps.tabIndex;
  }

  let ElementType = elementType;
  return (
    <FocusRing
      focusRingClass={classNames(styles, "focus-ring", focusClassName)}
      autoFocus={autoFocus}
    >
      <ElementType
        {...styleProps}
        {...mergeProps(buttonProps, hoverProps)}
        ref={domRef}
        className={classNames(
          styles,
          "ClearButton",
          {
            [`ClearButton--${variant}`]: variant,
            "is-disabled": isDisabled,
            "is-active": isPressed,
            "is-hovered": isHovered,
          },
          styleProps.className
        )}
      >
        {children}
      </ElementType>
    </FocusRing>
  );
}

let _ClearButton = React.forwardRef(ClearButton);
export { _ClearButton as ClearButton };
