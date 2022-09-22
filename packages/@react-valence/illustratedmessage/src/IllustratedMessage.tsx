import React, { forwardRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  ClearSlots,
  SlotProvider,
  useSlotProps,
  useStyleProps,
} from "@react-valence/utils";
import { Flex } from "@react-valence/layout";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceIllustratedMessageProps } from "@types-valence/illustratedmessage";

// @valence-styles
import styles from "@valence-styles/components/illustratedmessage/vars.module.scss";

function IllustratedMessage(
  props: ValenceIllustratedMessageProps,
  ref: DOMRef<HTMLDivElement>
) {
  props = useSlotProps(props, "illustration");
  let { children, ...otherProps } = props;

  let { styleProps } = useStyleProps(otherProps);
  let headingClassName = classNames(
    styles,
    "IllustratedMessage-heading"
  );
  let contentClassName = classNames(
    styles,
    "IllustratedMessage-description"
  );

  let slots = {
    heading: { UNSAFE_className: headingClassName },
    content: { UNSAFE_className: contentClassName },
  };

  return (
    <Flex
      {...filterDOMProps(otherProps)}
      UNSAFE_style={styleProps.style}
      isHidden={styleProps.hidden}
      UNSAFE_className={classNames(
        styles,
        "IllustratedMessage",
        styleProps.className
      )}
      ref={ref}
    >
      <ClearSlots>
        <SlotProvider slots={slots}>{children}</SlotProvider>
      </ClearSlots>
    </Flex>
  );
}

/**
 * An IllustratedMessage displays an illustration and a message, usually
 * for an empty state or an error page.
 */
let _IllustratedMessage = forwardRef(IllustratedMessage);
export { _IllustratedMessage as IllustratedMessage };
