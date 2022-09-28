import { action, Story } from "@ladle/react";
import { ActionGroup } from "@react-valence/actiongroup";
import { Heading, Text } from "@react-valence/text";
import { Flex } from "@react-valence/layout";
import Bookmark from "@valence-icons/ui/Bookmark2Fill";
import { Button } from "@react-valence/button";
import { ButtonGroup } from "@react-valence/buttongroup";
import Calendar from "@valence-icons/ui/CalendarFill";
import Dashboard from "@valence-icons/ui/DashboardFill";
import { Item, TabList, TabPanels, Tabs } from "..";
import { Picker } from "@react-valence/picker";
import React, { ReactNode, useState } from "react";
import { TextField } from "@react-valence/textfield";

import { ValenceTabsProps } from "@types-valence/tabs";

const TabsRender: Story<ValenceTabsProps<object>> = (props) => {
  let tags = ["Testing tag", "Other testing label"];

  return (
    <Tabs
      {...props}
      aria-label="Tab example"
      maxWidth={500}
      onSelectionChange={() => console.log("change")}
    >
      <TabList>
        <Item key="val1">Tab 1</Item>
        <Item key="val2">Tab 2</Item>
        <Item key="val3">Tab 3</Item>
        <Item key="val4">Tab 4</Item>
        <Item key="val5">Tab 5</Item>
      </TabList>
      <TabPanels>
        <Item key="val1">
          <Heading>Tab Body 1</Heading>
          <Text>
            Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
            Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat
            ex. Pariatur ullamco exercitation ea qui adipisicing. Id cupidatat
            aute id ut excepteur exercitation magna pariatur. Mollit irure irure
            reprehenderit pariatur eiusmod proident Lorem deserunt duis cillum
            mollit. Do reprehenderit sit cupidatat quis laborum in do culpa nisi
            ipsum. Velit aliquip commodo ea ipsum incididunt culpa nostrud
            deserunt incididunt exercitation. In quis proident sit ad dolore
            tempor. Eiusmod pariatur quis commodo labore cupidatat cillum enim
            eiusmod voluptate laborum culpa. Laborum cupidatat incididunt velit
            voluptate incididunt occaecat quis do. Consequat adipisicing irure
            Lorem commodo officia sint id. Velit sit magna aliquip eiusmod non
            id deserunt. Magna veniam ad consequat dolor cupidatat esse enim
            Lorem ullamco. Anim excepteur consectetur id in. Mollit laboris duis
            labore enim duis esse reprehenderit.
          </Text>
        </Item>
        <Item key="val2">
          <Heading>Tab Body 2</Heading>
          <Text>
            Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
            Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat
            ex. Pariatur ullamco exercitation ea qui adipisicing. Id cupidatat
            aute id ut excepteur exercitation magna pariatur. Mollit irure irure
            reprehenderit pariatur eiusmod proident Lorem deserunt duis cillum
            mollit. Do reprehenderit sit cupidatat quis laborum in do culpa nisi
            ipsum. Velit aliquip commodo ea ipsum incididunt culpa nostrud
            deserunt incididunt exercitation. In quis proident sit ad dolore
            tempor. Eiusmod pariatur quis commodo labore cupidatat cillum enim
            eiusmod voluptate laborum culpa. Laborum cupidatat incididunt velit
            voluptate incididunt occaecat quis do. Consequat adipisicing irure
            Lorem commodo officia sint id. Velit sit magna aliquip eiusmod non
            id deserunt. Magna veniam ad consequat dolor cupidatat esse enim
            Lorem ullamco. Anim excepteur consectetur id in. Mollit laboris duis
            labore enim duis esse reprehenderit.
          </Text>
        </Item>
        <Item key="val3">
          <Heading>Tab Body 3</Heading>
          <Text>
            Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
            Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat
            ex. Pariatur ullamco exercitation ea qui adipisicing. Id cupidatat
            aute id ut excepteur exercitation magna pariatur. Mollit irure irure
            reprehenderit pariatur eiusmod proident Lorem deserunt duis cillum
            mollit. Do reprehenderit sit cupidatat quis laborum in do culpa nisi
            ipsum. Velit aliquip commodo ea ipsum incididunt culpa nostrud
            deserunt incididunt exercitation. In quis proident sit ad dolore
            tempor. Eiusmod pariatur quis commodo labore cupidatat cillum enim
            eiusmod voluptate laborum culpa. Laborum cupidatat incididunt velit
            voluptate incididunt occaecat quis do. Consequat adipisicing irure
            Lorem commodo officia sint id. Velit sit magna aliquip eiusmod non
            id deserunt. Magna veniam ad consequat dolor cupidatat esse enim
            Lorem ullamco. Anim excepteur consectetur id in. Mollit laboris duis
            labore enim duis esse reprehenderit.
          </Text>
        </Item>
        <Item key="val4">
          <Heading>Tab Body 4</Heading>
          <Text>
            Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
            Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat
            ex. Pariatur ullamco exercitation ea qui adipisicing. Id cupidatat
            aute id ut excepteur exercitation magna pariatur. Mollit irure irure
            reprehenderit pariatur eiusmod proident Lorem deserunt duis cillum
            mollit. Do reprehenderit sit cupidatat quis laborum in do culpa nisi
            ipsum. Velit aliquip commodo ea ipsum incididunt culpa nostrud
            deserunt incididunt exercitation. In quis proident sit ad dolore
            tempor. Eiusmod pariatur quis commodo labore cupidatat cillum enim
            eiusmod voluptate laborum culpa. Laborum cupidatat incididunt velit
            voluptate incididunt occaecat quis do. Consequat adipisicing irure
            Lorem commodo officia sint id. Velit sit magna aliquip eiusmod non
            id deserunt. Magna veniam ad consequat dolor cupidatat esse enim
            Lorem ullamco. Anim excepteur consectetur id in. Mollit laboris duis
            labore enim duis esse reprehenderit.
          </Text>
        </Item>
        <Item key="val5">
          <Heading>Tab Body 5</Heading>
          <Text>
            Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
            Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat
            ex. Pariatur ullamco exercitation ea qui adipisicing. Id cupidatat
            aute id ut excepteur exercitation magna pariatur. Mollit irure irure
            reprehenderit pariatur eiusmod proident Lorem deserunt duis cillum
            mollit. Do reprehenderit sit cupidatat quis laborum in do culpa nisi
            ipsum. Velit aliquip commodo ea ipsum incididunt culpa nostrud
            deserunt incididunt exercitation. In quis proident sit ad dolore
            tempor. Eiusmod pariatur quis commodo labore cupidatat cillum enim
            eiusmod voluptate laborum culpa. Laborum cupidatat incididunt velit
            voluptate incididunt occaecat quis do. Consequat adipisicing irure
            Lorem commodo officia sint id. Velit sit magna aliquip eiusmod non
            id deserunt. Magna veniam ad consequat dolor cupidatat esse enim
            Lorem ullamco. Anim excepteur consectetur id in. Mollit laboris duis
            labore enim duis esse reprehenderit.
          </Text>
        </Item>
      </TabPanels>
    </Tabs>
  );
};

