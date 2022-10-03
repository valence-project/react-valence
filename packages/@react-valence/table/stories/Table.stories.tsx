import { action, Story } from "@ladle/react";
import { ActionButton, Button } from "@react-valence/button";
import Add from "@valence-icons/ui/AddFill";
import { Breadcrumbs, Item } from "@react-valence/breadcrumbs";
import { ButtonGroup } from "@react-valence/buttongroup";
import { Cell, Column, Row, TableBody, TableHeader, TableView } from "../";
import { Content } from "@react-valence/view";
import { CRUDExample } from "./CRUDExample";
import Delete from "@valence-icons/ui/DeleteBack2Fill";
import { Dialog, DialogTrigger } from "@react-valence/dialog";
import { Divider } from "@react-valence/divider";
import { Flex } from "@react-valence/layout";
import { Heading } from "@react-valence/text";
import { HidingColumns } from "./HidingColumns";
import { HidingColumnsAllowsResizing } from "./HidingColumnsAllowsResizing";
import { IllustratedMessage } from "@react-valence/illustratedmessage";
import { Link } from "@react-valence/link";
import { LoadingState, SelectionMode } from "@react-types/shared";
import { Radio, RadioGroup } from "@react-valence/radio";
import React, { Key, useState } from "react";
import { SearchField } from "@react-valence/searchfield";
import { Switch } from "@react-valence/switch";
import { TextField } from "@react-valence/textfield";
import { useAsyncList } from "@react-stately/data";
import { useFilter } from "@react-aria/i18n";
import { View } from "@react-valence/view";

import {ValenceTableProps } from '@types-valence/table';

let columns = [
  { name: "Foo", key: "foo" },
  { name: "Bar", key: "bar" },
  { name: "Baz", key: "baz" },
];

let nestedColumns = [
  { name: "Test", key: "test" },
  {
    name: "Tiered One Header",
    key: "tier1",
    children: [
      {
        name: "Tier Two Header A",
        key: "tier2a",
        children: [
          { name: "Foo", key: "foo" },
          { name: "Bar", key: "bar" },
        ],
      },
      { name: "Yay", key: "yay" },
      {
        name: "Tier Two Header B",
        key: "tier2b",
        children: [{ name: "Baz", key: "baz" }],
      },
    ],
  },
];

let items = [
  { test: "Test 1", foo: "Foo 1", bar: "Bar 1", yay: "Yay 1", baz: "Baz 1" },
  { test: "Test 2", foo: "Foo 2", bar: "Bar 2", yay: "Yay 2", baz: "Baz 2" },
  { test: "Test 1", foo: "Foo 3", bar: "Bar 1", yay: "Yay 1", baz: "Baz 1" },
  { test: "Test 2", foo: "Foo 4", bar: "Bar 2", yay: "Yay 2", baz: "Baz 2" },
  { test: "Test 1", foo: "Foo 5", bar: "Bar 1", yay: "Yay 1", baz: "Baz 1" },
  { test: "Test 2", foo: "Foo 6", bar: "Bar 2", yay: "Yay 2", baz: "Baz 2" },
  { test: "Test 1", foo: "Foo 7", bar: "Bar 1", yay: "Yay 1", baz: "Baz 1" },
  { test: "Test 2", foo: "Foo 8", bar: "Bar 2", yay: "Yay 2", baz: "Baz 2" },
];

let itemsWithFalsyId = [
  {
    test: "Test 1",
    foo: "Foo 1",
    bar: "Bar 1",
    yay: "Yay 1",
    baz: "Baz 1",
    id: 0,
  },
  {
    test: "Test 1",
    foo: "Foo 2",
    bar: "Bar 1",
    yay: "Yay 1",
    baz: "Baz 1",
    id: 1,
  },
];

let manyColunns = [];
for (let i = 0; i < 100; i++) {
  manyColunns.push({ name: "Column " + i, key: "C" + i });
}

let manyRows = [];
for (let i = 0; i < 1000; i++) {
  let row = { key: "R" + i };
  for (let j = 0; j < 100; j++) {
    row["C" + j] = `${i}, ${j}`;
  }

  manyRows.push(row);
}

