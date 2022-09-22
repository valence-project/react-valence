import { ReactNode } from "react";

// @types-valence
import { AriaLabelingProps, DOMProps, StyleProps } from "@types-valence/shared";

export interface ValenceStatusLightProps
  extends DOMProps,
    StyleProps,
    AriaLabelingProps {
  /** The content to display as the label. */
  children?: ReactNode;
  /**
   * The variant changes the color of the status light.
   * When status lights have a semantic meaning, they should use the variant for semantic colors.
   */
  variant:
    | "positive"
    | "negative"
    | "notice"
    | "info"
    | "neutral"
    | "celery"
    | "chartreuse"
    | "yellow"
    | "magenta"
    | "fuchsia"
    | "purple"
    | "indigo"
    | "seafoam";
  /** Whether the status light is disabled. */
  isDisabled?: boolean;
  /**
   * An accessibility role for the status light. Should be set when the status
   * can change at runtime, and no more than one status light will update simultaneously.
   * For cases where multiple statuses can change at the same time, use a Toast instead.
   */
  role?: "status";
}
