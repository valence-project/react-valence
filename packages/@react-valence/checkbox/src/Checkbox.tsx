import React, { forwardRef, useContext, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { useCheckbox, useCheckboxGroupItem } from "@react-aria/checkbox";
import { useHover } from "@react-aria/interactions";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useToggleState } from "@react-stately/toggle";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  useFocusableRef,
  useStyleProps,
} from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceCheckboxProps } from "@types-valence/checkbox";

// @valence-icons
import Check from "@valence-icons/ui/CheckFill";
import Dash from "@valence-icons/ui/SubtractFill";

// @valence-styles
import styles from "@valence-styles/components/checkbox/vars.module.scss";

import { CheckboxGroupContext } from "./context";

function Checkbox(
  props: ValenceCheckboxProps,
  ref: FocusableRef<HTMLLabelElement>
) {
  let originalProps = props;
  props = useProviderProps(props);
  let {
    isIndeterminate = false,
    isEmphasized = false,
    isDisabled = false,
    autoFocus,
    children,
    validationState,
    ...otherProps
  } = props;
  let { styleProps } = useStyleProps(otherProps);
  let { hoverProps, isHovered } = useHover({ isDisabled });

  let inputRef = useRef<HTMLInputElement>(null);
  let domRef = useFocusableRef(ref, inputRef);

  // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
  // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
  // but since the checkbox won't move in and out of a group, it should be safe.
  let groupState = useContext(CheckboxGroupContext);
  let { inputProps } = groupState
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        {
          ...props,
          // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
          // it's passed explicitly here to avoid typescript error (requires ignore).
          // @ts-ignore
          value: props.value,
          // Only pass isRequired and validationState to react-aria if they came from
          // the props for this individual checkbox, and not from the group via context.
          isRequired: originalProps.isRequired,
          validationState: originalProps.validationState,
        },
        groupState,
        inputRef
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(props, useToggleState(props), inputRef);

  let markIcon = isIndeterminate ? (
    <Dash
      UNSAFE_className={classNames(styles, "Checkbox-partialCheckmark")}
    />
  ) : (
    <Check
      UNSAFE_className={classNames(styles, "Checkbox-checkmark")}
    />
  );

  if (groupState) {
    for (let key of ["isSelected", "defaultSelected", "isEmphasized"]) {
      if (originalProps[key] != null) {
        console.warn(
          `${key} is unsupported on individual <Checkbox> elements within a <CheckboxGroup>. Please apply these props to the group instead.`
        );
      }
    }
    if (props.value == null) {
      console.warn(
        "A <Checkbox> element within a <CheckboxGroup> requires a `value` property."
      );
    }
  }

  return (
    <label
      {...styleProps}
      {...hoverProps}
      ref={domRef}
      className={classNames(
        styles,
        "Checkbox",
        {
          "is-checked": inputProps.checked,
          "is-indeterminate": isIndeterminate,
          "Checkbox--quiet": !isEmphasized,
          "is-invalid": validationState === "invalid",
          "is-disabled": isDisabled,
          "is-hovered": isHovered,
        },
        styleProps.className
      )}
    >
      <FocusRing
        focusRingClass={classNames(styles, "focus-ring")}
        autoFocus={autoFocus}
      >
        <input
          {...inputProps}
          ref={inputRef}
          className={classNames(styles, "Checkbox-input")}
        />
      </FocusRing>
      <span className={classNames(styles, "Checkbox-box")}>
        {markIcon}
      </span>
      {children && (
        <span className={classNames(styles, "Checkbox-label")}>
          {children}
        </span>
      )}
    </label>
  );
}
/**
 * Checkboxes allow users to select multiple items from a list of individual items,
 * or to mark one individual item as selected.
 */
let _Checkbox = forwardRef(Checkbox);
export { _Checkbox as Checkbox };
