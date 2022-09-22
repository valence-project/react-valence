import { ReactNode } from "react";

// @types-valence
import { DOMProps, StyleProps } from "@types-valence/shared";

export interface KeyboardProps extends DOMProps, StyleProps {
  /**
   * Keyboard shortcut text.
   */
  children: ReactNode;
  /**
   * A slot to place the keyboard shortcut in.
   * @default 'keyboard'
   */
  slot?: string;
}
