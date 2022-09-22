import React, { useContext, useMemo } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { mergeProps } from "@react-aria/utils";

interface SlotProps {
  slot?: string;
}

let SlotContext = React.createContext(null);

export function useSlotProps<T>(
  props: T & { id?: string },
  defaultSlot?: string
): T {
  let slot = (props as SlotProps).slot || defaultSlot;
  let { [slot]: slotProps = {} } = useContext(SlotContext) || {};

  return mergeProps(props, mergeProps(slotProps, { id: props.id }));
}

export function cssModuleToSlots(cssModule) {
  return Object.keys(cssModule).reduce((acc, slot) => {
    acc[slot] = { UNSAFE_className: cssModule[slot] };
    return acc;
  }, {});
}

export function SlotProvider(props) {
  let parentSlots = useContext(SlotContext) || {};
  let { slots = {}, children } = props;

  // Merge props for each slot from parent context and props
  let value = useMemo(
    () =>
      Object.keys(parentSlots)
        .concat(Object.keys(slots))
        .reduce(
          (o, p) => ({
            ...o,
            [p]: mergeProps(parentSlots[p] || {}, slots[p] || {}),
          }),
          {}
        ),
    [parentSlots, slots]
  );

  return <SlotContext.Provider value={value}>{children}</SlotContext.Provider>;
}

export function ClearSlots(props) {
  let { children, ...otherProps } = props;
  let content = children;
  if (React.Children.toArray(children).length <= 1) {
    if (typeof children === "function") {
      // need to know if the node is a string or something else that react can render that doesn't get props
      content = React.cloneElement(React.Children.only(children), otherProps);
    }
  }
  return <SlotContext.Provider value={{}}>{content}</SlotContext.Provider>;
}
