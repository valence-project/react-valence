import { ReactNode } from "react";

// @types-valence
import { DOMProps, StyleProps } from "@types-valence/shared";

export interface ValenceIllustratedMessageProps extends DOMProps, StyleProps {
  /** The contents of the IllustratedMessage. */
  children: ReactNode;
}
