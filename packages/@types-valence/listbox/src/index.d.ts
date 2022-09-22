// @types-valence
import {
  AriaLabelingProps,
  AsyncLoadable,
  CollectionBase,
  DOMProps,
  FocusEvents,
  FocusStrategy,
  MultipleSelection,
  StyleProps,
} from "@types-valence/shared";

export interface ListBoxProps<T>
  extends CollectionBase<T>,
    MultipleSelection,
    FocusEvents {
  /** Whether to auto focus the listbox or an option. */
  autoFocus?: boolean | FocusStrategy;
  /** Whether focus should wrap around when the end/start is reached. */
  shouldFocusWrap?: boolean;
}

export interface AriaListBoxProps<T>
  extends ListBoxProps<T>,
    DOMProps,
    AriaLabelingProps {}

export interface ValenceListBoxProps<T>
  extends AriaListBoxProps<T>,
    AsyncLoadable,
    StyleProps {}