function renderEmptyState() {
  return (
    <IllustratedMessage>
      <svg width="150" height="103" viewBox="0 0 150 103">
        <path d="M133.7,8.5h-118c-1.9,0-3.5,1.6-3.5,3.5v27c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5V23.5h119V92c0,0.3-0.2,0.5-0.5,0.5h-118c-0.3,0-0.5-0.2-0.5-0.5V69c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5v23c0,1.9,1.6,3.5,3.5,3.5h118c1.9,0,3.5-1.6,3.5-3.5V12C137.2,10.1,135.6,8.5,133.7,8.5z M15.2,21.5V12c0-0.3,0.2-0.5,0.5-0.5h118c0.3,0,0.5,0.2,0.5,0.5v9.5H15.2z M32.6,16.5c0,0.6-0.4,1-1,1h-10c-0.6,0-1-0.4-1-1s0.4-1,1-1h10C32.2,15.5,32.6,15.9,32.6,16.5z M13.6,56.1l-8.6,8.5C4.8,65,4.4,65.1,4,65.1c-0.4,0-0.8-0.1-1.1-0.4c-0.6-0.6-0.6-1.5,0-2.1l8.6-8.5l-8.6-8.5c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l8.6,8.5l8.6-8.5c0.6-0.6,1.5-0.6,2.1,0c0.6,0.6,0.6,1.5,0,2.1L15.8,54l8.6,8.5c0.6,0.6,0.6,1.5,0,2.1c-0.3,0.3-0.7,0.4-1.1,0.4c-0.4,0-0.8-0.1-1.1-0.4L13.6,56.1z" />
      </svg>
      <Heading>No results</Heading>
      <Content>No results found</Content>
    </IllustratedMessage>
  );
}

let onSelectionChange = console.log;

