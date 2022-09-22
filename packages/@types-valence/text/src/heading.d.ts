import { ReactNode } from "react";

// @types-valence
import { DOMProps, StyleProps } from "@types-valence/shared";

export interface HeadingProps extends DOMProps, StyleProps {
  /**
   * Heading content.
   */
  children: ReactNode;
  /**
   * A slot to place the heading in.
   * @default 'heading'
   */
  slot?: string;
  /**
   * Sets heading level, h1 through h6.
   * @default 3
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