const TabsWithIconsRender: Story<ValenceTabsProps<object>> = (props) => {
  return (
    <Tabs
      {...props}
      aria-label="Tab example"
      maxWidth={500}
      onSelectionChange={() => console.log("log selection change")}
    >
      <TabList>
        <Item key="dashboard">
          <Dashboard />
          <Text>Dashboard</Text>
        </Item>
        <Item key="calendar">
          <Calendar />
          <Text>Calendar</Text>
        </Item>
        <Item key="bookmark">
          <Bookmark />
          <Text>Bookmark</Text>
        </Item>
      </TabList>
      <TabPanels>
        <Item key="dashboard">
          <Heading>Dashboard</Heading>
          <Text>
            Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
            Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat
            ex. Pariatur ullamco exercitation ea qui adipisicing. Id cupidatat
            aute id ut excepteur exercitation magna pariatur. Mollit irure irure
            reprehenderit pariatur eiusmod proident Lorem deserunt duis cillum
            mollit. Do reprehenderit sit cupidatat quis laborum in do culpa nisi
            ipsum. Velit aliquip commodo ea ipsum incididunt culpa nostrud
            deserunt incididunt exercitation. In quis proident sit ad dolore
            tempor. Eiusmod pariatur quis commodo labore cupidatat cillum enim
            eiusmod voluptate laborum culpa. Laborum cupidatat incididunt velit
            voluptate incididunt occaecat quis do. Consequat adipisicing irure
            Lorem commodo officia sint id. Velit sit magna aliquip eiusmod non
            id deserunt. Magna veniam ad consequat dolor cupidatat esse enim
            Lorem ullamco. Anim excepteur consectetur id in. Mollit laboris duis
            labore enim duis esse reprehenderit.
          </Text>
        </Item>
        <Item key="calendar">
          <Heading>Calendar</Heading>
          <Text>
            Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
            Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat
            ex. Pariatur ullamco exercitation ea qui adipisicing. Id cupidatat
            aute id ut excepteur exercitation magna pariatur. Mollit irure irure
            reprehenderit pariatur eiusmod proident Lorem deserunt duis cillum
            mollit. Do reprehenderit sit cupidatat quis laborum in do culpa nisi
            ipsum. Velit aliquip commodo ea ipsum incididunt culpa nostrud
            deserunt incididunt exercitation. In quis proident sit ad dolore
            tempor. Eiusmod pariatur quis commodo labore cupidatat cillum enim
            eiusmod voluptate laborum culpa. Laborum cupidatat incididunt velit
            voluptate incididunt occaecat quis do. Consequat adipisicing irure
            Lorem commodo officia sint id. Velit sit magna aliquip eiusmod non
            id deserunt. Magna veniam ad consequat dolor cupidatat esse enim
            Lorem ullamco. Anim excepteur consectetur id in. Mollit laboris duis
            labore enim duis esse reprehenderit.
          </Text>
        </Item>
        <Item key="bookmark">
          <Heading>Bookmark</Heading>
          <Text>
            Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
            Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat
            ex. Pariatur ullamco exercitation ea qui adipisicing. Id cupidatat
            aute id ut excepteur exercitation magna pariatur. Mollit irure irure
            reprehenderit pariatur eiusmod proident Lorem deserunt duis cillum
            mollit. Do reprehenderit sit cupidatat quis laborum in do culpa nisi
            ipsum. Velit aliquip commodo ea ipsum incididunt culpa nostrud
            deserunt incididunt exercitation. In quis proident sit ad dolore
            tempor. Eiusmod pariatur quis commodo labore cupidatat cillum enim
            eiusmod voluptate laborum culpa. Laborum cupidatat incididunt velit
            voluptate incididunt occaecat quis do. Consequat adipisicing irure
            Lorem commodo officia sint id. Velit sit magna aliquip eiusmod non
            id deserunt. Magna veniam ad consequat dolor cupidatat esse enim
            Lorem ullamco. Anim excepteur consectetur id in. Mollit laboris duis
            labore enim duis esse reprehenderit.
          </Text>
        </Item>
      </TabPanels>
    </Tabs>
  );
};

