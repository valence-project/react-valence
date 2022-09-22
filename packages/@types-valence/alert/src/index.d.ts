import { ReactNode } from "react";

// @types-valence
import { DOMProps, StyleProps } from "@types-valence/shared";

export interface AlertProps {
  title?: ReactNode;
  children: ReactNode;
  iconAlt?: string;
  "aria-live"?: "polite" | "off";
}

export interface ValenceAlertProps extends AlertProps, DOMProps, StyleProps {
  variant: "info" | "help" | "success" | "error" | "warning";
}
