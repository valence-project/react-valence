import { ReactNode } from "react";

// @types-valence
import { DOMProps, StyleProps } from "@types-valence/shared";

export interface TextProps extends DOMProps, StyleProps {
  /**
   * Text content.
   */
  children: ReactNode;
  /**
   * A slot to place the text in.
   * @default 'text'
   */
  slot?: string;
}
