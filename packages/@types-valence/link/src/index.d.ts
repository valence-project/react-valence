import { ReactNode } from "react";

// @types-valence
import {
  AriaLabelingProps,
  FocusableProps,
  PressEvents,
  StyleProps,
} from "@types-valence/shared";

export interface LinkProps extends PressEvents, FocusableProps {}

export interface AriaLinkProps extends LinkProps, AriaLabelingProps {}

export interface ValenceLinkProps extends AriaLinkProps, StyleProps {
  /** The content to display in the link. */
  children: ReactNode;
  /**
   * The [visual style](https://spectrum.adobe.com/page/link/#Options) of the link.
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "overBackground";
  /** Whether the link should be displayed with a quiet style. */
  isQuiet?: boolean;
}
