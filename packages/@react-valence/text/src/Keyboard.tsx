import React, { forwardRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { useDOMRef, useSlotProps, useStyleProps } from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { KeyboardProps } from "@types-valence/text";

function Keyboard(props: KeyboardProps, ref: DOMRef) {
  props = useSlotProps(props, "keyboard");
  let { children, ...otherProps } = props;
  let { styleProps } = useStyleProps(otherProps);
  let domRef = useDOMRef(ref);

  return (
    <kbd
      {...{
        ...filterDOMProps(otherProps),
        ...styleProps,
        dir: "ltr",
        ref: domRef,
      }}
    >
      {children}
    </kbd>
  );
}

/**
 * Keyboard represents text that specifies a keyboard command.
 */
const _Keyboard = forwardRef(Keyboard);
export { _Keyboard as Keyboard };
