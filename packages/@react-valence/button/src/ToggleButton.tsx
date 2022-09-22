import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useHover } from "@react-aria/interactions";
import { useToggleButton } from "@react-aria/button";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useToggleState } from "@react-stately/toggle";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  SlotProvider,
  useFocusableRef,
  useStyleProps,
} from "@react-valence/utils";
import { Text } from "@react-valence/text";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceToggleButtonProps } from "@types-valence/button";

// @valence-styles
import styles from "@valence-styles/components/button/vars.module.scss";

function ToggleButton(
  props: ValenceToggleButtonProps,
  ref: FocusableRef<HTMLButtonElement>
) {
  props = useProviderProps(props);
  let {
    isQuiet,
    isDisabled,
    isEmphasized,
    staticColor,
    children,
    autoFocus,
    ...otherProps
  } = props;

  let domRef = useFocusableRef(ref);
  let state = useToggleState(props);
  let { buttonProps, isPressed } = useToggleButton(props, state, domRef);
  let { hoverProps, isHovered } = useHover({ isDisabled });
  let { styleProps } = useStyleProps(otherProps);
  let isTextOnly = React.Children.toArray(props.children).every(
    (c) => !React.isValidElement(c)
  );

  return (
    <FocusRing
      focusRingClass={classNames(styles, "focus-ring")}
      autoFocus={autoFocus}
    >
      <button
        {...styleProps}
        {...mergeProps(buttonProps, hoverProps)}
        ref={domRef}
        className={classNames(
          styles,
          "ActionButton",
          {
            "ActionButton--quiet": isQuiet,
            "ActionButton--emphasized": isEmphasized,
            "ActionButton--staticColor": !!staticColor,
            "ActionButton--staticWhite": staticColor === "white",
            "ActionButton--staticBlack": staticColor === "black",
            "is-active": isPressed,
            "is-disabled": isDisabled,
            "is-hovered": isHovered,
            "is-selected": state.isSelected,
          },
          styleProps.className
        )}
      >
        <SlotProvider
          slots={{
            icon: {
              size: "S",
              UNSAFE_className: classNames(styles, "Icon"),
            },
            text: {
              UNSAFE_className: classNames(
                styles,
                "ActionButton-label"
              ),
            },
          }}
        >
          {typeof children === "string" || isTextOnly ? (
            <Text>{children}</Text>
          ) : (
            children
          )}
        </SlotProvider>
      </button>
    </FocusRing>
  );
}

/**
 * ToggleButtons allow users to toggle a selection on or off, for example
 * switching between two states or modes.
 */
let _ToggleButton = React.forwardRef(ToggleButton);
export { _ToggleButton as ToggleButton };
