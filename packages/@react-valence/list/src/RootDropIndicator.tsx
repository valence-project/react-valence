import React, { useContext, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useVisuallyHidden } from "@react-aria/visually-hidden";

import { ListViewContext } from "./ListView";

export default function RootDropIndicator() {
  let { dropState, dropHooks } = useContext(ListViewContext);
  let ref = useRef();
  let { dropIndicatorProps } = dropHooks.useDropIndicator(
    {
      target: { type: "root" },
    },
    dropState,
    ref
  );
  let isDropTarget = dropState.isDropTarget({ type: "root" });
  let { visuallyHiddenProps } = useVisuallyHidden();

  if (!isDropTarget && dropIndicatorProps["aria-hidden"]) {
    return null;
  }

  return (
    <div role="row" aria-hidden={dropIndicatorProps["aria-hidden"]}>
      <div role="gridcell" aria-selected="false" {...visuallyHiddenProps}>
        <div role="button" {...dropIndicatorProps} ref={ref} />
      </div>
    </div>
  );
}
