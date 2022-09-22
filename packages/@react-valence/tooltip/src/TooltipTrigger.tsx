import React, { ReactElement, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusableProvider } from "@react-aria/focus";
import { useOverlayPosition } from "@react-aria/overlays";
import { useTooltipTrigger } from "@react-aria/tooltip";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useTooltipTriggerState } from "@react-stately/tooltip";

// @react-valence https://valence.austinpittman.net
import { Overlay } from "@react-valence/overlays";

// @types-valence
import { ValenceTooltipTriggerProps } from "@types-valence/tooltip";

import { TooltipContext } from "./context";

const DEFAULT_OFFSET = -1; // Offset needed to reach 4px/5px (med/large) distance between tooltip and trigger button
const DEFAULT_CROSS_OFFSET = 0;

function TooltipTrigger(props: ValenceTooltipTriggerProps) {
  let {
    children,
    crossOffset = DEFAULT_CROSS_OFFSET,
    isDisabled,
    offset = DEFAULT_OFFSET,
    trigger: triggerAction,
  } = props;

  let [trigger, tooltip] = React.Children.toArray(children);

  let state = useTooltipTriggerState(props);

  let tooltipTriggerRef = useRef<HTMLElement>();
  let overlayRef = useRef<HTMLDivElement>();

  let { triggerProps, tooltipProps } = useTooltipTrigger(
    {
      isDisabled,
      trigger: triggerAction,
    },
    state,
    tooltipTriggerRef
  );

  let { overlayProps, arrowProps, placement } = useOverlayPosition({
    placement: props.placement || "top",
    targetRef: tooltipTriggerRef,
    overlayRef,
    offset,
    crossOffset,
    isOpen: state.isOpen,
    shouldFlip: props.shouldFlip,
    containerPadding: props.containerPadding,
  });

  return (
    <FocusableProvider {...triggerProps} ref={tooltipTriggerRef}>
      {trigger}
      <TooltipContext.Provider
        value={{
          state,
          placement,
          ref: overlayRef,
          UNSAFE_style: overlayProps.style,
          arrowProps,
          ...tooltipProps,
        }}
      >
        <Overlay isOpen={state.isOpen}>{tooltip}</Overlay>
      </TooltipContext.Provider>
    </FocusableProvider>
  );
}

// Support TooltipTrigger inside components using CollectionBuilder.
TooltipTrigger.getCollectionNode = function* (
  props: ValenceTooltipTriggerProps
) {
  // Replaced the use of React.Childern.toArray because it mutates the key prop.
  let childArray: ReactElement[] = [];
  React.Children.forEach(props.children, (child) => {
    if (React.isValidElement(child)) {
      childArray.push(child);
    }
  });
  let [trigger, tooltip] = childArray;
  yield {
    element: trigger,
    wrapper: (element) => (
      <TooltipTrigger key={element.key} {...props}>
        {element}
        {tooltip}
      </TooltipTrigger>
    ),
  };
};

/**
 * TooltipTrigger wraps around a trigger element and a Tooltip. It handles opening and closing
 * the Tooltip when the user hovers over or focuses the trigger, and positioning the Tooltip
 * relative to the trigger.
 */
// We don't want getCollectionNode to show up in the type definition
let _TooltipTrigger = TooltipTrigger as (
  props: ValenceTooltipTriggerProps
) => JSX.Element;
export { _TooltipTrigger as TooltipTrigger };