export const Default = TabsRender.bind({});
Default.storyName = "TextOnly:Default";

export const DefaultSelectedKey = TabsRender.bind({});
DefaultSelectedKey.storyName = "TextOnly:DefaultSelectedKey";
DefaultSelectedKey.args = { defaultSelectedKey: "val2" };

export const ControlledSelectedKey = TabsRender.bind({});
ControlledSelectedKey.storyName = "TextOnly:ControlledSelectedKey";
ControlledSelectedKey.args = { selectedKey: "val3" };

export const OrientationVertical = TabsRender.bind({});
OrientationVertical.storyName = "TextOnly:OrientationVertical";
OrientationVertical.args = { orientation: "vertical" };

export const OrientationVerticalCompact = TabsRender.bind({});
OrientationVerticalCompact.storyName = "TextOnly:OrientationVerticalCompact";
OrientationVerticalCompact.args = {
  orientation: "vertical",
  density: "compact",
};

export const Compact = TabsRender.bind({});
Compact.storyName = "TextOnly:Compact";
Compact.args = { density: "compact" };

export const CompactQuiet = TabsRender.bind({});
CompactQuiet.storyName = "TextOnly:CompactQuiet";
CompactQuiet.args = { density: "compact", isQuiet: true };

export const Quiet = TabsRender.bind({});
Quiet.storyName = "TextOnly:Quiet";
Quiet.args = { isQuiet: true };

