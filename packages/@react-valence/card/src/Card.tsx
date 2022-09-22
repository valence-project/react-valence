import React, {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { PartialNode } from "@react-stately/collections";

// @types-valence
import { DOMRef, DOMRefValue, ItemProps } from "@types-valence/shared";
import { ValenceCardProps } from "@types-valence/card";

import { CardBase } from "./CardBase";
import { useCardViewContext } from "./CardViewContext";

let Card = forwardRef(
  (props: ValenceCardProps, ref: DOMRef<HTMLDivElement>) => {
    let context = useCardViewContext();
    if (context !== null) {
      return null;
    } else {
      return <CardBase {...props} ref={ref} />;
    }
  }
);

// @ts-ignore
Card.getCollectionNode = function* getCollectionNode<T>(
  props: any
): Generator<PartialNode<T>> {
  let { children, textValue } = props;

  yield {
    type: "item",
    props: props,
    rendered: children,
    "aria-label": props["aria-label"],
    hasChildNodes: false,
    textValue,
  };
};

let _Card = Card as ForwardRefExoticComponent<
  ItemProps<ValenceCardProps> &
    PropsWithoutRef<ValenceCardProps> &
    RefAttributes<DOMRefValue<HTMLDivElement>>
>;
export { _Card as Card };
