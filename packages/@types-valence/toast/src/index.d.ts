import { ReactNode } from "react";

// @types-valence
import { DOMProps, StyleProps } from "@types-valence/shared";

export interface ToastOptions extends DOMProps, StyleProps {
  actionLabel?: ReactNode;
  onAction?: (...args: any[]) => void;
  shouldCloseOnAction?: boolean;
  onClose?: (...args: any[]) => void;
  timeout?: number;
}

export interface ToastProps extends ToastOptions {
  children?: ReactNode;
  variant?: "positive" | "negative" | "info";
  toastKey?: string;
  timer?: any;
}

export interface ToastState {
  onAdd?: (content: ReactNode, options: ToastProps) => void;
  onRemove?: (idKey: string) => void;
  setToasts?: (value: ToastStateValue[]) => void;
  toasts?: ToastStateValue[];
}

export interface ToastStateValue {
  content: ReactNode;
  props: ToastProps;
  timer: any;
}
