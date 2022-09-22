import React, { ReactElement } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { classNames, useSlotProps, useStyleProps } from "@react-valence/utils";
import { useProvider } from "@react-valence/provider";

// @types-valence
import { AriaLabelingProps, DOMProps, StyleProps } from "@types-valence/shared";

// @valence-styles
import styles from "@valence-styles/components/icon/vars.module.scss";

export interface UIIconProps extends DOMProps, AriaLabelingProps, StyleProps {
  children: ReactElement;
  slot?: string;
  /**
   * Indicates whether the element is exposed to an accessibility API.
   */
  "aria-hidden"?: boolean | "false" | "true";
}

export type UIIconPropsWithoutChildren = Omit<UIIconProps, "children">;

export function UIIcon(props: UIIconProps) {
  props = useSlotProps(props, "icon");
  let {
    children,
    "aria-label": ariaLabel,
    "aria-hidden": ariaHidden,
    ...otherProps
  } = props;

  let { styleProps } = useStyleProps(otherProps);
  let provider = useProvider();
  let scale = "M";
  if (provider !== null) {
    scale = provider.scale === "large" ? "L" : "M";
  }

  if (!ariaHidden) {
    ariaHidden = undefined;
  }

  return React.cloneElement(children, {
    ...filterDOMProps(otherProps),
    ...styleProps,
    scale,
    focusable: "false",
    "aria-label": ariaLabel,
    "aria-hidden": ariaLabel ? ariaHidden || undefined : true,
    role: "img",
    className: classNames(
      styles,
      children.props.className,
      "Icon",
      {
        [`UIIcon-${children.type["displayName"]}`]:
          children.type["displayName"],
      },
      styleProps.className
    ),
  });
}
