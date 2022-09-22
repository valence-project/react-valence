// @types-valence
import {
  AriaTextFieldProps,
  ValenceTextFieldProps,
  TextFieldProps,
} from "@types-valence/textfield";
import { ValenceTextInputBase } from "@types-valence/shared";

export interface SearchFieldProps extends TextFieldProps {
  /** Handler that is called when the SearchField is submitted. */
  onSubmit?: (value: string) => void;

  /** Handler that is called when the clear button is pressed. */
  onClear?: () => void;
}

export interface AriaSearchFieldProps
  extends SearchFieldProps,
    AriaTextFieldProps {}
export interface ValenceSearchFieldProps
  extends ValenceTextInputBase,
    AriaSearchFieldProps,
    ValenceTextFieldProps {}
