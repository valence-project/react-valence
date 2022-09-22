import React, { ReactElement } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { createCalendar } from "@internationalized/date";
import { useDateField } from "@react-aria/datepicker";
import { useLocale } from "@react-aria/i18n";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useDateFieldState } from "@react-stately/datepicker";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";
import { Field } from "@react-valence/label";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DateValue, ValenceDateFieldProps } from "@types-valence/datepicker";
import { FocusableRef } from "@types-valence/shared";

import { DatePickerSegment } from "./DatePickerSegment";
import datepickerStyles from "./styles.module.scss";
import { Input } from "./Input";
import { useFocusManagerRef, useFormatHelpText } from "./utils";

function DateField<T extends DateValue>(
  props: ValenceDateFieldProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  props = useProviderProps(props);
  let { autoFocus, isDisabled, isReadOnly, isRequired, isQuiet } = props;

  let domRef = useFocusManagerRef(ref);
  let { locale } = useLocale();
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  let { labelProps, fieldProps, descriptionProps, errorMessageProps } =
    useDateField(props, state, domRef);

  // Note: this description is intentionally not passed to useDatePicker.
  // The format help text is unnecessary for screen reader users because each segment already has a label.
  let description = useFormatHelpText(props);
  if (description && !props.description) {
    descriptionProps.id = null;
  }

  return (
    <Field
      {...props}
      ref={domRef}
      elementType="span"
      description={description}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      validationState={state.validationState}
      UNSAFE_className={classNames(
        datepickerStyles,
        "Datepicker-fieldWrapper"
      )}
    >
      <Input
        fieldProps={fieldProps}
        isDisabled={isDisabled}
        isQuiet={isQuiet}
        autoFocus={autoFocus}
        validationState={state.validationState}
        className={classNames(datepickerStyles, "DateField")}
      >
        {state.segments.map((segment, i) => (
          <DatePickerSegment
            key={i}
            segment={segment}
            state={state}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isRequired={isRequired}
          />
        ))}
      </Input>
    </Field>
  );
}

/**
 * DateFields allow users to enter and edit date and time values using a keyboard.
 * Each part of a date value is displayed in an individually editable segment.
 */
const _DateField = React.forwardRef(DateField) as <T extends DateValue>(
  props: ValenceDateFieldProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement;
export { _DateField as DateField };