export const Static: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with static contents" width={300} height={200} ><TableHeader><Column key="foo">Foo</Column><Column key="bar">Bar</Column><Column key="baz">Baz</Column></TableHeader><TableBody><Row><Cell>One</Cell><Cell>Two</Cell><Cell>Three</Cell></Row><Row><Cell>One</Cell><Cell>Two</Cell><Cell>Three</Cell></Row></TableBody></TableView> );
export const StaticWithSelection: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with static contents" selectionMode="multiple" width={300} height={200} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader><Column key="foo">Foo</Column><Column key="bar">Bar</Column><Column key="baz">Baz</Column></TableHeader><TableBody><Row><Cell>One</Cell><Cell>Two</Cell><Cell>Three</Cell></Row><Row><Cell>One</Cell><Cell>Two</Cell><Cell>Three</Cell></Row></TableBody></TableView> );
export const Dynamic: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with dynamic contents" width={300} height={200} ><TableHeader columns={columns}>{(column) =><Column>{column.name}</Column>}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const DynamicFalsyRowKeys: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with dynamic contents and falsy keys" width={300} height={200} ><TableHeader columns={columns}>{(column) =><Column>{column.name}</Column>}</TableHeader><TableBody items={itemsWithFalsyId}>{(item) =><Row>{(key) =><Cell>{item[key]}</Cell>}</Row>}</TableBody></TableView> );
export const DynamicWithSelection: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with dynamic contents" selectionMode="multiple" width={300} height={200} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader columns={columns}>{(column) =><Column>{column.name}</Column>}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const DynamicWithSingleSelection: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with dynamic contents" selectionMode="single" width={300} height={200} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader columns={columns}>{(column) =><Column>{column.name}</Column>}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const HorizontalScrollingOnly: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with dynamic contents" selectionMode="single" width={200} height={220} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader columns={columns}>{(column) =><Column>{column.name}</Column>}</TableHeader><TableBody items={items.slice(0, 3)}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const HorizontalScrollingOnlyFlushBottom: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with dynamic contents" selectionMode="single" width={200} height={174} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader columns={columns}>{(column) =><Column>{column.name}</Column>}</TableHeader><TableBody items={items.slice(0, 3)}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const DynamicWithDisabledSingleSelection: Story<ValenceTableProps<object>> = (args) => ( <TableView disabledKeys={["Foo 1", "Foo 3"]} aria-label="TableView with dynamic contents" selectionMode="single" width={300} height={200} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader columns={columns}>{(column) =><Column>{column.name}</Column>}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const DynamicWithDisabledMultipleSelection: Story<ValenceTableProps<object>> = (args) => ( <TableView disabledKeys={["Foo 1", "Foo 3"]} aria-label="TableView with dynamic contents" selectionMode="multiple" width={300} height={200} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader columns={columns}>{(column) =><Column>{column.name}</Column>}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const DynamicWithDisabledMultipleSelectionHighlight: Story<ValenceTableProps<object>> = (args) => ( <TableView disabledKeys={["Foo 1", "Foo 3"]} aria-label="TableView with dynamic contents" selectionStyle="highlight" selectionMode="multiple" width={300} height={200} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader columns={columns}>{(column) =><Column>{column.name}</Column>}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const DynamicWithDisabledMultipleSelectionQuiet: Story<ValenceTableProps<object>> = (args) => ( <TableView isQuiet disabledKeys={["Foo 1", "Foo 3"]} aria-label="TableView with dynamic contents" selectionMode="multiple" width={300} height={200} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader columns={columns}>{(column) =><Column>{column.name}</Column>}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const DefaultSelectedKeysDynamicMultipleSelectionShowDivider: Story<ValenceTableProps<object>> = (args) => ( <TableView defaultSelectedKeys={["Foo 1", "Foo 3"]} onSelectionChange={(s) => onSelectionChange([...s])} selectionMode="multiple" aria-label="TableView with dynamic contents" width={300} height={200} ><TableHeader columns={columns}>{(column) =><Column showDivider>{column.name}</Column>}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const SelectedKeysDynamicMultipleSelectionQuietShowDider: Story<ValenceTableProps<object>> = (args) => ( <TableView isQuiet selectedKeys={["Foo 1", "Foo 3"]} onSelectionChange={(s) => onSelectionChange([...s])} selectionMode="multiple" aria-label="TableView with dynamic contents" width={300} height={200} ><TableHeader columns={columns}>{(column) =><Column showDivider>{column.name}</Column>}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const SelectionStyleHighlight: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with dynamic contents" selectionMode="multiple" selectionStyle="highlight" width={400} height={300} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader columns={columns}>{(column) =><Column minWidth={200}>{column.name}</Column>}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const SelectionStyleHighlightOnAction: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with dynamic contents" selectionMode="multiple" selectionStyle="highlight" width={400} height={300} onSelectionChange={(s) => onSelectionChange([...s])} onAction={action("onAction")} ><TableHeader columns={columns}>{(column) =><Column minWidth={200}>{column.name}</Column>}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const SelectionModeNoneOnAction: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with dynamic contents" width={400} height={300} onSelectionChange={(s) => onSelectionChange([...s])} onAction={action("onAction")} ><TableHeader columns={columns}>{(column) =><Column minWidth={200}>{column.name}</Column>}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const SelectionStyleCheckboxOnAction: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with dynamic contents" width={400} height={300} selectionMode="multiple" selectionStyle="checkbox" onSelectionChange={(s) => onSelectionChange([...s])} onAction={action("onAction")} ><TableHeader columns={columns}>{(column) =><Column minWidth={200}>{column.name}</Column>}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const StaticWithNestedColumns: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with nested columns" selectionMode="multiple" width={500} height={200} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader><Column key="test">Test</Column><Column title="Group 1"><Column key="foo">Foo</Column><Column key="bar">Bar</Column></Column><Column title="Group 2"><Column key="baz">Baz</Column></Column></TableHeader><TableBody><Row><Cell>Test1</Cell><Cell>One</Cell><Cell>Two</Cell><Cell>Three</Cell></Row><Row><Cell>Test2</Cell><Cell>One</Cell><Cell>Two</Cell><Cell>Three</Cell></Row></TableBody></TableView> );
export const DynamicWithNestedColumns: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with nested columns" selectionMode="multiple" width={700} height={300} overflowMode="wrap" onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader columns={nestedColumns}>{(column) => ( <Column childColumns={column.children}>{column.name}</Column> )}</TableHeader><TableBody items={items}>{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const FocusableCells: Story<ValenceTableProps<object>> = (args) => ( <Flex direction="column"><label htmlFor="focus-before">Focus before</label><input id="focus-before" /><TableView aria-label="TableView with focusable cells" selectionMode="multiple" width={450} height={200} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader><Column key="foo">Foo</Column><Column key="bar">Bar</Column><Column key="baz">baz</Column></TableHeader><TableBody><Row><Cell><Switch aria-label="Foo" /></Cell><Cell><Link><a href="https://yahoo.com" target="_blank"> Yahoo </a></Link></Cell><Cell>Three</Cell></Row><Row><Cell><Switch aria-label="Foo" /><Switch aria-label="Bar" /></Cell><Cell><Link><a href="https://google.com" target="_blank"> Google </a></Link></Cell><Cell>Three</Cell></Row><Row><Cell><Switch aria-label="Foo" /></Cell><Cell><Link><a href="https://yahoo.com" target="_blank"> Yahoo </a></Link></Cell><Cell>Three</Cell></Row></TableBody></TableView><label htmlFor="focus-after">Focus after</label><input id="focus-after" /></Flex> );
export const ShouldFillCellWidth: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with filled cells" selectionMode="multiple" width={500} height={200} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader><Column>File Name</Column><Column align="center">Type</Column><Column align="end">Size</Column><Column>Description</Column></TableHeader><TableBody><Row><Cell>2018 Proposal</Cell><Cell>PDF</Cell><Cell>214 KB</Cell><Cell> very very very very very very long long long long long description </Cell></Row><Row><Cell><View width="100%" backgroundColor="gray-200"> 100% </View></Cell><Cell><View UNSAFE_style={{ margin: "auto", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", }} width="100%" backgroundColor="gray-200" > 100% </View></Cell><Cell><View UNSAFE_style={{ marginInlineStart: "auto", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", }} width="100%" backgroundColor="gray-200" > 100% </View></Cell><Cell><View UNSAFE_style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", }} width="100%" backgroundColor="gray-200" > very very very very very very long long long long long description </View></Cell></Row><Row><Cell><View UNSAFE_style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", }} width="50%" backgroundColor="gray-200" > 50% div </View></Cell><Cell><View UNSAFE_style={{ margin: "auto", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", }} width="70%" backgroundColor="gray-200" > 70% div </View></Cell><Cell><View UNSAFE_style={{ float: "right", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", }} width="70%" backgroundColor="gray-200" > 70% div </View></Cell><Cell><View UNSAFE_style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", }} width="70%" backgroundColor="gray-200" > very very very very very very long long long long long description </View></Cell></Row><Row><Cell><span style={{ backgroundColor: "var(--spectrum-global-color-gray-200", }} > span child </span></Cell><Cell><span style={{ backgroundColor: "var(--spectrum-global-color-gray-200", }} > span child </span></Cell><Cell><span style={{ backgroundColor: "var(--spectrum-global-color-gray-200", }} > span child </span></Cell><Cell><span style={{ backgroundColor: "var(--spectrum-global-color-gray-200", }} > very very very very very very long long long long long description </span></Cell></Row></TableBody></TableView> );
export const ColumnWidthsAndDividers: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with column widths and dividers" selectionMode="multiple" width={500} height={200} onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader><Column width={250} showDivider> File Name </Column><Column>Type</Column><Column align="end">Size</Column></TableHeader><TableBody><Row><Cell>2018 Proposal</Cell><Cell>PDF</Cell><Cell>214 KB</Cell></Row><Row><Cell>Budget</Cell><Cell>XLS</Cell><Cell>120 KB</Cell></Row></TableBody></TableView> );
export const IsQuietColumnWidthsAndDividers: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="Quiet TableView with column widths and dividers" selectionMode="multiple" width={500} height={200} isQuiet onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader><Column width={250} showDivider> File Name </Column><Column>Type</Column><Column align="end">Size</Column></TableHeader><TableBody><Row><Cell>2018 Proposal</Cell><Cell>PDF</Cell><Cell>214 KB</Cell></Row><Row><Cell>Budget</Cell><Cell>XLS</Cell><Cell>120 KB</Cell></Row></TableBody></TableView> );
export const CustomIsRowHeaderLabeling: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with custom row header labeling" selectionMode="multiple" width={500} height={200} isQuiet onSelectionChange={(s) => onSelectionChange([...s])} ><TableHeader><Column isRowHeader>First Name</Column><Column isRowHeader>Last Name</Column><Column>Birthday</Column></TableHeader><TableBody><Row><Cell>Sam</Cell><Cell>Smith</Cell><Cell>May 3</Cell></Row><Row><Cell>Julia</Cell><Cell>Jones</Cell><Cell>February 10</Cell></Row></TableBody></TableView> );
export const IsLoadingMore: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView loading more" width={700} height={200} selectionMode="multiple" ><TableHeader columns={columns}>{(column) =><Column minWidth={100}>{column.name}</Column>}</TableHeader><TableBody items={items} loadingState="loadingMore">{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const Filtering: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="Table filtering" width={700} height={200}><TableHeader columns={columns}>{(column) =><Column minWidth={100}>{column.name}</Column>}</TableHeader><TableBody items={items} loadingState="filtering">{(item) => ( <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row> )}</TableBody></TableView> );
export const RenderEmptyState: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with empty state" width={700} height={400} isQuiet renderEmptyState={renderEmptyState} ><TableHeader columns={manyColunns}>{(column) =><Column minWidth={100}>{column.name}</Column>}</TableHeader><TableBody>{[]}</TableBody></TableView> );
export const AllowsResizingUncontrolledStaticWidths: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with resizable columns" width={800} height={200} ><TableHeader><Column allowsResizing defaultWidth="50%"> File Name </Column><Column allowsResizing defaultWidth="20%"> Type </Column><Column allowsResizing defaultWidth={239}> Size </Column></TableHeader><TableBody><Row><Cell>2018 Proposal</Cell><Cell>PDF</Cell><Cell>214 KB</Cell></Row><Row><Cell>Budget</Cell><Cell>XLS</Cell><Cell>120 KB</Cell></Row></TableBody></TableView> );
export const AllowsResizingUncontrolledColumnDivider: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with resizable columns and divider" width={800} height={200} ><TableHeader><Column allowsResizing showDivider> File Name </Column><Column allowsResizing defaultWidth="3fr"> Type </Column><Column allowsResizing>Size</Column></TableHeader><TableBody><Row><Cell>2018 Proposal</Cell><Cell>PDF</Cell><Cell>214 KB</Cell></Row><Row><Cell>Budget</Cell><Cell>XLS</Cell><Cell>120 KB</Cell></Row></TableBody></TableView> );
export const AllowsResizingUncontrolledMinMaxWidths: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with resizable columns" width={800} height={200} ><TableHeader><Column allowsResizing defaultWidth={200} minWidth={175} maxWidth={300}> File Name </Column><Column allowsResizing defaultWidth="1fr" minWidth={175} maxWidth={500}> Size </Column><Column allowsResizing defaultWidth={200} minWidth={175} maxWidth={300}> Type </Column></TableHeader><TableBody><Row><Cell>2018 Proposal</Cell><Cell>PDF</Cell><Cell>214 KB</Cell></Row><Row><Cell>Budget</Cell><Cell>XLS</Cell><Cell>120 KB</Cell></Row></TableBody></TableView> );
export const AllowsResizingUncontrolledUndefinedTableWidthAndHeight: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with resizable columns and no width or height set"><TableHeader><Column allowsResizing defaultWidth={150}> File Name </Column><Column allowsResizing defaultWidth={100}> Type </Column><Column allowsResizing defaultWidth={100}> Size </Column><Column allowsResizing defaultWidth={100}> Weight </Column></TableHeader><TableBody><Row><Cell>2018 Proposal</Cell><Cell>PDF</Cell><Cell>214 KB</Cell><Cell>1 LB</Cell></Row><Row><Cell>Budget</Cell><Cell>XLS</Cell><Cell>120 KB</Cell><Cell>20 LB</Cell></Row></TableBody></TableView> );
export const AllowsResizingOnColumnResizeAction: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with resizable columns" width={800} height={200} onColumnResize={action("onColumnResize")} ><TableHeader><Column allowsResizing defaultWidth="1fr"> File Name </Column><Column allowsResizing defaultWidth="2fr"> Type </Column><Column allowsResizing defaultWidth="2fr"> Size </Column><Column allowsResizing defaultWidth="1fr"> Weight </Column></TableHeader><TableBody><Row><Cell>2018 Proposal</Cell><Cell>PDF</Cell><Cell>214 KB</Cell><Cell>1 LB</Cell></Row><Row><Cell>Budget</Cell><Cell>XLS</Cell><Cell>120 KB</Cell><Cell>20 LB</Cell></Row></TableBody></TableView> );
export const AllowsResizingOnColumnResizeEndAction: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with resizable columns" width={800} height={200} onColumnResizeEnd={action("onColumnResizeEnd")} ><TableHeader><Column allowsResizing defaultWidth="1fr"> File Name </Column><Column allowsResizing defaultWidth="2fr"> Type </Column><Column allowsResizing defaultWidth="2fr"> Size </Column><Column allowsResizing defaultWidth="1fr"> Weight </Column></TableHeader><TableBody><Row><Cell>2018 Proposal</Cell><Cell>PDF</Cell><Cell>214 KB</Cell><Cell>1 LB</Cell></Row><Row><Cell>Budget</Cell><Cell>XLS</Cell><Cell>120 KB</Cell><Cell>20 LB</Cell></Row></TableBody></TableView> );

