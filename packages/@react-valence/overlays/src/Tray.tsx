import React, { forwardRef, HTMLAttributes, ReactNode, RefObject } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { mergeProps, useViewportSize } from "@react-aria/utils";
import { useModal, useOverlay, usePreventScroll } from "@react-aria/overlays";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { TrayProps } from "@types-valence/overlays";

// @valence-styles
import trayStyles from "@valence-styles/components/tray/vars.module.scss";

import { Overlay } from "./Overlay";
import overrideStyles from "./overlays.scss";
import { Underlay } from "./Underlay";

interface TrayWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  isFixedHeight?: boolean;
  isNonModal?: boolean;
  overlayProps: HTMLAttributes<HTMLElement>;
}

function Tray(props: TrayProps, ref: DOMRef<HTMLDivElement>) {
  let { children, onClose, isFixedHeight, isNonModal, ...otherProps } = props;
  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(props);

  let { overlayProps, underlayProps } = useOverlay(
    { ...props, isDismissable: true },
    domRef
  );

  return (
    <Overlay {...otherProps}>
      <Underlay {...underlayProps} />
      <TrayWrapper
        {...styleProps}
        onClose={onClose}
        ref={domRef}
        overlayProps={overlayProps}
        isFixedHeight={isFixedHeight}
        isNonModal={isNonModal}
      >
        {children}
      </TrayWrapper>
    </Overlay>
  );
}

let TrayWrapper = forwardRef(function (
  props: TrayWrapperProps,
  ref: RefObject<HTMLDivElement>
) {
  let {
    children,
    isOpen,
    isFixedHeight,
    isNonModal,
    overlayProps,
    ...otherProps
  } = props;
  usePreventScroll();
  let { modalProps } = useModal({
    isDisabled: isNonModal,
  });

  // We need to measure the window's height in JS rather than using percentages in CSS
  // so that contents (e.g. menu) can inherit the max-height properly. Using percentages
  // does not work properly because there is nothing to base the percentage on.
  // We cannot use vh units because mobile browsers adjust the window height dynamically
  // when the address bar/bottom toolbars show and hide on scroll and vh units are fixed.
  // Also, the visual viewport is smaller than the layout viewport when the virtual keyboard
  // is up, so use the VisualViewport API to ensure the tray is displayed above the keyboard.
  let viewport = useViewportSize();
  let wrapperStyle: any = {
    "--valence-visual-viewport-height": viewport.height + "px",
  };

  let wrapperClassName = classNames(trayStyles, "Tray-wrapper");

  let className = classNames(
    trayStyles,
    "Tray",
    {
      "is-open": isOpen,
      "Tray--fixedHeight": isFixedHeight,
    },
    classNames(overrideStyles, "Tray", "-Tray"),
    otherProps.className
  );

  let domProps = mergeProps(otherProps, overlayProps);

  return (
    <div className={wrapperClassName} style={wrapperStyle}>
      <div
        {...domProps}
        {...modalProps}
        className={className}
        ref={ref}
        data-testid="tray"
      >
        {children}
      </div>
    </div>
  );
});

let _Tray = forwardRef(Tray);
export { _Tray as Tray };
