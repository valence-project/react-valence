import { ReactElement, ReactNode } from "react";

// @types-valence
import {
  AriaLabelingProps,
  AriaValidationProps,
  DOMProps,
  FocusableDOMProps,
  FocusableProps,
  InputBase,
  LabelableProps,
  Orientation,
  ValenceLabelableProps,
  StyleProps,
  Validation,
  ValueBase,
} from "@types-valence/shared";

export interface ToggleProps extends InputBase, Validation, FocusableProps {
  /**
   * The label for the element.
   */
  children?: ReactNode;
  /**
   * Whether the element should be selected (uncontrolled).
   */
  defaultSelected?: boolean;
  /**
   * Whether the element should be selected (controlled).
   */
  isSelected?: boolean;
  /**
   * Handler that is called when the element's selection state changes.
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

export interface AriaToggleProps
  extends ToggleProps,
    FocusableDOMProps,
    AriaLabelingProps,
    AriaValidationProps {
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   */
  "aria-controls"?: string;
}

export interface CheckboxGroupProps
  extends ValueBase<string[]>,
    InputBase,
    LabelableProps {}

export interface CheckboxProps extends ToggleProps {
  /**
   * Indeterminism is presentational only.
   * The indeterminate visual representation remains regardless of user interaction.
   */
  isIndeterminate?: boolean;
}

export interface AriaCheckboxProps extends CheckboxProps, AriaToggleProps {}

export interface AriaCheckboxGroupProps
  extends CheckboxGroupProps,
    DOMProps,
    AriaLabelingProps,
    AriaValidationProps {
  /**
   * The name of the CheckboxGroup, used when submitting an HTML form.
   */
  name?: string;
}

export interface AriaCheckboxGroupItemProps
  extends Omit<AriaCheckboxProps, "isSelected" | "defaultSelected"> {
  value: string;
}

export interface ValenceCheckboxProps extends AriaCheckboxProps, StyleProps {
  /**
   * This prop sets the emphasized style which provides visual prominence.
   */
  isEmphasized?: boolean;
}

export interface ValenceCheckboxGroupProps
  extends AriaCheckboxGroupProps,
    ValenceLabelableProps,
    Validation,
    StyleProps {
  /**
   * The Checkboxes contained within the CheckboxGroup.
   */
  children: ReactElement<CheckboxProps> | ReactElement<CheckboxProps>[];
  /**
   * The axis the checkboxes should align with.
   * @default 'vertical'
   */
  orientation?: Orientation;
  /**
   * By default, checkboxes are not emphasized (gray).
   * The emphasized (blue) version provides visual prominence.
   */
  isEmphasized?: boolean;
}