export const HideHeader: Story<ValenceTableProps<object>> = (args) => ( <TableView aria-label="TableView with static contents" width={350} height={200} ><TableHeader><Column key="foo">Foo</Column><Column key="addAction" hideHeader> Add Info </Column><Column key="deleteAction" hideHeader showDivider> Delete Item </Column><Column key="bar">Bar</Column><Column key="baz">Baz</Column></TableHeader><TableBody><Row><Cell>One</Cell><Cell><ActionButton isQuiet aria-label="Add Info"><Add /></ActionButton></Cell><Cell><ActionButton isQuiet aria-label="Delete"><Delete /></ActionButton></Cell><Cell>Two</Cell><Cell>Three</Cell></Row><Row><Cell>One</Cell><Cell><ActionButton isQuiet aria-label="Add Info"><Add /></ActionButton></Cell><Cell><ActionButton isQuiet aria-label="Delete"><Delete /></ActionButton></Cell><Cell>Two</Cell><Cell>Three</Cell></Row><Row><Cell>One</Cell><Cell><ActionButton isQuiet aria-label="Add Info"><Add /></ActionButton></Cell><Cell><ActionButton isQuiet aria-label="Delete"><Delete /></ActionButton></Cell><Cell>Two</Cell><Cell>Three</Cell></Row><Row><Cell>One</Cell><Cell><ActionButton isQuiet aria-label="Add Info"><Add /></ActionButton></Cell><Cell><ActionButton isQuiet aria-label="Delete"><Delete /></ActionButton></Cell><Cell>Two</Cell><Cell>Three</Cell></Row><Row><Cell>One</Cell><Cell><ActionButton isQuiet aria-label="Add Info"><Add /></ActionButton></Cell><Cell><ActionButton isQuiet aria-label="Delete"><Delete /></ActionButton></Cell><Cell>Two</Cell><Cell>Three</Cell></Row><Row><Cell>One</Cell><Cell><ActionButton isQuiet aria-label="Add Info"><Add /></ActionButton></Cell><Cell><ActionButton isQuiet aria-label="Delete"><Delete /></ActionButton></Cell><Cell>Two</Cell><Cell>Three</Cell></Row></TableBody></TableView> );

