import { useMemo } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import {
  DraggableItemProps,
  DraggableItemResult,
  DragPreview,
  useDraggableItem,
} from "@react-aria/dnd";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import {
  DraggableCollectionOptions,
  DraggableCollectionState,
  useDraggableCollectionState,
} from "@react-stately/dnd";

// @types-valence
import { DraggableCollectionProps } from "@types-valence/shared";

export interface DragHooks {
  useDraggableCollectionState(
    props: Omit<DraggableCollectionOptions, "getItems">
  ): DraggableCollectionState;
  useDraggableItem(
    props: DraggableItemProps,
    state: DraggableCollectionState
  ): DraggableItemResult;
  DragPreview: typeof DragPreview;
}

export interface DragHookOptions
  extends Omit<DraggableCollectionProps, "preview"> {}

export function useDragHooks(options: DragHookOptions): DragHooks {
  return useMemo(
    () => ({
      useDraggableCollectionState(props: DraggableCollectionOptions) {
        return useDraggableCollectionState({ ...props, ...options });
      },
      useDraggableItem,
      DragPreview,
    }),
    [options]
  );
}
