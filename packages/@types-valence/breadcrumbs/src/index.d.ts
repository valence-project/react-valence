import { Key, ReactElement, ReactNode } from "react";

// @types-valence
import { AriaLabelingProps, DOMProps, StyleProps } from "@types-valence/shared";
import { AriaLinkProps } from "@types-valence/link";
import { ItemProps } from "@types-valence/shared";

export interface BreadcrumbItemProps extends AriaLinkProps {
  /** Whether the breadcrumb item represents the current page. */
  isCurrent?: boolean;
  /**
   * The type of current location the breadcrumb item represents, if `isCurrent` is true.
   * @default 'page'
   */
  "aria-current"?:
    | "page"
    | "step"
    | "location"
    | "date"
    | "time"
    | boolean
    | "true"
    | "false";
  /** Whether the breadcrumb item is disabled. */
  isDisabled?: boolean;
  /** The contents of the breadcrumb item. */
  children: ReactNode;
}

export interface AriaBreadcrumbItemProps extends BreadcrumbItemProps, DOMProps {
  /**
   * The HTML element used to render the breadcrumb link, e.g. 'a', or 'span'.
   * @default 'a'
   */
  elementType?: string;
}

export interface BreadcrumbsProps {}
export interface AriaBreadcrumbsProps
  extends BreadcrumbsProps,
    DOMProps,
    AriaLabelingProps {}

export interface ValenceBreadcrumbsProps<T>
  extends AriaBreadcrumbsProps,
    StyleProps {
  /** The breadcrumb items. */
  children: ReactElement<ItemProps<T>> | ReactElement<ItemProps<T>>[];
  /** Whether the Breadcrumbs are disabled. */
  isDisabled?: boolean;
  /** Called when an item is acted upon (usually selection via press). */
  onAction?: (key: Key) => void;
  /**
   * Size of the Breadcrumbs including spacing and layout.
   * @default 'L'
   */
  size?: "S" | "M" | "L";
  /** Whether to always show the root item if the items are collapsed. */
  showRoot?: boolean;
  /**
   * Whether to place the last Breadcrumb item onto a new line.
   */
  isMultiline?: boolean;
  /**
   * Whether to autoFocus the last Breadcrumb item when the Breadcrumbs render.
   */
  autoFocusCurrent?: boolean;
}
