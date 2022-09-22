// @react-valence https://valence.austinpittman.net
import { DragHooks, DropHooks } from "@react-valence/dnd";

// @types-valence
import {
  AriaLabelingProps,
  AsyncLoadable,
  CollectionBase,
  DisabledBehavior,
  DOMProps,
  LoadingState,
  MultipleSelection,
  ValenceSelectionProps,
  StyleProps,
} from "@types-valence/shared";

export interface GridListProps<T> extends CollectionBase<T>, MultipleSelection {
  /**
   * Handler that is called when a user performs an action on an item. The exact user event depends on
   * the collection's `selectionBehavior` prop and the interaction modality.
   */
  onAction?: (key: string) => void;
  /** Whether `disabledKeys` applies to all interactions, or only selection. */
  disabledBehavior?: DisabledBehavior;
}

export interface AriaGridListProps<T>
  extends GridListProps<T>,
    DOMProps,
    AriaLabelingProps {}

export interface ValenceListViewProps<T>
  extends AriaGridListProps<T>,
    StyleProps,
    ValenceSelectionProps,
    Omit<AsyncLoadable, "isLoading"> {
  /**
   * Sets the amount of vertical padding within each cell.
   * @default 'regular'
   */
  density?: "compact" | "regular" | "spacious";
  /** Whether the ListView should be displayed with a quiet style. */
  isQuiet?: boolean;
  /** The current loading state of the ListView. Determines whether or not the progress circle should be shown. */
  loadingState?: LoadingState;
  /**
   * Sets the text behavior for the row contents.
   * @default 'truncate'
   */
  overflowMode?: "truncate" | "wrap";
  /** Sets what the ListView should render when there is no content to display. */
  renderEmptyState?: () => JSX.Element;
  /**
   * Handler that is called when a user performs an action on an item. The exact user event depends on
   * the collection's `selectionStyle` prop and the interaction modality.
   */
  onAction?: (key: string) => void;
  /**
   * The drag hooks returned by `useDragHooks` used to enable drag and drop behavior for the ListView.
   * @private
   */
  dragHooks?: DragHooks;
  /**
   * The drag hooks returned by `useDragHooks` used to enable drag and drop behavior for the ListView.
   * @private
   */
  dropHooks?: DropHooks;
}
