import { Key, ReactElement } from "react";

// @types-valence
import {
  Alignment,
  AriaLabelingProps,
  CollectionBase,
  DOMProps,
  FocusStrategy,
  MultipleSelection,
  StyleProps,
} from "@types-valence/shared";
import { OverlayTriggerProps } from "@types-valence/overlays";

export type MenuTriggerType = "press" | "longPress";

export interface MenuTriggerProps extends OverlayTriggerProps {
  /**
   * How the menu is triggered.
   * @default 'press'
   */
  trigger?: MenuTriggerType;
  /**
   * Alignment of the menu relative to the trigger.
   * @default 'start'
   */
  align?: Alignment;
  /**
   * Where the Menu opens relative to its trigger.
   * @default 'bottom'
   */
  direction?: "bottom" | "top" | "left" | "right" | "start" | "end";
  /**
   * Whether the Menu closes when a selection is made.
   * @default true
   */
  closeOnSelect?: boolean;
  /**
   * Whether the menu should automatically flip direction when space is limited.
   * @default true
   */
  shouldFlip?: boolean;
}

export interface ValenceMenuTriggerProps extends MenuTriggerProps {
  /**
   * The contents of the MenuTrigger - a trigger and a Menu.
   */
  children: ReactElement[];
}

export interface MenuProps<T> extends CollectionBase<T>, MultipleSelection {
  /** Where the focus should be set. */
  autoFocus?: boolean | FocusStrategy;
  /** Whether keyboard navigation is circular. */
  shouldFocusWrap?: boolean;
  /** Handler that is called when an item is selected. */
  onAction?: (key: Key) => void;
  /** Handler that is called when the menu should close after selecting an item. */
  onClose?: () => void;
}

export interface AriaMenuProps<T>
  extends MenuProps<T>,
    DOMProps,
    AriaLabelingProps {}
export interface ValenceMenuProps<T> extends AriaMenuProps<T>, StyleProps {}

export interface ValenceActionMenuProps<T>
  extends CollectionBase<T>,
    MenuTriggerProps,
    StyleProps,
    DOMProps,
    AriaLabelingProps {
  /**
   * Alignment of the menu relative to the trigger.
   * @default 'start'
   */
  align?: Alignment; // from shared types
  /**
   * Where the Menu opens relative to its trigger.
   * @default 'bottom'
   */
  direction?: "bottom" | "top" | "left" | "right" | "start" | "end";
  /**
   * Whether the menu should automatically flip direction when space is limited.
   * @default true
   */
  shouldFlip?: boolean;
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** Whether the button should be displayed with a [quiet style](https://spectrum.adobe.com/page/action-button/#Quiet). */
  isQuiet?: boolean;
  /** Whether the element should receive focus on render. */
  autoFocus?: boolean;
  /** Handler that is called when an item is selected. */
  onAction?: (key: Key) => void;
}
