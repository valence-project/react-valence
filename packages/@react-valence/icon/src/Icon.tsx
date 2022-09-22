import React, { ReactElement } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import {
  baseStyleProps,
  classNames,
  StyleHandlers,
  useSlotProps,
  useStyleProps,
} from "@react-valence/utils";
import { useProvider } from "@react-valence/provider";

// @types-valence
import {
  AriaLabelingProps,
  DOMProps,
  IconColorValue,
  StyleProps,
} from "@types-valence/shared";

// @valence-styles
import styles from "@valence-styles/components/icon/vars.module.scss";

export interface IconProps extends DOMProps, AriaLabelingProps, StyleProps {
  /**
   * A screen reader only label for the Icon.
   */
  "aria-label"?: string;
  /**
   * The content to display. Should be an SVG.
   */
  children: ReactElement;
  /**
   * Size of Icon (changes based on scale).
   */
  size?: "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL";
  /**
   * A slot to place the icon in.
   * @default 'icon'
   */
  slot?: string;
  /**
   * Indicates whether the element is exposed to an accessibility API.
   */
  "aria-hidden"?: boolean | "false" | "true";
  /**
   * Color of the Icon.
   */
  color?: IconColorValue;
}

export type IconPropsWithoutChildren = Omit<IconProps, "children">;

function iconColorValue(value: IconColorValue) {
  return `var(--valence-semantic-${value}-color-icon)`;
}

const iconStyleProps: StyleHandlers = {
  ...baseStyleProps,
  color: ["color", iconColorValue],
};

/**
 * Valence icons are clear, minimal, and consistent across platforms. They follow the focused and rational principles of the design system in both metaphor and style.
 */
export function Icon(props: IconProps) {
  props = useSlotProps(props, "icon");
  let {
    children,
    UNSAFE_className,
    size,
    "aria-label": ariaLabel,
    "aria-hidden": ariaHidden,
    ...otherProps
  } = props;
  let { styleProps } = useStyleProps(otherProps, iconStyleProps);

  let provider = useProvider();
  let scale = "M";
  if (provider !== null) {
    scale = provider.scale === "large" ? "L" : "M";
  }
  if (!ariaHidden) {
    ariaHidden = undefined;
  }

  // Use user specified size, falling back to provider scale if size is undef
  let iconSize = size ? size : scale;
  
  return React.cloneElement(children, {
    ...filterDOMProps(otherProps),
    ...styleProps,
    focusable: "false",
    "aria-label": ariaLabel,
    "aria-hidden": ariaLabel ? ariaHidden || undefined : true,
    role: "img",
    className: classNames(
      styles,
      children.props.className,
      "Icon",
      `Icon--size${iconSize}`,
      styleProps.className,
      props.UNSAFE_className
    ),
  });
}
