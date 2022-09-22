import React, { useContext, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useVisuallyHidden } from "@react-aria/visually-hidden";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @types-valence
import { ItemDropTarget } from "@types-valence/shared";

import listStyles from "./styles.scss";
import { ListViewContext } from "./ListView";

interface InsertionIndicatorProps {
  target: ItemDropTarget;
  isPresentationOnly?: boolean;
}

export default function InsertionIndicator(props: InsertionIndicatorProps) {
  let { dropState, dropHooks } = useContext(ListViewContext);
  const { target, isPresentationOnly } = props;

  let ref = useRef();
  let { dropIndicatorProps } = dropHooks.useDropIndicator(
    props,
    dropState,
    ref
  );
  let { visuallyHiddenProps } = useVisuallyHidden();

  let isDropTarget = dropState.isDropTarget(target);

  if (!isDropTarget && dropIndicatorProps["aria-hidden"]) {
    return null;
  }

  return (
    <div role="row" aria-hidden={dropIndicatorProps["aria-hidden"]}>
      <div
        role="gridcell"
        aria-selected="false"
        className={classNames(
          listStyles,
          "valence-ListViewInsertionIndicator",
          {
            "valence-ListViewInsertionIndicator--dropTarget": isDropTarget,
          }
        )}
      >
        {!isPresentationOnly && (
          <div
            {...visuallyHiddenProps}
            role="button"
            {...dropIndicatorProps}
            ref={ref}
          />
        )}
      </div>
    </div>
  );
}
