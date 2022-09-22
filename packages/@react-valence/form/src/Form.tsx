import React, { useContext } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";
import { Provider, useProviderProps } from "@react-valence/provider";

// @types-valence
import {
  Alignment,
  DOMRef,
  LabelPosition,
  ValenceLabelableProps,
} from "@types-valence/shared";
import { ValenceFormProps } from "@types-valence/form";

// @valence-styles
import styles from "@valence-styles/components/fieldlabel/vars.module.scss";

let FormContext = React.createContext<ValenceLabelableProps>({});
export function useFormProps<T extends ValenceLabelableProps>(props: T): T {
  let ctx = useContext(FormContext);
  return { ...ctx, ...props };
}

const formPropNames = new Set([
  "action",
  "autoComplete",
  "encType",
  "method",
  "target",
  "onSubmit",
]);

function Form(props: ValenceFormProps, ref: DOMRef<HTMLFormElement>) {
  props = useProviderProps(props);
  let {
    children,
    labelPosition = "top" as LabelPosition,
    labelAlign = "start" as Alignment,
    isRequired,
    necessityIndicator,
    isQuiet,
    isEmphasized,
    isDisabled,
    isReadOnly,
    validationState,
    ...otherProps
  } = props;

  let { styleProps } = useStyleProps(otherProps);
  let domRef = useDOMRef(ref);

  let ctx = {
    labelPosition,
    labelAlign,
    necessityIndicator,
  };

  return (
    <form
      {...filterDOMProps(otherProps, {
        labelable: true,
        propNames: formPropNames,
      })}
      {...styleProps}
      noValidate
      ref={domRef}
      className={classNames(
        styles,
        "Form",
        {
          "Form--positionSide": labelPosition === "side",
          "Form--positionTop": labelPosition === "top",
        },
        styleProps.className
      )}
    >
      <FormContext.Provider value={ctx}>
        <Provider
          isQuiet={isQuiet}
          isEmphasized={isEmphasized}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          validationState={validationState}
        >
          {children}
        </Provider>
      </FormContext.Provider>
    </form>
  );
}

/**
 * Forms allow users to enter data that can be submitted while providing alignment and styling for form fields.
 */
const _Form = React.forwardRef(Form);
export { _Form as Form };
