import React, { ReactElement, useEffect, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { announce } from "@react-aria/live-announcer";
import { filterDOMProps } from "@react-aria/utils";
import { FocusScope } from "@react-aria/focus";
import { useKeyboard } from "@react-aria/interactions";
import { useLocalizedStringFormatter } from "@react-aria/i18n";

// @react-valence https://valence.austinpittman.net
import { ActionButton } from "@react-valence/button";
import { ActionGroup } from "@react-valence/actiongroup";
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";
import { OpenTransition } from "@react-valence/overlays";
import { Text } from "@react-valence/text";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceActionBarProps } from "@types-valence/actionbar";

// @valence-icons
import Close from "@valence-icons/ui/CloseFill";

import intlMessages from "../intl";
import styles from "./actionbar.scss";

function ActionBar<T extends object>(
  props: ValenceActionBarProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  let isOpen = props.selectedItemCount !== 0;

  return (
    <OpenTransition in={isOpen} mountOnEnter unmountOnExit>
      <ActionBarInnerWithRef {...props} ref={ref} />
    </OpenTransition>
  );
}

interface ActionBarInnerProps<T> extends ValenceActionBarProps<T> {
  isOpen?: boolean;
}

function ActionBarInner<T>(
  props: ActionBarInnerProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  props = useProviderProps(props);

  let {
    children,
    isEmphasized,
    onAction,
    onClearSelection,
    selectedItemCount,
    isOpen,
  } = props;

  let { styleProps } = useStyleProps(props);
  let domRef = useDOMRef(ref);
  let stringFormatter = useLocalizedStringFormatter(intlMessages);

  // Store the last count greater than zero in a ref so that we can retain it while rendering the fade-out animation.
  let lastCount = useRef(selectedItemCount);
  if (selectedItemCount === "all" || selectedItemCount > 0) {
    lastCount.current = selectedItemCount;
  }

  let { keyboardProps } = useKeyboard({
    onKeyDown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClearSelection();
      }
    },
  });

  // Announce "actions available" on mount.
  useEffect(() => {
    announce(stringFormatter.format("actionsAvailable"));
  }, [stringFormatter]);

  return (
    <FocusScope restoreFocus>
      <div
        {...filterDOMProps(props)}
        {...styleProps}
        {...keyboardProps}
        ref={domRef}
        className={classNames(
          styles,
          "ActionBar",
          {
            "ActionBar--emphasized": isEmphasized,
            "is-open": isOpen,
          },
          styleProps.className
        )}
      >
        <div className={classNames(styles, "ActionBar-bar")}>
          <ActionGroup
            aria-label={stringFormatter.format("actions")}
            isQuiet
            staticColor={isEmphasized ? "white" : undefined}
            overflowMode="collapse"
            buttonLabelBehavior="collapse"
            onAction={onAction}
            UNSAFE_className={classNames(
              styles,
              "ActionBar-actionGroup"
            )}
          >
            {children}
          </ActionGroup>
          <ActionButton
            gridArea="clear"
            aria-label={stringFormatter.format("clearSelection")}
            onPress={() => onClearSelection()}
            isQuiet
            staticColor={isEmphasized ? "white" : undefined}
          >
            <Close />
          </ActionButton>
          <Text
            UNSAFE_className={classNames(
              styles,
              "ActionBar-selectedCount"
            )}
          >
            {lastCount.current === "all"
              ? stringFormatter.format("selectedAll")
              : stringFormatter.format("selected", {
                  count: lastCount.current,
                })}
          </Text>
        </div>
      </div>
    </FocusScope>
  );
}

const ActionBarInnerWithRef = React.forwardRef(ActionBarInner) as <T>(
  props: ValenceActionBarProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReturnType<typeof ActionBarInner>;

/**
 * TODO: Add description of component here.
 */
const _ActionBar = React.forwardRef(ActionBar) as <T>(
  props: ValenceActionBarProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReactElement;
export { _ActionBar as ActionBar };