function AsyncLoadingExample(props) {
  const { isResizable } = props;
  interface Item {
    data: {
      id: string;
      url: string;
      title: string;
    };
  }

  let list = useAsyncList<Item>({
    getKey: (item) => item.data.id,
    async load({ signal, cursor }) {
      let url = new URL("https://www.reddit.com/r/news.json");
      if (cursor) {
        url.searchParams.append("after", cursor);
      }

      let res = await fetch(url.toString(), { signal });
      let json = await res.json();
      return { items: json.data.children, cursor: json.data.after };
    },
    sort({ items, sortDescriptor }) {
      return {
        items: items.slice().sort((a, b) =>{
          let cmp =
            a.data[sortDescriptor.column] < b.data[sortDescriptor.column]
              ? -1
              : 1;
          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }
          return cmp;
        }),
      };
    },
  });

  return (
    <div>
      <ActionButton
        marginBottom={10}
        onPress={() => list.remove(list.items[0].data.id)}
      >
        Remove first item
      </ActionButton>
      <TableView
        aria-label="Top news from Reddit"
        selectionMode="multiple"
        width={1000}
        height={400}
        isQuiet
        sortDescriptor={list.sortDescriptor}
        onSortChange={list.sort}
        selectedKeys={list.selectedKeys}
        onSelectionChange={list.setSelectedKeys}
      >
        <TableHeader>
          <Column
            key="score"
            defaultWidth={100}
            allowsResizing={isResizable}
            allowsSorting
          >
            Score
          </Column>
          <Column
            key="title"
            isRowHeader
            allowsResizing={isResizable}
            allowsSorting
          >
            Title
          </Column>
          <Column
            key="author"
            defaultWidth={200}
            allowsResizing={isResizable}
            allowsSorting
          >
            Author
          </Column>
          <Column
            key="num_comments"
            defaultWidth={100}
            allowsResizing={isResizable}
            allowsSorting
          >
            Comments
          </Column>
        </TableHeader>
        <TableBody
          items={list.items}
          loadingState={list.loadingState}
          onLoadMore={list.loadMore}
        >
          {(item) => (
            <Row key={item.data.id}>
              {(key) =>
                key === "title" ? (
                  <Cell textValue={item.data.title}>
                    <Link isQuiet>
                      <a href={item.data.url} target="_blank">
                        {item.data.title}
                      </a>
                    </Link>
                  </Cell>
                ) : (
                  <Cell>{item.data[key]}</Cell>
                )
              }
            </Row>
          )}
        </TableBody>
      </TableView>
    </div>
  );
}

