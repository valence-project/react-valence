import React, { forwardRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceWellProps } from "@types-valence/well";

// @valence-styles
import styles from "@valence-styles/components/well/vars.module.scss";

function Well(props: ValenceWellProps, ref: DOMRef<HTMLDivElement>) {
  let { children, role, ...otherProps } = props;
  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(otherProps);

  if (!role && (props["aria-label"] || props["aria-labelledby"])) {
    console.warn("A labelled Well must have a role.");
  }

  return (
    <div
      {...{
        ...filterDOMProps(otherProps, { labelable: !!role }),
        ...styleProps,
        role: role,
        ref: domRef,
        className: classNames(styles, "Well", styleProps.className),
      }}
    >
      {children}
    </div>
  );
}

/**
 * A Well is a content container that displays non-editable content separate from other content on the screen.
 * Often this is used to display preformatted text, such as code/markup examples on a documentation page.
 */
const _Well = forwardRef(Well);
export { _Well as Well };
