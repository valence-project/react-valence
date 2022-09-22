import React, { ReactElement, useContext } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { mergeProps, useSyncRef } from "@react-aria/utils";
import { useMenu } from "@react-aria/menu";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useTreeState } from "@react-stately/tree";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceMenuProps } from "@types-valence/menu";

// @valence-styles
import styles from "@valence-styles/components/menu/vars.module.scss";

import { MenuContext } from "./context";
import { MenuItem } from "./MenuItem";
import { MenuSection } from "./MenuSection";

function Menu<T extends object>(
  props: ValenceMenuProps<T>,
  ref: DOMRef<HTMLUListElement>
) {
  let contextProps = useContext(MenuContext);
  let completeProps = {
    ...mergeProps(contextProps, props),
  };

  let domRef = useDOMRef(ref);
  let state = useTreeState(completeProps);
  let { menuProps } = useMenu(completeProps, state, domRef);
  let { styleProps } = useStyleProps(completeProps);
  useSyncRef(contextProps, domRef);

  return (
    <ul
      {...menuProps}
      {...styleProps}
      ref={domRef}
      className={classNames(styles, "Menu", styleProps.className)}
    >
      {[...state.collection].map((item) => {
        if (item.type === "section") {
          return (
            <MenuSection
              key={item.key}
              item={item}
              state={state}
              onAction={completeProps.onAction}
            />
          );
        }

        let menuItem = (
          <MenuItem
            key={item.key}
            item={item}
            state={state}
            onAction={completeProps.onAction}
          />
        );

        if (item.wrapper) {
          menuItem = item.wrapper(menuItem);
        }

        return menuItem;
      })}
    </ul>
  );
}

/**
 * Menus display a list of actions or options that a user can choose.
 */
// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const _Menu = React.forwardRef(Menu) as <T>(
  props: ValenceMenuProps<T> & { ref?: DOMRef<HTMLUListElement> }
) => ReactElement;
export { _Menu as Menu };
