import React, { Key, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useHover } from "@react-aria/interactions";
import { useMenuItem } from "@react-aria/menu";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { TreeState } from "@react-stately/tree";

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

import { useMenuContext } from "./context";

interface MenuItemProps<T> {
  item: Node<T>;
  state: TreeState<T>;
  isVirtualized?: boolean;
  onAction?: (key: Key) => void;
}

/** @private */
export function MenuItem<T>(props: MenuItemProps<T>) {
  let { item, state, isVirtualized, onAction } = props;

  let { onClose, closeOnSelect } = useMenuContext();

  let { rendered, key } = item;

  let isSelected = state.selectionManager.isSelected(key);
  let isDisabled = state.disabledKeys.has(key);

  let ref = useRef<HTMLLIElement>();
  let { menuItemProps, labelProps, descriptionProps, keyboardShortcutProps } =
    useMenuItem(
      {
        isSelected,
        isDisabled,
        "aria-label": item["aria-label"],
        key,
        onClose,
        closeOnSelect,
        isVirtualized,
        onAction,
      },
      state,
      ref
    );
  let { hoverProps, isHovered } = useHover({ isDisabled });

  let contents =
    typeof rendered === "string" ? <Text>{rendered}</Text> : rendered;

  return (
    <FocusRing focusRingClass={classNames(styles, "focus-ring")}>
      <li
        {...mergeProps(menuItemProps, hoverProps)}
        ref={ref}
        className={classNames(styles, "Menu-item", {
          "is-disabled": isDisabled,
          "is-selected": isSelected,
          "is-selectable": state.selectionManager.selectionMode !== "none",
          "is-hovered": isHovered,
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
                end: {
                  UNSAFE_className: styles["Menu-end"],
                  ...descriptionProps,
                },
                icon: {
                  UNSAFE_className: styles["Menu-icon"],
                  size: "S",
                },
                description: {
                  UNSAFE_className: styles["Menu-description"],
                  ...descriptionProps,
                },
                keyboard: {
                  UNSAFE_className: styles["Menu-keyboard"],
                  ...keyboardShortcutProps,
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
      </li>
    </FocusRing>
  );
}
