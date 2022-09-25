import React, { useCallback, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import {
  filterDOMProps,
  useLayoutEffect,
  useValueEffect,
} from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  SlotProvider,
  useDOMRef,
  useResizeObserver,
  useSlotProps,
  useStyleProps,
} from "@react-valence/utils";
import {
  Provider,
  useProvider,
  useProviderProps,
} from "@react-valence/provider";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceButtonGroupProps } from "@types-valence/buttongroup";

// @valence-styles
import styles from "@valence-styles/components/buttongroup/vars.module.scss";

function ButtonGroup(
  props: ValenceButtonGroupProps,
  ref: DOMRef<HTMLDivElement>
) {
  let { scale } = useProvider();
  props = useProviderProps(props);
  props = useSlotProps(props, "buttonGroup");

  let {
    children,
    orientation = "horizontal",
    isDisabled,
    align = "start",
    ...otherProps
  } = props;

  let { styleProps } = useStyleProps(otherProps);
  let domRef = useDOMRef(ref);
  let [hasOverflow, setHasOverflow] = useValueEffect(false);

  let checkForOverflow = useCallback(() => {
    let computeHasOverflow = () => {
      if (domRef.current && orientation === "horizontal") {
        let buttonGroupChildren = Array.from(
          domRef.current.children
        ) as HTMLElement[];
        let maxX = domRef.current.offsetWidth + 1; // + 1 to account for rounding errors
        // If any buttons have negative X positions (align="end") or extend beyond
        // the width of the button group (align="start"), then switch to vertical.
        if (
          buttonGroupChildren.some(
            (child) =>
              child.offsetLeft < 0 ||
              child.offsetLeft + child.offsetWidth > maxX
          )
        ) {
          return true;
        }
        return false;
      }
    };
    if (orientation === "horizontal") {
      setHasOverflow(function* () {
        // Force to horizontal for measurement.
        yield false;

        // Measure, and update if there is overflow.
        yield computeHasOverflow();
      });
    }
  }, [domRef, orientation, scale, setHasOverflow, children]);

  // There are two main reasons we need to remeasure:
  // 1. Internal changes: Check for initial overflow or when orientation/scale/children change (from checkForOverflow dep array)
  useLayoutEffect(() => {
    checkForOverflow();
  }, [checkForOverflow]);

  // 2. External changes: buttongroup won't change size due to any parents changing size, so listen to its container for size changes to figure out if we should remeasure
  let parent = useRef<HTMLElement>();
  useLayoutEffect(() => {
    if (domRef.current) {
      parent.current = domRef.current.parentElement as HTMLElement;
    }
  }, [domRef.current]);
  useResizeObserver({ ref: parent, onResize: checkForOverflow });

  return (
    <div
      {...{
        ...filterDOMProps(otherProps),
        ...styleProps,
        ref: domRef,
        className: classNames(
          styles,
          "ButtonGroup",
          {
            "ButtonGroup--vertical": orientation === "vertical" || hasOverflow,
            "ButtonGroup--alignEnd": align === "end",
            "ButtonGroup--alignCenter": align === "center",
          },
          styleProps.className
        ),
      }}
    >
      <SlotProvider
        slots={{
          button: {
            UNSAFE_className: styles["ButtonGroup-Button"],
          },
        }}
      >
        <Provider {...{ isDisabled }}>{children}</Provider>
      </SlotProvider>
    </div>
  );
}

/**
 * ButtonGroup handles overflow for a grouping of buttons whose actions are related to each other.
 */
let _ButtonGroup = React.forwardRef(ButtonGroup);
export { _ButtonGroup as ButtonGroup };
