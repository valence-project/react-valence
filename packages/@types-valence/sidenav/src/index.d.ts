import { HTMLAttributes, ReactNode } from "react";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { ReusableView } from "@react-stately/virtualizer";

// @types-valence
import {
  AriaLabelingProps,
  CollectionBase,
  DOMProps,
  Expandable,
  MultipleSelection,
  Node,
  StyleProps,
} from "@types-valence/shared";

export interface SideNavProps<T>
  extends CollectionBase<T>,
    Expandable,
    MultipleSelection {
  shouldFocusWrap?: boolean;
}

export interface AriaSideNavProps<T>
  extends SideNavProps<T>,
    DOMProps,
    AriaLabelingProps {}

export interface ValenceSideNavProps<T>
  extends AriaSideNavProps<T>,
    StyleProps {}

export interface ValenceSideNavItemProps<T>
  extends HTMLAttributes<HTMLElement> {
  item: Node<T>;
}

export interface SideNavSectionProps<T> {
  reusableView: ReusableView<Node<T>, unknown>;
  header: ReusableView<Node<T>, unknown>;
  children?: ReactNode;
}
