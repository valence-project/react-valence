import { Story as _Story, action } from "@ladle/react";

import {useViewportSize} from '@react-aria/utils';
import {ValenceActionBarProps} from "@types-valence/actionbar";

import { ActionBar, ActionBarContainer, Item } from "../src";
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  TableView,
} from "@react-valence/table";
import Copy from "@valence-icons/ui/ClipboardFill";
import Delete from "@valence-icons/ui/DeleteBin2Fill";
import Duplicate from "@valence-icons/ui/FileCopy2Fill";
import Edit from "@valence-icons/ui/Edit2Fill";
import { mergeProps } from "@react-aria/utils";
import Move from "@valence-icons/ui/DragMoveFill";
import React, { useRef, useState } from "react";
import { Selection } from "@react-types/shared";
import { Text } from "@react-valence/text";

let columns = [
  { name: "Foo", key: "foo" },
  { name: "Bar", key: "bar" },
  { name: "Baz", key: "baz" },
];

let defaultItems = [
  { test: "Test 1", foo: "Foo 1", bar: "Bar 1", yay: "Yay 1", baz: "Baz 1" },
  { test: "Test 2", foo: "Foo 2", bar: "Bar 2", yay: "Yay 2", baz: "Baz 2" },
  { test: "Test 1", foo: "Foo 3", bar: "Bar 1", yay: "Yay 1", baz: "Baz 1" },
  { test: "Test 2", foo: "Foo 4", bar: "Bar 2", yay: "Yay 2", baz: "Baz 2" },
  { test: "Test 1", foo: "Foo 5", bar: "Bar 1", yay: "Yay 1", baz: "Baz 1" },
  { test: "Test 2", foo: "Foo 6", bar: "Bar 2", yay: "Yay 2", baz: "Baz 2" },
  { test: "Test 1", foo: "Foo 7", bar: "Bar 1", yay: "Yay 1", baz: "Baz 1" },
  { test: "Test 2", foo: "Foo 8", bar: "Bar 2", yay: "Yay 2", baz: "Baz 2" },
  { test: "Test 1", foo: "Foo 9", bar: "Bar 1", yay: "Yay 1", baz: "Baz 1" },
  { test: "Test 2", foo: "Foo 10", bar: "Bar 2", yay: "Yay 2", baz: "Baz 2" },
  { test: "Test 1", foo: "Foo 11", bar: "Bar 1", yay: "Yay 1", baz: "Baz 1" },
  { test: "Test 2", foo: "Foo 12", bar: "Bar 2", yay: "Yay 2", baz: "Baz 2" },
  { test: "Test 1", foo: "Foo 13", bar: "Bar 1", yay: "Yay 1", baz: "Baz 1" },
  { test: "Test 2", foo: "Foo 14", bar: "Bar 2", yay: "Yay 2", baz: "Baz 2" },
  { test: "Test 1", foo: "Foo 15", bar: "Bar 1", yay: "Yay 1", baz: "Baz 1" },
  { test: "Test 2", foo: "Foo 16", bar: "Bar 2", yay: "Yay 2", baz: "Baz 2" },
];

/**
 * Helper type so `bind` returns the actual Story type.
 */
 interface Story<T> extends _Story<T> {
  bind: (
    this: ThisParameterType<typeof Function.bind>,
    thisArg: Parameters<typeof Function.bind>[0],
    ...argArray: Parameters<typeof Function.bind>[1][]
  ) => _Story<T>;
}

export default {
  title: "ActionBar",
  component: ActionBar,
};

export const DefaultExpandedKeys: Story<any> = (
  props
) => {

  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    props.defaultSelectedKeys || new Set()
  );
  let [items, setItems] = useState(defaultItems);
  let ref = useRef(null);

  let viewport = useViewportSize();

  return (
      <ActionBarContainer>
        <TableView
          ref={ref}
          aria-label="Table"
          isQuiet={props.isQuiet}
          width={props.tableWidth}
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          onSelectionChange={(keys) => setSelectedKeys(keys)}
        >
          <TableHeader columns={columns}>
            {(column) => <Column>{column.name}</Column>}
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <Row key={item.foo}>{(key) => <Cell>{item[key]}</Cell>}</Row>
            )}
          </TableBody>
        </TableView>
        <ActionBar
          selectedItemCount={
            selectedKeys === "all" ? selectedKeys : selectedKeys.size
          }
          onClearSelection={() => {
            setSelectedKeys(new Set());
          }}
          {...mergeProps(props, {
            onAction: (key) => {
              if (key === "delete") {
                let newItems = items;
                if (selectedKeys instanceof Set) {
                  newItems = items.filter((item) => !selectedKeys.has(item.foo));
                } else if (selectedKeys === "all") {
                  newItems = [];
                }
                setItems(newItems);
                setSelectedKeys(new Set());
                // TODO need to solve restore focus when the row we arrived from is deleted, tableview ref is not focusable
                // ref.current.focus();
              }
            },
          })}
        >
          <Item key="edit">
            <Edit />
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy />
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete />
            <Text>Delete</Text>
          </Item>
          <Item key="move">
            <Move />
            <Text>Move</Text>
          </Item>
          <Item key="duplicate">
            <Duplicate />
            <Text>Duplicate</Text>
          </Item>
        </ActionBar>
      </ActionBarContainer>
  );
};
DefaultExpandedKeys.storyName = "Example";
DefaultExpandedKeys.args = {  isEmphasized: true, tableWidth: "100vw", isQuiet: false, onAction: action('onAction') };