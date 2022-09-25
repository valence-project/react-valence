import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useButton } from "@react-aria/button";
import { useHover } from "@react-aria/interactions";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  clsx,
  SlotProvider,
  useFocusableRef,
  useSlotProps,
  useStyleProps,
} from "@react-valence/utils";
import { Text } from "@react-valence/text";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceActionButtonProps } from "@types-valence/button";

// @valence-icons
import CarrotRight from "@valence-icons/ui/ArrowRightSLine";

// @valence-styles
import styles from "@valence-styles/components/button/vars.module.scss";

function ActionButton(
  props: ValenceActionButtonProps,
  ref: FocusableRef<HTMLButtonElement>
) {
  props = useProviderProps(props);
  props = useSlotProps(props, "actionButton");
  let {
    isQuiet,
    isDisabled,
    staticColor,
    children,
    autoFocus,
    // @ts-ignore (private)
    holdAffordance,
    ...otherProps
  } = props;

  let domRef = useFocusableRef(ref);
  let { buttonProps, isPressed } = useButton(props, domRef);
  let { hoverProps, isHovered } = useHover({ isDisabled });
  let { styleProps } = useStyleProps(otherProps);
  let isTextOnly = React.Children.toArray(props.children).every(
    (c) => !React.isValidElement(c)
  );

  return (
    <FocusRing {...{ focusRingClass: styles["focus-ring"], autoFocus }}>
      <button
        {...{
          ...styleProps,
          ...mergeProps(buttonProps, hoverProps),
          ref: domRef,
          className: classNames(
            styles,
            "ActionButton",
            {
              "ActionButton--quiet": isQuiet,
              "ActionButton--staticColor": !!staticColor,
              "ActionButton--staticWhite": staticColor === "white",
              "ActionButton--staticBlack": staticColor === "black",
              "is-active": isPressed,
              "is-disabled": isDisabled,
              "is-hovered": isHovered,
            },
            styleProps.className
          ),
        }}
      >
        {holdAffordance && (
          <CarrotRight UNSAFE_className={styles["ActionButton-hold"]} />
        )}
        <SlotProvider
          slots={{
            icon: {
              size: "S",
              UNSAFE_className: styles["Icon"],
            },
            text: {
              UNSAFE_className: styles["ActionButton-label"],
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
 * ActionButtons allow users to perform an action.
 * They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention.
 */
let _ActionButton = React.forwardRef(ActionButton);
export { _ActionButton as ActionButton };
