import React, { Key, ReactElement, useCallback, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useBreadcrumbs } from "@react-aria/breadcrumbs";
import { useLayoutEffect, useValueEffect } from "@react-aria/utils";
import { useResizeObserver } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { ActionButton } from "@react-valence/button";
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";
import { Menu, MenuTrigger } from "@react-valence/menu";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceBreadcrumbsProps } from "@types-valence/breadcrumbs";

// @valence-icons
import Folder from "@valence-icons/ui/FolderFill";

// @valence-styles
import styles from "@valence-styles/components/breadcrumb/vars.module.scss";

import { BreadcrumbItem } from "./BreadcrumbItem";

const MIN_VISIBLE_ITEMS = 1;
const MAX_VISIBLE_ITEMS = 4;

function Breadcrumbs<T>(props: ValenceBreadcrumbsProps<T>, ref: DOMRef) {
  props = useProviderProps(props);
  let {
    size = "L",
    isMultiline,
    children,
    showRoot,
    isDisabled,
    onAction,
    autoFocusCurrent,
    ...otherProps
  } = props;

  // Not using React.Children.toArray because it mutates the key prop.
  let childArray: ReactElement[] = [];
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      childArray.push(child);
    }
  });

  let domRef = useDOMRef(ref);
  let listRef = useRef<HTMLUListElement>(null);

  let [visibleItems, setVisibleItems] = useValueEffect(childArray.length);

  let { navProps } = useBreadcrumbs(props);
  let { styleProps } = useStyleProps(otherProps);

  let updateOverflow = useCallback(() => {
    let computeVisibleItems = (visibleItems: number) => {
      // Refs can be null at runtime.
      let currListRef: HTMLUListElement | null = listRef.current;
      if (!currListRef) {
        return;
      }

      let listItems = Array.from(currListRef.children) as HTMLLIElement[];
      let containerWidth = currListRef.offsetWidth;
      let isShowingMenu = childArray.length > visibleItems;
      let calculatedWidth = 0;
      let newVisibleItems = 0;
      let maxVisibleItems = MAX_VISIBLE_ITEMS;

      if (showRoot) {
        calculatedWidth += listItems.shift().offsetWidth;
        newVisibleItems++;
      }

      if (isShowingMenu) {
        calculatedWidth += listItems.shift().offsetWidth;
        maxVisibleItems--;
      }

      if (showRoot && calculatedWidth >= containerWidth) {
        newVisibleItems--;
      }

      // TODO: what if multiline and only one breadcrumb??
      if (isMultiline) {
        listItems.pop();
        newVisibleItems++;
      } else {
        if (listItems.length > 0) {
          // Ensure the last breadcrumb isn't truncated when we measure it.
          let last = listItems.pop();
          last.style.overflow = "visible";

          calculatedWidth += last.offsetWidth;
          if (calculatedWidth < containerWidth) {
            newVisibleItems++;
          }

          last.style.overflow = "";
        }
      }

      for (let breadcrumb of listItems.reverse()) {
        calculatedWidth += breadcrumb.offsetWidth;
        if (calculatedWidth < containerWidth) {
          newVisibleItems++;
        }
      }

      return Math.max(
        MIN_VISIBLE_ITEMS,
        Math.min(maxVisibleItems, newVisibleItems)
      );
    };

    setVisibleItems(function* () {
      // Update to show all items.
      yield childArray.length;

      // Measure, and update to show the items that fit.
      let newVisibleItems = computeVisibleItems(childArray.length);
      yield newVisibleItems;

      // If the number of items is less than the number of children,
      // then update again to ensure that the menu fits.
      if (newVisibleItems < childArray.length && newVisibleItems > 1) {
        yield computeVisibleItems(newVisibleItems);
      }
    });
  }, [childArray.length, setVisibleItems, showRoot, isMultiline]);

  useResizeObserver({ ref: domRef, onResize: updateOverflow });

  useLayoutEffect(updateOverflow, [children]);

  let contents = childArray;
  if (childArray.length > visibleItems) {
    let selectedItem = childArray[childArray.length - 1];
    let selectedKey = selectedItem.key ?? childArray.length - 1;
    let onMenuAction = (key: Key) => {
      // Don't fire onAction when clicking on the last item
      if (key !== selectedKey && onAction) {
        onAction(key);
      }
    };

    let menuItem = (
      <BreadcrumbItem key="menu">
        <MenuTrigger>
          <ActionButton {...{ "aria-label": "…", isQuiet: true, isDisabled }}>
            <Folder />
          </ActionButton>
          <Menu
            {...{
              selectionMode: "single",
              selectedKeys: [selectedKey],
              onAction: onMenuAction,
            }}
          >
            {childArray}
          </Menu>
        </MenuTrigger>
      </BreadcrumbItem>
    );

    contents = [menuItem];
    let breadcrumbs = [...childArray];
    let endItems = visibleItems;
    if (showRoot && visibleItems > 1) {
      contents.unshift(breadcrumbs.shift());
      endItems--;
    }
    contents.push(...breadcrumbs.slice(-endItems));
  }

  let lastIndex = contents.length - 1;
  let breadcrumbItems = contents.map((child, index) => {
    let isCurrent = index === lastIndex;
    let key = child.key ?? index;
    let onPress = () => {
      if (onAction) {
        onAction(key);
      }
    };

    return (
      <li key={index} className={styles["Breadcrumbs-item"]}>
        <BreadcrumbItem
          {...{
            key,
            isCurrent,
            isDisabled,
            onPress,
            autoFocus: isCurrent && autoFocusCurrent,
          }}
        >
          {child.props.children}
        </BreadcrumbItem>
      </li>
    );
  });

  return (
    <nav {...{ ...styleProps, ...navProps, ref: domRef }}>
      <ul
        {...{
          ref: listRef,
          className: classNames(
            styles,
            "Breadcrumbs",
            {
              "Breadcrumbs--small": size === "S",
              "Breadcrumbs--medium": size === "M",
              "Breadcrumbs--multiline": isMultiline,
              "Breadcrumbs--showRoot": showRoot,
              "is-disabled": isDisabled,
            },
            styleProps.className
          ),
        }}
      >
        {breadcrumbItems}
      </ul>
    </nav>
  );
}

/**
 * Breadcrumbs show hierarchy and navigational context for a user’s location within an application.
 */
let _Breadcrumbs = React.forwardRef(Breadcrumbs);
export { _Breadcrumbs as Breadcrumbs };
