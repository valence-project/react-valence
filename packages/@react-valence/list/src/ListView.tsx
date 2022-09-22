import React, {
  Key,
  ReactElement,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import type { DroppableCollectionResult } from "@react-aria/dnd";
import { filterDOMProps, useLayoutEffect } from "@react-aria/utils";
import { FocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useCollator, useLocalizedStringFormatter } from "@react-aria/i18n";
import { useGridList } from "@react-aria/gridlist";
import { Virtualizer } from "@react-aria/virtualizer";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import type {
  DraggableCollectionState,
  DroppableCollectionState,
} from "@react-stately/dnd";
import { ListLayout } from "@react-stately/layout";
import { ListState, useListState } from "@react-stately/list";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";
import { DragHooks, DropHooks } from "@react-valence/dnd";
import { ProgressCircle } from "@react-valence/progress";
import { useProvider } from "@react-valence/provider";

// @types-valence
import { DOMRef, LoadingState } from "@types-valence/shared";
import { ValenceListViewProps } from "@types-valence/list";

import intlMessages from "../intl";

import InsertionIndicator from "./InsertionIndicator";
import listStyles from "./styles.scss";
import { ListViewItem } from "./ListViewItem";
import RootDropIndicator from "./RootDropIndicator";
import { DragPreview as ValenceDragPreview } from "./DragPreview";

interface ListViewContextValue<T> {
  state: ListState<T>;
  dragState: DraggableCollectionState;
  dropState: DroppableCollectionState;
  dragHooks: DragHooks;
  dropHooks: DropHooks;
  onAction: (key: Key) => void;
  isListDraggable: boolean;
  isListDroppable: boolean;
  layout: ListLayout<T>;
  loadingState: LoadingState;
}

export const ListViewContext =
  React.createContext<ListViewContextValue<unknown>>(null);

const ROW_HEIGHTS = {
  compact: {
    medium: 32,
    large: 40,
  },
  regular: {
    medium: 40,
    large: 50,
  },
  spacious: {
    medium: 48,
    large: 60,
  },
};

function useListLayout<T>(
  state: ListState<T>,
  density: ValenceListViewProps<T>["density"],
  overflowMode: ValenceListViewProps<T>["overflowMode"]
) {
  let { scale } = useProvider();
  let collator = useCollator({ usage: "search", sensitivity: "base" });
  let isEmpty = state.collection.size === 0;
  let layout = useMemo(
    () =>
      new ListLayout<T>({
        estimatedRowHeight: ROW_HEIGHTS[density][scale],
        padding: 0,
        collator,
        loaderHeight: isEmpty ? null : ROW_HEIGHTS[density][scale],
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [collator, scale, density, isEmpty, overflowMode]
  );

  layout.collection = state.collection;
  layout.disabledKeys = state.disabledKeys;
  return layout;
}

function ListView<T extends object>(
  props: ValenceListViewProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  let {
    density = "regular",
    loadingState,
    onLoadMore,
    isQuiet,
    overflowMode = "truncate",
    onAction,
    dragHooks,
    dropHooks,
    ...otherProps
  } = props;
  let isListDraggable = !!dragHooks;
  let isListDroppable = !!dropHooks;
  let dragHooksProvided = useRef(isListDraggable);
  let dropHooksProvided = useRef(isListDroppable);
  if (dragHooksProvided.current !== isListDraggable) {
    console.warn(
      "Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."
    );
  }
  if (dropHooksProvided.current !== isListDroppable) {
    console.warn(
      "Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."
    );
  }
  let domRef = useDOMRef(ref);
  let state = useListState({
    ...props,
    selectionBehavior:
      props.selectionStyle === "highlight" ? "replace" : "toggle",
  });
  let { collection, selectionManager } = state;
  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  let isLoading = loadingState === "loading" || loadingState === "loadingMore";

  let { styleProps } = useStyleProps(props);
  let dragState: DraggableCollectionState;
  let preview = useRef(null);
  if (isListDraggable) {
    dragState = dragHooks.useDraggableCollectionState({
      collection,
      selectionManager,
      preview,
    });
  }
  let layout = useListLayout(state, props.density || "regular", overflowMode);
  // !!0 is false, so we can cast size or undefined and they'll be falsy
  layout.allowDisabledKeyFocus =
    state.selectionManager.disabledBehavior === "selection" ||
    !!dragState?.draggingKeys.size;

  let DragPreview = dragHooks?.DragPreview;
  let dropState: DroppableCollectionState;
  let droppableCollection: DroppableCollectionResult;
  let isRootDropTarget: boolean;
  if (isListDroppable) {
    dropState = dropHooks.useDroppableCollectionState({
      collection,
      selectionManager,
    });
    droppableCollection = dropHooks.useDroppableCollection(
      {
        keyboardDelegate: layout,
        dropTargetDelegate: layout,
      },
      dropState,
      domRef
    );

    isRootDropTarget = dropState.isDropTarget({ type: "root" });
  }

  let { gridProps } = useGridList(
    {
      ...props,
      isVirtualized: true,
      keyboardDelegate: layout,
      onAction,
    },
    state,
    domRef
  );

  // Sync loading state into the layout.
  layout.isLoading = isLoading;

  let focusedKey = selectionManager.focusedKey;
  if (dropState?.target?.type === "item") {
    focusedKey = dropState.target.key;
  }

  // wait for layout to get accurate measurements
  let [isVerticalScrollbarVisible, setVerticalScollbarVisible] =
    useState(false);
  let [isHorizontalScrollbarVisible, setHorizontalScollbarVisible] =
    useState(false);
  useLayoutEffect(() => {
    if (domRef.current) {
      // 2 is the width of the border which is not part of the box size
      setVerticalScollbarVisible(
        domRef.current.clientWidth + 2 < domRef.current.offsetWidth
      );
      setHorizontalScollbarVisible(
        domRef.current.clientHeight + 2 < domRef.current.offsetHeight
      );
    }
  });

  let hasAnyChildren = useMemo(
    () => [...collection].some((item) => item.hasChildNodes),
    [collection]
  );

  return (
    <ListViewContext.Provider
      value={{
        state,
        dragState,
        dropState,
        dragHooks,
        dropHooks,
        onAction,
        isListDraggable,
        isListDroppable,
        layout,
        loadingState,
      }}
    >
      <FocusRing focusRingClass={classNames(listStyles, "focus-ring")}>
        <Virtualizer
          {...mergeProps(
            isListDroppable && droppableCollection?.collectionProps,
            gridProps
          )}
          {...filterDOMProps(otherProps)}
          {...gridProps}
          {...styleProps}
          isLoading={isLoading}
          onLoadMore={onLoadMore}
          ref={domRef}
          focusedKey={focusedKey}
          scrollDirection="vertical"
          className={classNames(
            listStyles,
            "ListView",
            `ListView--${density}`,
            "ListView--emphasized",
            {
              "ListView--quiet": isQuiet,
              "ListView--loadingMore": loadingState === "loadingMore",
              "ListView--draggable": !!isListDraggable,
              "ListView--dropTarget": !!isRootDropTarget,
              "ListView--isVerticalScrollbarVisible":
                isVerticalScrollbarVisible,
              "ListView--isHorizontalScrollbarVisible":
                isHorizontalScrollbarVisible,
              "ListView--hasAnyChildren": hasAnyChildren,
              "ListView--wrap": overflowMode === "wrap",
            },
            styleProps.className
          )}
          layout={layout}
          collection={collection}
          transitionDuration={isLoading ? 160 : 220}
        >
          {(type, item) => {
            if (type === "item") {
              return (
                <>
                  {isListDroppable &&
                    collection.getKeyBefore(item.key) == null && (
                      <RootDropIndicator key="root" />
                    )}
                  {isListDroppable && (
                    <InsertionIndicator
                      key={`${item.key}-before`}
                      target={{
                        key: item.key,
                        type: "item",
                        dropPosition: "before",
                      }}
                    />
                  )}
                  <ListViewItem
                    item={item}
                    isEmphasized
                    hasActions={!!onAction}
                  />
                  {isListDroppable && (
                    <InsertionIndicator
                      key={`${item.key}-after`}
                      target={{
                        key: item.key,
                        type: "item",
                        dropPosition: "after",
                      }}
                      isPresentationOnly={
                        collection.getKeyAfter(item.key) != null
                      }
                    />
                  )}
                </>
              );
            } else if (type === "loader") {
              return (
                <CenteredWrapper>
                  <ProgressCircle
                    isIndeterminate
                    aria-label={
                      collection.size > 0
                        ? stringFormatter.format("loadingMore")
                        : stringFormatter.format("loading")
                    }
                  />
                </CenteredWrapper>
              );
            } else if (type === "placeholder") {
              let emptyState = props.renderEmptyState
                ? props.renderEmptyState()
                : null;
              if (emptyState == null) {
                return null;
              }

              return <CenteredWrapper>{emptyState}</CenteredWrapper>;
            }
          }}
        </Virtualizer>
      </FocusRing>
      {DragPreview && isListDraggable && (
        <DragPreview ref={preview}>
          {() => {
            let item = state.collection.getItem(dragState.draggedKey);
            let itemCount = dragState.draggingKeys.size;
            let itemHeight = layout.getLayoutInfo(dragState.draggedKey).rect
              .height;
            return (
              <ValenceDragPreview
                item={item}
                itemCount={itemCount}
                itemHeight={itemHeight}
              />
            );
          }}
        </DragPreview>
      )}
    </ListViewContext.Provider>
  );
}

function CenteredWrapper({ children }) {
  let { state } = useContext(ListViewContext);
  return (
    <div
      role="row"
      aria-rowindex={state.collection.size + 1}
      className={classNames(listStyles, "ListView-centeredWrapper", {
        "ListView-centeredWrapper--loadingMore":
          state.collection.size > 0,
      })}
    >
      <div role="gridcell">{children}</div>
    </div>
  );
}

/**
 * A ListView displays a list of interactive items, and allows a user to navigate, select, or perform an action.
 */
const _ListView = React.forwardRef(ListView) as <T>(
  props: ValenceListViewProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReactElement;
export { _ListView as ListView };
