import React, {
  ReactElement,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { createCalendar } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { useRangeCalendar } from "@react-aria/calendar";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useRangeCalendarState } from "@react-stately/calendar";

// @react-valence https://valence.austinpittman.net
import { createDOMRef } from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DateValue, ValenceRangeCalendarProps } from "@types-valence/calendar";
import { FocusableRef } from "@types-valence/shared";

import { CalendarBase } from "./CalendarBase";

function RangeCalendar<T extends DateValue>(
  props: ValenceRangeCalendarProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  props = useProviderProps(props);
  let { visibleMonths = 1 } = props;
  let visibleDuration = useMemo(
    () => ({ months: visibleMonths }),
    [visibleMonths]
  );
  let { locale } = useLocale();
  let state = useRangeCalendarState({
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
    useRangeCalendar(props, state, domRef);

  return (
    <CalendarBase
      {...{
        ...props,
        state,
        calendarRef: domRef,
        calendarProps,
        prevButtonProps,
        nextButtonProps,
        errorMessageProps,
      }}
    />
  );
}

/**
 * RangeCalendars display a grid of days in one or more months and allow users to select a contiguous range of dates.
 */
const _RangeCalendar = React.forwardRef(RangeCalendar) as <T extends DateValue>(
  props: ValenceRangeCalendarProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement;
export { _RangeCalendar as RangeCalendar };
