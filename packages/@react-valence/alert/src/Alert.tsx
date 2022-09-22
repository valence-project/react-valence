import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useLocalizedStringFormatter } from "@react-aria/i18n";

// @react-valence https://valence.austinpittman.net
import { classNames, useStyleProps } from "@react-valence/utils";

// @types-valence
import { ValenceAlertProps } from "@types-valence/alert";

// @valence-icons
import AlertTriangle from "@valence-icons/ui/AlertFill";
import QuestionCircle from "@valence-icons/ui/QuestionFill";
import InfoCircle from "@valence-icons/ui/InformationFill";
import CheckCircle from "@valence-icons/ui/CheckboxCircleFill";

// @valence-styles
import styles from "@valence-styles/components/alert/vars.module.scss";

// @ts-ignore
import intlMessages from "../intl";

let ICONS = {
  error: AlertTriangle,
  warning: AlertTriangle,
  info: InfoCircle,
  help: QuestionCircle,
  success: CheckCircle,
};

export function Alert(props: ValenceAlertProps) {
  let {
    title,
    children,
    variant, // info, help, success, error, warning
    iconAlt, // alt text for image icon, default is derived from variant
    ...otherProps
  } = props;
  let { styleProps } = useStyleProps(otherProps);

  // let AlertIcon = ICONS[variant];
  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  if (!iconAlt) {
    iconAlt = stringFormatter.format(variant);
  }
  let Icon = ICONS[variant];

  return (
    <div
      {...styleProps}
      className={classNames(
        styles,
        "Alert",
        `Alert--${variant}`,
        styleProps.className
      )}
      role="alert"
    >
      <Icon
        UNSAFE_className={classNames(styles, "Alert-icon")}
        aria-label={iconAlt}
      />
      <div className={classNames(styles, "Alert-header")}>{title}</div>
      <div className={classNames(styles, "Alert-content")}>
        {children}
      </div>
    </div>
  );
}