let COLUMNS = [
  {
    name: "Name",
    key: "name",
    minWidth: 200,
  },
  {
    name: "Owner",
    key: "ownerName",
  },
];

async function getCollectionItems(): Promise<any>{
  const result = [
    {
      id: "xx",
      name: "abc",
      ownerName: "xx",
    },
    {
      id: "aa",
      name: "efg",
      ownerName: "aa",
    },
    {
      id: "yy",
      name: "abcd",
      ownerName: "yy",
    },
    {
      id: "bb",
      name: "efgh",
      ownerName: "bb",
    },
    {
      id: "zz",
      name: "abce",
      ownerName: "zz",
    },
    {
      id: "cc",
      name: "efgi",
      ownerName: "cc",
    },
  ];
  return new Promise((resolve) =>{
    setTimeout(() =>{
      resolve(result);
    }, 5);
  });
}

function ProjectListTable() {
  interface Item {
    id: string;
    name: string;
    ownerName: string;
  }

  let { contains } = useFilter({ sensitivity: "base" });
  let [filterText, setFilterText] = React.useState("");
  let list = useAsyncList<Item>({
    async load() {
      let projects = await getCollectionItems();
      return { items: projects };
    },
  });
  let filteredItems = React.useMemo(
    () => list.items.filter((item) => contains(item.name, filterText)),
    [list.items, filterText, contains]
  );
  const onChange = (value) =>{
    setFilterText(value);
  };

  return (
    <div>
      <SearchField
        marginStart={"size-200"}
        marginBottom={"size-200"}
        marginTop={"size-200"}
        width={"size-3600"}
        aria-label={"Search by name"}
        value={filterText}
        onChange={onChange}
      />
      <View flexGrow={1} height={700} overflow="hidden">
        <TableView
          aria-label={"Project list"}
          height={"100%"}
          isQuiet
          sortDescriptor={list.sortDescriptor}
          onSortChange={list.sort}
        >
          <TableHeader columns={COLUMNS}>
            {(column) =>{
              const { name, ...columnProps } = column;
              return <Column {...columnProps}>{name}</Column>;
            }}
          </TableHeader>
          <TableBody items={filteredItems} loadingState={list.loadingState}>
            {(item) => (
              <Row key={item.id}>{(key) =><Cell>{item[key]}</Cell>}</Row>
            )}
          </TableBody>
        </TableView>
      </View>
    </div>
  );
}

