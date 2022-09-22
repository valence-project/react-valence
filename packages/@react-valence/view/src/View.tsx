import React, { forwardRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import {
  ClearSlots,
  useDOMRef,
  useSlotProps,
  useStyleProps,
  viewStyleProps,
} from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ViewProps } from "@types-valence/view";

function View(props: ViewProps, ref: DOMRef) {
  props = useSlotProps(props);
  let { elementType: ElementType = "div", children, ...otherProps } = props;
  let { styleProps } = useStyleProps(props, viewStyleProps);
  let domRef = useDOMRef(ref);

  return (
    <ElementType {...filterDOMProps(otherProps)} {...styleProps} ref={domRef}>
      <ClearSlots>{children}</ClearSlots>
    </ElementType>
  );
}

/**
 * View is a general purpose container with no specific semantics that can be used for custom styling purposes.
 * It supports Valence style props to ensure consistency with other Valence components.
 */
const _View = forwardRef(View);
export { _View as View };
