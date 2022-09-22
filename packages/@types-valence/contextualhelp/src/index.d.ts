import { ReactNode } from "react";

// @types-valence
import { AriaLabelingProps, DOMProps, StyleProps } from "@types-valence/shared";
import {
  OverlayTriggerProps,
  Placement,
  PositionProps,
} from "@types-valence/overlays";

export interface ValenceContextualHelpProps
  extends OverlayTriggerProps,
    PositionProps,
    StyleProps,
    DOMProps,
    AriaLabelingProps {
  /** Contents of the Contextual Help popover. */
  children: ReactNode;
  /**
   * Indicates whether contents are informative or provides helpful guidance.
   * @default 'help'
   */
  variant?: "help" | "info";
  /**
   * The placement of the popover with respect to the action button.
   * @default 'bottom start'
   */
  placement?: Placement;
}
