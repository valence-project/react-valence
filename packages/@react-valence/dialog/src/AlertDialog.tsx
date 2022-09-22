import React, { forwardRef, useContext } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { chain } from "@react-aria/utils";
import { useLocalizedStringFormatter } from "@react-aria/i18n";

// @react-valence https://valence.austinpittman.net
import { Button } from "@react-valence/button";
import { ButtonGroup } from "@react-valence/buttongroup";
import { classNames, useStyleProps } from "@react-valence/utils";
import { Content } from "@react-valence/view";
import { Divider } from "@react-valence/divider";
import { Heading } from "@react-valence/text";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceAlertDialogProps } from "@types-valence/dialog";
import { ValenceButtonProps } from "@types-valence/button";

// @valence-icons
import AlertIcon from "@valence-icons/ui/AlertFill";

// @valence-styles
import styles from "@valence-styles/components/dialog/vars.module.scss";

import { Dialog } from "./Dialog";
import { DialogContext, DialogContextValue } from "./context";

import intlMessages from "../intl";

/**
 * AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.
 */
function AlertDialog(props: ValenceAlertDialogProps, ref: DOMRef) {
  let { onClose = () => {} } =
    useContext(DialogContext) || ({} as DialogContextValue);

  let {
    variant,
    children,
    primaryActionLabel,
    secondaryActionLabel,
    cancelLabel,
    autoFocusButton,
    title,
    isPrimaryActionDisabled,
    isSecondaryActionDisabled,
    onCancel = () => {},
    onPrimaryAction = () => {},
    onSecondaryAction = () => {},
    ...otherProps
  } = props;
  let { styleProps } = useStyleProps(otherProps);
  let stringFormatter = useLocalizedStringFormatter(intlMessages);

  let confirmVariant: ValenceButtonProps["variant"] = "primary";
  if (variant) {
    if (variant === "confirmation") {
      confirmVariant = "cta";
    } else if (variant === "destructive") {
      confirmVariant = "negative";
    }
  }

  return (
    <Dialog
      UNSAFE_style={styleProps.style}
      UNSAFE_className={classNames(
        styles,
        { [`Dialog--${variant}`]: variant },
        styleProps.className
      )}
      isHidden={styleProps.hidden}
      size="M"
      role="alertdialog"
      ref={ref}
    >
      <Heading>{title}</Heading>
      {(variant === "error" || variant === "warning") && (
        <AlertIcon
          slot="typeIcon"
          aria-label={stringFormatter.format("alert")}
        />
      )}
      <Divider />
      <Content>{children}</Content>
      <ButtonGroup align="end">
        {cancelLabel && (
          <Button
            variant="secondary"
            onPress={() => chain(onClose(), onCancel())}
            autoFocus={autoFocusButton === "cancel"}
          >
            {cancelLabel}
          </Button>
        )}
        {secondaryActionLabel && (
          <Button
            variant="secondary"
            onPress={() => chain(onClose(), onSecondaryAction())}
            isDisabled={isSecondaryActionDisabled}
            autoFocus={autoFocusButton === "secondary"}
          >
            {secondaryActionLabel}
          </Button>
        )}
        <Button
          variant={confirmVariant}
          onPress={() => chain(onClose(), onPrimaryAction())}
          isDisabled={isPrimaryActionDisabled}
          autoFocus={autoFocusButton === "primary"}
        >
          {primaryActionLabel}
        </Button>
      </ButtonGroup>
    </Dialog>
  );
}

/**
 * AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.
 */
let _AlertDialog = forwardRef(AlertDialog);
export { _AlertDialog as AlertDialog };
