import { ElementType, HTMLAttributes, ReactElement, ReactNode } from "react";

// @types-valence
import {
  Alignment,
  DOMProps,
  LabelPosition,
  NecessityIndicator,
  ValenceHelpTextProps,
  StyleProps,
} from "@types-valence/shared";

export interface LabelProps {
  children?: ReactNode;
  htmlFor?: string; // for compatibility with React
  for?: string;
  elementType?: ElementType;
}

interface ValenceLabelPropsBase extends LabelProps, DOMProps, StyleProps {
  labelPosition?: LabelPosition; // default top
  labelAlign?: Alignment; // default start
  isRequired?: boolean;
  necessityIndicator?: NecessityIndicator; // default icon
  includeNecessityIndicatorInAccessibilityName?: boolean;
}

export interface ValenceLabelProps
  extends ValenceLabelPropsBase,
    HTMLAttributes<HTMLElement> {}

export interface ValenceFieldProps
  extends ValenceLabelPropsBase,
    ValenceHelpTextProps {
  children: ReactElement;
  label?: ReactNode;
  labelProps?: HTMLAttributes<HTMLElement>;
  descriptionProps?: HTMLAttributes<HTMLElement>;
  errorMessageProps?: HTMLAttributes<HTMLElement>;
  wrapperClassName?: string;
}