export const Emphasized = TabsRender.bind({});
Emphasized.storyName = "TextOnly:Emphasized";
Emphasized.args = { isEmphasized: true };

export const EmphasizedQuietVertical = TabsRender.bind({});
EmphasizedQuietVertical.storyName = "TextOnly:EmphasizedQuietVertical";
EmphasizedQuietVertical.args = {
  isEmphasized: true,
  isQuiet: true,
  orientation: "vertical",
};

export const Disabled = TabsRender.bind({});
Disabled.storyName = "TextOnly:Disabled";
Disabled.args = { isDisabled: true };

export const DisabledKeys = TabsRender.bind({});
DisabledKeys.storyName = "TextOnly:DisabledKeys";
DisabledKeys.args = { disabledKeys: ["val1"] };

export const WithIconsDefault = TabsWithIconsRender.bind({});
WithIconsDefault.storyName = "WithIcons:Default";

export const WithIconsDefaultSelectedKey = TabsWithIconsRender.bind({});
WithIconsDefaultSelectedKey.storyName = "WithIcons:DefaultSelectedKey";
WithIconsDefaultSelectedKey.args = { defaultSelectedKey: "val2" };

export const WithIconsControlledSelectedKey = TabsWithIconsRender.bind({});
WithIconsControlledSelectedKey.storyName = "WithIcons:ControlledSelectedKey";
WithIconsControlledSelectedKey.args = { selectedKey: "val3" };

export const WithIconsOrientationVertical = TabsWithIconsRender.bind({});
WithIconsOrientationVertical.storyName = "WithIcons:OrientationVertical";
WithIconsOrientationVertical.args = { orientation: "vertical" };

export const WithIconsOrientationVerticalCompact = TabsWithIconsRender.bind({});
WithIconsOrientationVerticalCompact.storyName =
  "WithIcons:OrientationVerticalCompact";
WithIconsOrientationVerticalCompact.args = {
  orientation: "vertical",
  density: "compact",
};

export const WithIconsCompact = TabsWithIconsRender.bind({});
WithIconsCompact.storyName = "WithIcons:Compact";
WithIconsCompact.args = { density: "compact" };

export const WithIconsCompactQuiet = TabsWithIconsRender.bind({});
WithIconsCompactQuiet.storyName = "WithIcons:CompactQuiet";
WithIconsCompactQuiet.args = { density: "compact", isQuiet: true };

export const WithIconsQuiet = TabsWithIconsRender.bind({});
WithIconsQuiet.storyName = "WithIcons:Quiet";
WithIconsQuiet.args = { isQuiet: true };

export const WithIconsEmphasized = TabsWithIconsRender.bind({});
WithIconsEmphasized.storyName = "WithIcons:Emphasized";
WithIconsEmphasized.args = { isEmphasized: true };

export const WithIconsEmphasizedQuiet = TabsWithIconsRender.bind({});
WithIconsEmphasizedQuiet.storyName = "WithIcons:EmphasizedQuiet";
WithIconsEmphasizedQuiet.args = { isEmphasized: true, isQuiet: true };

const ResizeableRender: Story<ValenceTabsProps<object>> = (props) => {
  return (
    <div
      style={{
        minWidth: "100px",
        width: "300px",
        height: "400px",
        padding: "10px",
        resize: "horizontal",
        overflow: "auto",
        backgroundColor: "var(--spectrum-global-color-gray-50)",
      }}
    >
      <TabsRender />
    </div>
  );
};

