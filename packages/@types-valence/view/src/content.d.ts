import { ReactNode } from "react";

// @types-valence
import { DOMProps, StyleProps } from "@types-valence/shared";

export interface ContentProps extends DOMProps, StyleProps {
  /**
   * Content content.
   */
  children: ReactNode;
}
