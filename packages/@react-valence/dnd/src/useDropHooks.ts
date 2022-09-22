import { RefObject, useMemo } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import {
  DropIndicatorAria,
  DropIndicatorProps,
  DroppableCollectionOptions,
  DroppableCollectionResult,
  DroppableItemOptions,
  DroppableItemResult,
  useDropIndicator,
  useDroppableCollection,
  useDroppableItem,
} from "@react-aria/dnd";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import {
  DroppableCollectionState,
  DroppableCollectionStateOptions,
  useDroppableCollectionState,
} from "@react-stately/dnd";

// @types-valence
import { DroppableCollectionProps } from "@types-valence/shared";

export interface DropHooks {
  useDroppableCollectionState(
    props: DroppableCollectionStateOptions
  ): DroppableCollectionState;
  useDroppableCollection(
    props: DroppableCollectionOptions,
    state: DroppableCollectionState,
    ref: RefObject<HTMLElement>
  ): DroppableCollectionResult;
  useDroppableItem(
    options: DroppableItemOptions,
    state: DroppableCollectionState,
    ref: RefObject<HTMLElement>
  ): DroppableItemResult;
  useDropIndicator(
    props: DropIndicatorProps,
    state: DroppableCollectionState,
    ref: RefObject<HTMLElement>
  ): DropIndicatorAria;
}

export function useDropHooks(options: DroppableCollectionProps): DropHooks {
  return useMemo(
    () => ({
      useDroppableCollectionState(props) {
        return useDroppableCollectionState({ ...props, ...options });
      },
      useDroppableItem,
      useDroppableCollection(props, state, ref) {
        return useDroppableCollection({ ...props, ...options }, state, ref);
      },
      useDropIndicator,
    }),
    [options]
  );
}
