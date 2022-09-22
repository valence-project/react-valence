import React, { ReactElement, useMemo } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { mergeProps } from "@react-aria/utils";
import { TagKeyboardDelegate, useTagGroup } from "@react-aria/tag";
import { useGrid } from "@react-aria/grid";
import { useLocale } from "@react-aria/i18n";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { GridCollection, useGridState } from "@react-stately/grid";
import { useListState } from "@react-stately/list";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceTagGroupProps } from "@types-valence/tag";

// @valence-styles
import styles from "@valence-styles/components/tags/vars.module.scss";

import { Tag } from "./Tag";

function TagGroup<T extends object>(
  props: ValenceTagGroupProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  props = useProviderProps(props);
  let { isDisabled, isRemovable, onRemove, ...otherProps } = props;
  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(otherProps);
  let { direction } = useLocale();
  let listState = useListState(props);
  let gridCollection = useMemo(
    () =>
      new GridCollection({
        columnCount: 1, // unused, but required for grid collections
        items: [...listState.collection].map((item) => {
          let childNodes = [
            {
              ...item,
              index: 0,
              type: "cell",
            },
          ];

          return {
            type: "item",
            childNodes,
          };
        }),
      }),
    [listState.collection, isRemovable]
  );
  let state = useGridState({
    ...props,
    collection: gridCollection,
    focusMode: "cell",
  });
  let keyboardDelegate = new TagKeyboardDelegate({
    collection: state.collection,
    disabledKeys: state.disabledKeys,
    ref: domRef,
    direction,
    focusMode: "cell",
  });
  let { gridProps } = useGrid(
    {
      ...props,
      keyboardDelegate,
    },
    state,
    domRef
  );
  const { tagGroupProps } = useTagGroup(props, listState);

  // Don't want the grid to be focusable or accessible via keyboard
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let { tabIndex, role, ...otherGridProps } = gridProps;
  return (
    <div
      {...mergeProps(styleProps, tagGroupProps, otherGridProps)}
      className={classNames(
        styles,
        "Tags",
        {
          "is-disabled": isDisabled,
        },
        styleProps.className
      )}
      role={state.collection.size ? "grid" : null}
      ref={domRef}
    >
      {[...gridCollection].map((item) => (
        <Tag
          {...item.childNodes[0].props}
          key={item.key}
          item={item}
          state={state}
          isDisabled={
            isDisabled || state.disabledKeys.has(item?.childNodes[0]?.key)
          }
          isRemovable={isRemovable}
          onRemove={onRemove}
        >
          {item.childNodes[0].rendered}
        </Tag>
      ))}
    </div>
  );
}

const _TagGroup = React.forwardRef(TagGroup) as <T>(
  props: ValenceTagGroupProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReactElement;
export { _TagGroup as TagGroup };
