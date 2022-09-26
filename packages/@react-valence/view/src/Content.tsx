import React, { forwardRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { ClearSlots, useDOMRef, useSlotProps } from "@react-valence/utils";
import { useStyleProps } from "@react-valence/utils";

// @types-valence
import { ContentProps } from "@types-valence/view";
import { DOMRef } from "@types-valence/shared";

function Content(props: ContentProps, ref: DOMRef) {
  props = useSlotProps(props, "content");
  let { children, ...otherProps } = props;
  let { styleProps } = useStyleProps(otherProps);
  let domRef = useDOMRef(ref);

  return (
    <section {...{ ...filterDOMProps(otherProps), ...styleProps, ref: domRef }}>
      <ClearSlots>{children}</ClearSlots>
    </section>
  );
}

/**
 * Content represents the primary content within a Valence container.
 */
const _Content = forwardRef(Content);
export { _Content as Content };
