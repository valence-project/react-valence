import React, { ReactElement, ReactNode, useContext } from "react";

// @react-valence https://valence.austinpittman.net
import { useProviderProps } from "@react-valence/provider";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useToastState } from "@valence-stately/toast";

// @types-valence
import { ToastOptions } from "@types-valence/toast";

import { ToastContainer } from "./";

interface ToastContextProps {
  positive?: (content: ReactNode, options: ToastOptions) => void;
  negative?: (content: ReactNode, options: ToastOptions) => void;
  neutral?: (content: ReactNode, options: ToastOptions) => void;
  info?: (content: ReactNode, options: ToastOptions) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastContext = React.createContext<ToastContextProps | null>(null);

export function useToastProvider() {
  return useContext(ToastContext);
}

let keyCounter = 0;
function generateKey(pre = "toast") {
  return `${pre}_${keyCounter++}`;
}

export function ToastProvider(props: ToastProviderProps): ReactElement {
  let { onAdd, onRemove, toasts } = useToastState();
  let { children } = useProviderProps(props);

  let contextValue = {
    neutral: (content: ReactNode, options: ToastOptions = {}) => {
      onAdd(content, { ...options, toastKey: generateKey() });
    },
    positive: (content: ReactNode, options: ToastOptions = {}) => {
      onAdd(content, {
        ...options,
        toastKey: generateKey(),
        variant: "positive",
      });
    },
    negative: (content: ReactNode, options: ToastOptions = {}) => {
      onAdd(content, {
        ...options,
        toastKey: generateKey(),
        variant: "negative",
      });
    },
    info: (content: ReactNode, options: ToastOptions = {}) => {
      onAdd(content, { ...options, toastKey: generateKey(), variant: "info" });
    },
  };

  return (
    <ToastContext.Provider value={contextValue}>
      <ToastContainer {...{ toasts, onRemove }} />
      {children}
    </ToastContext.Provider>
  );
}
