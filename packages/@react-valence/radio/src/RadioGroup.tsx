import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useRadioGroup } from "@react-aria/radio";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useRadioGroupState } from "@react-stately/radio";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";
import { Label } from "@react-valence/label";
import { useFormProps } from "@react-valence/form";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DOMRef, LabelPosition } from "@types-valence/shared";
import { ValenceRadioGroupProps } from "@types-valence/radio";

// @valence-styles
import labelStyles from "@valence-styles/components/fieldlabel/vars.module.scss";
import styles from "@valence-styles/components/fieldgroup/vars.module.scss";

import { RadioContext } from "./context";

function RadioGroup(
  props: ValenceRadioGroupProps,
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
    validationState,
    children,
    orientation = "vertical",
    ...otherProps
  } = props;
  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(otherProps);

  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    <div
      {...styleProps}
      {...radioGroupProps}
      className={classNames(
        styles,
        "FieldGroup",
        {
          "FieldGroup--positionSide": labelPosition === "side",
        },
        // This is so radio works inside a <Form>
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
        >
          {label}
        </Label>
      )}
      <div
        className={classNames(styles, "FieldGroup-group", {
          "FieldGroup-group--horizontal": orientation === "horizontal",
        })}
      >
        <RadioContext.Provider
          value={{
            isEmphasized,
            validationState,
            state,
          }}
        >
          {children}
        </RadioContext.Provider>
      </div>
    </div>
  );
}

/**
 * Radio groups allow users to select a single option from a list of mutually exclusive options.
 * All possible options are exposed up front for users to compare.
 */
const _RadioGroup = React.forwardRef(RadioGroup);
export { _RadioGroup as RadioGroup };
