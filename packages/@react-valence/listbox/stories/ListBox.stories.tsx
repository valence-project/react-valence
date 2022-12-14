import { action, Story } from "@ladle/react";
import AlignCenter from "@valence-icons/ui/AlignCenter";
import AlignLeft from "@valence-icons/ui/AlignLeft";
import AlignRight from "@valence-icons/ui/AlignRight";
import Blower from "@valence-icons/ui/WindyFill";
import Book from "@valence-icons/ui/Book2Fill";
import { Button } from "@react-valence/button";
import { Flex } from "@react-valence/layout";
import Copy from "@valence-icons/ui/FileCopy2Fill";
import Cut from "@valence-icons/ui/Scissors2Fill";
import { Item, ListBox, Section } from "../";
import { Label } from "@react-valence/label";
import Paste from "@valence-icons/ui/ClipboardFill";
import React, { useState } from "react";
import { Text } from "@react-valence/text";
import { useAsyncList } from "@react-stately/data";

import { ValenceListBoxProps } from "@types-valence/listbox";
import { SandiaStoryContainer } from "@react-valence/story-utils";

let iconMap = {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Blower,
  Book,
  Copy,
  Cut,
  Paste,
};

let hardModeProgrammatic = [
  {
    name: "Section 1",
    children: [
      { name: "Copy", icon: "Copy" },
      { name: "Cut", icon: "Cut" },
      { name: "Paste", icon: "Paste" },
    ],
  },
  {
    name: "Section 2",
    children: [
      { name: "Puppy", icon: "AlignLeft" },
      { name: "Doggo", icon: "AlignCenter" },
      { name: "Floof", icon: "AlignRight" },
    ],
  },
];

let flatOptions = [
  { name: "Aardvark" },
  { name: "Kangaroo" },
  { name: "Snake" },
  { name: "Danni" },
  { name: "Devon" },
  { name: "Ross" },
  { name: "Puppy" },
  { name: "Doggo" },
  { name: "Floof" },
];

let withSection = [
  {
    name: "Animals",
    children: [{ name: "Aardvark" }, { name: "Kangaroo" }, { name: "Snake" }],
  },
  {
    name: "People",
    children: [{ name: "Danni" }, { name: "Devon" }, { name: "Ross" }],
  },
];

