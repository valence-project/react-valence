import React, { forwardRef, ReactElement } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";
import { useLocalizedStringFormatter } from "@react-aria/i18n";

// @react-valence https://valence.austinpittman.net
import { ActionButton } from "@react-valence/button";
import { useSlotProps } from "@react-valence/utils";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceActionMenuProps } from "@types-valence/menu";

// @valence-icons
import More from "@valence-icons/ui/MoreFill";

import intlMessages from "../intl";

import { Menu } from "./Menu";
import { MenuTrigger } from "./MenuTrigger";

function ActionMenu<T extends object>(
  props: ValenceActionMenuProps<T>,
  ref: FocusableRef<HTMLButtonElement>
) {
  props = useSlotProps(props, "actionMenu");
  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  let buttonProps = filterDOMProps(props, { labelable: true });
  if (buttonProps["aria-label"] === undefined) {
    buttonProps["aria-label"] = stringFormatter.format("moreActions");
  }

  return (
    <MenuTrigger
      isOpen={props.isOpen}
      defaultOpen={props.defaultOpen}
      onOpenChange={props.onOpenChange}
      align={props.align}
      direction={props.direction}
      shouldFlip={props.shouldFlip}
    >
      <ActionButton ref={ref} {...props} {...buttonProps}>
        <More />
      </ActionButton>
      <Menu
        children={props.children}
        items={props.items}
        disabledKeys={props.disabledKeys}
        onAction={props.onAction}
      />
    </MenuTrigger>
  );
}

/**
 * ActionMenu combines an ActionButton with a Menu for simple "more actions" use cases.
 */
const _ActionMenu = forwardRef(ActionMenu) as <T>(
  props: ValenceActionMenuProps<T> & { ref?: FocusableRef<HTMLButtonElement> }
) => ReactElement;
export { _ActionMenu as ActionMenu };
