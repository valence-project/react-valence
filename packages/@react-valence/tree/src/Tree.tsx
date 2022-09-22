import React, { Key, useMemo, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import {
  useSelectableCollection,
  useSelectableItem,
} from "@react-aria/selection";
import { Virtualizer } from "@react-aria/virtualizer";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { Item, Section } from "@react-stately/collections";
import { ListLayout } from "@react-stately/layout";
import { TreeState, useTreeState } from "@react-stately/tree";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @types-valence
import {
  CollectionBase,
  Expandable,
  MultipleSelection,
  Node,
} from "@types-valence/shared";

// @valence-icons
import ChevronRight from "@valence-icons/ui/ArrowRightSLine";

// @valence-styles
import styles from "@valence-styles/components/treeview/vars.module.scss";

export { Item, Section };

export function Tree<T extends object>(
  props: CollectionBase<T> & Expandable & MultipleSelection
) {
  let state = useTreeState(props);
  let layout = useMemo(
    () =>
      new ListLayout({
        rowHeight: 44,
        indentationForItem(tree, key: Key) {
          let level = tree.getItem(key).level;
          return 28 * level;
        },
      }),
    []
  );

  let ref = useRef();
  let { collectionProps } = useSelectableCollection({
    ref,
    selectionManager: state.selectionManager,
    keyboardDelegate: layout,
  });

  return (
    <Virtualizer
      {...collectionProps}
      ref={ref}
      focusedKey={state.selectionManager.focusedKey}
      className={classNames(styles, "TreeView")}
      layout={layout}
      collection={state.collection}
    >
      {(type, item) => {
        if (type === "section") {
          return <TreeHeading item={item} />;
        }

        return <TreeItem item={item} state={state} />;
      }}
    </Virtualizer>
  );
}

interface TreeItemProps<T> {
  item: Node<T>;
  state: TreeState<T>;
}

function TreeItem<T>(props: TreeItemProps<T>) {
  let { item, state } = props;
  let { key, rendered, hasChildNodes } = item;

  let isExpanded = state.expandedKeys.has(key);
  let isSelected = state.selectionManager.isSelected(key);

  let itemClassName = classNames(styles, "TreeView-item", {
    "is-open": isExpanded,
  });

  let linkClassName = classNames(styles, "TreeView-itemLink", {
    "is-selected": isSelected,
    // 'is-drop-target': isDropTarget
  });

  let ref = useRef<HTMLDivElement>();
  let { itemProps } = useSelectableItem({
    selectionManager: state.selectionManager,
    key: item.key,
    ref,
  });

  return (
    <div className={itemClassName} role="presentation">
      <FocusRing focusRingClass={classNames(styles, "focus-ring")}>
        <div {...itemProps} ref={ref} className={linkClassName}>
          {hasChildNodes && (
            <ChevronRight
              UNSAFE_className={classNames(
                styles,
                "TreeView-indicator"
              )}
            />
          )}
          {rendered}
        </div>
      </FocusRing>
    </div>
  );
}

function TreeHeading({ item }) {
  return (
    <div className={classNames(styles, "TreeView-heading")}>
      {item.rendered}
    </div>
  );
}
