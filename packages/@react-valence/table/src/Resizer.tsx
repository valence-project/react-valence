/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { RefObject } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { useLocale, useLocalizedStringFormatter } from "@react-aria/i18n";
import { useTableColumnResize } from "@react-aria/table";
import { VisuallyHidden } from "@react-aria/visually-hidden";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @types-valence
import { GridNode } from "@types-valence/grid";

// @valence-styles
import styles from "@valence-styles/components/table/vars.module.scss";

import intlMessages from "../intl";

import { useTableContext } from "./TableView";

interface ResizerProps<T> {
  column: GridNode<T>;
  showResizer: boolean;
  triggerRef: RefObject<HTMLDivElement>;
}

function Resizer<T>(props: ResizerProps<T>, ref: RefObject<HTMLInputElement>) {
  let { column, showResizer } = props;
  let { state, columnState } = useTableContext();
  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  let { direction } = useLocale();

  let { inputProps, resizerProps } = useTableColumnResize(
    { ...props, label: stringFormatter.format("columnResizer") },
    state,
    columnState,
    ref
  );

  let style = {
    cursor: undefined,
    height: "100%",
    display: showResizer ? undefined : "none",
    touchAction: "none",
  };
  if (
    columnState.getColumnMinWidth(column.key) >=
    columnState.getColumnWidth(column.key)
  ) {
    style.cursor = direction === "rtl" ? "w-resize" : "e-resize";
  } else if (
    columnState.getColumnMaxWidth(column.key) <=
    columnState.getColumnWidth(column.key)
  ) {
    style.cursor = direction === "rtl" ? "e-resize" : "w-resize";
  } else {
    style.cursor = "col-resize";
  }

  return (
    <FocusRing within focusRingClass={classNames(styles, "focus-ring")}>
      <div
        role="presentation"
        style={style}
        className={classNames(styles, "valence-Table-columnResizer")}
        {...resizerProps}
      >
        <VisuallyHidden>
          <input ref={ref} type="range" {...inputProps} />
        </VisuallyHidden>
      </div>
    </FocusRing>
  );
}

const _Resizer = React.forwardRef(Resizer);
export { _Resizer as Resizer };
