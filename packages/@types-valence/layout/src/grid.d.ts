import { ReactNode } from "react";

// @types-valence
import { DOMProps, GridStyleProps } from "@types-valence/shared";

export interface GridProps extends DOMProps, GridStyleProps {
  /** Children of the grid container. */
  children: ReactNode;
}
