import React, {
  HTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  useRef,
} from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useHover } from "@react-aria/interactions";
import { useLocale } from "@react-aria/i18n";
import { useNumberField } from "@react-aria/numberfield";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useNumberFieldState } from "@react-stately/numberfield";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  useFocusableRef,
  useStyleProps,
} from "@react-valence/utils";
import { Field } from "@react-valence/label";
import { TextFieldBase } from "@react-valence/textfield";
import { useProvider, useProviderProps } from "@react-valence/provider";

// @types-valence
import { AriaButtonProps } from "@types-valence/button";
import { FocusableRef } from "@types-valence/shared";
import { ValenceNumberFieldProps } from "@types-valence/numberfield";

// @valence-styles
import stepperStyle from "@valence-styles/components/stepper/vars.module.scss";

import { StepButton } from "./StepButton";

function NumberField(
  props: ValenceNumberFieldProps,
  ref: FocusableRef<HTMLElement>
) {
  props = useProviderProps(props);
  let provider = useProvider();
  let { isQuiet, isReadOnly, isDisabled, hideStepper } = props;

  let { styleProps: style } = useStyleProps(props);

  let { locale } = useLocale();
  let state = useNumberFieldState({ ...props, locale });
  let inputRef = useRef<HTMLInputElement>();
  let domRef = useFocusableRef<HTMLElement>(ref, inputRef);
  let {
    groupProps,
    labelProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
    descriptionProps,
    errorMessageProps,
  } = useNumberField(props, state, inputRef);
  let isMobile = provider.scale === "large";
  let showStepper = !hideStepper;

  let { isHovered, hoverProps } = useHover({ isDisabled });

  let className = classNames(stepperStyle, "Stepper", {
    "Stepper--isQuiet": isQuiet,
    "is-disabled": isDisabled,
    "Stepper--readonly": isReadOnly,
    "is-invalid": props.validationState === "invalid",
    "Stepper--showStepper": showStepper,
    "Stepper--isMobile": isMobile,
    "is-hovered": isHovered,
    // because FocusRing won't pass along the className from Field, we have to handle that ourselves
    [style.className]: !props.label && style.className,
  });

  return (
    <Field
      {...(props as Omit<ValenceNumberFieldProps, "onChange">)}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      labelProps={labelProps}
      ref={domRef}
      wrapperClassName={classNames(stepperStyle, "Stepper-container", {
        "Stepper-container--isMobile": isMobile,
      })}
    >
      <NumberFieldInput
        {...props}
        groupProps={mergeProps(groupProps, hoverProps)}
        inputProps={inputProps}
        inputRef={inputRef}
        incrementProps={incrementButtonProps}
        decrementProps={decrementButtonProps}
        className={className}
        style={style}
      />
    </Field>
  );
}

interface NumberFieldInputProps extends ValenceNumberFieldProps {
  groupProps: HTMLAttributes<HTMLDivElement>;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>;
  incrementProps: AriaButtonProps;
  decrementProps: AriaButtonProps;
  className?: string;
  style?: React.CSSProperties;
}

const NumberFieldInput = React.forwardRef(function NumberFieldInput(
  props: NumberFieldInputProps,
  ref: RefObject<HTMLElement>
) {
  let {
    groupProps,
    inputProps,
    inputRef,
    incrementProps,
    decrementProps,
    className,
    style,
    autoFocus,
    isQuiet,
    hideStepper,
    validationState,
  } = props;
  let showStepper = !hideStepper;

  return (
    <FocusRing
      within
      isTextInput
      focusClass={classNames(stepperStyle, "is-focused")}
      focusRingClass={classNames(stepperStyle, "focus-ring")}
      autoFocus={autoFocus}
    >
      <div
        {...groupProps}
        ref={ref as RefObject<HTMLDivElement>}
        style={style}
        className={className}
      >
        <TextFieldBase
          UNSAFE_className={classNames(stepperStyle, "Stepper-field")}
          inputClassName={classNames(stepperStyle, "Stepper-input")}
          validationIconClassName={classNames(
            stepperStyle,
            "Stepper-icon"
          )}
          isQuiet={isQuiet}
          inputRef={inputRef}
          validationState={validationState}
          inputProps={inputProps}
        />
        {showStepper && (
          <>
            <StepButton direction="up" isQuiet={isQuiet} {...incrementProps} />
            <StepButton
              direction="down"
              isQuiet={isQuiet}
              {...decrementProps}
            />
          </>
        )}
      </div>
    </FocusRing>
  );
});

/**
 * NumberFields allow users to enter a number, and increment or decrement the value using stepper buttons.
 */
let _NumberField = React.forwardRef(NumberField);
export { _NumberField as NumberField };
