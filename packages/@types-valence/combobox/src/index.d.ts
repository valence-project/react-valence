// @types-valence
import {
  AriaLabelingProps,
  AsyncLoadable,
  CollectionBase,
  DOMProps,
  FocusableProps,
  HelpTextProps,
  InputBase,
  LabelableProps,
  LoadingState,
  SingleSelection,
  ValenceLabelableProps,
  ValenceTextInputBase,
  StyleProps,
  TextInputBase,
  Validation,
} from "@types-valence/shared";

export type MenuTriggerAction = "focus" | "input" | "manual";

export interface ComboBoxProps<T>
  extends CollectionBase<T>,
    Omit<SingleSelection, "disallowEmptySelection">,
    InputBase,
    TextInputBase,
    Validation,
    FocusableProps,
    LabelableProps,
    HelpTextProps {
  /** The list of ComboBox items (uncontrolled). */
  defaultItems?: Iterable<T>;
  /** The list of ComboBox items (controlled). */
  items?: Iterable<T>;
  /** Method that is called when the open state of the menu changes. Returns the new open state and the action that caused the opening of the menu. */
  onOpenChange?: (isOpen: boolean, menuTrigger?: MenuTriggerAction) => void;
  /** The value of the ComboBox input (controlled). */
  inputValue?: string;
  /** The default value of the ComboBox input (uncontrolled). */
  defaultInputValue?: string;
  /** Handler that is called when the ComboBox input value changes. */
  onInputChange?: (value: string) => void;
  /** Whether the ComboBox allows a non-item matching input value to be set. */
  allowsCustomValue?: boolean;
  // /**
  //  * Whether the Combobox should only suggest matching options or autocomplete the field with the nearest matching option.
  //  * @default 'suggest'
  //  */
  // completionMode?: 'suggest' | 'complete',
  /**
   * The interaction required to display the ComboBox menu.
   * @default 'input'
   */
  menuTrigger?: MenuTriggerAction;
  /**
   * The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).
   */
  name?: string;
}

export interface AriaComboBoxProps<T>
  extends ComboBoxProps<T>,
    DOMProps,
    AriaLabelingProps {
  /** Whether keyboard navigation is circular. */
  shouldFocusWrap?: boolean;
}

export interface ValenceComboBoxProps<T>
  extends ValenceTextInputBase,
    Omit<AriaComboBoxProps<T>, "menuTrigger">,
    ValenceLabelableProps,
    StyleProps,
    Omit<AsyncLoadable, "isLoading"> {
  /**
   * The interaction required to display the ComboBox menu. Note that this prop has no effect on the mobile ComboBox experience.
   * @default 'input'
   */
  menuTrigger?: MenuTriggerAction;
  /** Whether the ComboBox should be displayed with a quiet style. */
  isQuiet?: boolean;
  /**
   * Direction the menu will render relative to the ComboBox.
   * @default 'bottom'
   */
  direction?: "bottom" | "top";
  /** The current loading state of the ComboBox. Determines whether or not the progress circle should be shown. */
  loadingState?: LoadingState;
  /**
   * Whether the menu should automatically flip direction when space is limited.
   * @default true
   */
  shouldFlip?: boolean;
}
