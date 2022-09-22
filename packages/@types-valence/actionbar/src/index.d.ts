import { Key, ReactNode } from "react";

// @types-valence
import { CollectionBase, DOMProps, StyleProps } from "@types-valence/shared";

export interface ActionBarProps<T> extends CollectionBase<T> {
  // Required. When zero, the ActionBar is hidden.
  selectedItemCount: number | "all";
  // Also required. When clicked, the selection should be cleared.
  onClearSelection: () => void;
  isEmphasized?: boolean;
  onAction?: (key: Key) => void;
}

export interface ValenceActionBarProps<T>
  extends ActionBarProps<T>,
    DOMProps,
    StyleProps {}

interface ActionBarContainerProps {
  children: ReactNode;
}

export interface ValenceActionBarContainerProps
  extends ActionBarContainerProps,
    DOMProps,
    StyleProps {}
