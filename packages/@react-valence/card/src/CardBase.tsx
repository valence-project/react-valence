import React, {
  HTMLAttributes,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import {
  filterDOMProps,
  mergeProps,
  useLayoutEffect,
  useResizeObserver,
  useSlotId,
} from "@react-aria/utils";
import { FocusRing } from "@react-aria/focus";
import { getFocusableTreeWalker } from "@react-aria/focus";
import { useFocusWithin, useHover } from "@react-aria/interactions";

// @react-valence https://valence.austinpittman.net
import { Checkbox } from "@react-valence/checkbox";
import {
  classNames,
  SlotProvider,
  useDOMRef,
  useHasChild,
  useStyleProps,
} from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { AriaCardProps, ValenceCardProps } from "@types-valence/card";
import { DOMRef, Node } from "@types-valence/shared";

// @valence-styles
import styles from "@valence-styles/components/card/vars.module.scss";

import { useCardViewContext } from "./CardViewContext";

interface CardBaseProps<T> extends ValenceCardProps {
  articleProps?: HTMLAttributes<HTMLElement>;
  item?: Node<T>;
}

function CardBase<T extends object>(
  props: CardBaseProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  props = useProviderProps(props);
  let context = useCardViewContext() || {}; // we can call again here, won't change from Card.tsx
  let { state } = context;
  let manager = state?.selectionManager;
  let {
    isQuiet,
    orientation = "vertical",
    articleProps = {},
    item,
    layout,
    children,
  } = props;

  let key = item?.key;
  let isSelected = manager?.isSelected(key);
  let isDisabled = state?.disabledKeys.has(key);
  let onChange = () => manager?.select(key);

  let { styleProps } = useStyleProps(props);
  let { cardProps, titleProps, contentProps } = useCard(props);
  let domRef = useDOMRef(ref);
  let gridRef = useRef<HTMLDivElement>();
  let checkboxRef = useRef(null);

  // cards are only interactive if there is a selection manager and it allows selection
  let { hoverProps, isHovered } = useHover({
    isDisabled:
      manager === undefined || manager?.selectionMode === "none" || isDisabled,
  });
  let [isFocused, setIsFocused] = useState(false);
  let { focusWithinProps } = useFocusWithin({
    onFocusWithinChange: setIsFocused,
    isDisabled,
  });

  // ToDo: see css for comment about avatar under selector .valence-Card--noLayout.valence-Card--default
  let hasPreviewImage = useHasChild(
    `.${styles["valence-Card-image"]}`,
    gridRef
  );
  let hasPreviewIllustration = useHasChild(
    `.${styles["valence-Card-illustration"]}`,
    gridRef
  );
  let hasPreview = hasPreviewImage || hasPreviewIllustration;

  // this is for horizontal cards
  let [height, setHeight] = useState(NaN);
  let updateHeight = useCallback(() => {
    if (orientation !== "horizontal") {
      return;
    }

    let cardHeight = gridRef.current.getBoundingClientRect().height;
    setHeight(cardHeight);
  }, [orientation, gridRef, setHeight]);
  useResizeObserver({ ref: gridRef, onResize: updateHeight });

  let aspectRatioEnforce = undefined;
  if (orientation === "horizontal" && !isNaN(height)) {
    aspectRatioEnforce = {
      height: `${height}px`,
      width: `${height}px`,
    };
  }

  let slots = useMemo(
    () => ({
      image: {
        UNSAFE_className: classNames(styles, "valence-Card-image"),
        objectFit: orientation === "horizontal" ? "cover" : "contain",
        alt: "",
        ...aspectRatioEnforce,
      },
      illustration: {
        UNSAFE_className: classNames(styles, "valence-Card-illustration"),
        ...aspectRatioEnforce,
      },
      avatar: {
        UNSAFE_className: classNames(styles, "valence-Card-avatar"),
        size: "avatar-size-400",
      },
      heading: {
        UNSAFE_className: classNames(styles, "valence-Card-heading"),
        ...titleProps,
      },
      content: {
        UNSAFE_className: classNames(styles, "valence-Card-content"),
        ...contentProps,
      },
      detail: { UNSAFE_className: classNames(styles, "valence-Card-detail") },
    }),
    [titleProps, contentProps, height, isQuiet, orientation]
  );

  useLayoutEffect(() => {
    if (gridRef?.current) {
      let walker = getFocusableTreeWalker(gridRef.current);
      let nextNode = walker.nextNode();
      while (nextNode != null) {
        if (
          checkboxRef.current &&
          !checkboxRef.current.UNSAFE_getDOMNode().contains(nextNode)
        ) {
          console.warn(
            "Card does not support focusable elements, please contact the team regarding your use case."
          );
          break;
        }
        nextNode = walker.nextNode();
      }
    }
  }, [children]);

  return (
    <FocusRing focusRingClass={classNames(styles, "focus-ring")}>
      <article
        {...styleProps}
        {...mergeProps(
          cardProps,
          focusWithinProps,
          hoverProps,
          filterDOMProps(props),
          articleProps
        )}
        ref={domRef}
        className={classNames(
          styles,
          "valence-Card",
          {
            "valence-Card--default": !isQuiet && orientation !== "horizontal",
            "valence-Card--isQuiet": isQuiet && orientation !== "horizontal",
            "valence-Card--horizontal": orientation === "horizontal",
            "valence-Card--noPreview": !hasPreview,
            "is-hovered": isHovered,
            "is-focused": isFocused,
            "is-selected": isSelected,
            "valence-Card--waterfall": layout === "waterfall",
            "valence-Card--gallery": layout === "gallery",
            "valence-Card--grid": layout === "grid",
            "valence-Card--noLayout":
              layout !== "waterfall" &&
              layout !== "gallery" &&
              layout !== "grid",
          },
          styleProps.className
        )}
      >
        <div ref={gridRef} className={classNames(styles, "valence-Card-grid")}>
          {manager && manager.selectionMode !== "none" && (
            <div className={classNames(styles, "valence-Card-checkboxWrapper")}>
              <Checkbox
                ref={checkboxRef}
                isDisabled={isDisabled}
                excludeFromTabOrder
                isSelected={isSelected}
                onChange={onChange}
                UNSAFE_className={classNames(styles, "valence-Card-checkbox")}
                isEmphasized
                aria-label="select"
              />
            </div>
          )}
          <SlotProvider slots={slots}>{children}</SlotProvider>
          <div className={classNames(styles, "valence-Card-decoration")} />
        </div>
      </article>
    </FocusRing>
  );
}

interface AriaCardOptions extends AriaCardProps {}

interface CardAria {
  cardProps: HTMLAttributes<HTMLDivElement>;
  titleProps: HTMLAttributes<HTMLDivElement>;
  contentProps: HTMLAttributes<HTMLDivElement>;
}

function useCard(props: AriaCardOptions): CardAria {
  let titleId = useSlotId();
  let descriptionId = useSlotId();
  let titleProps = useMemo(
    () => ({
      id: titleId,
    }),
    [titleId]
  );
  let contentProps = useMemo(
    () => ({
      id: descriptionId,
    }),
    [descriptionId]
  );

  return {
    cardProps: {
      ...filterDOMProps(props),
      "aria-labelledby": titleId,
      "aria-describedby": descriptionId,
      tabIndex: 0,
    },
    titleProps,
    contentProps,
  };
}

/**
 * TODO: Add description of component here.
 */
const _CardBase = React.forwardRef(CardBase);
export { _CardBase as CardBase };
