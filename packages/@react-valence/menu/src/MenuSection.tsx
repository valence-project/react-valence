import React, { Fragment, Key } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useMenuSection } from "@react-aria/menu";
import { useSeparator } from "@react-aria/separator";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { TreeState } from "@react-stately/tree";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @types-valence
import { Node } from "@types-valence/shared";

// @valence-styles
import styles from "@valence-styles/components/menu/vars.module.scss";

import { MenuItem } from "./MenuItem";

interface MenuSectionProps<T> {
  item: Node<T>;
  state: TreeState<T>;
  onAction?: (key: Key) => void;
}

/** @private */
export function MenuSection<T>(props: MenuSectionProps<T>) {
  let { item, state, onAction } = props;
  let { itemProps, headingProps, groupProps } = useMenuSection({
    heading: item.rendered,
    "aria-label": item["aria-label"],
  });

  let { separatorProps } = useSeparator({
    elementType: "li",
  });

  return (
    <Fragment>
      {item.key !== state.collection.getFirstKey() && (
        <li
          {...separatorProps}
          className={classNames(styles, "Menu-divider")}
        />
      )}
      <li {...itemProps}>
        {item.rendered && (
          <span
            {...headingProps}
            className={classNames(styles, "Menu-sectionHeading")}
          >
            {item.rendered}
          </span>
        )}
        <ul {...groupProps} className={classNames(styles, "Menu")}>
          {[...item.childNodes].map((node) => {
            let item = (
              <MenuItem
                key={node.key}
                item={node}
                state={state}
                onAction={onAction}
              />
            );

            if (node.wrapper) {
              item = node.wrapper(item);
            }

            return item;
          })}
        </ul>
      </li>
    </Fragment>
  );
}
