import React, { useCallback, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import {
  mergeRefs,
  useEvent,
  useLayoutEffect,
  useResizeObserver,
} from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { classNames, useValueEffect } from "@react-valence/utils";

// @valence-icons
import AlertIcon from "@valence-icons/ui/AlertFill";
import CheckCircle from "@valence-icons/ui/CheckboxCircleFill";

// @valence-styles
import textfieldStyles from "@valence-styles/components/textfield/vars.module.scss";

import datepickerStyles from "./styles.module.scss";

function Input(props, ref) {
  let inputRef = useRef(null);
  let {
    isDisabled,
    isQuiet,
    inputClassName,
    validationState,
    children,
    fieldProps,
    className,
    style,
  } = props;

  // Reserve padding for the error icon when the width of the input is unconstrained.
  // When constrained, don't reserve space because adding it only when invalid will
  // not cause a layout shift.
  let [reservePadding, setReservePadding] = useValueEffect(false);
  let onResize = useCallback(
    () =>
      setReservePadding(function* (reservePadding) {
        if (inputRef.current) {
          if (reservePadding) {
            // Try to collapse padding if the content is clipped.
            if (inputRef.current.scrollWidth > inputRef.current.offsetWidth) {
              let width = inputRef.current.parentElement.offsetWidth;
              yield false;

              // If removing padding causes a layout shift, add it back.
              if (inputRef.current.parentElement.offsetWidth !== width) {
                yield true;
              }
            }
          } else {
            // Try to add padding if the content is not clipped.
            if (inputRef.current.offsetWidth >= inputRef.current.scrollWidth) {
              let width = inputRef.current.parentElement.offsetWidth;
              yield true;

              // If adding padding does not change the width (i.e. width is constrained), remove it again.
              if (inputRef.current.parentElement.offsetWidth === width) {
                yield false;
              }
            }
          }
        }
      }),
    [inputRef, setReservePadding]
  );

  useLayoutEffect(onResize, [onResize]);
  useResizeObserver({
    ref: inputRef,
    onResize,
  });

  // We also need to listen for resize events of the window so we can detect
  // when there is enough space for the padding to be re-added. Ideally we'd
  // use a resize observer on a parent element, but it's hard to know _what_
  // parent element.
  useEvent(
    useRef(typeof window !== "undefined" ? window : null),
    "resize",
    onResize
  );

  let isInvalid = validationState === "invalid";
  let textfieldClass = classNames(
    textfieldStyles,
    "Textfield",
    {
      "Textfield--invalid": isInvalid,
      "Textfield--valid": validationState === "valid",
      "Textfield--quiet": isQuiet,
    },
    classNames(datepickerStyles, "Datepicker-field"),
    className
  );

  let inputClass = classNames(
    textfieldStyles,
    "Textfield-input",
    {
      "is-disabled": isDisabled,
      "is-invalid": isInvalid,
    },
    reservePadding && classNames(datepickerStyles, "Datepicker-input"),
    inputClassName
  );

  let iconClass = classNames(
    textfieldStyles,
    "Textfield-validationIcon"
  );

  let validationIcon = null;
  if (validationState === "invalid") {
    validationIcon = (
      <AlertIcon data-testid="invalid-icon" UNSAFE_className={iconClass} />
    );
  } else if (validationState === "valid") {
    validationIcon = (
      <CheckCircle data-testid="valid-icon" UNSAFE_className={iconClass} />
    );
  }

  return (
    <div
      role="presentation"
      {...fieldProps}
      className={textfieldClass}
      style={style}
    >
      <FocusRing
        focusClass={classNames(textfieldStyles, "is-focused")}
        focusRingClass={classNames(textfieldStyles, "focus-ring")}
        isTextInput
        within
      >
        <div role="presentation" className={inputClass}>
          <div
            role="presentation"
            className={classNames(
              datepickerStyles,
              "Datepicker-inputContents"
            )}
            ref={mergeRefs(ref, inputRef)}
          >
            {children}
          </div>
        </div>
      </FocusRing>
      {validationIcon}
    </div>
  );
}

const _Input = React.forwardRef(Input);
export { _Input as Input };
