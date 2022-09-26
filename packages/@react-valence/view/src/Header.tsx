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
import { HeaderProps } from "@types-valence/view";

function Header(props: HeaderProps, ref: DOMRef) {
  props = useSlotProps(props, "header");
  let { children, ...otherProps } = props;
  let { styleProps } = useStyleProps(otherProps);
  let domRef = useDOMRef(ref);

  return (
    <header {...{ ...filterDOMProps(otherProps), ...styleProps, ref: domRef }}>
      <ClearSlots>{children}</ClearSlots>
    </header>
  );
}

/**
 * Header represents a header within a Valence container.
 */
const _Header = forwardRef(Header);
export { _Header as Header };
