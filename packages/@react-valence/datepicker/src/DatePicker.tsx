import React, { ReactElement, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { mergeProps } from "@react-aria/utils";
import { useDatePicker } from "@react-aria/datepicker";
import { useFocusRing } from "@react-aria/focus";
import { useHover } from "@react-aria/interactions";
import { useLocale, useLocalizedStringFormatter } from "@react-aria/i18n";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useDatePickerState } from "@react-stately/datepicker";

// @react-valence https://valence.austinpittman.net
import { Calendar } from "@react-valence/calendar";
import { classNames } from "@react-valence/utils";
import { Content } from "@react-valence/view";
import { Dialog, DialogTrigger } from "@react-valence/dialog";
import { Field } from "@react-valence/label";
import { FieldButton } from "@react-valence/button";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DateValue, ValenceDatePickerProps } from "@types-valence/datepicker";
import { FocusableRef } from "@types-valence/shared";

// @valence-icons
import CalendarIcon from "@valence-icons/ui/CalendarFill";

// @valence-styles
import styles from "@valence-styles/components/inputgroup/vars.module.scss";

import intlMessages from "../intl";

import { DatePickerField } from "./DatePickerField";
import datepickerStyles from "./styles.module.scss";
import { Input } from "./Input";
import { TimeField } from "./TimeField";
import {
  useFocusManagerRef,
  useFormatHelpText,
  useVisibleMonths,
} from "./utils";

function DatePicker<T extends DateValue>(
  props: ValenceDatePickerProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  props = useProviderProps(props);
  let {
    autoFocus,
    isQuiet,
    isDisabled,
    isReadOnly,
    placeholderValue,
    maxVisibleMonths = 1,
  } = props;
  let { hoverProps, isHovered } = useHover({ isDisabled });
  let targetRef = useRef<HTMLDivElement>();
  let state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: () => !state.hasTime,
  });
  let {
    groupProps,
    labelProps,
    fieldProps,
    descriptionProps,
    errorMessageProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, targetRef);
  let { isOpen, setOpen } = state;
  let { direction } = useLocale();
  let domRef = useFocusManagerRef(ref);
  let stringFormatter = useLocalizedStringFormatter(intlMessages);

  let { isFocused, isFocusVisible, focusProps } = useFocusRing({
    within: true,
    isTextInput: true,
    autoFocus,
  });

  let { isFocused: isFocusedButton, focusProps: focusPropsButton } =
    useFocusRing({
      within: false,
      isTextInput: false,
      autoFocus,
    });

  let className = classNames(styles, "InputGroup", {
    "InputGroup--quiet": isQuiet,
    "InputGroup--invalid": state.validationState === "invalid",
    "is-disabled": isDisabled,
    "is-hovered": isHovered,
    "is-focused": isFocused,
    "focus-ring": isFocusVisible && !isFocusedButton,
  });

  let fieldClassName = classNames(styles, "InputGroup-input", {
    "is-disabled": isDisabled,
    "is-invalid": state.validationState === "invalid",
  });

  // Note: this description is intentionally not passed to useDatePicker.
  // The format help text is unnecessary for screen reader users because each segment already has a label.
  let description = useFormatHelpText(props);
  if (description && !props.description) {
    descriptionProps.id = null;
  }

  let placeholder: DateValue = placeholderValue;
  let timePlaceholder =
    placeholder && "hour" in placeholder ? placeholder : null;
  let timeMinValue =
    props.minValue && "hour" in props.minValue ? props.minValue : null;
  let timeMaxValue =
    props.maxValue && "hour" in props.maxValue ? props.maxValue : null;
  let timeGranularity =
    state.granularity === "hour" ||
    state.granularity === "minute" ||
    state.granularity === "second"
      ? state.granularity
      : null;
  let showTimeField = !!timeGranularity;

  let visibleMonths = useVisibleMonths(maxVisibleMonths);

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
      <div
        {...mergeProps(groupProps, hoverProps, focusProps)}
        className={className}
        ref={targetRef}
      >
        <Input
          isDisabled={isDisabled}
          isQuiet={isQuiet}
          validationState={state.validationState}
          className={classNames(styles, "InputGroup-field")}
          inputClassName={fieldClassName}
        >
          <DatePickerField
            {...fieldProps}
            data-testid="date-field"
            isQuiet={isQuiet}
          />
        </Input>
        <DialogTrigger
          type="popover"
          mobileType="tray"
          placement={direction === "rtl" ? "bottom right" : "bottom left"}
          targetRef={targetRef}
          hideArrow
          isOpen={isOpen}
          onOpenChange={setOpen}
          shouldFlip={props.shouldFlip}
        >
          <FieldButton
            {...mergeProps(buttonProps, focusPropsButton)}
            UNSAFE_className={classNames(styles, "FieldButton")}
            isQuiet={isQuiet}
            validationState={state.validationState}
            isDisabled={isDisabled || isReadOnly}
          >
            <CalendarIcon />
          </FieldButton>
          <Dialog
            UNSAFE_className={classNames(
              datepickerStyles,
              "Datepicker-dialog"
            )}
            {...dialogProps}
          >
            <Content>
              <div
                className={classNames(
                  datepickerStyles,
                  "Datepicker-dialogContent"
                )}
              >
                <Calendar
                  {...calendarProps}
                  visibleMonths={visibleMonths}
                  UNSAFE_className={classNames(
                    datepickerStyles,
                    "Datepicker-calendar",
                    { "is-invalid": state.validationState === "invalid" }
                  )}
                />
                {showTimeField && (
                  <div
                    className={classNames(
                      datepickerStyles,
                      "Datepicker-timeFields"
                    )}
                  >
                    <TimeField
                      label={stringFormatter.format("time")}
                      value={state.timeValue}
                      onChange={state.setTimeValue}
                      placeholderValue={timePlaceholder}
                      granularity={timeGranularity}
                      minValue={timeMinValue}
                      maxValue={timeMaxValue}
                      hourCycle={props.hourCycle}
                      hideTimeZone={props.hideTimeZone}
                      marginTop="size-100"
                    />
                  </div>
                )}
              </div>
            </Content>
          </Dialog>
        </DialogTrigger>
      </div>
    </Field>
  );
}

/**
 * DatePickers combine a DateField and a Calendar popover to allow users to enter or select a date and time value.
 */
const _DatePicker = React.forwardRef(DatePicker) as <T extends DateValue>(
  props: ValenceDatePickerProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement;
export { _DatePicker as DatePicker };
