import { ReactElement } from "react";

// @types-valence
import {
  AriaLabelingProps,
  DOMProps,
  ValenceLabelableProps,
  StyleProps,
} from "@types-valence/shared";

export interface ValenceSearchWithinProps
  extends ValenceLabelableProps,
    DOMProps,
    StyleProps,
    AriaLabelingProps {
  /** The SearchField and Picker contained within the SearchWithin. */
  children: [ReactElement, ReactElement];

  /** Whether the children should be disabled. Propagated to both children. */
  isDisabled?: boolean;
}
