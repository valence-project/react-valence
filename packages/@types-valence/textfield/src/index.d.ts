import { ReactElement } from "react";

// @types-valence
import {
  AriaLabelingProps,
  AriaValidationProps,
  FocusableDOMProps,
  FocusableProps,
  FocusableRefValue,
  HelpTextProps,
  InputBase,
  LabelableProps,
  ValenceLabelableProps,
  ValenceTextInputBase,
  StyleProps,
  TextInputBase,
  TextInputDOMProps,
  Validation,
  ValueBase,
} from "@types-valence/shared";

export interface TextFieldProps
  extends InputBase,
    Validation,
    HelpTextProps,
    FocusableProps,
    TextInputBase,
    ValueBase<string>,
    LabelableProps {}

export interface AriaTextFieldProps
  extends TextFieldProps,
    AriaLabelingProps,
    FocusableDOMProps,
    TextInputDOMProps,
    AriaValidationProps {
  // https://www.w3.org/TR/wai-aria-1.2/#textbox
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  "aria-activedescendant"?: string;
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  "aria-autocomplete"?: "none" | "inline" | "list" | "both";
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  "aria-haspopup"?:
    | boolean
    | "false"
    | "true"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog";
}

export interface ValenceTextFieldProps
  extends ValenceTextInputBase,
    AriaTextFieldProps,
    ValenceLabelableProps,
    StyleProps {
  /** An icon to display at the start of the input. */
  icon?: ReactElement;
  /** Whether the input should be displayed with a quiet style. */
  isQuiet?: boolean;
}

export interface TextFieldRef
  extends FocusableRefValue<
    HTMLInputElement | HTMLTextAreaElement,
    HTMLDivElement
  > {
  select(): void;
  getInputElement(): HTMLInputElement | HTMLTextAreaElement | null;
}
