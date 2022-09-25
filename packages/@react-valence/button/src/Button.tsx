import React, { ElementType, ReactElement } from "react";

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
  useHasChild,
  useSlotProps,
  useStyleProps,
} from "@react-valence/utils";
import { Text } from "@react-valence/text";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceButtonProps } from "@types-valence/button";

// @valence-styles
import styles from "@valence-styles/components/button/vars.module.scss";

// todo: CSS hasn't caught up yet, map
let VARIANT_MAPPING = {
  negative: "warning",
};

function Button<T extends ElementType = "button">(
  props: ValenceButtonProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  props = useProviderProps(props);
  props = useSlotProps(props, "button");
  let {
    elementType: ElementType = "button",
    children,
    variant,
    isQuiet,
    isDisabled,
    autoFocus,
    ...otherProps
  } = props;
  let domRef = useFocusableRef(ref);
  let { buttonProps, isPressed } = useButton(props, domRef);
  let { hoverProps, isHovered } = useHover({ isDisabled });
  let { styleProps } = useStyleProps(otherProps);
  let hasLabel = useHasChild(`.${styles["Button-label"]}`, domRef);
  let hasIcon = useHasChild(`.${styles["Icon"]}`, domRef);

  let buttonVariant = variant;
  if (VARIANT_MAPPING[variant]) {
    buttonVariant = VARIANT_MAPPING[variant];
  }

  return (
    <FocusRing {...{ focusRingClass: styles["focus-ring"], autoFocus }}>
      <ElementType
        {...{
          ...styleProps,
          ...mergeProps(buttonProps, hoverProps),
          ref: domRef,
          className: classNames(
            styles,
            "Button",
            `Button--${buttonVariant}`,
            {
              "Button--quiet": isQuiet,
              "Button--iconOnly": hasIcon && !hasLabel,
              "is-disabled": isDisabled,
              "is-active": isPressed,
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
            text: {
              UNSAFE_className: styles["Button-label"],
            },
          }}
        >
          {typeof children === "string" ? <Text>{children}</Text> : children}
        </SlotProvider>
      </ElementType>
    </FocusRing>
  );
}

/**
 * Buttons allow users to perform an action or to navigate to another page.
 * They have multiple styles for various needs, and are ideal for calling attention to
 * where a user needs to do something in order to move forward in a flow.
 */
let _Button = React.forwardRef(Button) as <T extends ElementType = "button">(
  props: ValenceButtonProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement;
export { _Button as Button };
