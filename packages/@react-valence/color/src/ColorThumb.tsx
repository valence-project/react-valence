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

interface ColorThumbProps extends DOMProps {
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
        className={classNames(stylesHandle, "ColorHandle-color")}
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
            className={classNames(
              stylesLoupe,
              "ColorLoupe-inner-background"
            )}
            x="0"
            y="0"
            width="16"
            height="16"
          />
          <rect
            className={classNames(
              stylesLoupe,
              "ColorLoupe-inner-checker"
            )}
            x="0"
            y="0"
            width="8"
            height="8"
          />
          <rect
            className={classNames(
              stylesLoupe,
              "ColorLoupe-inner-checker"
            )}
            x="8"
            y="8"
            width="8"
            height="8"
          />
        </pattern>
        <path
          className={classNames(stylesLoupe, "ColorLoupe-inner")}
          d="M25 1a24 24 0 0124 24c0 16.255-24 40-24 40S1 41.255 1 25A24 24 0 0125 1z"
          fill={`url(#${patternId})`}
        />
        <path
          className={classNames(stylesLoupe, "ColorLoupe-inner")}
          d="M25 1a24 24 0 0124 24c0 16.255-24 40-24 40S1 41.255 1 25A24 24 0 0125 1z"
          fill={valueCSS}
        />
        <path
          className={classNames(stylesLoupe, "ColorLoupe-outer")}
          d="M25 3A21.98 21.98 0 003 25c0 6.2 4 14.794 11.568 24.853A144.233 144.233 0 0025 62.132a144.085 144.085 0 0010.4-12.239C42.99 39.816 47 31.209 47 25A21.98 21.98 0 0025 3m0-2a24 24 0 0124 24c0 16.255-24 40-24 40S1 41.255 1 25A24 24 0 0125 1z"
        />
      </svg>
      {children}
    </div>
  );
}

export { ColorThumb };
