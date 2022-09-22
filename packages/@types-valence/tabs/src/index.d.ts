import { Key, ReactNode } from "react";

// @types-valence
import {
  AriaLabelingProps,
  CollectionBase,
  CollectionChildren,
  DOMProps,
  Orientation,
  SingleSelection,
  StyleProps,
} from "@types-valence/shared";

export interface AriaTabProps extends AriaLabelingProps {
  /** The key of the tab. */
  key: Key;
  /** Whether the tab should be disabled. */
  isDisabled?: boolean;
}

export interface TabListProps<T>
  extends CollectionBase<T>,
    Omit<SingleSelection, "disallowEmptySelection"> {
  /**
   * Whether the Tabs are disabled.
   * Shows that a selection exists, but is not available in that circumstance.
   */
  isDisabled?: boolean;
}

interface AriaTabListBase extends AriaLabelingProps {
  /**
   * Whether tabs are activated automatically on focus or manually.
   * @default 'automatic'
   */
  keyboardActivation?: "automatic" | "manual";
  /**
   * The orientation of the tabs.
   * @default 'horizontal'
   */
  orientation?: Orientation;
}

export interface AriaTabListProps<T>
  extends TabListProps<T>,
    AriaTabListBase,
    DOMProps,
    AriaLabelingProps {}

export interface AriaTabPanelProps extends DOMProps, AriaLabelingProps {}

export interface ValenceTabsProps<T>
  extends AriaTabListBase,
    SingleSelection,
    DOMProps,
    StyleProps {
  /** The children of the <Tabs> element. Should include `<TabList>` and `<TabPanels>` elements. */
  children: ReactNode;
  /** The item objects for each tab, for dynamic collections. */
  items?: Iterable<T>;
  /** The keys of the tabs that are disabled. These tabs cannot be selected, focused, or otherwise interacted with. */
  disabledKeys?: Iterable<Key>;
  /** Whether the tabs are displayed in a quiet style. */
  isQuiet?: boolean;
  /** Whether the tabs are displayed in an emphasized style. */
  isEmphasized?: boolean;
  /** The amount of space between the tabs. */
  density?: "compact" | "regular";
}

export interface ValenceTabListProps<T> extends DOMProps, StyleProps {
  /** The tab items to display. Item keys should match the key of the corresponding `<Item>` within the `<TabPanels>` element. */
  children: CollectionChildren<T>;
}

export interface ValenceTabPanelsProps<T> extends DOMProps, StyleProps {
  /** The contents of each tab. Item keys should match the key of the corresponding `<Item>` within the `<TabList>` element. */
  children: CollectionChildren<T>;
}
