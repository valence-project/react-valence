import React, { HTMLAttributes } from "react";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";

// @types-valence
import {
  DOMRef,
  ValenceHelpTextProps,
  StyleProps,
} from "@types-valence/shared";

// @valence-icons
import AlertIcon from "@valence-icons/ui/AlertFill";

// @valence-styles
import styles from "@valence-styles/components/helptext/vars.module.scss";

interface HelpTextProps extends ValenceHelpTextProps, StyleProps {
  /** Props for the help text description element. */
  descriptionProps?: HTMLAttributes<HTMLElement>;
  /** Props for the help text error message element. */
  errorMessageProps?: HTMLAttributes<HTMLElement>;
}

function HelpText(props: HelpTextProps, ref: DOMRef<HTMLDivElement>) {
  let {
    description,
    errorMessage,
    validationState,
    isDisabled,
    showErrorIcon,
    descriptionProps,
    errorMessageProps,
  } = props;
  let domRef = useDOMRef(ref);
  let isErrorMessage = errorMessage && validationState === "invalid";
  let { styleProps } = useStyleProps(props);

  return (
    <div
      {...styleProps}
      className={classNames(
        styles,
        "HelpText",
        `HelpText--${isErrorMessage ? "negative" : "neutral"}`,
        { "is-disabled": isDisabled },
        styleProps.className
      )}
      ref={domRef}
    >
      {isErrorMessage ? (
        <>
          {showErrorIcon && (
            <AlertIcon
              UNSAFE_className={classNames(
                styles,
                "HelpText-validationIcon"
              )}
            />
          )}
          <div
            {...errorMessageProps}
            className={classNames(styles, "HelpText-text")}
          >
            {errorMessage}
          </div>
        </>
      ) : (
        <div
          {...descriptionProps}
          className={classNames(styles, "HelpText-text")}
        >
          {description}
        </div>
      )}
    </div>
  );
}

/**
 * Help text provides either an informative description or an error message that gives more context about what a user needs to input. It's commonly used in forms.
 */
const _HelpText = React.forwardRef(HelpText);
export { _HelpText as HelpText };
