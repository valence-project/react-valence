import React, { forwardRef, HTMLAttributes, ReactNode, RefObject } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { mergeProps, useViewportSize } from "@react-aria/utils";
import { useModal, useOverlay, usePreventScroll } from "@react-aria/overlays";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";
import { useSpring, animated } from "react-spring";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ModalProps } from "@types-valence/overlays";

// @valence-styles
import modalStyles from "@valence-styles/components/modal/vars.module.scss";

import { Overlay } from "./Overlay";
import overrideStyles from "./overlays.scss";
import { Underlay } from "./Underlay";

interface ModalWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  type?: "modal" | "fullscreen" | "fullscreenTakeover";
  overlayProps: HTMLAttributes<HTMLElement>;
}

function Modal(props: ModalProps, ref: DOMRef<HTMLDivElement>) {
  let { children, onClose, type, ...otherProps } = props;
  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(props);

  let { overlayProps, underlayProps } = useOverlay(props, domRef);

  return (
    <Overlay {...otherProps}>
      <Underlay {...underlayProps} />
      <ModalWrapper
        {...styleProps}
        onClose={onClose}
        type={type}
        ref={domRef}
        overlayProps={overlayProps}
      >
        {children}
      </ModalWrapper>
    </Overlay>
  );
}

let typeMap = {
  fullscreen: "fullscreen",
  fullscreenTakeover: "fullscreenTakeover",
};

let ModalWrapper = forwardRef(function (
  props: ModalWrapperProps,
  ref: RefObject<HTMLDivElement>
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let { children, isOpen, type, overlayProps, ...otherProps } = props;
  let typeVariant = typeMap[type];

  let spring = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "scale(1)" : "scale(0.90)",
    config: { mass: 1, tension: 300, friction: 26 }
  });

  usePreventScroll();
  let { modalProps } = useModal();

  let wrapperClassName = classNames(
    modalStyles,
    "Modal-wrapper",
    classNames(overrideStyles, "Modal-wrapper")
  );

  let modalClassName = classNames(
    modalStyles,
    "Modal",
    {
      "is-open": isOpen,
    },
    classNames(overrideStyles, "Modal"),
    { [`Modal--${typeVariant}`]: typeVariant },
    otherProps.className
  );

  let viewport = useViewportSize();
  let style: any = {
    "--valence-visual-viewport-height": viewport.height + "px",
    ...spring,
  };

  return (
    <animated.div className={wrapperClassName} style={style}>
      <div
        {...mergeProps(otherProps, overlayProps, modalProps)}
        ref={ref}
        className={modalClassName}
        data-testid="modal"
      >
        {children}
      </div>
    </animated.div>
  );
});

let _Modal = forwardRef(Modal);
export { _Modal as Modal };
