import { ReactNode } from "react";

// @types-valence
import {
  AriaLabelingProps,
  FocusableDOMProps,
  FocusableProps,
  InputBase,
  StyleProps,
} from "@types-valence/shared";

interface SwitchBase extends InputBase, FocusableProps {
  /**
   * The content to render as the Switch's label.
   */
  children?: ReactNode;
  /**
   * Whether the Switch should be selected (uncontrolled).
   */
  defaultSelected?: boolean;
  /**
   * Whether the Switch should be selected (controlled).
   */
  isSelected?: boolean;
  /**
   * Handler that is called when the Switch's selection state changes.
   */
  onChange?: (isSelected: boolean) => void;
  /**
   * The value of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue).
   */
  value?: string;
  /**
   * The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
   */
  name?: string;
}
export interface SwitchProps extends SwitchBase {}
export interface AriaSwitchBase
  extends SwitchBase,
    FocusableDOMProps,
    AriaLabelingProps {
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   */
  "aria-controls"?: string;
}
export interface AriaSwitchProps extends SwitchProps, AriaSwitchBase {}

export interface ValenceSwitchProps extends AriaSwitchProps, StyleProps {
  /**
   * This prop sets the emphasized style which provides visual prominence.
   */
  isEmphasized?: boolean;
}
