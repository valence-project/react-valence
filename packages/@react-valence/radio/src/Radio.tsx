import React, { forwardRef, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { useHover } from "@react-aria/interactions";
import { useRadio } from "@react-aria/radio";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  useFocusableRef,
  useStyleProps,
} from "@react-valence/utils";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceRadioProps } from "@types-valence/radio";

// @valence-styles
import styles from "@valence-styles/components/radio/vars.module.scss";

import { useRadioProvider } from "./context";

function Radio(props: ValenceRadioProps, ref: FocusableRef<HTMLLabelElement>) {
  let { isDisabled, children, autoFocus, ...otherProps } = props;
  let { styleProps } = useStyleProps(otherProps);
  let { hoverProps, isHovered } = useHover({ isDisabled });

  let inputRef = useRef<HTMLInputElement>(null);
  let domRef = useFocusableRef(ref, inputRef);

  let radioGroupProps = useRadioProvider();
  let { isEmphasized, validationState, state } = radioGroupProps;

  let { inputProps } = useRadio(
    {
      ...props,
      ...radioGroupProps,
      isDisabled,
    },
    state,
    inputRef
  );

  return (
    <label
      {...styleProps}
      {...hoverProps}
      ref={domRef}
      className={classNames(
        styles,
        "Radio",
        {
          // Removing. Pending design feedback.
          // 'Radio--labelBelow': labelPosition === 'bottom',
          "Radio--quiet": !isEmphasized,
          "is-disabled": isDisabled,
          "is-invalid": validationState === "invalid",
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
          className={classNames(styles, "Radio-input")}
        />
      </FocusRing>
      <span className={classNames(styles, "Radio-button")} />
      {children && (
        <span className={classNames(styles, "Radio-label")}>
          {children}
        </span>
      )}
    </label>
  );
}

/**
 * Radio buttons allow users to select a single option from a list of mutually exclusive options.
 * All possible options are exposed up front for users to compare.
 */
const _Radio = forwardRef(Radio);
export { _Radio as Radio };
