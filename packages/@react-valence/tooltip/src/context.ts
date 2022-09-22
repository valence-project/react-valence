import React, { HTMLAttributes, RefObject } from "react";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { TooltipTriggerState } from "@react-stately/tooltip";

// @types-valence
import { PlacementAxis } from "@types-valence/overlays";
import { StyleProps } from "@types-valence/shared";

interface TooltipContextProps extends StyleProps {
  state?: TooltipTriggerState;
  ref?: RefObject<HTMLDivElement>;
  placement?: PlacementAxis;
  arrowProps?: HTMLAttributes<HTMLElement>;
}

export const TooltipContext = React.createContext<TooltipContextProps>({});
