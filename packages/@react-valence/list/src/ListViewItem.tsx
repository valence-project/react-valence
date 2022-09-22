import { CSSTransition } from "react-transition-group";
import React, { useContext, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import type {
  DraggableItemResult,
  DropIndicatorAria,
  DroppableItemResult,
} from "@react-aria/dnd";
import { FocusRing, useFocusRing } from "@react-aria/focus";
import {
  isFocusVisible as isGlobalFocusVisible,
  useHover,
} from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";
import { useButton } from "@react-aria/button";
import {
  useGridListItem,
  useGridListSelectionCheckbox,
} from "@react-aria/gridlist";
import { useLocale } from "@react-aria/i18n";
import { useVisuallyHidden } from "@react-aria/visually-hidden";

// @react-valence https://valence.austinpittman.net
import { Checkbox } from "@react-valence/checkbox";
import {
  classNames,
  ClearSlots,
  SlotProvider,
  useHasChild,
} from "@react-valence/utils";
import { Grid } from "@react-valence/layout";
import { Provider } from "@react-valence/provider";
import { Text } from "@react-valence/text";

// @types-valence
import { DropTarget, Node } from "@types-valence/shared";

// @valence-icons
import ChevronLeft from "@valence-icons/ui/ArrowLeftSLine";
import ChevronRight from "@valence-icons/ui/ArrowRightSLine";
import GripHorizontal from "@valence-icons/ui/Separator";

import listStyles from "./styles.scss";
import { ListViewContext } from "./ListView";

interface ListViewItemProps<T> {
  item: Node<T>;
  isEmphasized: boolean;
  hasActions: boolean;
}

export function ListViewItem<T>(props: ListViewItemProps<T>) {
  let { item, isEmphasized } = props;
  let {
    state,
    dragState,
    dropState,
    isListDraggable,
    isListDroppable,
    layout,
    dragHooks,
    dropHooks,
    loadingState,
  } = useContext(ListViewContext);
  let { direction } = useLocale();
  let rowRef = useRef<HTMLDivElement>();
  let { isFocusVisible: isFocusVisibleWithin, focusProps: focusWithinProps } =
    useFocusRing({ within: true });
  let { isFocusVisible, focusProps } = useFocusRing();
  let {
    rowProps,
    gridCellProps,
    isPressed,
    descriptionProps,
    isSelected,
    isDisabled,
    allowsSelection,
    hasAction,
  } = useGridListItem(
    {
      node: item,
      isVirtualized: true,
      shouldSelectOnPressUp: isListDraggable,
    },
    state,
    rowRef
  );
  let isDroppable = isListDroppable && !isDisabled;
  let { hoverProps, isHovered } = useHover({
    isDisabled: !allowsSelection && !hasAction,
  });

  let { checkboxProps } = useGridListSelectionCheckbox(
    { key: item.key },
    state
  );
  let hasDescription = useHasChild(
    `.${listStyles["ListViewItem-description"]}`,
    rowRef
  );

  let draggableItem: DraggableItemResult;
  if (isListDraggable) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    draggableItem = dragHooks.useDraggableItem({ key: item.key }, dragState);
    if (isDisabled) {
      draggableItem = null;
    }
  }
  let droppableItem: DroppableItemResult;
  let isDropTarget: boolean;
  let dropIndicator: DropIndicatorAria;
  let dropIndicatorRef = useRef();
  if (isListDroppable) {
    let target = {
      type: "item",
      key: item.key,
      dropPosition: "on",
    } as DropTarget;
    isDropTarget = dropState.isDropTarget(target);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    droppableItem = dropHooks.useDroppableItem({ target }, dropState, rowRef);
    dropIndicator = dropHooks.useDropIndicator(
      { target },
      dropState,
      dropIndicatorRef
    );
  }

  let dragButtonRef = React.useRef();
  let { buttonProps } = useButton(
    {
      ...draggableItem?.dragButtonProps,
      elementType: "div",
    },
    dragButtonRef
  );

  let chevron =
    direction === "ltr" ? (
      <ChevronRight
        aria-hidden="true"
        UNSAFE_className={classNames(
          listStyles,
          "ListViewItem-parentIndicator",
          {
            "ListViewItem-parentIndicator--hasChildItems":
              item.props.hasChildItems,
            "is-disabled": !hasAction,
          }
        )}
      />
    ) : (
      <ChevronLeft
        aria-hidden="true"
        UNSAFE_className={classNames(
          listStyles,
          "ListViewItem-parentIndicator",
          {
            "ListViewItem-parentIndicator--hasChildItems":
              item.props.hasChildItems,
            "is-disabled": !hasAction,
          }
        )}
      />
    );

  let showCheckbox =
    state.selectionManager.selectionMode !== "none" &&
    state.selectionManager.selectionBehavior === "toggle";
  let { visuallyHiddenProps } = useVisuallyHidden();

  let dropProps = isDroppable
    ? droppableItem?.dropProps
    : { "aria-hidden": droppableItem?.dropProps["aria-hidden"] };
  const mergedProps = mergeProps(
    rowProps,
    draggableItem?.dragProps,
    dropProps,
    hoverProps,
    focusWithinProps,
    focusProps
  );

  let isFirstRow = item.prevKey == null;
  let isLastRow = item.nextKey == null;
  // Figure out if the ListView content is equal or greater in height to the container. If so, we'll need to round the bottom
  // border corners of the last row when selected and we can get rid of the bottom border if it isn't selected to avoid border overlap
  // with bottom border
  let isFlushWithContainerBottom = false;
  if (isLastRow && loadingState !== "loadingMore") {
    if (
      layout.getContentSize()?.height >=
      layout.virtualizer?.getVisibleRect().height
    ) {
      isFlushWithContainerBottom = true;
    }
  }
  // previous item isn't selected
  // and the previous item isn't focused or, if it is focused, then if focus globally isn't visible or just focus isn't in the listview
  let roundTops =
    !state.selectionManager.isSelected(item.prevKey) &&
    (state.selectionManager.focusedKey !== item.prevKey ||
      !(isGlobalFocusVisible() && state.selectionManager.isFocused));
  let roundBottoms =
    !state.selectionManager.isSelected(item.nextKey) &&
    (state.selectionManager.focusedKey !== item.nextKey ||
      !(isGlobalFocusVisible() && state.selectionManager.isFocused));

  let content =
    typeof item.rendered === "string" ? (
      <Text>{item.rendered}</Text>
    ) : (
      item.rendered
    );
  if (isDisabled) {
    content = <Provider isDisabled>{content}</Provider>;
  }

  return (
    <div
      {...mergedProps}
      className={classNames(listStyles, "ListView-row", {
        "focus-ring": isFocusVisible,
        "round-tops":
          roundTops ||
          (isHovered &&
            !isSelected &&
            state.selectionManager.focusedKey !== item.key),
        "round-bottoms":
          roundBottoms ||
          (isHovered &&
            !isSelected &&
            state.selectionManager.focusedKey !== item.key),
      })}
      ref={rowRef}
    >
      <div
        // TODO: refactor the css here now that we are focusing the row?
        className={classNames(listStyles, "ListViewItem", {
          "is-active": isPressed,
          "is-focused": isFocusVisibleWithin,
          "focus-ring": isFocusVisible,
          "is-hovered": isHovered,
          "is-selected": isSelected,
          "is-disabled": isDisabled,
          "is-prev-selected": state.selectionManager.isSelected(item.prevKey),
          "is-next-selected": state.selectionManager.isSelected(item.nextKey),
          "ListViewItem--highlightSelection":
            state.selectionManager.selectionBehavior === "replace" &&
            (isSelected || state.selectionManager.isSelected(item.nextKey)),
          "ListViewItem--dropTarget": !!isDropTarget,
          "ListViewItem--firstRow": isFirstRow,
          "ListViewItem--lastRow": isLastRow,
          "ListViewItem--isFlushBottom": isFlushWithContainerBottom,
          "ListViewItem--hasDescription": hasDescription,
        })}
        {...gridCellProps}
      >
        <Grid UNSAFE_className={listStyles["ListViewItem-grid"]}>
          {isListDraggable && (
            <div
              className={
                listStyles["ListViewItem-draghandle-container"]
              }
            >
              {!isDisabled && (
                <FocusRing
                  focusRingClass={classNames(listStyles, "focus-ring")}
                >
                  <div
                    {...(buttonProps as React.HTMLAttributes<HTMLElement>)}
                    className={classNames(
                      listStyles,
                      "ListViewItem-draghandle-button"
                    )}
                    style={
                      !isFocusVisibleWithin
                        ? { ...visuallyHiddenProps.style }
                        : {}
                    }
                    ref={dragButtonRef}
                    draggable="true"
                  >
                    <GripHorizontal />
                  </div>
                </FocusRing>
              )}
            </div>
          )}
          {isDropTarget &&
            !dropIndicator?.dropIndicatorProps["aria-hidden"] && (
              <div
                role="button"
                {...visuallyHiddenProps}
                {...dropIndicator?.dropIndicatorProps}
                ref={dropIndicatorRef}
              />
            )}
          <CSSTransition
            in={showCheckbox}
            unmountOnExit
            classNames={{
              enter: listStyles["ListViewItem-checkbox--enter"],
              enterActive:
                listStyles["ListViewItem-checkbox--enterActive"],
              exit: listStyles["ListViewItem-checkbox--exit"],
              exitActive:
                listStyles["ListViewItem-checkbox--exitActive"],
            }}
            timeout={160}
          >
            <div className={listStyles["ListViewItem-checkboxWrapper"]}>
              <Checkbox
                {...checkboxProps}
                UNSAFE_className={listStyles["ListViewItem-checkbox"]}
                isEmphasized={isEmphasized}
              />
            </div>
          </CSSTransition>
          <SlotProvider
            slots={{
              text: {
                UNSAFE_className: listStyles["ListViewItem-content"],
              },
              description: {
                UNSAFE_className:
                  listStyles["ListViewItem-description"],
                ...descriptionProps,
              },
              illustration: {
                UNSAFE_className: listStyles["ListViewItem-thumbnail"],
              },
              image: {
                UNSAFE_className: listStyles["ListViewItem-thumbnail"],
              },
              actionButton: {
                UNSAFE_className: listStyles["ListViewItem-actions"],
                isQuiet: true,
              },
              actionGroup: {
                UNSAFE_className: listStyles["ListViewItem-actions"],
                isQuiet: true,
                density: "compact",
              },
              actionMenu: {
                UNSAFE_className: listStyles["ListViewItem-actionmenu"],
                isQuiet: true,
              },
            }}
          >
            {content}
            <ClearSlots>{chevron}</ClearSlots>
          </SlotProvider>
        </Grid>
      </div>
    </div>
  );
}
