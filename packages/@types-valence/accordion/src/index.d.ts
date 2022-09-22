import {
  CollectionBase,
  DOMProps,
  Expandable,
  StyleProps,
} from "@types-valence/shared";

interface AccordionProps<T> extends CollectionBase<T>, Expandable {}

export interface AriaAccordionProps<T> extends AccordionProps<T>, DOMProps {}

export interface ValenceAccordionProps<T>
  extends AriaAccordionProps<T>,
    StyleProps {}
