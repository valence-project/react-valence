// @types-valence
import {
  AriaLabelingProps,
  DOMProps,
  FocusableProps,
  HelpTextProps,
  InputBase,
  LabelableProps,
  RangeInputBase,
  ValenceLabelableProps,
  StyleProps,
  TextInputBase,
  TextInputDOMEvents,
  Validation,
  ValueBase,
} from "@types-valence/shared";

export interface NumberFieldProps
  extends InputBase,
    Validation,
    FocusableProps,
    TextInputBase,
    ValueBase<number>,
    RangeInputBase<number>,
    LabelableProps,
    HelpTextProps {
  /**
   * Formatting options for the value displayed in the number field.
   * This also affects what characters are allowed to be typed by the user.
   */
  formatOptions?: Intl.NumberFormatOptions;
}

export interface AriaNumberFieldProps
  extends NumberFieldProps,
    DOMProps,
    AriaLabelingProps,
    TextInputDOMEvents {
  /** A custom aria-label for the decrement button. If not provided, the localized string "Decrement" is used. */
  decrementAriaLabel?: string;
  /** A custom aria-label for the increment button. If not provided, the localized string "Increment" is used. */
  incrementAriaLabel?: string;
}

export interface ValenceNumberFieldProps
  extends Omit<AriaNumberFieldProps, "placeholder">,
    StyleProps,
    ValenceLabelableProps {
  /** Whether the numberfield should be displayed with a quiet style. */
  isQuiet?: boolean;
  /** Whether to hide the increment and decrement buttons. */
  hideStepper?: boolean;
}
