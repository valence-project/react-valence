import { ActionButton, Button } from "@react-valence/button";
import Add from "@valence-icons/ui/AddFill";
import Alert from "@valence-icons/ui/AlertFill";
import Bell from "@valence-icons/ui/BellFill";
import { ButtonGroup } from "@react-valence/buttongroup";
import { chain } from "@react-aria/utils";
import { ComboBox, Item, Section } from "../";
import { Content } from "@react-valence/view";
import Copy from "@valence-icons/ui/FileCopyFill";
import { Dialog, DialogTrigger } from "@react-valence/dialog";
import Draw from "@valence-icons/ui/DraftFill";
import { Flex } from "@react-valence/layout";
import { Link } from "@react-valence/link";
import { mergeProps } from "@react-aria/utils";
import React, { useRef, useState } from "react";
import { Story, action } from "@ladle/react";
import { Text } from "@react-valence/text";
import { TextField } from "@react-valence/textfield";
import { useAsyncList } from "@react-stately/data";
import { useFilter } from "@react-aria/i18n";
import { useListData, useTreeData } from "@react-stately/data";

import { ValenceComboBoxProps as _ValenceComboBoxProps } from "@types-valence/combobox";

declare interface ValenceComboBoxProps<T>
  extends Omit<_ValenceComboBoxProps<T>, "children"> {}

let items = [
  { name: "Aardvark", id: "1" },
  { name: "Kangaroo", id: "2" },
  { name: "Snake", id: "3" },
];

let withSection = [
  {
    name: "Animals",
    id: "s1",
    children: [
      { name: "Aardvark", id: "1" },
      { name: "Kangaroo", id: "2" },
      { name: "Snake", id: "3" },
    ],
  },
  {
    name: "People",
    id: "s2",
    children: [
      { name: "Danni", id: "4" },
      { name: "Devon", id: "5" },
      { name: "Ross", id: "6" },
    ],
  },
];

let lotsOfSections: any[] = [];
for (let i = 0; i < 50; i++) {
  let children = [];
  for (let j = 0; j < 50; j++) {
    children.push({ name: `Section ${i}, Item ${j}` });
  }

  lotsOfSections.push({ name: "Section " + i, children });
}

let actions = {
  onOpenChange: console.log("onOpenChange"),
  onInputChange: console.log("onInputChange"),
  onSelectionChange: console.log("onSelectionChange"),
  onBlur: console.log("onBlur"),
  onFocus: console.log("onFocus"),
};

const ComboBoxRender: Story<ValenceComboBoxProps<object>> = (props) => {
  return (
    <ComboBox label="Combobox" {...mergeProps(props, actions)}>
      <Item key="one">Item One</Item>
      <Item key="two" textValue="Item Two">
        <Copy size="S" />
        <Text>Item Two</Text>
      </Item>
      <Item key="three">Item Three</Item>
    </ComboBox>
  );
};

export const LoadingExamples: Story<ValenceComboBoxProps<object>> = (props) => {
  return (
    <Flex gap="size-300" direction="column">
      <ComboBox
        {...props}
        label="Combobox (loading)"
        loadingState="loading"
        defaultItems={items}
      >
        {(item: any) => <Item>{item.name}</Item>}
      </ComboBox>
      <ComboBox
        {...props}
        label="Combobox (filtering)"
        loadingState="filtering"
        defaultItems={items}
      >
        {(item: any) => <Item>{item.name}</Item>}
      </ComboBox>
      <ComboBox
        {...props}
        label="Combobox (loading + menuTrigger manual)"
        loadingState="loading"
        menuTrigger="manual"
        defaultItems={items}
      >
        {(item: any) => <Item>{item.name}</Item>}
      </ComboBox>
      <ComboBox
        {...props}
        label="Combobox (loading more)"
        loadingState="loadingMore"
        defaultItems={items}
      >
        {(item: any) => <Item>{item.name}</Item>}
      </ComboBox>
    </Flex>
  );
};

