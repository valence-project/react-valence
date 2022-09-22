import React, { forwardRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { useDOMRef, useSlotProps, useStyleProps } from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { TextProps } from "@types-valence/text";

function Text(props: TextProps, ref: DOMRef) {
  props = useSlotProps(props, "text");
  let { children, ...otherProps } = props;
  let { styleProps } = useStyleProps(otherProps);
  let domRef = useDOMRef(ref);

  return (
    <span {...filterDOMProps(otherProps)} {...styleProps} ref={domRef}>
      {children}
    </span>
  );
}

/**
 * Text represents text with no specific semantic meaning.
 */
const _Text = forwardRef(Text);
export { _Text as Text };
