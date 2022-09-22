import { ReactElement, ReactNode } from "react";

// @types-valence
import { AriaLabelingProps, DOMProps, StyleProps } from "@types-valence/shared";
import { OverlayTriggerProps, PositionProps } from "@types-valence/overlays";

export interface TooltipTriggerProps extends OverlayTriggerProps {
  /**
   * Whether the tooltip should be disabled, independent from the trigger.
   */
  isDisabled?: boolean;

  /**
   * The delay time for the tooltip to show up. [See guidelines](https://spectrum.adobe.com/page/tooltip/#Immediate-or-delayed-appearance).
   * @default 1500
   */
  delay?: number;

  /**
   * By default, opens for both focus and hover. Can be made to open only for focus.
   */
  trigger?: "focus";
}

export interface ValenceTooltipTriggerProps
  extends TooltipTriggerProps,
    PositionProps {
  children: [ReactElement, ReactElement];

  /**
   * The additional offset applied along the main axis between the element and its
   * anchor element.
   * @default 7
   */
  offset?: number;
}

export interface TooltipProps {
  isOpen?: boolean;
}

export interface AriaTooltipProps
  extends TooltipProps,
    DOMProps,
    AriaLabelingProps {}

export interface ValenceTooltipProps extends AriaTooltipProps, StyleProps {
  /**
   * The [visual style](https://spectrum.adobe.com/page/tooltip/#Semantic-variants) of the Tooltip.
   */
  variant?: "neutral" | "positive" | "negative" | "info";

  /**
   * The placement of the element with respect to its anchor element.
   * @default 'top'
   */
  placement?: "start" | "end" | "right" | "left" | "top" | "bottom";

  /**
   * Whether the element is rendered.
   */
  showIcon?: boolean;

  children: ReactNode;
}
