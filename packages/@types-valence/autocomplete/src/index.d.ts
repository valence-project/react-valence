import { Key } from "react";
import { ReactElement } from "react";

// @types-valence
import { AriaSearchFieldProps } from "@types-valence/searchfield";
import {
  AsyncLoadable,
  CollectionBase,
  LoadingState,
  ValenceLabelableProps,
  ValenceTextInputBase,
  StyleProps,
} from "@types-valence/shared";
import { MenuTriggerAction } from "@types-valence/combobox";

export interface SearchAutocompleteProps<T>
  extends CollectionBase<T>,
    Omit<AriaSearchFieldProps, "onSubmit"> {
  /** The list of SearchAutocomplete items (uncontrolled). */
  defaultItems?: Iterable<T>;
  /** The list of SearchAutocomplete items (controlled). */
  items?: Iterable<T>;
  /** Method that is called when the open state of the menu changes. Returns the new open state and the action that caused the opening of the menu. */
  onOpenChange?: (isOpen: boolean, menuTrigger?: MenuTriggerAction) => void;
  /** The value of the SearchAutocomplete input (controlled). */
  inputValue?: string;
  /** The default value of the SearchAutocomplete input (uncontrolled). */
  defaultInputValue?: string;
  /** Handler that is called when the SearchAutocomplete input value changes. */
  onInputChange?: (value: string) => void;
  /**
   * The interaction required to display the SearchAutocomplete menu.
   * @default 'input'
   */
  menuTrigger?: MenuTriggerAction;
  onSubmit?: (value: string, key: Key | null) => void;
  /** An icon to display at the start of the input. */
  icon?: ReactElement;
}

export interface ValenceSearchAutocompleteProps<T>
  extends ValenceTextInputBase,
    Omit<SearchAutocompleteProps<T>, "menuTrigger">,
    ValenceLabelableProps,
    StyleProps,
    Omit<AsyncLoadable, "isLoading"> {
  /**
   * The interaction required to display the SearchAutocomplete menu. Note that this prop has no effect on the mobile SearchAutocomplete experience.
   * @default 'input'
   */
  menuTrigger?: MenuTriggerAction;
  /** Whether the SearchAutocomplete should be displayed with a quiet style. */
  isQuiet?: boolean;
  /**
   * Direction the menu will render relative to the SearchAutocomplete.
   * @default 'bottom'
   */
  direction?: "bottom" | "top";
  /** The current loading state of the SearchAutocomplete. Determines whether or not the progress circle should be shown. */
  loadingState?: LoadingState;
  /**
   * Whether the menu should automatically flip direction when space is limited.
   * @default true
   */
  shouldFlip?: boolean;
  onLoadMore?: () => void;
}
