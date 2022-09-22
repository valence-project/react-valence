import React, { ReactElement } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useLocale } from "@react-aria/i18n";
import { useTimeField } from "@react-aria/datepicker";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useTimeFieldState } from "@react-stately/datepicker";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";
import { Field } from "@react-valence/label";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceTimeFieldProps, TimeValue } from "@types-valence/datepicker";

import { DatePickerSegment } from "./DatePickerSegment";
import datepickerStyles from "./styles.module.scss";
import { Input } from "./Input";
import { useFocusManagerRef } from "./utils";

function TimeField<T extends TimeValue>(
  props: ValenceTimeFieldProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  props = useProviderProps(props);
  let { autoFocus, isDisabled, isReadOnly, isRequired, isQuiet } = props;

  let domRef = useFocusManagerRef(ref);
  let { locale } = useLocale();
  let state = useTimeFieldState({
    ...props,
    locale,
  });

  let { labelProps, fieldProps, descriptionProps, errorMessageProps } =
    useTimeField(props, state, domRef);

  return (
    <Field
      {...props}
      ref={domRef}
      elementType="span"
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      validationState={state.validationState}
      UNSAFE_className={classNames(
        datepickerStyles,
        "TimeField-fieldWrapper"
      )}
    >
      <Input
        fieldProps={fieldProps}
        isDisabled={isDisabled}
        isQuiet={isQuiet}
        autoFocus={autoFocus}
        validationState={state.validationState}
        className={classNames(datepickerStyles, "TimeField")}
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
 * TimeFields allow users to enter and edit time values using a keyboard.
 * Each part of the time is displayed in an individually editable segment.
 */
const _TimeField = React.forwardRef(TimeField) as <T extends TimeValue>(
  props: ValenceTimeFieldProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement;
export { _TimeField as TimeField };
