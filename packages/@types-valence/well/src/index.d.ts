import { ReactNode } from "react";

// @types-valence
import { AriaLabelingProps, DOMProps, StyleProps } from "@types-valence/shared";

export interface ValenceWellProps
  extends DOMProps,
    AriaLabelingProps,
    StyleProps {
  /**
   * The contents of the Well.
   */
  children: ReactNode;
  /**
   * An accessibility role for the well. Use `'region'` when the contents of the well
   * is important enough to be included in the page table of contents, and `'group'` otherwise.
   * If a role is provided, then an aria-label or aria-labelledby must also be provided.
   */
  role?: "region" | "group";
}
