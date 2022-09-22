import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";
import { useLocalizedStringFormatter } from "@react-aria/i18n";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceLabelProps } from "@types-valence/label";

// @valence-icons
import Asterisk from "@valence-icons/ui/Asterisk";

// @valence-styles
import styles from "@valence-styles/components/fieldlabel/vars.module.scss";

import intlMessages from "../intl";

function Label(props: ValenceLabelProps, ref: DOMRef<HTMLLabelElement>) {
  props = useProviderProps(props);
  let {
    children,
    labelPosition = "top",
    labelAlign = labelPosition === "side" ? "start" : null,
    isRequired,
    necessityIndicator = isRequired != null ? "icon" : null,
    includeNecessityIndicatorInAccessibilityName = false,
    htmlFor,
    for: labelFor,
    elementType: ElementType = "label",
    onClick,
    ...otherProps
  } = props;

  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(otherProps);

  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  let necessityLabel = isRequired
    ? stringFormatter.format("(required)")
    : stringFormatter.format("(optional)");
  let icon = (
    <Asterisk
      UNSAFE_className={classNames(styles, "FieldLabel-requiredIcon")}
      aria-label={
        includeNecessityIndicatorInAccessibilityName
          ? stringFormatter.format("(required)")
          : undefined
      }
    />
  );

  let labelClassNames = classNames(
    styles,
    "FieldLabel",
    {
      "FieldLabel--positionSide": labelPosition === "side",
      "FieldLabel--alignEnd": labelAlign === "end",
    },
    styleProps.className
  );

  return (
    <ElementType
      {...filterDOMProps(otherProps)}
      {...styleProps}
      onClick={onClick}
      ref={domRef}
      className={labelClassNames}
      htmlFor={ElementType === "label" ? labelFor || htmlFor : undefined}
    >
      {children}
      {(necessityIndicator === "label" ||
        (necessityIndicator === "icon" && isRequired)) &&
        " \u200b"}
      {/* necessityLabel is hidden to screen readers if the field is required because
       * aria-required is set on the field in that case. That will already be announced,
       * so no need to duplicate it here. If optional, we do want it to be announced here. */}
      {necessityIndicator === "label" && (
        <span
          aria-hidden={
            !includeNecessityIndicatorInAccessibilityName
              ? isRequired
              : undefined
          }
        >
          {necessityLabel}
        </span>
      )}
      {necessityIndicator === "icon" && isRequired && icon}
    </ElementType>
  );
}

let _Label = React.forwardRef(Label);
export { _Label as Label };
