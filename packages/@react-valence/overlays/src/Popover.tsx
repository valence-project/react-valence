import React, {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  RefObject,
  useRef,
  useState,
} from "react";

import { useSpring, animated } from "react-spring";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { mergeProps, useLayoutEffect } from "@react-aria/utils";
import { useModal, useOverlay } from "@react-aria/overlays";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { PlacementAxis, PopoverProps } from "@types-valence/overlays";

// @valence-styles
import styles from "@valence-styles/components/popover/vars.module.scss";

import { Overlay } from "./Overlay";
import overrideStyles from "./overlays.scss";

interface PopoverWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  placement?: PlacementAxis;
  arrowProps?: HTMLAttributes<HTMLElement>;
  hideArrow?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  shouldCloseOnBlur?: boolean;
  isKeyboardDismissDisabled?: boolean;
  isNonModal?: boolean;
  isDismissable?: boolean;
}

/**
 * Arrow placement can be done pointing right or down because those paths start at 0, x or y. Because the
 * other two don't, they start at a fractional pixel value, it introduces rounding differences between browsers and
 * between display types (retina with subpixels vs not retina). By flipping them with CSS we can ensure that
 * the path always starts at 0 so that it perfectly overlaps the popover's border.
 * See bottom of file for more explanation.
 */
let arrowPlacement = {
  left: "right",
  right: "right",
  top: "bottom",
  bottom: "bottom",
};

function Popover(props: PopoverProps, ref: DOMRef<HTMLDivElement>) {
  let {
    children,
    placement,
    arrowProps,
    onClose,
    shouldCloseOnBlur,
    hideArrow,
    isKeyboardDismissDisabled,
    isNonModal,
    isDismissable = true,
    ...otherProps
  } = props;
  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(props);

  return (
    <Overlay {...otherProps}>
      <PopoverWrapper
        {...styleProps}
        ref={domRef}
        placement={placement}
        arrowProps={arrowProps}
        onClose={onClose}
        shouldCloseOnBlur={shouldCloseOnBlur}
        isKeyboardDismissDisabled={isKeyboardDismissDisabled}
        hideArrow={hideArrow}
        isNonModal={isNonModal}
        isDismissable={isDismissable}
      >
        {children}
      </PopoverWrapper>
    </Overlay>
  );
}

const PopoverWrapper = forwardRef(
  (props: PopoverWrapperProps, ref: RefObject<HTMLDivElement>) => {
    let {
      children,
      placement = "bottom",
      arrowProps,
      isOpen,
      hideArrow,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      shouldCloseOnBlur,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isKeyboardDismissDisabled,
      isNonModal,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isDismissable,
      ...otherProps
    } = props;
    let { overlayProps } = useOverlay(
      { ...props, isDismissable: isDismissable && isOpen },
      ref
    );
    let { modalProps } = useModal({
      isDisabled: isNonModal,
    });

    const directions = {
      top: isOpen ? "translateY(-0.309rem)" : "translateY(0rem)",
      right: isOpen ? "translateX(0.309rem)" : "translateX(0rem)",
      left: isOpen ? "translateX(-0.309rem)" : "translateX(0rem)",
      bottom: isOpen ? "translateY(0.309rem)" : "translateY(0rem)",
    };

    const transition = useSpring({
      opacity: isOpen ? 1 : 0,
      transform: directions[placement],
      config: { mass: 1, tension: 300, friction: 26 },
    });
    const combineMotion = (still: any, transition: object) => {
      return {
        ...still,
        style: {
          ...still.style,
          ...transition,
        },
      };
    };

    let stillProps = mergeProps(otherProps, overlayProps, modalProps);

    return (
      <animated.div
        {...{
          ...combineMotion(stillProps, transition),
          ref,
          className: classNames(
            styles,
            "Popover",
            `Popover--${placement}`,
            {
              "Popover--withTip": !hideArrow,
              "is-open": isOpen,
            },
            classNames(overrideStyles, "Popover"),
            otherProps.className
          ),
          role: "presentation",
          "data-testid": "popover",
        }}
      >
        {children}
        {hideArrow ? null : (
          <Arrow
            arrowProps={arrowProps}
            direction={arrowPlacement[placement]}
          />
        )}
      </animated.div>
    );
  }
);

let ROOT_2 = Math.sqrt(2);

function Arrow(props) {
  let [size, setSize] = useState(20);
  let [borderWidth, setBorderWidth] = useState(1);
  let ref = useRef();
  // get the css value for the tip size and divide it by 2 for this arrow implementation
  useLayoutEffect(() => {
    if (ref.current) {
      let spectrumTipWidth = window
        .getComputedStyle(ref.current)
        .getPropertyValue("--valence-popover-tip-size");
      if (spectrumTipWidth !== "") {
        setSize(parseInt(spectrumTipWidth, 10) / 2);
      }

      let spectrumBorderWidth = window
        .getComputedStyle(ref.current)
        .getPropertyValue("--valence-popover-tip-borderWidth");
      if (spectrumBorderWidth !== "") {
        setBorderWidth(parseInt(spectrumBorderWidth, 10));
      }
    }
  }, [ref]);

  let landscape = props.direction === "top" || props.direction === "bottom";
  let mirror = props.direction === "left" || props.direction === "top";

  let borderDiagonal = borderWidth * ROOT_2;
  let halfBorderDiagonal = borderDiagonal / 2;

  let secondary = 2 * size + 2 * borderDiagonal;
  let primary = size + borderDiagonal;

  let primaryStart = mirror ? primary : 0;
  let primaryEnd = mirror ? halfBorderDiagonal : primary - halfBorderDiagonal;

  let secondaryStart = halfBorderDiagonal;
  let secondaryMiddle = secondary / 2;
  let secondaryEnd = secondary - halfBorderDiagonal;

  let pathData = landscape
    ? [
        "M",
        secondaryStart,
        primaryStart,
        "L",
        secondaryMiddle,
        primaryEnd,
        "L",
        secondaryEnd,
        primaryStart,
      ]
    : [
        "M",
        primaryStart,
        secondaryStart,
        "L",
        primaryEnd,
        secondaryMiddle,
        "L",
        primaryStart,
        secondaryEnd,
      ];
  let arrowProps = props.arrowProps;

  /* use ceil because the svg needs to always accomodate the path inside it */
  return (
    <svg
      xmlns="http://www.w3.org/svg/2000"
      width={Math.ceil(landscape ? secondary : primary)}
      height={Math.ceil(landscape ? primary : secondary)}
      style={props.style}
      className={classNames(styles, "Popover-tip")}
      ref={ref}
      {...arrowProps}
    >
      <path
        className={classNames(styles, "Popover-tip-triangle")}
        d={pathData.join(" ")}
      />
    </svg>
  );
}

let _Popover = forwardRef(Popover);
export { _Popover as Popover };

/**
 * More explanation on popover tips.
 * - I tried changing the calculation of the popover placement in an effort to get it squarely onto the pixel grid.
 * This did not work because the problem was in the svg partial pixel end of the path in the popover right and popover bottom.
 * - I tried creating an extra 'bandaid' path that matched the background color and would overlap the popover border.
 * This didn't work because the border on the svg triangle didn't extend all the way to match nicely with the popover border.
 * - I tried getting the client bounding box and setting the svg to that partial pixel value
 * This didn't work because again the issue was inside the svg
 * - I didn't try drawing the svg backwards
 * This could still be tried
 * - I tried changing the calculation of the popover placement AND the svg height/width so that they were all rounded
 * This seems to have done the trick.
 */
