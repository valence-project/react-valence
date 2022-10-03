import { useContext } from "react";
import { useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { isFocusVisible, useHover } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";
import { useOption } from "@react-aria/listbox";

// @react-valence https://valence.austinpittman.net
import { classNames, ClearSlots, SlotProvider } from "@react-valence/utils";
import { Grid } from "@react-valence/layout";
import { Text } from "@react-valence/text";

// @types-valence
import { Node } from "@types-valence/shared";

// @valence-icons
import Check from "@valence-icons/ui/CheckFill";

// @valence-styles
import styles from "@valence-styles/components/menu/vars.module.scss";

import { ListBoxContext } from "./ListBoxContext";

interface OptionProps<T> {
  item: Node<T>;
  shouldSelectOnPressUp?: boolean;
  shouldFocusOnHover?: boolean;
  shouldUseVirtualFocus?: boolean;
}

/** @private */
export function ListBoxOption<T>(props: OptionProps<T>) {
  let {
    item,
    shouldSelectOnPressUp,
    shouldFocusOnHover,
    shouldUseVirtualFocus,
  } = props;

  let { rendered, key } = item;

  let state = useContext(ListBoxContext);

  let ref = useRef<HTMLDivElement>();
  let {
    optionProps,
    labelProps,
    descriptionProps,
    isSelected,
    isDisabled,
    isFocused,
  } = useOption(
    {
      "aria-label": item["aria-label"],
      key,
      shouldSelectOnPressUp,
      shouldFocusOnHover,
      isVirtualized: true,
      shouldUseVirtualFocus,
    },
    state,
    ref
  );
  let { hoverProps, isHovered } = useHover({
    ...props,
    isDisabled,
  });

  let contents =
    typeof rendered === "string" ? <Text>{rendered}</Text> : rendered;

  let isKeyboardModality = isFocusVisible();

  return (
    <FocusRing focusRingClass={classNames(styles, "focus-ring")}>
      <div
        {...mergeProps(optionProps, shouldFocusOnHover ? {} : hoverProps)}
        ref={ref}
        className={classNames(styles, "Menu-item", {
          // If using virtual focus, apply focused styles to the item when the user is interacting with keyboard modality
          "is-focused":
            shouldUseVirtualFocus && isFocused && isKeyboardModality,
          "is-disabled": isDisabled,
          "is-selected": isSelected,
          "is-selectable": state.selectionManager.selectionMode !== "none",
          // When shouldFocusOnHover is false, apply hover styles both when hovered with the mouse.
          // Otherwise, apply hover styles when focused using non-keyboard modality.
          "is-hovered":
            (isHovered && !shouldFocusOnHover) ||
            (isFocused && !isKeyboardModality),
        })}
      >
        <Grid UNSAFE_className={classNames(styles, "Menu-itemGrid")}>
          <ClearSlots>
            <SlotProvider
              slots={{
                text: {
                  UNSAFE_className: styles["Menu-itemLabel"],
                  ...labelProps,
                },
                icon: {
                  size: "S",
                  UNSAFE_className: styles["Menu-icon"],
                },
                description: {
                  UNSAFE_className: styles["Menu-description"],
                  ...descriptionProps,
                },
              }}
            >
              {contents}
              {isSelected && (
                <Check
                  slot="checkmark"
                  UNSAFE_className={classNames(
                    styles,
                    "Menu-checkmark"
                  )}
                />
              )}
            </SlotProvider>
          </ClearSlots>
        </Grid>
      </div>
    </FocusRing>
  );
}
