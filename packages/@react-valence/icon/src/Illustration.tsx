import React, { ReactElement } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { useSlotProps, useStyleProps } from "@react-valence/utils";

// @types-valence
import { AriaLabelingProps, DOMProps, StyleProps } from "@types-valence/shared";

export interface IllustrationProps
  extends DOMProps,
    AriaLabelingProps,
    StyleProps {
  /**
   * A screen reader only label for the Illustration.
   */
  "aria-label"?: string;
  /**
   * The content to display. Should be an SVG.
   */
  children: ReactElement;
  /**
   * A slot to place the illustration in.
   * @default 'illustration'
   */
  slot?: string;
  /**
   * Indicates whether the element is exposed to an accessibility API.
   */
  "aria-hidden"?: boolean | "false" | "true";
}

export type IllustrationPropsWithoutChildren = Omit<
  IllustrationProps,
  "children"
>;

/**
 * Wrapper component for illustrations. Use this to wrap your svg element for a custom illustration.
 */
export function Illustration(props: IllustrationProps) {
  props = useSlotProps(props, "illustration");
  let {
    children,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    "aria-hidden": ariaHidden,
    ...otherProps
  } = props;
  let { styleProps } = useStyleProps(otherProps);

  let hasLabel = ariaLabel || ariaLabelledby;

  if (!ariaHidden) {
    ariaHidden = undefined;
  }

  return React.cloneElement(children, {
    ...filterDOMProps(otherProps),
    ...styleProps,
    focusable: "false",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    "aria-hidden": ariaHidden,
    role: hasLabel ? "img" : undefined,
  });
}
