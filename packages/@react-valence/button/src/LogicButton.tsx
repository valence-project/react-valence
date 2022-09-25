import React from "react";

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
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceLogicButtonProps } from "@types-valence/button";

// @valence-styles
import styles from "@valence-styles/components/button/vars.module.scss";

function LogicButton(
  props: ValenceLogicButtonProps,
  ref: FocusableRef<HTMLButtonElement>
) {
  props = useProviderProps(props);
  let { variant, children, isDisabled, autoFocus, ...otherProps } = props;
  let domRef = useFocusableRef(ref);
  let { buttonProps, isPressed } = useButton(props, domRef);
  let { hoverProps, isHovered } = useHover({ isDisabled });
  let { styleProps } = useStyleProps(otherProps);

  return (
    <FocusRing {...{ focusRingClass: styles["focus-ring"], autoFocus }}>
      <button
        {...{
          ...styleProps,
          ...mergeProps(buttonProps, hoverProps),
          ref: domRef,
          className: classNames(
            styles,
            "LogicButton",
            {
              [`LogicButton--${variant}`]: variant,
              "is-disabled": isDisabled,
              "is-active": isPressed,
              "is-hovered": isHovered,
            },
            styleProps.className
          ),
        }}
      >
        <span className={styles["Button-label"]}>{children}</span>
      </button>
    </FocusRing>
  );
}

/**
 * A LogicButton displays an operator within a boolean logic sequence.
 */
let _LogicButton = React.forwardRef(LogicButton);
export { _LogicButton as LogicButton };
