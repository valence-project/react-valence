import { JSXElementConstructor, ReactNode } from "react";

// @types-valence
import { DOMProps, ViewStyleProps } from "@types-valence/shared";

export interface ViewProps extends ViewStyleProps, DOMProps {
  /**
   * The element to render as the node.
   */
  elementType?: string | JSXElementConstructor<any>;
  /**
   * Children to be displayed in the View.
   */
  children?: ReactNode;
}
