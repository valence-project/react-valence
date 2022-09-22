import { ReactNode } from "react";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { Layout } from "@react-stately/virtualizer";

// @types-valence
import {
  AriaLabelingProps,
  AsyncLoadable,
  Collection,
  CollectionBase,
  Direction,
  DOMProps,
  KeyboardDelegate,
  LoadingState,
  MultipleSelection,
  Node,
  Orientation,
  StyleProps,
} from "@types-valence/shared";
import { Scale } from "@types-valence/provider";

interface AriaCardProps extends AriaLabelingProps {}

interface ValenceCardProps extends AriaCardProps, StyleProps, DOMProps {
  children: ReactNode;
  isQuiet?: boolean;
  layout?: "grid" | "waterfall" | "gallery";
  // TODO: readd size when we get updated designs from spectrum
  // size?: 'S' | 'M' | 'L',
  orientation?: Orientation;
}

interface LayoutOptions {
  // cardSize?: 'S' | 'M' | 'L',
  cardOrientation?: Orientation;
  collator?: Intl.Collator;
  // TODO: is this valid or is scale a spectrum specific thing that should be left out of the layouts?
  // Added here so we can keep the default item padding options within the layouts instead of having to
  // do extra work in CardView to accomodate different sizing for scales
  scale?: Scale;
}

// TODO: double check if this is the best way to type the layout provided to the CardView
interface CardViewLayout<T> extends Layout<Node<T>>, KeyboardDelegate {
  collection: Collection<Node<T>>;
  disabledKeys: any;
  isLoading: boolean;
  direction: Direction;
  layoutType: string;
  margin?: number;
}

export interface CardViewLayoutConstructor<T> {
  new (options?: LayoutOptions): CardViewLayout<T>;
}

interface CardViewProps<T>
  extends CollectionBase<T>,
    MultipleSelection,
    Omit<AsyncLoadable, "isLoading"> {
  // TODO: Does LayoutContructor and Layout give enough info for a user to know what to put in their own custom layout?
  // Replaced with CardViewLayout so that they know they need to have keyboardDelegate stuff as well as collection, disabledKeys, etc
  layout: CardViewLayoutConstructor<T> | CardViewLayout<T>;
  // TODO: readd size when we get updated designs from spectrum
  // cardSize?: 'S' | 'M' | 'L',
  cardOrientation?: Orientation;
  isQuiet?: boolean;
  renderEmptyState?: () => ReactNode;
  loadingState?: LoadingState;
}

export interface AriaCardViewProps<T>
  extends CardViewProps<T>,
    DOMProps,
    AriaLabelingProps {}

export interface ValenceCardViewProps<T>
  extends AriaCardViewProps<T>,
    StyleProps {}
