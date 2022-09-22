import React, { useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useDateSegment } from "@react-aria/datepicker";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { DateFieldState, DateSegment } from "@react-stately/datepicker";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @types-valence
import { DatePickerBase, DateValue } from "@types-valence/datepicker";

import styles from "./styles.module.scss";

interface DatePickerSegmentProps extends DatePickerBase<DateValue> {
  segment: DateSegment;
  state: DateFieldState;
}

interface LiteralSegmentProps {
  segment: DateSegment;
}

export function DatePickerSegment({
  segment,
  state,
  ...otherProps
}: DatePickerSegmentProps) {
  switch (segment.type) {
    // A separator, e.g. punctuation
    case "literal":
      return <LiteralSegment segment={segment} />;

    // Editable segment
    default:
      return (
        <EditableSegment segment={segment} state={state} {...otherProps} />
      );
  }
}

function LiteralSegment({ segment }: LiteralSegmentProps) {
  return (
    <span
      aria-hidden="true"
      className={classNames(styles, "Datepicker-literal")}
      data-testid={segment.type === "literal" ? undefined : segment.type}
    >
      {segment.text}
    </span>
  );
}

function EditableSegment({ segment, state }: DatePickerSegmentProps) {
  let ref = useRef();
  let { segmentProps } = useDateSegment(segment, state, ref);
  return (
    <div
      {...segmentProps}
      ref={ref}
      className={classNames(styles, "DatePicker-cell", {
        "is-placeholder": segment.isPlaceholder,
        "is-read-only": !segment.isEditable,
      })}
      style={{
        ...segmentProps.style,
        minWidth:
          segment.maxValue != null
            ? String(segment.maxValue).length + "ch"
            : null,
      }}
      data-testid={segment.type}
    >
      <span
        aria-hidden="true"
        className={classNames(styles, "DatePicker-placeholder")}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? "" : segment.text}
    </div>
  );
}
