/// <reference types="css-module-types" />

import {JSX} from 'react';

export { TableView } from "./TableView";
import { Column } from "@react-stately/table";
import { ValenceColumnProps } from "@types-valence/table";

// Override TS for Column to support spectrum specific props.
const ValenceColumn = Column as <T>(
  props: ValenceColumnProps<T>
) => JSX.Element;
export { ValenceColumn as Column };

export {
  TableHeader,
  TableBody,
  Section,
  Row,
  Cell,
} from "@react-stately/table";

export type {
  ValenceTableProps,
  ValenceColumnProps,
  TableHeaderProps,
  TableBodyProps,
  RowProps,
  CellProps,
} from "@types-valence/table";
