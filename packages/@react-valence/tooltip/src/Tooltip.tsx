import React, { useContext, useImperativeHandle, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { mergeProps } from "@react-aria/utils";
import { useTooltip } from "@react-aria/tooltip";

// @react-valence https://valence.austinpittman.net
import { classNames, createDOMRef, useStyleProps } from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceTooltipProps } from "@types-valence/tooltip";

// @valence-icons
import AlertIcon from "@valence-icons/ui/AlertFill";
import InfoCircle from "@valence-icons/ui/InformationFill";
import CheckCircle from "@valence-icons/ui/CheckboxCircleFill";

// @valence-styles
import styles from "@valence-styles/components/tooltip/vars.module.scss";

import { TooltipContext } from "./context";

import { useSpring, animated } from "react-spring";
import { useProvider } from "@react-valence/provider";

import { combineSpring } from "@react-valence/spring";

let iconMap = {
  info: InfoCircle,
  positive: CheckCircle,
  negative: AlertIcon,
};

function Tooltip(props: ValenceTooltipProps, ref: DOMRef) {
  let {
    ref: overlayRef,
    arrowProps,
    state,
    ...tooltipProviderProps
  } = useContext(TooltipContext);
  let defaultRef = useRef();
  overlayRef = overlayRef || defaultRef;
  props = mergeProps(props, tooltipProviderProps);
  let {
    variant = "neutral",
    placement = "top",
    isOpen,
    showIcon,
    ...otherProps
  } = props;
  let { styleProps } = useStyleProps(otherProps);
  let { tooltipProps } = useTooltip(props, state);

  // Sync ref with overlayRef from context.
  useImperativeHandle(ref, () => createDOMRef(overlayRef));

  let Icon = iconMap[variant];

  const valenceSpring = () => {
    let { scale } = useProvider();

    let animDist = {
      medium: 10,
      large: 12,
    };

    let positionMap = {
      top: `translateY(-${animDist[scale]}px)`,
      right: `translateY(${animDist[scale]}px)`,
      bottom: `translateY(${animDist[scale]}px)`,
      left: `translateX(-${animDist[scale]}px)`,
    };

    let _MOTION = {
      top: {
        transform: 'translateY',
        origin: {medium:'2px', large: '4px'},
        end: {medium:'-10px', large: '-12px'}
      },
      right: {
        transform: 'translateX',
        origin: {medium:'2px', large: '4px'},
        end: {medium:'10px', large: '12px'}
      },
      bottom: {
        transform: 'translateY',
        origin: {medium:'2px', large: '4px'},
        end: {medium:'10px', large: '12px'}
      },
      left: {
        transform: 'translateX',
        origin: {medium:'2px', large: '4px'},
        end: {medium:'-10px', large: '-12px'}
      }
    }

    const spring = useSpring({
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? positionMap[placement] : "translateY(2px)",
      config: { mass: 1, tension: 300, friction: 20 },
    });

    return spring;
  };

  return (
    <animated.div
      {...combineSpring(styleProps, valenceSpring())}
      {...tooltipProps}
      className={classNames(
        styles,
        "Tooltip",
        `Tooltip--${variant}`,
        `Tooltip--${placement}`,
        {
          "is-open": isOpen,
        },
        styleProps.className
      )}
      ref={overlayRef}
    >
      {showIcon && variant !== "neutral" && (
        <Icon
          UNSAFE_className={classNames(styles, "Tooltip-typeIcon")}
          aria-hidden
        />
      )}
      {props.children && (
        <span className={classNames(styles, "Tooltip-label")}>
          {props.children}
        </span>
      )}
      <span
        {...arrowProps}
        className={classNames(styles, "Tooltip-tip")}
      />
    </animated.div>
  );
}

/**
 * Display container for Tooltip content. Has a directional arrow dependent on its placement.
 */
let _Tooltip = React.forwardRef(Tooltip);
export { _Tooltip as Tooltip };