export const Resizeable = ResizeableRender.bind({});
Resizeable.storyName = "TextOnly:Resizeable";

// Dynamic Tabs
interface DynamicTabItem {
  name: string;
  children: ReactNode;
  icon?: ReactNode;
}

let items = [
  { name: "Tab 1", children: "Tab Body 1", icon: <Dashboard size="S" /> },
  { name: "Tab 2", children: "Tab Body 2", icon: <Calendar size="S" /> },
  { name: "Tab 3", children: "Tab Body 3", icon: <Bookmark size="S" /> },
  { name: "Tab 4", children: "Tab Body 4", icon: <Dashboard size="S" /> },
  { name: "Tab 5", children: "Tab Body 5", icon: <Calendar size="S" /> },
  { name: "Tab 6", children: "Tab Body 6", icon: <Bookmark size="S" /> },
] as DynamicTabItem[];

function DynamicTabsRender(
  props: Omit<ValenceTabsProps<DynamicTabItem>, "children">
) {
  let [tabs, setTabs] = React.useState(items);
  let addTab = () => {
    let newTabs = [...tabs];
    newTabs.push({
      name: `Tab ${tabs.length + 1}`,
      children: `Tab Body ${tabs.length + 1}`,
    });

    setTabs(newTabs);
  };

  let removeTab = () => {
    let newTabs = [...tabs];
    newTabs.pop();
    setTabs(newTabs);
  };

  return (
    <div style={{ width: "80%" }}>
      <Tabs
        {...props}
        aria-label="Tab example"
        items={tabs}
        onSelectionChange={console.log}
      >
        <TabList>
          {(item: DynamicTabItem) => (
            <Item key={item.name}>
              {item.icon}
              <Text>{item.name}</Text>
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: DynamicTabItem) => (
            <Item key={item.name}>
              <Heading>{item.children}</Heading>
              <Text>
                Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
                Lorem est occaecat do magna nisi mollit ipsum sit adipisicing
                fugiat ex. Pariatur ullamco exercitation ea qui adipisicing. Id
                cupidatat aute id ut excepteur exercitation magna pariatur.
                Mollit irure irure reprehenderit pariatur eiusmod proident Lorem
                deserunt duis cillum mollit. Do reprehenderit sit cupidatat quis
                laborum in do culpa nisi ipsum. Velit aliquip commodo ea ipsum
                incididunt culpa nostrud deserunt incididunt exercitation. In
                quis proident sit ad dolore tempor. Eiusmod pariatur quis
                commodo labore cupidatat cillum enim eiusmod voluptate laborum
                culpa. Laborum cupidatat incididunt velit voluptate incididunt
                occaecat quis do. Consequat adipisicing irure Lorem commodo
                officia sint id. Velit sit magna aliquip eiusmod non id
                deserunt. Magna veniam ad consequat dolor cupidatat esse enim
                Lorem ullamco. Anim excepteur consectetur id in. Mollit laboris
                duis labore enim duis esse reprehenderit.
              </Text>
            </Item>
          )}
        </TabPanels>
      </Tabs>
      <ButtonGroup marginEnd="30px">
        <Button variant="secondary" onPress={() => addTab()}>
          <Text>Add Tab</Text>
        </Button>
        <Button variant="secondary" onPress={() => removeTab()}>
          <Text>Remove Tab</Text>
        </Button>
      </ButtonGroup>
    </div>
  );
}

export const DynamicTabsDefault = DynamicTabsRender.bind({});
DynamicTabsDefault.storyName = "DynamicTabs:Default";

export const DynamicTabsQuiet = DynamicTabsRender.bind({});
DynamicTabsQuiet.storyName = "DynamicTabs:Quiet";
DynamicTabsQuiet.args = { isQuiet: true };

export const DynamicTabsQuietCompact = DynamicTabsRender.bind({});
DynamicTabsQuietCompact.storyName = "DynamicTabs:QuietCompact";
DynamicTabsQuietCompact.args = { isQuiet: true, density: "compact" };

