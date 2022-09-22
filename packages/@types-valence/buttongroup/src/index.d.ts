import { ReactNode } from "react";

// @types-valence
import {
  Alignment,
  DOMProps,
  Orientation,
  StyleProps,
} from "@types-valence/shared";

export interface ValenceButtonGroupProps extends DOMProps, StyleProps {
  /** Whether the Buttons in the ButtonGroup are all disabled. */
  isDisabled?: boolean;
  /**
   * The axis the ButtonGroup should align with. Setting this to 'vertical' will prevent
   * any switching behaviors between 'vertical' and 'horizontal'.
   * @default 'horizontal'
   */
  orientation?: Orientation;
  /** The Buttons contained within the ButtonGroup. */
  children: ReactNode;
  /**
   * The alignment of the buttons within the ButtonGroup.
   * @default 'start'
   */
  align?: Alignment | "center";
}