let itemsWithFalsyId = [
  {
    id: 0,
    name: "key=0",
    children: [
      { id: 1, name: "Aardvark" },
      { id: 2, name: "Kangaroo" },
      { id: 3, name: "Snake" },
    ],
  },
  {
    id: "",
    name: 'key=""',
    children: [
      { id: 4, name: "Danni" },
      { id: 5, name: "Devon" },
      { id: 6, name: "Ross" },
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

let customOption = (item) => {
  let Icon = iconMap[item.icon];
  return (
    <Item textValue={item.name} key={item.name}>
      {item.icon && <Icon size="S" />}
      <Text>{item.name}</Text>
    </Item>
  );
};

export const AsyncLoadingExample: Story<any> = (props) => {
  interface Pokemon {
    name: string;
    url: string;
  }

  let list = useAsyncList<Pokemon>({
    async load({ signal, cursor }) {
      let res = await fetch(cursor || "https://pokeapi.co/api/v2/pokemon", {
        signal,
      });
      let json = await res.json();
      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  return (
    <ListBox
      flexGrow={1}
      aria-labelledby="label"
      items={list.items}
      isLoading={list.isLoading}
      onLoadMore={list.loadMore}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ListBox>
  );
};
AsyncLoadingExample.storyName = "AsyncLoading:Default";

let itemsForDemo = Array.from(new Array(100)).map((val, index) => ({
  val,
  index,
}));

const AppExample: Story<any> = (props) => {
  let [size, setSize] = useState("700px");

  const toggleSize = () => {
    if (size === "700px") {
      setSize("300px");
    } else {
      setSize("700px");
    }
  };

  return (
    <>
      <Button variant="primary" onPress={toggleSize}>
        {" "}
        Toggle Size
      </Button>
      <div style={{ display: "flex", height: size, overflow: "hidden" }}>
        <Flex maxHeight="300px">
          <Text>Max-Height: 300px</Text>
          <ListBox width="150px" items={itemsForDemo}>
            {(item) => (
              <Item textValue={String(item.index)} key={item.index}>
                <Text>IDX: {item.index}</Text>
              </Item>
            )}
          </ListBox>
        </Flex>
        <Flex>
          <Text>None</Text>
          <ListBox width="150px" items={itemsForDemo}>
            {(item) => (
              <Item textValue={String(item.index)} key={item.index}>
                <Text>IDX: {item.index}</Text>
              </Item>
            )}
          </ListBox>
        </Flex>
        <Flex maxHeight="700px">
          <Text>Max-Height: 700px</Text>
          <ListBox width="150px" items={itemsForDemo}>
            {(item) => (
              <Item textValue={String(item.index)} key={item.index}>
                <Text>IDX: {item.index}</Text>
              </Item>
            )}
          </ListBox>
        </Flex>
        <Flex maxHeight="100%">
          <Text>MaxHeight: 100%</Text>
          <ListBox width="150px" items={itemsForDemo}>
            {(item) => (
              <Item textValue={String(item.index)} key={item.index}>
                <Text>IDX: {item.index}</Text>
              </Item>
            )}
          </ListBox>
        </Flex>
        <Flex maxHeight="50%">
          <Text>MaxHeight: 50%</Text>
          <ListBox width="150px" items={itemsForDemo}>
            {(item) => (
              <Item textValue={String(item.index)} key={item.index}>
                <Text>IDX: {item.index}</Text>
              </Item>
            )}
          </ListBox>
        </Flex>
        <Flex height="700px">
          <Text>Height: 700px</Text>
          <ListBox width="150px" items={itemsForDemo}>
            {(item) => (
              <Item textValue={String(item.index)} key={item.index}>
                <Text>IDX: {item.index}</Text>
              </Item>
            )}
          </ListBox>
        </Flex>
        <Flex height="100%">
          <Text>Height: 100%</Text>
          <ListBox width="150px" items={itemsForDemo}>
            {(item) => (
              <Item textValue={String(item.index)} key={item.index}>
                <Text>IDX: {item.index}</Text>
              </Item>
            )}
          </ListBox>
        </Flex>
      </div>
    </>
  );
};

export const Default: Story<ValenceListBoxProps<object>> = (args) => (
  <ListBox flexGrow={1} aria-labelledby="label" items={flatOptions}>
    {(item) => <Item key={item.name}>{item.name}</Item>}
  </ListBox>
);
Default.decorators = [
  (ComponentStory) => (
    <SandiaStoryContainer>
      <ComponentStory />
    </SandiaStoryContainer>
  ),
];

export const SectionsDefault: Story<ValenceListBoxProps<object>> = (args) => (
  <ListBox flexGrow={1} aria-labelledby="label" items={withSection}>
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </ListBox>
);
SectionsDefault.storyName = "Sections:Default";

export const SectionsManyAndSelection: Story<
  ValenceListBoxProps<object>
> = (args) => (
  <ListBox
    flexGrow={1}
    aria-labelledby="label"
    selectionMode="multiple"
    items={lotsOfSections}
    onSelectionChange={action("onSelectionChange")}
  >
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item: any) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </ListBox>
);SectionsManyAndSelection.storyName = "Sections:ManyAndSelection"

export const SectionsFalsyIds: Story<ValenceListBoxProps<object>> = (
  args
) => (
  <ListBox
    flexGrow={1}
    aria-labelledby="label"
    items={itemsWithFalsyId}
    selectionMode="multiple"
    onSelectionChange={action("onSelectionChange")}
  >
    {(item) => (
      <Section items={item.children} title={item.name}>
        {(item) => <Item>{item.name}</Item>}
      </Section>
    )}
  </ListBox>
);
SectionsFalsyIds.storyName = "Sections:FalsyIds"

export const SectionsNoTitle: Story<ValenceListBoxProps<object>> = (
  args
) => (
  <ListBox flexGrow={1} aria-labelledby="label" items={withSection}>
    {(item) => (
      <Section key={item.name} items={item.children} aria-label={item.name}>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </ListBox>
);
SectionsNoTitle.storyName = "Sections:NoTitle";

export const Static: Story<ValenceListBoxProps<object>> = (args) => (
  <ListBox flexGrow={1} aria-labelledby="label">
    <Item>One</Item>
    <Item>Two</Item>
    <Item>Three</Item>
  </ListBox>
);
Static.storyName = "Static:Default";

export const StaticWithSectionsAndSelection: Story<
  ValenceListBoxProps<object>
> = (args) => (
  <ListBox flexGrow={1} aria-labelledby="label" selectionMode="multiple">
    <Section title="Section 1">
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Section>
    <Section title="Section 2">
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Section>
  </ListBox>
);
StaticWithSectionsAndSelection.storyName = "Static:SectionsAndSelection"

export const StaticWithSectionsAndNoTitle: Story<
  ValenceListBoxProps<object>
> = (args) => (
  <ListBox flexGrow={1} aria-labelledby="label">
    <Section aria-label="Section 1">
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Section>
    <Section aria-label="Section 2">
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Section>
  </ListBox>
);
StaticWithSectionsAndNoTitle.storyName = "Static:SectionsAndNoTitle";

export const WithDefaultSelectedOption: Story<ValenceListBoxProps<object>> = (
  args
) => (
  <ListBox
    flexGrow={1}
    aria-labelledby="label"
    selectionMode="multiple"
    onSelectionChange={action("onSelectionChange")}
    items={withSection}
    defaultSelectedKeys={["Kangaroo"]}
  >
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </ListBox>
);
export const SingleSelectionWithDefaultSelectedOption: Story<
  ValenceListBoxProps<object>
> = (args) => (
  <ListBox
    flexGrow={1}
    selectionMode="single"
    onSelectionChange={action("onSelectionChange")}
    aria-labelledby="label"
    items={flatOptions}
    defaultSelectedKeys={["Kangaroo"]}
  >
    {(item) => <Item key={item.name}>{item.name}</Item>}
  </ListBox>
);
export const StaticWithDefaultSelectedOptions: Story<
  ValenceListBoxProps<object>
> = (args) => (
  <ListBox
    flexGrow={1}
    aria-labelledby="label"
    selectionMode="multiple"
    onSelectionChange={action("onSelectionChange")}
    defaultSelectedKeys={["2", "3"]}
  >
    <Section title="Section 1">
      <Item key="1">One</Item>
      <Item key="2">Two</Item>
      <Item key="3">Three</Item>
    </Section>
    <Section title="Section 2">
      <Item key="4">Four</Item>
      <Item key="5">Five</Item>
      <Item key="6">Six</Item>
      <Item key="7">Seven</Item>
    </Section>
  </ListBox>
);
export const WithSelectedOptionsControlled: Story<
  ValenceListBoxProps<object>
> = (args) => (
  <ListBox
    flexGrow={1}
    aria-labelledby="label"
    selectionMode="multiple"
    onSelectionChange={action("onSelectionChange")}
    items={withSection}
    selectedKeys={["Kangaroo"]}
  >
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </ListBox>
);
export const StaticWithSelectedOptionsControlled: Story<
  ValenceListBoxProps<object>
> = (args) => (
  <ListBox
    flexGrow={1}
    aria-labelledby="label"
    selectionMode="multiple"
    onSelectionChange={action("onSelectionChange")}
    selectedKeys={["2"]}
  >
    <Section title="Section 1">
      <Item key="1">One</Item>
      <Item key="2">Two</Item>
      <Item key="3">Three</Item>
    </Section>
    <Section title="Section 2">
      <Item key="4">Four</Item>
      <Item key="5">Five</Item>
      <Item key="6">Six</Item>
      <Item key="7">Seven</Item>
    </Section>
  </ListBox>
);
export const WithDisabledOptions: Story<ValenceListBoxProps<object>> = (
  args
) => (
  <ListBox
    flexGrow={1}
    aria-labelledby="label"
    items={withSection}
    disabledKeys={["Kangaroo", "Ross"]}
  >
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </ListBox>
);
export const StaticWithDisabledOptions: Story<ValenceListBoxProps<object>> = (
  args
) => (
  <ListBox flexGrow={1} aria-labelledby="label" disabledKeys={["3", "5"]}>
    <Section title="Section 1">
      <Item key="1">One</Item>
      <Item key="2">Two</Item>
      <Item key="3">Three</Item>
    </Section>
    <Section title="Section 2">
      <Item key="4">Four</Item>
      <Item key="5">Five</Item>
      <Item key="6">Six</Item>
      <Item key="7">Seven</Item>
    </Section>
  </ListBox>
);
export const MultipleSelection: Story<ValenceListBoxProps<object>> = (args) => (
  <ListBox
    flexGrow={1}
    aria-labelledby="label"
    items={withSection}
    onSelectionChange={action("onSelectionChange")}
    selectionMode="multiple"
    defaultSelectedKeys={["Aardvark", "Snake"]}
    disabledKeys={["Kangaroo", "Ross"]}
  >
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </ListBox>
);
export const MultipleSelectionStatic: Story<ValenceListBoxProps<object>> = (
  args
) => (
  <ListBox
    flexGrow={1}
    aria-labelledby="label"
    onSelectionChange={action("onSelectionChange")}
    selectionMode="multiple"
    defaultSelectedKeys={["2", "5"]}
    disabledKeys={["1", "3"]}
  >
    <Section title="Section 1">
      <Item key="1">One</Item>
      <Item key="2">Two</Item>
      <Item key="3">Three</Item>
    </Section>
    <Section title="Section 2">
      <Item key="4">Four</Item>
      <Item key="5">Five</Item>
      <Item key="6">Six</Item>
    </Section>
  </ListBox>
);
export const NoSelectionAllowed: Story<ValenceListBoxProps<object>> = (
  args
) => (
  <ListBox flexGrow={1} aria-labelledby="label" items={withSection}>
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </ListBox>
);
export const NoSelectionAllowedStatic: Story<ValenceListBoxProps<object>> = (
  args
) => (
  <ListBox flexGrow={1} aria-labelledby="label">
    <Section title="Section 1">
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Section>
    <Section title="Section 2">
      <Item>Four</Item>
      <Item>Five</Item>
      <Item>Six</Item>
    </Section>
  </ListBox>
);
export const AutoFocusTrue: Story<ValenceListBoxProps<object>> = (
  args
) => (
  <ListBox flexGrow={1} aria-labelledby="label" items={withSection} autoFocus>
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </ListBox>
);
export const ListBoxWithKeyboardSelectionWrapping: Story<
  ValenceListBoxProps<object>
> = (args) => (
  <ListBox
    flexGrow={1}
    aria-labelledby="label"
    items={withSection}
    selectionMode="multiple"
    onSelectionChange={action("onSelectionChange")}
    shouldFocusWrap
  >
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </ListBox>
);
export const SemanticElementsStatic: Story<ValenceListBoxProps<object>> = (
  args
) => (
  <ListBox
    flexGrow={1}
    aria-labelledby="label"
    selectionMode="multiple"
    onSelectionChange={action("onSelectionChange")}
  >
    <Section title="Section 1">
      <Item textValue="Copy">
        <Copy size="S" />
        <Text>Copy</Text>
      </Item>
      <Item textValue="Cut">
        <Cut size="S" />
        <Text>Cut</Text>
      </Item>
      <Item textValue="Paste">
        <Paste size="S" />
        <Text>Paste</Text>
      </Item>
    </Section>
    <Section title="Section 2">
      <Item textValue="Puppy">
        <AlignLeft size="S" />
        <Text>Puppy</Text>
        <Text slot="description">
          {" "}
          Puppy description super long as well geez{" "}
        </Text>
      </Item>
      <Item textValue="Doggo with really really really long long long text">
        <AlignCenter size="S" />
        <Text>Doggo with really really really long long long text</Text>
      </Item>
      <Item textValue="Floof">
        <AlignRight size="S" />
        <Text>Floof</Text>
      </Item>
      <Item>Basic Item</Item>
    </Section>
  </ListBox>
);
SemanticElementsStatic.storyName = "SemanticElements:Static";

export const SemanticElementsGenerativeMultipleSelection: Story<
  ValenceListBoxProps<object>
> = (args) => (
  <ListBox
    flexGrow={1}
    aria-labelledby="label"
    items={hardModeProgrammatic}
    onSelectionChange={action("onSelectionChange")}
    selectionMode="multiple"
  >
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item) => customOption(item)}
      </Section>
    )}
  </ListBox>
);
export const IsLoading: Story<ValenceListBoxProps<object>> = (args) => (
  <ListBox flexGrow={1} aria-labelledby="label" items={[]} isLoading>
    {(item) => <Item>{item.name}</Item>}
  </ListBox>
);
IsLoading.storyName = "IsLoading:Empty List";

export const IsLoadingMore: Story<ValenceListBoxProps<object>> = (args) => (
  <ListBox flexGrow={1} aria-labelledby="label" items={flatOptions} isLoading>
    {(item) => <Item key={item.name}>{item.name}</Item>}
  </ListBox>
);
IsLoadingMore.storyName = "IsLoading:Populated List";

SemanticElementsGenerativeMultipleSelection.storyName = "SemanticElements:GenerativeMultipleSelection";

//export const AsyncLoading: Story<ValenceListBoxProps<object>> = (args) => (  storiesOf("ListBox", module) .addDecorator((story) => ( <div style={{ display: "flex", flexDirection: "column" }}><Label id="label">Choose an item</Label><div style={{ display: "flex", minWidth: "200px", background: "var(--spectrum-global-color-gray-50)", border: "1px solid lightgray", }} >{story()}</div></div> );

export const AsyncLoadingResizable: Story<ValenceListBoxProps<object>> = (
  args
) => (
  // need display flex or set a height on the listbox so it doesn't keep getting more elements
  <div
    style={{
      display: "flex",
      height: "200px",
      flexGrow: 1,
      minWidth: "200px",
      padding: "10px",
      resize: "both",
      overflow: "auto",
    }}
  >
    <AsyncLoadingExample />
  </div>
);

AsyncLoadingResizable.storyName = "AsyncLoading:Resizable";
