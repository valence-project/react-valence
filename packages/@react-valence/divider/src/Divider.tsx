import React, { ElementType } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useSeparator } from "@react-aria/separator";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  useDOMRef,
  useSlotProps,
  useStyleProps,
} from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceDividerProps } from "@types-valence/divider";

// @valence-styles
import styles from "@valence-styles/components/rule/vars.module.scss";

let sizeMap = {
  S: "small",
  M: "medium",
  L: "large",
};

function Divider(props: ValenceDividerProps, ref: DOMRef) {
  props = useSlotProps(props, "divider");
  let { size = "L", orientation = "horizontal", ...otherProps } = props;
  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(otherProps);
  let weight = sizeMap[size];

  let Element: ElementType = "hr";
  if (orientation === "vertical") {
    Element = "div";
  }

  let { separatorProps } = useSeparator({
    ...props,
    elementType: Element,
  });

  return (
    <Element
      {...styleProps}
      className={classNames(
        styles,
        "Rule",
        `Rule--${weight}`,
        {
          "Rule--vertical": orientation === "vertical",
          "Rule--horizontal": orientation === "horizontal",
        },
        styleProps.className
      )}
      // @ts-ignore https://github.com/Microsoft/TypeScript/issues/28892
      ref={domRef}
      {...separatorProps}
    />
  );
}

/**
 * Dividers bring clarity to a layout by grouping and dividing content in close proximity.
 * They can also be used to establish rhythm and hierarchy.
 */
let _Divider = React.forwardRef(Divider);
export { _Divider as Divider };
