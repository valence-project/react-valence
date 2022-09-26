import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useToast } from "@react-aria/toast";

// @react-valence https://valence.austinpittman.net
import { Button, ClearButton } from "@react-valence/button";
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ToastProps, ToastState } from "@types-valence/toast";

// @valence-icons
import AlertIcon from "@valence-icons/ui/AlertFill";
import Close from "@valence-icons/ui/CloseFill";
import InfoCircle from "@valence-icons/ui/InformationFill";
import CheckCircle from "@valence-icons/ui/CheckboxCircleFill";

// @valence-styles
import styles from "@valence-styles/components/toast/vars.module.scss";

import toastContainerStyles from "./toastContainer.scss";

interface ValenceToastProps extends ToastProps, ToastState {}

export const ICONS = {
  info: InfoCircle,
  negative: AlertIcon,
  positive: CheckCircle,
};

function Toast(props: ValenceToastProps, ref: DOMRef<HTMLDivElement>) {
  let { actionLabel, children, onRemove, variant, ...otherProps } = props;
  let { actionButtonProps, closeButtonProps, iconProps, toastProps } = useToast(
    { ...otherProps, variant },
    { onRemove }
  );
  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(otherProps);
  let Icon = ICONS[variant];

  return (
    <div
      {...{
        ...styleProps,
        ...toastProps,
        ref: domRef,
        className: classNames(
          styles,
          "Toast",
          { ["Toast--" + variant]: variant },
          styleProps.className,
          classNames(toastContainerStyles, "Toast")
        ),
      }}
    >
      {Icon && (
        <Icon
          {...{ ...iconProps, UNSAFE_className: styles["Toast-typeIcon"] }}
        />
      )}
      <div className={styles["Toast-body"]}>
        <div className={styles["Toast-content"]}>{children}</div>
        {actionLabel && (
          <Button
            {...{
              ...actionButtonProps,
              UNSAFE_className: styles["Button"],
              isQuiet: true,
              variant: "overBackground",
            }}
          >
            {actionLabel}
          </Button>
        )}
      </div>
      <div className={styles["Toast-buttons"]}>
        <ClearButton {...{ ...closeButtonProps, variant: "overBackground" }}>
          <Close />
        </ClearButton>
      </div>
    </div>
  );
}

let _Toast = React.forwardRef(Toast);
export { _Toast as Toast };
