import { ReactNode } from "react";

// @types-valence
import { DOMProps, StyleProps } from "@types-valence/shared";

export interface HeaderProps extends DOMProps, StyleProps {
  /**
   * Header content.
   */
  children: ReactNode;
}
