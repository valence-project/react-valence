import React, { ReactElement } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useId } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @types-valence
import { Color } from "@types-valence/color";
import { DOMProps } from "@types-valence/shared";

// @valence-styles
import stylesHandle from "@valence-styles/components/colorhandle/vars.module.scss";
import stylesLoupe from "@valence-styles/components/colorloupe/vars.module.scss";

import { useSpring, animated } from "@react-spring/web";

export interface ColorThumbProps extends DOMProps {
  value: Color;
  isDisabled?: boolean;
  isDragging?: boolean; // shows the color loupe
  isFocused?: boolean; // makes the circle larger
  className?: string;
  children?: ReactElement;
}

function ColorThumb(props: ColorThumbProps) {
  let {
    value,
    isDisabled,
    isDragging,
    isFocused,
    children,
    className = "",
    ...otherProps
  } = props;

  let patternId = useId();

  let valueCSS = value.toString("css");

  let CX = 10;
  let CY = 10;
  let R = 5;

  let colorLoupeTransition = useSpring({
    inner: isDragging
      ? "M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z"
      : `M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z`,
    outer: isDragging
      ? "M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z"
      : `M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z`,
  });

  return (
    <div
      className={
        classNames(stylesHandle, "ColorHandle", {
          "is-focused": isFocused,
          "is-disabled": isDisabled,
        }) +
        " " +
        className
      }
      {...otherProps}
    >
      <div
        className={stylesHandle["ColorHandle-color"]}
        style={{ backgroundColor: valueCSS }}
      />
      <svg
        className={classNames(stylesLoupe, "ColorLoupe", {
          "is-open": isDragging,
        })}
        aria-hidden="true"
      >
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <rect
            className={stylesLoupe["ColorLoupe-inner-background"]}
            x="0"
            y="0"
            width="16"
            height="16"
          />
          <rect
            className={stylesLoupe["ColorLoupe-inner-checker"]}
            x="0"
            y="0"
            width="8"
            height="8"
          />
          <rect
            className={stylesLoupe["ColorLoupe-inner-checker"]}
            x="8"
            y="8"
            width="8"
            height="8"
          />
        </pattern>
        <animated.path
          className={stylesLoupe["ColorLoupe-inner"]}
          d={colorLoupeTransition.inner}
          fill={`url(#${patternId})`}
        />
        <animated.path
          className={stylesLoupe["ColorLoupe-inner"]}
          d={colorLoupeTransition.inner}
          fill={valueCSS}
        />
        <animated.path
          className={stylesLoupe["ColorLoupe-outer"]}
          d={colorLoupeTransition.outer}
        />
      </svg>
      {children}
    </div>
  );
}

export { ColorThumb };