export const ListDataExample: Story<ValenceComboBoxProps<object>> = (props) => {
  let { contains } = useFilter({ sensitivity: "base" });
  let list = useListData({
    initialItems: items,
    initialFilterText: "Snake",
    filter(item, text) {
      return contains(item.name, text);
    },
  });

  let [showAll, setShowAll] = useState(false);

  return (
    <Flex gap="size-300" direction="column">
      <ComboBox
        onOpenChange={(open, reason) => {
          if (reason === "manual" && open) {
            setShowAll(true);
          }
        }}
        label="ComboBox (show all on open)"
        items={showAll ? items : list.items}
        inputValue={list.filterText}
        onInputChange={(value) => {
          setShowAll(false);
          list.setFilterText(value);
        }}
      >
        {(item) => <Item>{item.name}</Item>}
      </ComboBox>
      <ComboBox
        label="ComboBox (default controlled items behavior)"
        items={list.items}
        inputValue={list.filterText}
        onInputChange={list.setFilterText}
      >
        {(item) => <Item>{item.name}</Item>}
      </ComboBox>
    </Flex>
  );
};

export const AsyncLoadingExample: Story<ValenceComboBoxProps<object>> = (
  props
) => {
  interface StarWarsChar {
    name: string;
    url: string;
  }

  let list = useAsyncList<StarWarsChar>({
    async load({ signal, cursor, filterText }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, "https://");
      }

      // Slow down load so progress circle can appear
      await new Promise((resolve) => setTimeout(resolve, 1500));
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

  return (
    <ComboBox
      label="Star Wars Character Lookup"
      items={list.items}
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
      loadingState={list.loadingState}
      onLoadMore={chain(action("onLoadMore"), list.loadMore)}
      onOpenChange={action("onOpenChange")}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
  );
};

export const AsyncLoadingExampleControlledKey: Story<
  ValenceComboBoxProps<object>
> = (props) => {
  interface StarWarsChar {
    name: string;
    url: string;
  }

  let list = useAsyncList<StarWarsChar>({
    async load({ signal, cursor, filterText }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, "https://");
      }

      // Slow down load so progress circle can appear
      await new Promise((resolve) => setTimeout(resolve, 1500));

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
    initialSelectedKeys: ["Luke Skywalker"],
    getKey: (item) => item.name,
  });

  let onSelectionChange = (key) => {
    let itemText = list.getItem(key)?.name;
    list.setSelectedKeys(new Set([key]));
    list.setFilterText(itemText);
  };

  let onInputChange = (value) => {
    if (value === "") {
      list.setSelectedKeys(new Set([null]));
    }
    list.setFilterText(value);
  };

  let selectedKey = (list.selectedKeys as Set<React.Key>).values().next().value;
  return (
    <ComboBox
      label="Star Wars Character Lookup"
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      items={list.items}
      inputValue={list.filterText}
      onInputChange={onInputChange}
      loadingState={list.loadingState}
      onLoadMore={list.loadMore}
      onOpenChange={action("onOpenChange")}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
  );
};

export const AsyncLoadingExampleControlledKeyWithReset: Story<
  ValenceComboBoxProps<object>
