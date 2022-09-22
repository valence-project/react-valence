import React, { useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { createCalendar } from "@internationalized/date";
import { useDateField } from "@react-aria/datepicker";
import { useLocale } from "@react-aria/i18n";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useDateFieldState } from "@react-stately/datepicker";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @types-valence
import { DateValue, ValenceDatePickerProps } from "@types-valence/datepicker";

import { DatePickerSegment } from "./DatePickerSegment";
import datepickerStyles from "./styles.module.scss";

interface DatePickerFieldProps<T extends DateValue>
  extends ValenceDatePickerProps<T> {
  inputClassName?: string;
  hideValidationIcon?: boolean;
  maxGranularity?: ValenceDatePickerProps<T>["granularity"];
}

export function DatePickerField<T extends DateValue>(
  props: DatePickerFieldProps<T>
) {
  let { isDisabled, isReadOnly, isRequired, inputClassName } = props;
  let ref = useRef();
  let { locale } = useLocale();
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  let { fieldProps } = useDateField(props, state, ref);

  return (
    <div
      {...fieldProps}
      data-testid={props["data-testid"]}
      className={classNames(
        datepickerStyles,
        "Datepicker-segments",
        inputClassName
      )}
      ref={ref}
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
    </div>
  );
}
