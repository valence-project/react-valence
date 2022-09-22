import { Key } from "react";

// @types-valence
import { Collection, Node } from "@types-valence/shared";

export interface GridCollection<T> extends Collection<Node<T>> {
  /** The number of columns in the grid. */
  columnCount: number;
  /** A list of rows in the grid. */
  rows: GridNode<T>[];
}

export interface GridRow<T> {
  key?: Key;
  type: string;
  childNodes: Iterable<Node<T>>;
}

export interface GridNode<T> extends Node<T> {
  column?: GridNode<T>;
  /** The number of columns spanned by this cell. */
  colspan?: number;
  /** The column index of this cell, accounting for any colspans. */
  colIndex?: number;
}
