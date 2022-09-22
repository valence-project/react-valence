// @types-valence
import {
  Alignment,
  AriaLabelingProps,
  AsyncLoadable,
  CollectionBase,
  DimensionValue,
  DOMProps,
  FocusableDOMProps,
  FocusableProps,
  HelpTextProps,
  InputBase,
  LabelableProps,
  SingleSelection,
  ValenceLabelableProps,
  StyleProps,
  TextInputBase,
  Validation,
} from "@types-valence/shared";

export interface SelectProps<T>
  extends CollectionBase<T>,
    AsyncLoadable,
    Omit<InputBase, "isReadOnly">,
    Validation,
    HelpTextProps,
    LabelableProps,
    TextInputBase,
    Omit<SingleSelection, "disallowEmptySelection">,
    FocusableProps {
  /** Sets the open state of the menu. */
  isOpen?: boolean;
  /** Sets the default open state of the menu. */
  defaultOpen?: boolean;
  /** Method that is called when the open state of the menu changes. */
  onOpenChange?: (isOpen: boolean) => void;
}

export interface AriaSelectProps<T>
  extends SelectProps<T>,
    DOMProps,
    AriaLabelingProps,
    FocusableDOMProps {
  /**
   * Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).
   */
  autoComplete?: string;
  /**
   * The name of the input, used when submitting an HTML form.
   */
  name?: string;
}

export interface ValencePickerProps<T>
  extends AriaSelectProps<T>,
    ValenceLabelableProps,
    StyleProps {
  /** Whether the textfield should be displayed with a quiet style. */
  isQuiet?: boolean;
  /** Alignment of the menu relative to the input target.
   * @default 'start'
   */
  align?: Alignment;
  /**
   * Direction the menu will render relative to the Picker.
   * @default 'bottom'
   */
  direction?: "bottom" | "top";
  /**
   * Whether the menu should automatically flip direction when space is limited.
   * @default true
   */
  shouldFlip?: boolean;
  /** Width of the menu. */
  menuWidth?: DimensionValue;
  /** Whether the element should receive focus on render. */
  autoFocus?: boolean;
}