> = (props) => {
  interface StarWarsChar {
    name: string;
    url: string;
  }
  let isFocused = useRef(false);
  let list = useAsyncList<StarWarsChar>({
    async load({ signal, cursor, filterText, selectedKeys }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, "https://");
      }

      // Slow down load so progress circle can appear
      await new Promise((resolve) => setTimeout(resolve, 1500));

      let res = await fetch(
        cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`,
        { signal }
      );
      let json = await res.json();

      let selectedText;
      let selectedKey = (selectedKeys as Set<React.Key>).values().next().value;

      // If selectedKey exists and combobox is performing intial load, update the input value with the selected key text
      if (!isFocused.current && selectedKey) {
        let selectedItemName = json.results.find(
          (item) => item.name === selectedKey
        )?.name;
        if (selectedItemName != null && selectedItemName !== filterText) {
          selectedText = selectedItemName;
        }
      }
      return {
        items: json.results,
        cursor: json.next,
        filterText: selectedText ?? filterText,
      };
    },
    initialSelectedKeys: ["Luke Skywalker"],
    getKey: (item) => item.name,
  });

  let onSelectionChange = (key) => {
    let itemText = list.getItem(key)?.name;
    list.setSelectedKeys(new Set([key]));
    list.setFilterText(itemText);
  };

  let onInputChange = (value) => {
    if (value === "") {
      list.setSelectedKeys(new Set([null]));
    }
    list.setFilterText(value);
  };

  let selectedKey = (list.selectedKeys as Set<React.Key>).values().next().value;
  return (
    <ComboBox
      onFocusChange={(focus) => (isFocused.current = focus)}
      label="Star Wars Character Lookup"
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
      items={list.items}
      inputValue={list.filterText}
      onInputChange={onInputChange}
      loadingState={list.loadingState}
      onLoadMore={list.loadMore}
      onOpenChange={action("onOpenChange")}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
  );
};

let customFilterItems = [
  { name: "The first item", id: "1" },
  { name: "The second item", id: "2" },
  { name: "The third item", id: "3" },
];

export const CustomFilterComboBox: Story<ValenceComboBoxProps<object>> = (
  props
) => {
  let { startsWith } = useFilter({ sensitivity: "base" });
  let [filterValue, setFilterValue] = React.useState("");
  let filteredItems = React.useMemo(
    () =>
      customFilterItems.filter((item) => startsWith(item.name, filterValue)),
    [props.items, filterValue, startsWith]
  );

  return (
    <ComboBox
      {...mergeProps(props, actions)}
      label="Combobox"
      items={filteredItems}
      inputValue={filterValue}
      onInputChange={setFilterValue}
    >
      {(item: any) => <Item>{item.name}</Item>}
    </ComboBox>
  );
};

export const AllControlledComboBox: Story<ValenceComboBoxProps<object>> = (
  props
) => {
  let [fieldState, setFieldState] = React.useState({
    selectedKey: props.selectedKey,
    inputValue: props.inputValue,
  });

  let list = useTreeData({
    initialItems: withSection,
  });

  let onSelectionChange = (key: React.Key) => {
    setFieldState((prevState) => ({
      inputValue:
        list.getItem(key)?.value.name ??
        (props.allowsCustomValue ? prevState.inputValue : ""),
      selectedKey: key,
    }));
  };

  let onInputChange = (value: string) => {
    setFieldState((prevState) => ({
      inputValue: value,
      selectedKey: value === "" ? null : prevState.selectedKey,
    }));
  };

  let setSnake = () => {
    setFieldState({ inputValue: "Snake", selectedKey: "3" });
  };

  let setRoss = () => {
    setFieldState({ inputValue: "Ross", selectedKey: "6" });
  };

  let clearAll = () => {
    setFieldState({ inputValue: "", selectedKey: null });
  };

  return (
    <div>
      <div>Current selectedKey: {fieldState.selectedKey}</div>
      <div>Current input value: {fieldState.inputValue}</div>
      <ButtonGroup marginEnd="30px">
        <Button variant="secondary" onPress={setSnake}>
          <Text>Snake</Text>
        </Button>
        <Button variant="secondary" onPress={setRoss}>
          <Text>Ross</Text>
        </Button>
        <Button variant="secondary" onPress={clearAll}>
          <Text>Clear key</Text>
        </Button>
      </ButtonGroup>
      <ComboBox
        allowsCustomValue={props.allowsCustomValue}
        disabledKeys={props.disabledKeys}
        selectedKey={fieldState.selectedKey}
        inputValue={fieldState.inputValue}
        defaultItems={list.items}
        label="Combobox"
        onOpenChange={action("onOpenChange")}
        onInputChange={onInputChange}
        onSelectionChange={onSelectionChange}
        onBlur={action("onBlur")}
        onFocus={action("onFocus")}
      >
        {(item) => (
          <Section items={item.children} title={item.value.name}>
            {(item) => <Item>{item.value.name}</Item>}
          </Section>
        )}
      </ComboBox>
    </div>
  );
};

export const ControlledKeyComboBox: Story<ValenceComboBoxProps<object>> = (
  props
) => {
  let [selectedKey, setSelectedKey] = React.useState(props.selectedKey);

  let onSelectionChange = (key) => {
    setSelectedKey(key);
  };

  let setSnake = () => {
    setSelectedKey("3");
  };

  let setRoss = () => {
    setSelectedKey("6");
  };

  return (
    <div>
      <div>Current selectedKey: {selectedKey}</div>
      <ButtonGroup marginEnd="30px">
        <Button variant="secondary" onPress={setSnake}>
          <Text>Snake</Text>
        </Button>
        <Button variant="secondary" onPress={setRoss}>
          <Text>Ross</Text>
        </Button>
        <Button variant="secondary" onPress={() => setSelectedKey(null)}>
          <Text>Clear key</Text>
        </Button>
      </ButtonGroup>
      <ComboBox
        {...mergeProps(props, actions)}
        selectedKey={selectedKey}
        defaultItems={withSection}
        label="Combobox"
        onSelectionChange={onSelectionChange}
      >
        {(item: any) => (
          <Section items={item.children} title={item.name}>
            {(item: any) => <Item>{item.name}</Item>}
          </Section>
        )}
      </ComboBox>
    </div>
  );
};

export const ControlledValueComboBox: Story<ValenceComboBoxProps<object>> = (
  props
) => {
  let [value, setValue] = React.useState(props.inputValue);

  let onValueChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      <div>Current input value: {value}</div>
      <ButtonGroup marginEnd="30px" UNSAFE_style={{ verticalAlign: "bottom" }}>
        <Button variant="secondary" onPress={() => setValue("Blah")}>
          <Text>Blah</Text>
        </Button>
        <Button variant="secondary" onPress={() => setValue("Kangaroo")}>
          <Text>Kangaroo</Text>
        </Button>
        <Button variant="secondary" onPress={() => setValue("")}>
          <Text>Clear field</Text>
        </Button>
      </ButtonGroup>
      <ComboBox
        {...mergeProps(props, actions)}
        inputValue={value}
        defaultItems={withSection}
        label="Combobox"
        onInputChange={onValueChange}
      >
        {(item: any) => (
          <Section items={item.children} title={item.name}>
            {(item: any) => <Item>{item.name}</Item>}
          </Section>
        )}
      </ComboBox>
    </div>
  );
};

export const CustomValueComboBox: Story<ValenceComboBoxProps<object>> = (
  props
) => {
  let [selectedKey, setSelectedKey] = React.useState(props.selectedKey);

  let onSelectionChange = (key) => {
    setSelectedKey(key);
  };

  actions["onKeyDown"] = action("onKeyDown");

  return (
    <div>
      <div>Selected Key: {selectedKey}</div>
      <ComboBox
        {...mergeProps(props, actions)}
        selectedKey={selectedKey}
        defaultItems={withSection}
        label="Combobox"
        onSelectionChange={onSelectionChange}
        marginTop={20}
      >
        {(item: any) => (
          <Section items={item.children} title={item.name}>
            {(item: any) => <Item>{item.name}</Item>}
          </Section>
        )}
      </ComboBox>
    </div>
  );
};

export const ResizeCombobox: Story<ValenceComboBoxProps<object>> = (props) => {
  let [size, setSize] = useState(true);

  return (
    <Flex direction="column" gap="size-200" alignItems="start">
      <div style={{ width: size ? "200px" : "300px" }}>
        <ComboBox label="Combobox" {...actions} width="100%">
          <Item key="one">Item One</Item>
          <Item key="two" textValue="Item Two">
            <Copy size="S" />
            <Text>Item Two</Text>
          </Item>
          <Item key="three">Item Three</Item>
        </ComboBox>
      </div>
      <ActionButton onPress={() => setSize((prev) => !prev)}>
        Toggle size
      </ActionButton>
    </Flex>
  );
};

export const RenderRow: Story<ValenceComboBoxProps<object>> = (props) => {
  return (
    <Flex gap="size-200">
      <ComboBox label="Label" {...mergeProps(props, actions)}>
        <Item key="one">Option 1</Item>
        <Item key="two" textValue="Item Two">
          <Copy size="S" />
          <Text>Option 2</Text>
        </Item>
        <Item key="three">Option 3</Item>
      </ComboBox>
      <ComboBox isDisabled label="Label" {...mergeProps(props, actions)}>
        <Item key="one">Option 1</Item>
        <Item key="two" textValue="Item Two">
          <Copy size="S" />
          <Text>Option 2</Text>
        </Item>
        <Item key="three">Option 3</Item>
      </ComboBox>
    </Flex>
  );
};

export const ComboBoxWithMap: Story<ValenceComboBoxProps<object>> = (props) => {
  let [items, setItems] = React.useState([
    { name: "The first item", id: "one" },
    { name: "The second item", id: "two" },
    { name: "The third item", id: "three" },
  ]);

  let onClick = () => {
    setItems([
      { name: "The first item new text", id: "one" },
      { name: "The second item new text", id: "two" },
      { name: "The third item new text", id: "three" },
    ]);
  };

  return (
    <Flex direction="column">
      <button onClick={onClick}>Press to change items</button>
      <ComboBox label="Combobox" {...mergeProps(props, actions)}>
        {items.map((item) => (
          <Item key={item.id}>{item.name}</Item>
        ))}
      </ComboBox>
    </Flex>
  );
};

export const ComboBoxWithinDialog: Story<ValenceComboBoxProps<object>> = (
  props
) => {
  let { allowsCustomValue } = props;
  let items = [
    {
      name: "Animals",
      id: "s1",
      children: [
        { name: "Aardvark", id: "1" },
        { name: "Kangaroo", id: "2" },
        { name: "Snake", id: "3" },
      ],
    },
    {
      name: "People",
      id: "s2",
      children: [
        { name: "Danni", id: "4" },
        { name: "Devon", id: "5" },
        { name: "Ross", id: "6" },
      ],
    },
  ];
  let [selectedKey, setSelectedKey] = useState(null);
  return (
    <DialogTrigger>
      <ActionButton>Show ComboBox</ActionButton>
      {(close) => (
        <Dialog>
          <Content>
            <ComboBox
              label="Combo Box"
              defaultItems={items}
              placeholder="choose wisely"
              width="size-3000"
              allowsCustomValue={allowsCustomValue}
              selectedKey={selectedKey}
              onSelectionChange={setSelectedKey}
              onKeyDown={(e) => {
                if (
                  e.key === "Escape" &&
                  (selectedKey !== null ||
                    (e.target as HTMLInputElement).value === "" ||
                    allowsCustomValue)
                ) {
                  e.continuePropagation();
                }
              }}
            >
              {(item) => (
                <Section
                  key={item.name}
                  items={item.children}
                  title={item.name}
                >
                  {(item) => <Item key={item.name}>{item.name}</Item>}
                </Section>
              )}
            </ComboBox>
          </Content>
          <ButtonGroup>
            <Button onPress={close} variant="secondary">
              Cancel
            </Button>
          </ButtonGroup>
        </Dialog>
      )}
    </DialogTrigger>
  );
};

// export const LabelAlignEndAdd: Story<ValenceComboBoxProps<object>> = (args) => ();
// export const DisabledKeysTwoAdd: Story<ValenceComboBoxProps<object>> = (args) => ();
// export const DisabledKeysOneAdd: Story<ValenceComboBoxProps<object>> = (args) => ();
// export const DefaultSelectedKeyTwoDisabledKeysTwoAdd: Story<ValenceComboBoxProps<object>> = (args) => ();
// export const ServerSideFilteringWithUseAsyncList: Story<ValenceComboBoxProps<object>> = (args) => ();
// export const WithinADialogAllowsCustomValueTrue: Story<ValenceComboBoxProps<object>> = (args) => ();
export const StaticItems: Story<ValenceComboBoxProps<object>> =
  ComboBoxRender.bind({});

export const DynamicItems: Story<ValenceComboBoxProps<object>> = (args) => {
  return (
    <ComboBox defaultItems={items} label="Combobox" {...actions}>
      {(item) => <Item>{item.name}</Item>}
    </ComboBox>
  );
};

export const NoItems: Story<ValenceComboBoxProps<object>> = (args) => (
  <ComboBox defaultItems={[]} label="Combobox" {...actions}>
    {(item: any) => <Item>{item.name}</Item>}
  </ComboBox>
);

export const WithMappedItemsDefaultItemAndItemsUndef: Story<
  ValenceComboBoxProps<object>
> = (args) => <ComboBoxWithMap defaultSelectedKey="two" />;

export const WithSections: Story<ValenceComboBoxProps<object>> = (args) => (
  <ComboBox defaultItems={withSection} label="Combobox" {...actions}>
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </ComboBox>
);

export const WithManySections: Story<ValenceComboBoxProps<object>> = (args) => (
  <ComboBox defaultItems={lotsOfSections} label="Combobox" {...actions}>
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item: any) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </ComboBox>
);

export const ComplexItems: Story<ValenceComboBoxProps<object>> = (args) => (
  <ComboBox label="Select action">
    <Item textValue="Add to queue">
      <Add /> <Text>Add to queue</Text>
      <Text slot="description">Add to current watch queue.</Text>
    </Item>
    <Item textValue="Add review">
      <Draw /> <Text>Add review</Text>
      <Text slot="description">Post a review for the episode.</Text>
    </Item>
    <Item textValue="Subscribe to series">
      <Bell /> <Text>Subscribe to series</Text>
      <Text slot="description">
        Add series to your subscription list and be notified when a new episode
        airs.
      </Text>
    </Item>
    <Item textValue="Report">
      <Alert /> <Text>Report</Text>
      <Text slot="description">Report an issue/violation.</Text>
    </Item>
  </ComboBox>
);
export const UserProvidedIdAndLabel: Story<ValenceComboBoxProps<object>> = (
  args
) => (
  <Flex direction="column" width="size-3000">
    <label id="test-label" htmlFor="test-id">
      Combobox
    </label>
    <ComboBox id="test-id" aria-labelledby="test-label" {...actions}>
      <Item key="one">Item One</Item>
      <Item key="two" textValue="Item Two">
        <Copy size="S" /> <Text>Item Two</Text>
      </Item>
      <Item key="three">Item Three</Item>
    </ComboBox>
  </Flex>
);

export const MenuTriggerFocus: Story<ValenceComboBoxProps<object>> =
  ComboBoxRender.bind({});
MenuTriggerFocus.args = { menuTrigger: "focus" };

export const MenuTriggerManual: Story<ValenceComboBoxProps<object>> = (
  args
) => (
  <Flex direction="column">
    <TextField label="Email" />
    <ComboBox label="Combobox" menuTrigger="manual" {...actions}>
      <Item key="one">Item One</Item>
      <Item key="two" textValue="Item Two">
        <Copy size="S" /> <Text>Item Two</Text>
      </Item>
      <Item key="three">Item Three</Item>
    </ComboBox>
    <TextField label="Name" />
  </Flex>
);
export const DisabledKeys: Story<ValenceComboBoxProps<object>> = (args) => (
  <ComboBox
    defaultItems={withSection}
    label="Combobox"
    disabledKeys={["Snake", "Ross"]}
    {...actions}
  >
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </ComboBox>
);

export const IsQuiet: Story<ValenceComboBoxProps<object>> = ComboBoxRender.bind(
  {}
);
IsQuiet.args = { isQuiet: true };

export const IsDisabled: Story<ValenceComboBoxProps<object>> =
  ComboBoxRender.bind({});
IsDisabled.args = { isDisabled: true };

export const IsReadOnly: Story<ValenceComboBoxProps<object>> =
  ComboBoxRender.bind({});
IsReadOnly.args = { isReadOnly: true, defaultSelectedKey: "two" };

export const LabelPositionTopLabelAlignEnd: Story<
  ValenceComboBoxProps<object>
> = ComboBoxRender.bind({});
MenuTriggerFocus.args = { labelPosition: "top", labelAlign: "end" };

export const LabelPositionSide: Story<ValenceComboBoxProps<object>> =
  ComboBoxRender.bind({});
LabelPositionSide.args = { labelPosition: "side" };

export const NoVisibleLabel: Story<ValenceComboBoxProps<object>> = (args) => (
  <ComboBox defaultItems={items} aria-label="ComboBox" {...actions}>
    {(item: any) => <Item>{item.name}</Item>}
  </ComboBox>
);

export const NoVisibleLabelIsQuiet: Story<ValenceComboBoxProps<object>> = (
  args
) => (
  <ComboBox defaultItems={items} aria-label="ComboBox" isQuiet {...actions}>
    {(item: any) => <Item>{item.name}</Item>}
  </ComboBox>
);

export const WithDescrptionLabelAlignEnd: Story<ValenceComboBoxProps<object>> =
  ComboBoxRender.bind({});
WithDescrptionLabelAlignEnd.args = {
  description: "Please select your spirit animal.",
  labelAlign: "end",
};

export const WithErrorMessageLabelPositionSide: Story<
  ValenceComboBoxProps<object>
> = ComboBoxRender.bind({});
WithErrorMessageLabelPositionSide.args = {
  errorMessage: "You did not select a valid spirit animal.",
  validationState: "invalid",
  labelPosition: "side",
};

export const IsRequired: Story<ValenceComboBoxProps<object>> =
  ComboBoxRender.bind({});
IsRequired.args = { isRequired: true };

export const IsRequiredNecessityIndicatorLabel: Story<
  ValenceComboBoxProps<object>
> = ComboBoxRender.bind({});
IsRequiredNecessityIndicatorLabel.args = {
  isRequired: true,
  necessityIndicator: "label",
};

export const ValidationStateInvalid: Story<ValenceComboBoxProps<object>> =
  ComboBoxRender.bind({});
ValidationStateInvalid.args = {
  validationState: "invalid",
  defaultSelectedKey: "two",
};

export const ValidationStateValid: Story<ValenceComboBoxProps<object>> =
  ComboBoxRender.bind({});
ValidationStateValid.args = {
  validationState: "valid",
  defaultSelectedKey: "two",
};

export const ValidationStateInvalidIsQuiet: Story<
  ValenceComboBoxProps<object>
> = ComboBoxRender.bind({});
ValidationStateInvalidIsQuiet.args = {
  validationState: "invalid",
  isQuiet: true,
  defaultSelectedKey: "two",
};

export const ValidationStateValidIsQuiet: Story<ValenceComboBoxProps<object>> =
  ComboBoxRender.bind({});
ValidationStateValidIsQuiet.args = {
  validationState: "valid",
  isQuiet: true,
  defaultSelectedKey: "two",
};

export const AutoFocusTrue: Story<ValenceComboBoxProps<object>> =
  ComboBoxRender.bind({});
AutoFocusTrue.args = { autoFocus: true };

export const DirectionTop: Story<ValenceComboBoxProps<object>> =
  ComboBoxRender.bind({});
DirectionTop.args = { direction: "top" };

export const AllowsCustomValueTrue: Story<ValenceComboBoxProps<object>> = (
  args
) => (
  <CustomValueComboBox
    allowsCustomValue
    selectedKey="2"
    disabledKeys={["3", "6"]}
  />
);

export const CustomWidth: Story<ValenceComboBoxProps<object>> = (args) => (
  <Flex direction="column">
    <ComboBox label="Combobox" {...actions} width="size-500">
      <Item key="one">Item One</Item>
      <Item key="two" textValue="Item Two">
        <Copy size="S" /> <Text>Item Two</Text>
      </Item>
      <Item key="three">Item Three</Item>
    </ComboBox>
    <ComboBox label="Combobox" {...actions} isQuiet width="size-3000">
      <Item key="one">Item One</Item>
      <Item key="two" textValue="Item Two">
        <Copy size="S" /> <Text>Item Two</Text>
      </Item>
      <Item key="three">Item Three</Item>
    </ComboBox>
    <ComboBox label="Combobox" {...actions} width="size-6000">
      <Item key="one">Item One</Item>
      <Item key="two" textValue="Item Two">
        <Copy size="S" /> <Text>Item Two</Text>
      </Item>
      <Item key="three">Item Three</Item>
    </ComboBox>
  </Flex>
);

export const NoVisibleLabelCustomWidth: Story<ValenceComboBoxProps<object>> = (
  args
) => (
  <Flex gap="size-300" direction="column">
    <ComboBox {...actions} aria-label="ComboBox" width="size-500">
      <Item key="one">Item One</Item>
      <Item key="two" textValue="Item Two">
        <Copy size="S" /> <Text>Item Two</Text>
      </Item>
      <Item key="three">Item Three</Item>
    </ComboBox>
    <ComboBox {...actions} aria-label="ComboBox" isQuiet width="size-3000">
      <Item key="one">Item One</Item>
      <Item key="two" textValue="Item Two">
        <Copy size="S" /> <Text>Item Two</Text>
      </Item>
      <Item key="three">Item Three</Item>
    </ComboBox>
    <ComboBox {...actions} aria-label="ComboBox" width="size-6000">
      <Item key="one">Item One</Item>
      <Item key="two" textValue="Item Two">
        <Copy size="S" /> <Text>Item Two</Text>
      </Item>
      <Item key="three">Item Three</Item>
    </ComboBox>
  </Flex>
);

export const InSmallDiv: Story<ValenceComboBoxProps<object>> = (args) => (
  <Flex width="size-500">
    <ComboBox aria-label="ComboBox" {...actions}>
      <Item key="one">Item One</Item>
      <Item key="two" textValue="Item Two">
        <Copy size="S" /> <Text>Item Two</Text>
      </Item>
      <Item key="three">Item Three</Item>
    </ComboBox>
  </Flex>
);
export const InputValueControlled: Story<ValenceComboBoxProps<object>> = (
  args
) => <ControlledValueComboBox inputValue="Snake" disabledKeys={["2", "6"]} />;

export const DefaultInputValueUncontrolled: Story<
  ValenceComboBoxProps<object>
> = ComboBoxRender.bind({});
DefaultInputValueUncontrolled.args = {
  defaultInputValue: "Item Three",
  disabledKeys: ["two"],
};

export const SelectedKeyControlled: Story<ValenceComboBoxProps<object>> = (
  args
) => <ControlledKeyComboBox selectedKey="4" disabledKeys={["2", "6"]} />;

export const DefaultSelectedKeyUncontrolled: Story<
  ValenceComboBoxProps<object>
> = ComboBoxRender.bind({});
DefaultSelectedKeyUncontrolled.args = {
  defaultSelectedKey: "two",
  disabledKeys: ["one"],
};

export const InputValueAndSelectedKeyControlled: Story<
  ValenceComboBoxProps<object>
> = (args) => (
  <AllControlledComboBox
    selectedKey="2"
    inputValue="Kangaroo"
    disabledKeys={["2", "6"]}
  />
);
export const InputValueAndSelectedKeyAllowsCustomValueControlled: Story<
  ValenceComboBoxProps<object>
> = (args) => (
  <AllControlledComboBox
    selectedKey="2"
    inputValue="Kangaroo"
    disabledKeys={["2", "6"]}
    allowsCustomValue
  />
);
export const DefaultInputValueAndDefaultSelectedKeyUncontrolled: Story<
  ValenceComboBoxProps<object>
> = ComboBoxRender.bind({});
DefaultInputValueAndDefaultSelectedKeyUncontrolled.args = {
  defaultInputValue: "Item Two",
  defaultSelectedKey: "two",
  disabledKeys: ["two"],
};

export const InputValueAndDefaultSelectedKeyControlledByInputvalue: Story<
  ValenceComboBoxProps<object>
> = (args) => (
  <ControlledValueComboBox
    inputValue="K"
    defaultSelectedKey="2"
    disabledKeys={["2", "6"]}
  />
);

export const DefaultInputValueAndSelectedKeyControlledBySelectedKey: Story<
  ValenceComboBoxProps<object>
> = (args) => (
  <ControlledKeyComboBox
    defaultInputValue="Blah"
    selectedKey="2"
    disabledKeys={["2", "6"]}
  />
);

export const LoadingState: Story<ValenceComboBoxProps<object>> = (args) => (
  <LoadingExamples validationState="invalid" />
);

export const TwoComboBoxes: Story<ValenceComboBoxProps<object>> = (args) => (
  <Flex gap="size-100">
    <ComboBox defaultItems={items} label="Combobox1">
      {(item) => <Item>{item.name}</Item>}
    </ComboBox>
    <ComboBox defaultItems={items} label="Combobox2">
      {(item) => <Item>{item.name}</Item>}
    </ComboBox>
  </Flex>
);

export const WhcmTest: Story<ValenceComboBoxProps<object>> = (args) => (
  <Flex direction="column" gap="size-200">
    <Flex gap="size-200">
      Shows the different states from
      <Link>
        <a href="https://spectrum.adobe.com/static/Windows-High-Contrast-Kits/Combobox-WindowsHighContrast.xd">
          spectrum
        </a>
      </Link>
    </Flex>
    <RenderRow {...{ placeholder: "Type here..." }} />
    <RenderRow />
    <RenderRow {...{ labelPosition: "side" }} />
    <RenderRow {...{ isQuiet: true, placeholder: "Type here..." }} />
    <RenderRow {...{ isQuiet: true }} />
    <RenderRow {...{ isRequired: true }} />
    <RenderRow {...{ isRequired: true, isQuiet: true }} />
    <RenderRow {...{ validationState: "invalid" }} />
    <RenderRow {...{ validationState: "invalid", isQuiet: true }} />
  </Flex>
);
