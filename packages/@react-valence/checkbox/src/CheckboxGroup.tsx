import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useCheckboxGroup } from "@react-aria/checkbox";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useCheckboxGroupState } from "@react-stately/checkbox";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";
import { Label } from "@react-valence/label";
import { Provider, useProviderProps } from "@react-valence/provider";
import { useFormProps } from "@react-valence/form";

// @types-valence
import { DOMRef, LabelPosition } from "@types-valence/shared";
import { ValenceCheckboxGroupProps } from "@types-valence/checkbox";

// @valence-styles
import labelStyles from "@valence-styles/components/fieldlabel/vars.module.scss";
import styles from "@valence-styles/components/fieldgroup/vars.module.scss";

import { CheckboxGroupContext } from "./context";

function CheckboxGroup(
  props: ValenceCheckboxGroupProps,
  ref: DOMRef<HTMLDivElement>
) {
  props = useProviderProps(props);
  props = useFormProps(props);
  let {
    isEmphasized,
    isRequired,
    necessityIndicator,
    label,
    labelPosition = "top" as LabelPosition,
    labelAlign,
    children,
    orientation = "vertical",
    validationState,
    ...otherProps
  } = props;
  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(otherProps);
  let state = useCheckboxGroupState(props);
  let { labelProps, groupProps } = useCheckboxGroup(props, state);

  return (
    <div
      {...styleProps}
      {...groupProps}
      className={classNames(
        styles,
        "FieldGroup",
        {
          "FieldGroup--positionSide": labelPosition === "side",
        },
        // This is so checkbox group works inside a <Form>
        classNames(labelStyles, "Field"),
        styleProps.className
      )}
      ref={domRef}
    >
      {label && (
        <Label
          {...labelProps}
          elementType="span"
          labelPosition={labelPosition}
          labelAlign={labelAlign}
          isRequired={isRequired}
          necessityIndicator={necessityIndicator}
          includeNecessityIndicatorInAccessibilityName
        >
          {label}
        </Label>
      )}
      <div
        role="presentation"
        className={classNames(styles, "FieldGroup-group", {
          "FieldGroup-group--horizontal": orientation === "horizontal",
        })}
      >
        <Provider isEmphasized={isEmphasized} validationState={validationState}>
          <CheckboxGroupContext.Provider value={state}>
            {children}
          </CheckboxGroupContext.Provider>
        </Provider>
      </div>
    </div>
  );
}

/**
 * A CheckboxGroup allows users to select one or more items from a list of choices.
 */
const _CheckboxGroup = React.forwardRef(CheckboxGroup);
export { _CheckboxGroup as CheckboxGroup };
