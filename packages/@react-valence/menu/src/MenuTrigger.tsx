import React, { forwardRef, Fragment, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { DismissButton, useOverlayPosition } from "@react-aria/overlays";
import { FocusScope } from "@react-aria/focus";
import { PressResponder } from "@react-aria/interactions";
import { useMenuTrigger } from "@react-aria/menu";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useMenuTriggerState } from "@react-stately/menu";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  SlotProvider,
  unwrapDOMRef,
  useDOMRef,
  useIsMobileDevice,
} from "@react-valence/utils";
import { Popover, Tray } from "@react-valence/overlays";

// @types-valence
import { DOMRef, DOMRefValue } from "@types-valence/shared";
import { Placement } from "@types-valence/overlays";
import { ValenceMenuTriggerProps } from "@types-valence/menu";

// @valence-styles
import styles from "@valence-styles/components/menu/vars.module.scss";

import { MenuContext } from "./context";

function MenuTrigger(props: ValenceMenuTriggerProps, ref: DOMRef<HTMLElement>) {
  let menuPopoverRef = useRef<DOMRefValue<HTMLDivElement>>();
  let triggerRef = useRef<HTMLElement>();
  let domRef = useDOMRef(ref);
  let menuTriggerRef = domRef || triggerRef;
  let menuRef = useRef<HTMLUListElement>();
  let {
    children,
    align = "start",
    shouldFlip = true,
    direction = "bottom",
    closeOnSelect,
    trigger = "press",
  } = props;

  let [menuTrigger, menu] = React.Children.toArray(children);
  let state = useMenuTriggerState(props);

  let { menuTriggerProps, menuProps } = useMenuTrigger(
    { trigger },
    state,
    menuTriggerRef
  );

  let initialPlacement: Placement;
  switch (direction) {
    case "left":
    case "right":
    case "start":
    case "end":
      initialPlacement = `${direction} ${
        align === "end" ? "bottom" : "top"
      }` as Placement;
      break;
    case "bottom":
    case "top":
    default:
      initialPlacement = `${direction} ${align}` as Placement;
  }

  let isMobile = useIsMobileDevice();
  let { overlayProps: positionProps, placement } = useOverlayPosition({
    targetRef: menuTriggerRef,
    overlayRef: unwrapDOMRef(menuPopoverRef),
    scrollRef: menuRef,
    placement: initialPlacement,
    shouldFlip: shouldFlip,
    isOpen: state.isOpen && !isMobile,
    onClose: state.close,
  });

  let menuContext = {
    ...menuProps,
    ref: menuRef,
    onClose: state.close,
    closeOnSelect,
    autoFocus: state.focusStrategy || true,
    UNSAFE_style: isMobile
      ? {
          width: "100%",
          maxHeight: "inherit",
        }
      : undefined,
    UNSAFE_className: classNames(styles, { "Menu-popover": !isMobile }),
  };

  // Only contain focus while the menu is open. There is a fade out transition during which we may try to move focus.
  // If we contain, then focus will be pulled back into the menu.
  let contents = (
    <FocusScope restoreFocus contain={isMobile && state.isOpen}>
      <DismissButton onDismiss={state.close} />
      {menu}
      <DismissButton onDismiss={state.close} />
    </FocusScope>
  );

  // On small screen devices, the menu is rendered in a tray, otherwise a popover.
  let overlay;
  if (isMobile) {
    overlay = (
      <Tray isOpen={state.isOpen} onClose={state.close}>
        {contents}
      </Tray>
    );
  } else {
    overlay = (
      <Popover
        isOpen={state.isOpen}
        UNSAFE_style={positionProps.style}
        ref={menuPopoverRef}
        placement={placement}
        hideArrow
        onClose={state.close}
        shouldCloseOnBlur
      >
        {contents}
      </Popover>
    );
  }

  return (
    <Fragment>
      <SlotProvider
        slots={{ actionButton: { holdAffordance: trigger === "longPress" } }}
      >
        <PressResponder
          {...menuTriggerProps}
          ref={menuTriggerRef}
          isPressed={state.isOpen}
        >
          {menuTrigger}
        </PressResponder>
      </SlotProvider>
      <MenuContext.Provider value={menuContext}>{overlay}</MenuContext.Provider>
    </Fragment>
  );
}

/**
 * The MenuTrigger serves as a wrapper around a Menu and its associated trigger,
 * linking the Menu's open state with the trigger's press state.
 */
let _MenuTrigger = forwardRef(MenuTrigger);
export { _MenuTrigger as MenuTrigger };
