import { Key, RefObject } from "react";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { GridState } from "@react-stately/grid";

// @types-valence
import {
  CollectionBase,
  DOMProps,
  ItemProps,
  MultipleSelection,
  Node,
  StyleProps,
} from "@types-valence/shared";

export interface TagGroupProps<T> extends CollectionBase<T>, MultipleSelection {
  disabledKeys?: Iterable<Key>;
  isDisabled?: boolean;
  isRemovable?: boolean;
  onRemove?: (items: any[]) => void;
}

export interface ValenceTagGroupProps<T>
  extends TagGroupProps<T>,
    DOMProps,
    StyleProps {}

export interface TagProps<T> extends ItemProps<any> {
  isDisabled?: boolean;
  isFocused: boolean;
  isRemovable?: boolean;
  item: Node<T>;
  onRemove?: (item, e) => void;
  tagRef: RefObject<HTMLElement>;
  tagRowRef: RefObject<HTMLElement>;
}

interface ValenceTagProps<T> extends TagProps<T> {
  state: GridState<any, any>;
}