export const DynamicTabsCompact = DynamicTabsRender.bind({});
DynamicTabsCompact.storyName = "DynamicTabs:Compact";
DynamicTabsCompact.args = { density: "compact" };

export const DynamicTabsEmphasized = DynamicTabsRender.bind({});
DynamicTabsEmphasized.storyName = "DynamicTabs:Emphasized";
DynamicTabsEmphasized.args = { isEmpasized: true };

const OrientationFlipRender: Story<ValenceTabsProps<object>> = (props) => {
  let [flipOrientation, setFlipOrientation] = React.useState(true);

  return (
    <div style={{ width: "80%" }}>
      <Tabs
        {...props}
        aria-label="Tab example"
        items={items}
        onSelectionChange={console.log}
        orientation={flipOrientation ? "horizontal" : "vertical"}
      >
        <TabList>
          {(item: DynamicTabItem) => (
            <Item key={item.name}>
              {item.icon}
              <Text>{item.name}</Text>
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: DynamicTabItem) => (
            <Item key={item.name}>
              <Heading>{item.children}</Heading>
              <Text>
                Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
                Lorem est occaecat do magna nisi mollit ipsum sit adipisicing
                fugiat ex. Pariatur ullamco exercitation ea qui adipisicing. Id
                cupidatat aute id ut excepteur exercitation magna pariatur.
                Mollit irure irure reprehenderit pariatur eiusmod proident Lorem
                deserunt duis cillum mollit. Do reprehenderit sit cupidatat quis
                laborum in do culpa nisi ipsum. Velit aliquip commodo ea ipsum
                incididunt culpa nostrud deserunt incididunt exercitation. In
                quis proident sit ad dolore tempor. Eiusmod pariatur quis
                commodo labore cupidatat cillum enim eiusmod voluptate laborum
                culpa. Laborum cupidatat incididunt velit voluptate incididunt
                occaecat quis do. Consequat adipisicing irure Lorem commodo
                officia sint id. Velit sit magna aliquip eiusmod non id
                deserunt. Magna veniam ad consequat dolor cupidatat esse enim
                Lorem ullamco. Anim excepteur consectetur id in. Mollit laboris
                duis labore enim duis esse reprehenderit.
              </Text>
            </Item>
          )}
        </TabPanels>
      </Tabs>
      <Button
        variant="secondary"
        onPress={() => setFlipOrientation((state) => !state)}
      >
        <Text>Flip Orientation</Text>
      </Button>
    </div>
  );
};

export const OrientationFlip = OrientationFlipRender.bind({});
OrientationFlip.storyName = "OrientationFlip";
OrientationFlip.args = {};

const TabsInFlexRender: Story<ValenceTabsProps<object>> = (props) => {
  return (
    <div style={{ width: "80%" }}>
      <Flex
        minHeight={400}
        minWidth={400}
        UNSAFE_style={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "var(--spectrum-global-color-gray-800)",
          padding: "10px",
        }}
      >
        <Tabs>
          <TabList>
            <Item>Tab 1</Item>
            <Item>Tab 2</Item>
          </TabList>
          <TabPanels>
            <Item>Hello World</Item>
            <Item>Goodbye World</Item>
          </TabPanels>
        </Tabs>
      </Flex>
    </div>
  );
};

export const TabsInFlex = TabsInFlexRender.bind({});
TabsInFlex.storyName = "Testing:TabsInFlex";
TabsInFlex.args = {};

const TabSizeTransitionRender: Story<ValenceTabsProps<object>> = (props) => {
  return (
    <Tabs maxWidth={500}>
      <TabList>
        <Item>
          <Text>Tab 1 long long long name</Text>
        </Item>
        <Item>
          <Text>Tab 2</Text>
        </Item>
      </TabList>
      <TabPanels>
        <Item>Text</Item>
        <Item>Text 2</Item>
      </TabPanels>
    </Tabs>
  );
};

