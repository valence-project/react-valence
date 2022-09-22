import React, { Fragment, ReactElement, useEffect, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { PressResponder } from "@react-aria/interactions";
import { useOverlayPosition, useOverlayTrigger } from "@react-aria/overlays";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import {
  OverlayTriggerState,
  useOverlayTriggerState,
} from "@react-stately/overlays";

// @react-valence https://valence.austinpittman.net
import { Modal, Popover, Tray } from "@react-valence/overlays";
import { unwrapDOMRef, useMediaQuery } from "@react-valence/utils";

// @types-valence
import { DOMRefValue } from "@types-valence/shared";
import {
  ValenceDialogClose,
  ValenceDialogProps,
  ValenceDialogTriggerProps,
} from "@types-valence/dialog";

import { DialogContext } from "./context";

function DialogTrigger(props: ValenceDialogTriggerProps) {
  let {
    children,
    type = "modal",
    mobileType = type === "popover" ? "modal" : type,
    hideArrow,
    targetRef,
    isDismissable,
    isKeyboardDismissDisabled,
    ...positionProps
  } = props;
  if (!Array.isArray(children) || children.length > 2) {
    throw new Error("DialogTrigger must have exactly 2 children");
  }
  // if a function is passed as the second child, it won't appear in toArray
  let [trigger, content] = children as [ReactElement, ValenceDialogClose];

  // On small devices, show a modal or tray instead of a popover.
  // TODO: DNA variable?
  let isMobile = useMediaQuery("(max-width: 700px)");
  if (isMobile) {
    // handle cases where desktop popovers need a close button for the mobile modal view
    if (type !== "modal" && mobileType === "modal") {
      isDismissable = true;
    }

    type = mobileType;
  }

  let state = useOverlayTriggerState(props);
  let wasOpen = useRef(false);
  wasOpen.current = state.isOpen;
  let isExiting = useRef(false);
  let onExiting = () => (isExiting.current = true);
  let onExited = () => (isExiting.current = false);

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      if (
        (wasOpen.current || isExiting.current) &&
        type !== "popover" &&
        type !== "tray"
      ) {
        console.warn(
          "A DialogTrigger unmounted while open. This is likely due to being placed within a trigger that unmounts or inside a conditional. Consider using a DialogContainer instead."
        );
      }
    };
  }, []);

  if (type === "popover") {
    return (
      <PopoverTrigger
        {...positionProps}
        state={state}
        targetRef={targetRef}
        trigger={trigger}
        content={content}
        isKeyboardDismissDisabled={isKeyboardDismissDisabled}
        hideArrow={hideArrow}
      />
    );
  }

  let renderOverlay = () => {
    switch (type) {
      case "fullscreen":
      case "fullscreenTakeover":
      case "modal":
        return (
          <Modal
            isOpen={state.isOpen}
            isDismissable={type === "modal" ? isDismissable : false}
            onClose={state.close}
            type={type}
            isKeyboardDismissDisabled={isKeyboardDismissDisabled}
            onExiting={onExiting}
            onExited={onExited}
          >
            {typeof content === "function" ? content(state.close) : content}
          </Modal>
        );
      case "tray":
        return (
          <Tray
            isOpen={state.isOpen}
            onClose={state.close}
            isKeyboardDismissDisabled={isKeyboardDismissDisabled}
          >
            {typeof content === "function" ? content(state.close) : content}
          </Tray>
        );
    }
  };

  return (
    <DialogTriggerBase
      type={type}
      state={state}
      isDismissable={isDismissable}
      trigger={trigger}
      overlay={renderOverlay()}
    />
  );
}

// Support DialogTrigger inside components using CollectionBuilder.
DialogTrigger.getCollectionNode = function* (props: ValenceDialogTriggerProps) {
  let [trigger] = React.Children.toArray(props.children);
  let [, content] = props.children as [ReactElement, ValenceDialogClose];
  yield {
    element: trigger,
    wrapper: (element) => (
      <DialogTrigger key={element.key} {...props}>
        {element}
        {content}
      </DialogTrigger>
    ),
  };
};

/**
 * DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's
 * open state with the trigger's press state. Additionally, it allows you to customize the type and
 * positioning of the Dialog.
 */

// We don't want getCollectionNode to show up in the type definition
let _DialogTrigger = DialogTrigger as (
  props: ValenceDialogTriggerProps
) => JSX.Element;
export { _DialogTrigger as DialogTrigger };

function PopoverTrigger({
  state,
  targetRef,
  trigger,
  content,
  hideArrow,
  isKeyboardDismissDisabled,
  ...props
}) {
  let triggerRef = useRef<HTMLElement>();

  let overlayRef = useRef<DOMRefValue<HTMLDivElement>>();
  let {
    overlayProps: popoverProps,
    placement,
    arrowProps,
  } = useOverlayPosition({
    targetRef: targetRef || triggerRef,
    overlayRef: unwrapDOMRef(overlayRef),
    placement: props.placement,
    containerPadding: props.containerPadding,
    offset: props.offset,
    crossOffset: props.crossOffset,
    shouldFlip: props.shouldFlip,
    isOpen: state.isOpen,
  });

  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
    triggerRef
  );

  let triggerPropsWithRef = {
    ...triggerProps,
    ref: targetRef ? undefined : triggerRef,
  };

  let overlay = (
    <Popover
      isOpen={state.isOpen}
      UNSAFE_style={popoverProps.style}
      ref={overlayRef}
      onClose={state.close}
      placement={placement}
      arrowProps={arrowProps}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      hideArrow={hideArrow}
    >
      {typeof content === "function" ? content(state.close) : content}
    </Popover>
  );

  return (
    <DialogTriggerBase
      type="popover"
      state={state}
      triggerProps={triggerPropsWithRef}
      dialogProps={overlayProps}
      trigger={trigger}
      overlay={overlay}
    />
  );
}

interface ValenceDialogTriggerBase {
  type: "modal" | "popover" | "tray" | "fullscreen" | "fullscreenTakeover";
  state: OverlayTriggerState;
  isDismissable?: boolean;
  dialogProps?: ValenceDialogProps | {};
  triggerProps?: any;
  overlay: ReactElement;
  trigger: ReactElement;
}

function DialogTriggerBase({
  type,
  state,
  isDismissable,
  dialogProps = {},
  triggerProps = {},
  overlay,
  trigger,
}: ValenceDialogTriggerBase) {
  let context = {
    type,
    onClose: state.close,
    isDismissable,
    ...dialogProps,
  };

  return (
    <Fragment>
      <PressResponder
        {...triggerProps}
        onPress={state.toggle}
        isPressed={
          state.isOpen &&
          type !== "modal" &&
          type !== "fullscreen" &&
          type !== "fullscreenTakeover"
        }
      >
        {trigger}
      </PressResponder>
      <DialogContext.Provider value={context}>{overlay}</DialogContext.Provider>
    </Fragment>
  );
}
