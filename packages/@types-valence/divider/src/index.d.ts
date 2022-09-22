// @types-valence
import {
  AriaLabelingProps,
  DOMProps,
  Orientation,
  StyleProps,
} from "@types-valence/shared";

export interface ValenceDividerProps
  extends DOMProps,
    AriaLabelingProps,
    StyleProps {
  /**
   * How thick the Divider should be.
   * @default 'L'
   */
  size?: "S" | "M" | "L";

  /**
   * The axis the Divider should align with.
   * @default 'horizontal'
   */
  orientation?: Orientation;

  /**
   * A slot to place the divider in.
   * @default 'divider'
   */
  slot?: string;
}
