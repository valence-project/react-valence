import React, {
  ReactElement,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { createCalendar } from "@internationalized/date";
import { useCalendar } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useCalendarState } from "@react-stately/calendar";

// @react-valence https://valence.austinpittman.net
import { createDOMRef } from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DateValue, ValenceCalendarProps } from "@types-valence/calendar";
import { FocusableRef } from "@types-valence/shared";

import { CalendarBase } from "./CalendarBase";

function Calendar<T extends DateValue>(
  props: ValenceCalendarProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  props = useProviderProps(props);
  let { visibleMonths = 1 } = props;
  let visibleDuration = useMemo(
    () => ({ months: visibleMonths }),
    [visibleMonths]
  );
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    locale,
    visibleDuration,
    createCalendar,
  });

  let domRef = useRef();
  useImperativeHandle(ref, () => ({
    ...createDOMRef(domRef),
    focus() {
      state.setFocused(true);
    },
  }));

  let { calendarProps, prevButtonProps, nextButtonProps, errorMessageProps } =
    useCalendar(props, state);

  return (
    <CalendarBase
      {...props}
      state={state}
      calendarRef={domRef}
      calendarProps={calendarProps}
      prevButtonProps={prevButtonProps}
      nextButtonProps={nextButtonProps}
      errorMessageProps={errorMessageProps}
    />
  );
}

/**
 * Calendars display a grid of days in one or more months and allow users to select a single date.
 */
const _Calendar = React.forwardRef(Calendar) as <T extends DateValue>(
  props: ValenceCalendarProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement;
export { _Calendar as Calendar };