function AsyncServerFilterTable(props) {
  interface Item {
    name: string;
    height: string;
    mass: string;
  }

  let columns = [
    {
      name: "Name",
      key: "name",
      minWidth: 200,
    },
    {
      name: "Height",
      key: "height",
    },
    {
      name: "Mass",
      key: "mass",
    },
  ];

  let list = useAsyncList<Item>({
    getKey: (item) => item.name,
    async load({ signal, cursor, filterText }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, "https://");
      }

      let res = await fetch(
        cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`,
        { signal }
      );
      let json = await res.json();

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  const onChange = (value) =>{
    list.setFilterText(value);
  };

  return (
    <div>
      <SearchField
        marginStart={"size-200"}
        marginBottom={"size-200"}
        marginTop={"size-200"}
        width={"size-3600"}
        aria-label={"Search by name"}
        defaultValue={list.filterText}
        onChange={onChange}
      />
      <TableView
        aria-label={"Star Wars Characters"}
        height={200}
        width={600}
        isQuiet
        sortDescriptor={list.sortDescriptor}
        onSortChange={list.sort}
        {...props}
      >
        <TableHeader columns={columns}>
          {(column) =>{
            const { name, ...columnProps } = column;
            return <Column {...columnProps}>{name}</Column>;
          }}
        </TableHeader>
        <TableBody
          items={list.items}
          loadingState={list.loadingState}
          onLoadMore={list.loadMore}
        >
          {(item) => (
            <Row key={item.name}>{(key) =><Cell>{item[key]}</Cell>}</Row>
          )}
        </TableBody>
      </TableView>
    </div>
  );
}

function ChangableSelectionMode() {
  let [selectionMode, setSelectionMode] = useState("none" as SelectionMode);
  let [selectedKeys, setSelectedKeys] = React.useState(
    new Set([]) as "all" | Iterable<Key>
  );

  return (
    <Flex direction="column" flexGrow={1} maxWidth="size-6000">
      <RadioGroup
        defaultValue="none"
        onChange={(value: SelectionMode) => setSelectionMode(value)}
        label="Selection Mode"
      >
        <Radio value="multiple">Multiple</Radio>
        <Radio value="single">Single</Radio>
        <Radio value="none">None</Radio>
      </RadioGroup>
      <TableView
        overflowMode="wrap"
        selectionMode={selectionMode}
        selectedKeys={selectedKeys}
        aria-label="TableView with controlled selection"
        width="100%"
        height="100%"
        onSelectionChange={setSelectedKeys}
      >
        <TableHeader columns={columns}>
          {(column) =><Column>{column.name}</Column>}
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <Row key={item.foo}>{(key) =><Cell>{item[key]}</Cell>}</Row>
          )}
        </TableBody>
      </TableView>
    </Flex>
  );
}

export function TableWithBreadcrumbs() {
  const fs = [
    { key: "a", name: "Folder A", type: "folder" },
    { key: "b", name: "File B", value: "10 MB" },
    { key: "c", name: "File C", value: "10 MB", parent: "a" },
    { key: "d", name: "File D", value: "10 MB", parent: "a" },
  ];

  const [loadingState, setLoadingState] = useState<LoadingState>(
    "idle" as "idle"
  );
  const [selection, setSelection] = useState<"all" | Iterable<Key>>(
    new Set([])
  );
  const [items, setItems] = useState(() => fs.filter((item) => !item.parent));

  const changeFolder = (folder) =>{
    setItems([]);
    setLoadingState("loading" as "loading");

    // mimic loading behavior
    setTimeout(() =>{
      setLoadingState("idle");
      setItems(
        fs.filter((item) => (folder ? item.parent === folder : !item.parent))
      );
    }, 700);
    setSelection(new Set([]));
  };

  return (
    <Flex direction="column" width="400px">
      <div>
        The TableView should not error if row selection changes due to items
        changes from external navigation (breadcrumbs).
      </div>
      <Breadcrumbs
        onAction={(item) =>{
          if (item === "root") {
            changeFolder("");
          }
        }}
      >
        <Item key="root">root</Item>
        <Item>a</Item>
      </Breadcrumbs>
      <TableView
        width="400px"
        aria-label="table"
        selectedKeys={selection}
        selectionMode="multiple"
        onSelectionChange={(sel) => setSelection(sel)}
      >
        <TableHeader>
          <Column key="name" isRowHeader>
            Name
          </Column>
          <Column key="value">Value</Column>
        </TableHeader>
        <TableBody items={items} loadingState={loadingState}>
          {(item) => (
            <Row key={item.key}>
              {(column) =>{
                if (item.type === "folder" && column === "name") {
                  return (
                    <Cell textValue={item[column]}>
                      <Link onPress={() => changeFolder(item.key)}>
                        {item[column]}
                      </Link>
                    </Cell>
                  );
                }
                return <Cell>{item[column]}</Cell>;
              }}
            </Row>
          )}
        </TableBody>
      </TableView>
      <ActionButton
        onPress={() =>
          setSelection(
            items.some((item) => item.key === "d")
              ? new Set(["d"])
              : new Set([])
          )
        }
      >
        Select D
      </ActionButton>
    </Flex>
  );
}
