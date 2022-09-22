import { FormEventHandler, ReactElement } from "react";

// @types-valence
import {
  AriaLabelingProps,
  DOMProps,
  ValenceLabelableProps,
  StyleProps,
  ValidationState,
} from "@types-valence/shared";

export interface ValenceFormProps
  extends DOMProps,
    AriaLabelingProps,
    StyleProps,
    ValenceLabelableProps {
  /** The contents of the Form. */
  children:
    | ReactElement<ValenceLabelableProps>
    | ReactElement<ValenceLabelableProps>[];
  /** Whether the Form elements are displayed with their quiet style. */
  isQuiet?: boolean;
  /** Whether the Form elements are rendered with their emphasized style. */
  isEmphasized?: boolean;
  /** Whether the Form elements are disabled. */
  isDisabled?: boolean;
  /** Whether user input is required on each of the Form elements before Form submission. */
  isRequired?: boolean;
  /** Whether the Form elements can be selected but not changed by the user. */
  isReadOnly?: boolean;
  /**
   * Whether the Form elements should display their "valid" or "invalid" visual styling.
   * @default 'valid'
   */
  validationState?: ValidationState;
  /**
   * Where to send the form-data when the form is submitted.
   */
  action?: string;
  /**
   * The enctype attribute specifies how the form-data should be encoded when submitting it to the server.
   */
  encType?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";
  /**
   * The form-data can be sent as URL variables (with method="get") or as HTTP post transaction (with method="post").
   */
  method?: "get" | "post";
  /**
   * The target attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.
   */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /**
   * Fired on form submission.
   */
  onSubmit?: FormEventHandler;
}
