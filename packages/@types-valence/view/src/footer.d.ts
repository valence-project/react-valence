import { ReactNode } from "react";

// @types-valence
import { DOMProps, StyleProps } from "@types-valence/shared";

export interface FooterProps extends DOMProps, StyleProps {
  /**
   * Footer content.
   */
  children: ReactNode;
}
