import { ReactNode } from "react";

// @types-valence
import { DOMProps, FlexStyleProps } from "@types-valence/shared";

export type Slots = { [key: string]: any };

export interface FlexProps extends DOMProps, FlexStyleProps {
  /** Children of the flex container. */
  children: ReactNode;
}
