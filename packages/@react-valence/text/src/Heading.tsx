import React, { ElementType, forwardRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { useDOMRef, useSlotProps, useStyleProps } from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { HeadingProps } from "@types-valence/text";

function Heading(props: HeadingProps, ref: DOMRef<HTMLHeadingElement>) {
  props = useSlotProps(props, "heading");

  let { children, level = 3, ...otherProps } = props;
  let { styleProps } = useStyleProps(otherProps);
  let domRef = useDOMRef(ref);
  let HeadingTag = `h${level}` as ElementType;

  return (
    <HeadingTag {...filterDOMProps(otherProps)} {...styleProps} ref={domRef}>
      {children}
    </HeadingTag>
  );
}

/**
 * Heading is used to create various levels of typographic hierarchies.
 */
const _Heading = forwardRef(Heading);
export { _Heading as Heading };
