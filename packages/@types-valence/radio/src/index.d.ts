import { ReactElement, ReactNode } from "react";

// @types-valence
import {
  AriaLabelingProps,
  AriaValidationProps,
  DOMProps,
  FocusableProps,
  InputBase,
  LabelableProps,
  Orientation,
  ValenceLabelableProps,
  StyleProps,
  Validation,
  ValueBase,
} from "@types-valence/shared";

export interface RadioGroupProps
  extends ValueBase<string>,
    InputBase,
    Validation,
    LabelableProps {
  /**
   * The axis the Radio Button(s) should align with.
   * @default 'vertical'
   */
  orientation?: Orientation;
  /**
   * The name of the RadioGroup, used when submitting an HTML form.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name_and_radio_buttons).
   */
  name?: string;
}

export interface RadioProps extends FocusableProps {
  /**
   * The value of the radio button, used when submitting an HTML form.
   * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Value).
   */
  value: string;
  /**
   * The label for the Radio. Accepts any renderable node.
   */
  children?: ReactNode;
  /**
   * Whether the radio button is disabled or not.
   * Shows that a selection exists, but is not available in that circumstance.
   */
  isDisabled?: boolean;
}

export interface AriaRadioGroupProps
  extends RadioGroupProps,
    DOMProps,
    AriaLabelingProps,
    AriaValidationProps {}
export interface ValenceRadioGroupProps
  extends AriaRadioGroupProps,
    ValenceLabelableProps,
    StyleProps {
  /**
   * The Radio(s) contained within the RadioGroup.
   */
  children: ReactElement<RadioProps> | ReactElement<RadioProps>[];
  /**
   * By default, radio buttons are not emphasized (gray).
   * The emphasized (blue) version provides visual prominence.
   */
  isEmphasized?: boolean;
}

export interface AriaRadioProps
  extends RadioProps,
    DOMProps,
    AriaLabelingProps {}
export interface ValenceRadioProps extends AriaRadioProps, StyleProps {}
