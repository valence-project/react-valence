import React, { useContext, useMemo, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { DismissButton } from "@react-aria/overlays";
import { FocusScope } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useDialog } from "@react-aria/dialog";
import { useLocalizedStringFormatter } from "@react-aria/i18n";

// @react-valence https://valence.austinpittman.net
import { ActionButton } from "@react-valence/button";
import {
  classNames,
  SlotProvider,
  unwrapDOMRef,
  useDOMRef,
  useHasChild,
  useStyleProps,
} from "@react-valence/utils";
import { Grid } from "@react-valence/layout";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceDialogProps } from "@types-valence/dialog";

// @valence-icons
import Close from "@valence-icons/ui/CloseFill";

// @valence-styles
import styles from "@valence-styles/components/dialog/vars.module.scss";

import { DialogContext, DialogContextValue } from "./context";

import intlMessages from "../intl";

let sizeMap = {
  S: "small",
  M: "medium",
  L: "large",
  fullscreen: "fullscreen",
  fullscreenTakeover: "fullscreenTakeover",
};

function Dialog(props: ValenceDialogProps, ref: DOMRef) {
  let { type = "modal", ...contextProps } =
    useContext(DialogContext) || ({} as DialogContextValue);
  let {
    children,
    isDismissable = contextProps.isDismissable,
    onDismiss = contextProps.onClose,
    size,
    ...otherProps
  } = props;
  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  let { styleProps } = useStyleProps(otherProps);

  size = type === "popover" ? size || "S" : size || "L";

  let domRef = useDOMRef(ref);
  let gridRef = useRef();
  let sizeVariant = sizeMap[type] || sizeMap[size];
  let { dialogProps, titleProps } = useDialog(
    mergeProps(contextProps, props),
    domRef
  );

  let hasHeader = useHasChild(
    `.${styles["Dialog-header"]}`,
    unwrapDOMRef(gridRef)
  );
  let hasHeading = useHasChild(
    `.${styles["Dialog-heading"]}`,
    unwrapDOMRef(gridRef)
  );
  let hasFooter = useHasChild(
    `.${styles["Dialog-footer"]}`,
    unwrapDOMRef(gridRef)
  );
  let hasTypeIcon = useHasChild(
    `.${styles["Dialog-typeIcon"]}`,
    unwrapDOMRef(gridRef)
  );

  let slots = useMemo(
    () => ({
      hero: { UNSAFE_className: styles["Dialog-hero"] },
      heading: {
        UNSAFE_className: classNames(styles, "Dialog-heading", {
          "Dialog-heading--noHeader": !hasHeader,
          "Dialog-heading--noTypeIcon": !hasTypeIcon,
        }),
        level: 2,
        ...titleProps,
      },
      header: {
        UNSAFE_className: classNames(styles, "Dialog-header", {
          "Dialog-header--noHeading": !hasHeading,
          "Dialog-header--noTypeIcon": !hasTypeIcon,
        }),
      },
      typeIcon: { UNSAFE_className: styles["Dialog-typeIcon"] },
      divider: {
        UNSAFE_className: styles["Dialog-divider"],
        size: "M",
      },
      content: { UNSAFE_className: styles["Dialog-content"] },
      footer: { UNSAFE_className: styles["Dialog-footer"] },
      buttonGroup: {
        UNSAFE_className: classNames(styles, "Dialog-buttonGroup", {
          "Dialog-buttonGroup--noFooter": !hasFooter,
        }),
        align: "end",
      },
    }),
    [hasFooter, hasHeader, titleProps]
  );

  // If rendered in a popover or tray there won't be a visible dismiss button,
  // so we render a hidden one for screen readers.
  let dismissButton: JSX.Element;
  if (type === "popover" || type === "tray") {
    dismissButton = <DismissButton onDismiss={onDismiss} />;
  }

  return (
    <FocusScope contain restoreFocus>
      <section
        {...styleProps}
        {...dialogProps}
        className={classNames(
          styles,
          "Dialog",
          {
            [`Dialog--${sizeVariant}`]: sizeVariant,
            "Dialog--dismissable": isDismissable,
          },
          styleProps.className
        )}
        ref={domRef}
      >
        <Grid ref={gridRef} UNSAFE_className={styles["Dialog-grid"]}>
          <SlotProvider slots={slots}>{children}</SlotProvider>
          {isDismissable && (
            <ActionButton
              UNSAFE_className={styles["Dialog-closeButton"]}
              isQuiet
              aria-label={stringFormatter.format("dismiss")}
              onPress={onDismiss}
            >
              <Close />
            </ActionButton>
          )}
        </Grid>
        {dismissButton}
      </section>
    </FocusScope>
  );
}

/**
 * Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface.
 * Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.
 */
let _Dialog = React.forwardRef(Dialog);
export { _Dialog as Dialog };
