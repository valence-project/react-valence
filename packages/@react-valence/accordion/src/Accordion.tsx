import { forwardRef, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps, mergeProps } from "@react-aria/utils";
import { FocusRing } from "@react-aria/focus";
import { useAccordion, useAccordionItem } from "@react-aria/accordion";
import { useHover } from "@react-aria/interactions";
import { useLocale } from "@react-aria/i18n";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { TreeState, useTreeState } from "@react-stately/tree";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DOMRef, Node } from "@types-valence/shared";
import { ValenceAccordionProps } from "@types-valence/accordion";

// @valence-icons
import CaretLeftFill from "@valence-icons/ui/ArrowLeftSLine";
import CaretRightFill from "@valence-icons/ui/ArrowRightSLine";

// @valence-styles
import styles from "@valence-styles/components/accordion/vars.module.scss";

function Accordion<T extends object>(
  props: ValenceAccordionProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  props = useProviderProps(props);

  let state = useTreeState<T>(props);
  let { styleProps } = useStyleProps(props);
  let domRef = useDOMRef(ref);
  let { accordionProps } = useAccordion(props, state, domRef);

  return (
    <div
      {...{
        ...accordionProps,
        ...filterDOMProps(props),
        ...styleProps,
        ref: domRef,
        className: classNames(styles, "Accordion", styleProps.className),
      }}
    >
      {[...state.collection].map((item) => (
        <AccordionItem<T> {...{ key: item.key, item, state }} />
      ))}
    </div>
  );
}

interface AccordionItemProps<T> {
  item: Node<T>;
  state: TreeState<T>;
}

function AccordionItem<T>(props: AccordionItemProps<T>) {
  props = useProviderProps(props);
  let ref = useRef<HTMLButtonElement>();
  let { state, item } = props;

  let { buttonProps, regionProps } = useAccordionItem<T>(props, state, ref);
  let isOpen = state.expandedKeys.has(item.key);
  let isDisabled = state.disabledKeys.has(item.key);
  let { isHovered, hoverProps } = useHover({ isDisabled });
  let { direction } = useLocale();

  return (
    <div
      {...{
        className: classNames(styles, "Accordion-item", {
          "is-open": isOpen,
          "is-disabled": isDisabled,
        }),
      }}
    >
      <h3 className={styles["Accordion-itemHeading"]}>
        <FocusRing focusRingClass={styles["focus-ring"]} within>
          <button
            {...{
              ...mergeProps(buttonProps, hoverProps),
              className: classNames(styles, "Accordion-itemHeader", {
                "is-hovered": isHovered,
              }),
              ref,
            }}
          >
            {direction === "ltr" ? (
              <CaretRightFill
                UNSAFE_className={styles["Accordion-itemIndicator"]}
                aria-hidden="true"
              />
            ) : (
              <CaretLeftFill
                UNSAFE_className={styles["Accordion-itemIndicator"]}
                aria-hidden="true"
              />
            )}
            {item.props.title}
          </button>
        </FocusRing>
      </h3>
      <div
        {...{
          ...regionProps,
          className: classNames(styles, "Accordion-itemContent"),
        }}
      >
        {item.props.children}
      </div>
    </div>
  );
}

const _Accordion = forwardRef(Accordion) as <T>(
  props: ValenceAccordionProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReturnType<typeof Accordion>;
export { _Accordion as Accordion };
