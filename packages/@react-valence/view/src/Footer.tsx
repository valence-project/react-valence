import React, { forwardRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import {
  ClearSlots,
  useDOMRef,
  useSlotProps,
  useStyleProps,
} from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { FooterProps } from "@types-valence/view";

function Footer(props: FooterProps, ref: DOMRef) {
  props = useSlotProps(props, "footer");
  let { children, ...otherProps } = props;
  let { styleProps } = useStyleProps(otherProps);
  let domRef = useDOMRef(ref);

  return (
    <footer {...filterDOMProps(otherProps)} {...styleProps} ref={domRef}>
      <ClearSlots>{children}</ClearSlots>
    </footer>
  );
}

/**
 * Footer represents a footer within a Valence container.
 */
const _Footer = forwardRef(Footer);
export { _Footer as Footer };
