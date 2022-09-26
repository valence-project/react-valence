import React, { forwardRef, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { useHover } from "@react-aria/interactions";
import { useSwitch } from "@react-aria/switch";

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
import { ValenceSwitchProps } from "@types-valence/switch";

// @valence-styles
import styles from "@valence-styles/components/toggle/vars.module.scss";

function Switch(
  props: ValenceSwitchProps,
  ref: FocusableRef<HTMLLabelElement>
) {
  props = useProviderProps(props);
  let {
    isEmphasized = false,
    isDisabled = false,
    autoFocus,
    children,
    ...otherProps
  } = props;
  let { styleProps } = useStyleProps(otherProps);
  let { hoverProps, isHovered } = useHover({ isDisabled });

  let inputRef = useRef<HTMLInputElement>(null);
  let domRef = useFocusableRef(ref, inputRef);
  let state = useToggleState(props);
  let { inputProps } = useSwitch(props, state, inputRef);

  return (
    <label
      {...styleProps}
      {...hoverProps}
      ref={domRef}
      className={classNames(
        styles,
        "ToggleSwitch",
        {
          "ToggleSwitch--quiet": !isEmphasized,
          "is-disabled": isDisabled,
          "is-hovered": isHovered,
        },
        styleProps.className
      )}
    >
      <FocusRing {...{ focusRingClass: styles["focus-ring"], autoFocus }}>
        <input
          {...{
            ...inputProps,
            ref: inputRef,
            className: styles["ToggleSwitch-input"],
          }}
        />
      </FocusRing>
      <span className={styles["ToggleSwitch-switch"]} />
      {children && (
        <span className={styles["ToggleSwitch-label"]}>{children}</span>
      )}
    </label>
  );
}

/**
 * Switches allow users to turn an individual option on or off.
 * They are usually used to activate or deactivate a specific setting.
 */
const _Switch = forwardRef(Switch);
export { _Switch as Switch };