export const TabSizeTransition = TabSizeTransitionRender.bind({});
TabSizeTransition.storyName = "TabSizeTransition";
TabSizeTransition.args = {};

const DynamicTabsWithDecorationRender: Story<ValenceTabsProps<object>> = (
  props
) => {
  let [tabs, setTabs] = React.useState(items);
  let addTab = () => {
    let newTabs = [...tabs];
    newTabs.push({
      name: `Tab ${tabs.length + 1}`,
      children: `Tab Body ${tabs.length + 1}`,
    });

    setTabs(newTabs);
  };

  let removeTab = () => {
    if (tabs.length > 1) {
      let newTabs = [...tabs];
      newTabs.pop();
      setTabs(newTabs);
    }
  };

  return (
    <div style={{ width: "80%" }}>
      <Tabs
        {...props}
        aria-label="Tab example"
        items={tabs}
        onSelectionChange={console.log}
      >
        <Flex direction="row" alignItems="center">
          <TabList flex="1 1 auto" UNSAFE_style={{ overflow: "hidden" }}>
            {(item: DynamicTabItem) => (
              <Item key={item.name}>
                {item.icon}
                <Text>{item.name}</Text>
              </Item>
            )}
          </TabList>
          <Flex
            alignItems="center"
            justifyContent="end"
            flex="0 0 auto"
            alignSelf="stretch"
            UNSAFE_style={{
              borderBottom:
                "var(--spectrum-alias-border-size-thick) solid var(--spectrum-global-color-gray-200)",
            }}
          >
            <ActionGroup
              marginEnd="30px"
              disabledKeys={tabs.length === 1 ? ["remove"] : undefined}
              onAction={(val) => (val === "add" ? addTab() : removeTab())}
            >
              <Item key="add">
                <Text>Add Tab</Text>
              </Item>
              <Item key="remove">
                <Text>Remove Tab</Text>
              </Item>
            </ActionGroup>
          </Flex>
        </Flex>
        <TabPanels>
          {(item: DynamicTabItem) => (
            <Item key={item.name}>
              <Heading>{item.children}</Heading>
              <Text>
                Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
                Lorem est occaecat do magna nisi mollit ipsum sit adipisicing
                fugiat ex. Pariatur ullamco exercitation ea qui adipisicing. Id
                cupidatat aute id ut excepteur exercitation magna pariatur.
                Mollit irure irure reprehenderit pariatur eiusmod proident Lorem
                deserunt duis cillum mollit. Do reprehenderit sit cupidatat quis
                laborum in do culpa nisi ipsum. Velit aliquip commodo ea ipsum
                incididunt culpa nostrud deserunt incididunt exercitation. In
                quis proident sit ad dolore tempor. Eiusmod pariatur quis
                commodo labore cupidatat cillum enim eiusmod voluptate laborum
                culpa. Laborum cupidatat incididunt velit voluptate incididunt
                occaecat quis do. Consequat adipisicing irure Lorem commodo
                officia sint id. Velit sit magna aliquip eiusmod non id
                deserunt. Magna veniam ad consequat dolor cupidatat esse enim
                Lorem ullamco. Anim excepteur consectetur id in. Mollit laboris
                duis labore enim duis esse reprehenderit.
              </Text>
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export const TabWithFlexContainerBetween = DynamicTabsWithDecorationRender.bind(
  {}
);
TabWithFlexContainerBetween.storyName = "TabsWithFlexContainerBetween";
TabWithFlexContainerBetween.args = {};

const TabsBottomRender: Story<ValenceTabsProps<object>> = (props) => {
  return (
    <Tabs maxWidth={500}>
      <TabPanels height="size-1000">
        <Item>Text 1</Item>
        <Item>Text 2</Item>
      </TabPanels>
      <TabList>
        <Item>Tab 1</Item>
        <Item>Tab 2</Item>
      </TabList>
    </Tabs>
  );
};

export const TabsBottom = TabsBottomRender.bind({});
TabsBottom.storyName = "TabsBottom";
TabsBottom.args = {};

const TabsRightRender: Story<ValenceTabsProps<object>> = (props) => {
  return (
    <Tabs maxWidth={500} orientation="vertical">
      <TabPanels>
        <Item>Text 1</Item>
        <Item>Text 2</Item>
      </TabPanels>
      <TabList>
        <Item>Tab 1</Item>
        <Item>Tab 2</Item>
      </TabList>
    </Tabs>
  );
};

export const TabsRight = TabsRightRender.bind({});
TabsRight.storyName = "TabsRight";
TabsRight.args = {};

const FocusableInPanelRender: Story<ValenceTabsProps<object>> = (props) => {
  return (
    <Tabs maxWidth={500}>
      <TabList>
        <Item>Tab 1</Item>
        <Item>Tab 2</Item>
      </TabList>
      <TabPanels>
        <Item>
          <TextField label="Tab 1" />
        </Item>
        <Item>
          <TextField label="Tab 2" isDisabled />
        </Item>
      </TabPanels>
    </Tabs>
  );
};

export const FocusableElementInPanel = FocusableInPanelRender.bind({});
FocusableElementInPanel.storyName = "FocusableElementInPanel";
FocusableElementInPanel.args = {};

const ControlledTabRender: Story<ValenceTabsProps<object>> = (props) => {
    let [tab1Text, setTab1Text] = useState("");

    return (
      <Tabs maxWidth={500}>
        <TabList>
          <Item>Tab 1</Item>
          <Item>Tab 2</Item>
        </TabList>
        <TabPanels>
          <Item>
            <TextField label="Tab 1" value={tab1Text} onChange={setTab1Text} />
          </Item>
          <Item>
            <TextField label="Tab 2" />
          </Item>
        </TabPanels>
      </Tabs>
    );
};

export const ControlledTab = ControlledTabRender.bind({});
ControlledTab.storyName = "ControlledTab";
ControlledTab.args = {};

const ControlledSelectionRender: Story<ValenceTabsProps<object>> = (props) => {
  let [selectedKey, setSelectedKey] = useState<React.Key>("Tab 1");

  return (
    <div style={{ width: "80%" }}>
      <Picker
        label="Set selected tab"
        selectedKey={selectedKey}
        onSelectionChange={setSelectedKey}
        items={items}
      >
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Picker>
      <Tabs
        aria-label="Tab example"
        items={items}
        selectedKey={selectedKey}
        onSelectionChange={setSelectedKey}
      >
        <TabList>
          {(item: DynamicTabItem) => (
            <Item key={item.name}>
              {item.icon}
              <Text>{item.name}</Text>
            </Item>
          )}
        </TabList>
        <TabPanels>
          {(item: DynamicTabItem) => (
            <Item key={item.name}>
              <Heading>{item.children}</Heading>
              <Text>
                Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam
                Lorem est occaecat do magna nisi mollit ipsum sit adipisicing
                fugiat ex. Pariatur ullamco exercitation ea qui adipisicing. Id
                cupidatat aute id ut excepteur exercitation magna pariatur.
                Mollit irure irure reprehenderit pariatur eiusmod proident Lorem
                deserunt duis cillum mollit. Do reprehenderit sit cupidatat quis
                laborum in do culpa nisi ipsum. Velit aliquip commodo ea ipsum
                incididunt culpa nostrud deserunt incididunt exercitation. In
                quis proident sit ad dolore tempor. Eiusmod pariatur quis
                commodo labore cupidatat cillum enim eiusmod voluptate laborum
                culpa. Laborum cupidatat incididunt velit voluptate incididunt
                occaecat quis do. Consequat adipisicing irure Lorem commodo
                officia sint id. Velit sit magna aliquip eiusmod non id
                deserunt. Magna veniam ad consequat dolor cupidatat esse enim
                Lorem ullamco. Anim excepteur consectetur id in. Mollit laboris
                duis labore enim duis esse reprehenderit.
              </Text>
            </Item>
          )}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export const ControlledSelection = ControlledSelectionRender.bind({});
ControlledSelection.storyName = "ControlledSelection";
ControlledSelection.args = {};