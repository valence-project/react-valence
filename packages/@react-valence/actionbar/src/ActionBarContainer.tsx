import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceActionBarContainerProps } from "@types-valence/actionbar";

import styles from "./actionbar.scss";

function ActionBarContainer(
  props: ValenceActionBarContainerProps,
  ref: DOMRef<HTMLDivElement>
) {
  // Grabs specific props from the closest Provider (see https://react-spectrum.adobe.com/react-spectrum/Provider.html#property-groups). Remove if your component doesn't support any of the listed props.
  props = useProviderProps(props);

  let { children } = props;
  let { styleProps } = useStyleProps(props);
  let domRef = useDOMRef(ref);

  return (
    <div
      {...{
        ...filterDOMProps(props),
        ...styleProps,
        ref: domRef,
        className: classNames(
          styles,
          "ActionBarContainer",
          styleProps.className
        ),
      }}
    >
      {children}
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
const _ActionBarContainer = React.forwardRef(ActionBarContainer);
export { _ActionBarContainer as ActionBarContainer };
