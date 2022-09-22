import React, { useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useHover } from "@react-aria/interactions";
import { useLink } from "@react-aria/link";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  getWrappedElement,
  useSlotProps,
  useStyleProps,
} from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { ValenceLinkProps } from "@types-valence/link";

// @valence-styles
import styles from "@valence-styles/components/link/vars.module.scss";

/**
 * Links allow users to navigate to a different location.
 * They can be presented inline inside a paragraph or as standalone text.
 */
export function Link(props: ValenceLinkProps) {
  props = useProviderProps(props);
  props = useSlotProps(props, "link");
  let {
    variant = "primary",
    isQuiet,
    children,
    // @ts-ignore
    href,
  } = props;
  let { styleProps } = useStyleProps(props);
  let { hoverProps, isHovered } = useHover({});

  if (href) {
    console.warn(
      "href is deprecated, please use an anchor element as children"
    );
  }

  let ref = useRef();
  let { linkProps } = useLink(
    {
      ...props,
      elementType: typeof children === "string" ? "span" : "a",
    },
    ref
  );

  return (
    <FocusRing focusRingClass={classNames(styles, "focus-ring")}>
      {React.cloneElement(getWrappedElement(children), {
        ...styleProps,
        ...mergeProps(linkProps, hoverProps),
        ref,
        className: classNames(
          styles,
          "Link",
          {
            "Link--quiet": isQuiet,
            [`Link--${variant}`]: variant,
            "is-hovered": isHovered,
          },
          styleProps.className
        ),
      })}
    </FocusRing>
  );
}
