import { Story } from "@ladle/react";
import { Picker, Item, Section } from "@react-valence/picker";
import { Text } from "@react-valence/text";
import React, {useState} from "react";

import { useAsyncList } from "@react-stately/data";

import { ActionButton } from "@react-valence/button";

import { ValencePickerProps } from "@types-valence/select";

import Copy from "@valence-icons/ui/FileCopyFill";
import Cut from "@valence-icons/ui/ScissorsCutFill";
import Paste from "@valence-icons/ui/ClipboardFill";

import { View } from "@react-valence/view";

import { Flex } from "@react-valence/layout";

import Lightbulb from "@valence-icons/ui/LightbulbFill";
import Seedling from "@valence-icons/ui/SeedlingFill";
import Speed from "@valence-icons/ui/SpeedFill";

export default {
  title: "Picker",
  component: Picker,
};

let flatOptions = [
  { id: 1, name: "Aardvark" },
  { id: 2, name: "Kangaroo" },
  { id: 3, name: "Snake" },
  { id: 4, name: "Danni" },
  { id: 5, name: "Devon" },
  { id: 6, name: "Ross" },
  { id: 7, name: "Puppy" },
  { id: 8, name: "Doggo" },
  { id: 9, name: "Floof" },
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

export const Default: Story<ValencePickerProps<object>> = (args) => (
  <Picker {...args}>
    <Item key="Short">Short</Item>
    <Item key="Normal">Normal</Item>
    <Item key="This item is very long and word wraps poorly">
      This item is very long and word wraps poorly
    </Item>
  </Picker>
);
Default.args = {
  label: "Pick An Option",
  isOpen: true,
  isLoading: true,
  validationState: "invalid",
};

export const WithSection: Story<ValencePickerProps<object>> = (args) => (
  <Picker {...args}>
    <Section title="Animals">
      <Item key="Aardvark">Aardvark</Item>
      <Item key="Kangaroo">Kangaroo</Item>
      <Item key="Snake">Snake</Item>
    </Section>
    <Section title="People">
      <Item key="Danni">Danni</Item>
      <Item key="Devon">Devon</Item>
      <Item key="Ross">Ross</Item>
    </Section>
  </Picker>
);
WithSection.args = {
  label: "Pick An Option",
  isLoading: true,
  validationState: "invalid",
};

export const Dynamic: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" items={flatOptions} onSelectionChange={console.log}>
    {(item) => <Item>{item.name}</Item>}
  </Picker>
);
Dynamic.args = {
  label: "Pick An Option",
  isLoading: true,
  validationState: "invalid",
};

export const DynamicWithSection: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" items={withSection} onSelectionChange={console.log}>
    {(item) => (
      <Section key={item.name} items={item.children} title={item.name}>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Section>
    )}
  </Picker>
);
DynamicWithSection.args = {
  label: "Pick An Option",
  isLoading: true,
  validationState: "invalid",
};

export const Disabled: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" isDisabled onSelectionChange={console.log}>
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);
Disabled.args = {
  label: "Pick An Option",
  isLoading: true,
  validationState: "invalid",
};

export const DisabledSelectedKey: Story<ValencePickerProps<object>> = (
  args
) => (
  <Picker
    label="Test"
    isDisabled
    selectedKey="One"
    onSelectionChange={console.log}
  >
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);

export const LabelAlignEnd: Story<ValencePickerProps<object>> = (args) => (
  <Picker
    direction="top"
    label="Test"
    labelAlign="end"
    onSelectionChange={console.log}
  >
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);

export const LabelPositionSide: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" labelPosition="side" onSelectionChange={console.log}>
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);

export const Required: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" isRequired onSelectionChange={console.log}>
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);

export const RequiredIndicatorLabel: Story<ValencePickerProps<object>> = (
  args
) => (
  <Picker
    label="Test"
    isRequired
    necessityIndicator="label"
    onSelectionChange={console.log}
  >
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);

export const OptionalIndicatorLabel: Story<ValencePickerProps<object>> = (
  args
) => (
  <Picker
    label="Test"
    necessityIndicator="label"
    onSelectionChange={console.log}
  >
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);

export const ValidationStateValid: Story<ValencePickerProps<object>> = (
  args
) => (
  <Picker
    label="Test"
    validationState="invalid"
    onSelectionChange={console.log}
  >
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);

export const Quiet: Story<ValencePickerProps<object>> = (args) => (
  <Picker isQuiet label="Test" onSelectionChange={console.log}>
    <Item key="100">One hundred</Item>
    <Item key="2012">Two thousand and twelve</Item>
    <Item key="3">Three</Item>
  </Picker>
);

export const QuietDisabled: Story<ValencePickerProps<object>> = (args) => (
  <Picker isQuiet isDisabled label="Test" onSelectionChange={console.log}>
    <Item key="100">One hundred</Item>
    <Item key="2012">Two thousand and twelve</Item>
    <Item key="3">Three</Item>
  </Picker>
);

export const QuietLabelAlignEnd: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" isQuiet labelAlign="end" onSelectionChange={console.log}>
    <Item key="One">One</Item>
    <Item key="Two dollary-doos">Two dollary-doos</Item>
    <Item key="Three">Three</Item>
  </Picker>
);

export const QuietLabelPositionSide: Story<ValencePickerProps<object>> = (
  args
) => (
  <Picker
    label="Test"
    isQuiet
    labelPosition="side"
    onSelectionChange={console.log}
  >
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);

export const QuietRequired: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" isQuiet isRequired onSelectionChange={console.log}>
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);

export const QuietRequiredNecessityIndicatorLabel: Story<
  ValencePickerProps<object>
> = (args) => (
  <Picker
    label="Test"
    isQuiet
    isRequired
    necessityIndicator="label"
    onSelectionChange={console.log}
  >
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);

export const QuietOptionalNecessityIndicatorLabel: Story<
  ValencePickerProps<object>
> = (args) => (
  <Picker
    label="Test"
    isQuiet
    necessityIndicator="label"
    onSelectionChange={console.log}
  >
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);

export const IsQuietValidationStateInvalid: Story<
  ValencePickerProps<object>
> = (args) => (
  <Picker
    label="Test"
    isQuiet
    validationState="invalid"
    onSelectionChange={console.log}
  >
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);
export const ComplexItems: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" onSelectionChange={console.log} isOpen={true}>
    <Section title="Section 1">
    <Item textValue="Cut">
        <Cut />
        <Text>Cut</Text>
      </Item>
      <Item textValue="Copy">
        <Copy />
        <Text>Copy</Text>
      </Item>
      <Item textValue="Paste">
        <Paste />
        <Text>Paste</Text>
      </Item>
    </Section>
    <Section title="Section 2">
      <Item textValue="Puppy">
        <Speed />
        <Text>The Hare</Text>
        <Text slot="description">
        The Hare was much amused at the idea of running a race with the Tortoise.
        </Text>
      </Item>
      <Item textValue="Soon he found life in the pasture very dull">
        <Seedling />
        <Text>Soon he found life in the pasture very dull</Text>
      </Item>
      <Item textValue="Floof">
        <Lightbulb />
        <Text>Stork</Text>
      </Item>
    </Section>
  </Picker>
);
export const LongItemText: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" onSelectionChange={console.log}>
    <Item key="short">One</Item>
    <Item key="long">your text here long long long long</Item>
    <Item key="underscores">your_text_here_long_long_long_long</Item>
    <Item key="hyphens">your-text-here-long-long-long-long</Item>
    <Item key="singleWord">supercalifragilisticexpialidocious</Item>
    <Item key="always">This item is very long and word wraps poorly</Item>
  </Picker>
);
export const FalsyItemKey: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" onSelectionChange={console.log}>
    <Item key="">None</Item>
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);
export const NoVisibleLabel: Story<ValencePickerProps<object>> = (args) => (
  <Picker aria-label="Test" onSelectionChange={console.log}>
    <Item>One</Item>
    <Item>Two</Item>
    <Item>Three</Item>
  </Picker>
);
export const WithDescription: Story<ValencePickerProps<object>> = (args) => (
  <Picker
    label="Test"
    description="Please select an item."
    onSelectionChange={console.log}
  >
    <Item>One</Item>
    <Item>Two</Item>
    <Item>Three</Item>
  </Picker>
);
export const WithErrorMessage: Story<ValencePickerProps<object>> = (args) => (
  <Picker
    label="Test"
    errorMessage="Please select a valid item."
    validationState="invalid"
    onSelectionChange={console.log}
  >
    <Item>One</Item>
    <Item>Two</Item>
    <Item>Three</Item>
  </Picker>
);
export const IsQuietNoVisibleLabel: Story<ValencePickerProps<object>> = (
  args
) => (
  <Picker aria-label="Test" isQuiet onSelectionChange={console.log}>
    <Item>One</Item>
    <Item>Two</Item>
    <Item>Three</Item>
  </Picker>
);
export const IsQuietAlignEnd: Story<ValencePickerProps<object>> = (args) => (
  <Picker aria-label="Test" isQuiet align="end" onSelectionChange={console.log}>
    <Item>One</Item>
    <Item>Two</Item>
    <Item>Three</Item>
  </Picker>
);
export const CustomWidths: Story<ValencePickerProps<object>> = (args) => (
  <Flex direction="column">
    <Picker label="Test" width="size-1200" onSelectionChange={console.log}>
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Picker>
    <Picker label="Test" width="size-6000" onSelectionChange={console.log}>
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Picker>
  </Flex>
);
export const CustomWidthsLabelPositionSide: Story<
  ValencePickerProps<object>
> = (args) => (
  <Flex direction="column">
    <Picker
      label="Test"
      width="size-1200"
      labelPosition="side"
      onSelectionChange={console.log}
    >
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Picker>
    <Picker
      label="Test"
      width="size-6000"
      labelPosition="side"
      onSelectionChange={console.log}
    >
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Picker>
  </Flex>
);
export const CustomMenuWidths: Story<ValencePickerProps<object>> = (args) => (
  <Flex direction="column">
    <Picker label="Test" menuWidth="size-1000" onSelectionChange={console.log}>
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Picker>
    <Picker label="Test" menuWidth="size-6000" onSelectionChange={console.log}>
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Picker>
  </Flex>
);
export const CustomMenuWidthsIsQuiet: Story<ValencePickerProps<object>> = (
  args
) => (
  <Flex direction="column">
    <Picker
      label="Test"
      menuWidth="size-400"
      isQuiet
      onSelectionChange={console.log}
    >
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Picker>
    <Picker
      label="Test"
      menuWidth="size-6000"
      isQuiet
      onSelectionChange={console.log}
    >
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Picker>
  </Flex>
);
export const CustomMenuWidthAlignEnd: Story<ValencePickerProps<object>> = (
  args
) => (
  <Picker
    label="Test"
    menuWidth="size-6000"
    align="end"
    onSelectionChange={console.log}
  >
    <Item>One</Item>
    <Item>Two</Item>
    <Item>Three</Item>
  </Picker>
);
export const IsOpenControlled: Story<ValencePickerProps<object>> = (args) => (
  <Picker
    label="Test"
    isOpen
    onOpenChange={console.log}
    onSelectionChange={console.log}
  >
    <Item><Cut/><Text>Cut</Text></Item>
    <Item><Copy/><Text>Copy</Text></Item>
    <Item><Paste/><Text>Paste</Text></Item>
  </Picker>
);
export const DefaultOpenUncontrolled: Story<ValencePickerProps<object>> = (
  args
) => (
  <Picker
    label="Test"
    defaultOpen
    onOpenChange={console.log}
    onSelectionChange={console.log}
  >
    <Item>One</Item>
    <Item>Two</Item>
    <Item>Three</Item>
  </Picker>
);
export const SelectedKeyControlled: Story<ValencePickerProps<object>> = (
  args
) => (
  <Picker label="Test" selectedKey="One" onSelectionChange={console.log}>
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);
export const DefaultSelectedKeyUncontrolled: Story<
  ValencePickerProps<object>
> = (args) => (
  <Picker label="Test" defaultSelectedKey="One" onSelectionChange={console.log}>
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);
export const PickerClosesOnBlur: Story<ValencePickerProps<object>> = (args) => (
  <>
    <div style={{ display: "flex", width: "auto", margin: "250px 0" }}>
      <label htmlFor="focus-before">Focus before</label>
      <input id="focus-before" />
      <Picker
        label="Test"
        defaultSelectedKey="One"
        onSelectionChange={console.log}
      >
        <Item key="One">One</Item>
        <Item key="Two">Two</Item>
        <Item key="Three">Three</Item>
      </Picker>
      <label htmlFor="focus-after">Focus after</label>
      <input id="focus-after" />
    </div>
  </>
);
export const IsLoading: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" isLoading items={[]}>
    {(item) => <Item>{item.name}</Item>}
  </Picker>
);
export const IsLoadingIsQuiet: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" isLoading isQuiet items={[]}>
    {(item) => <Item>{item.name}</Item>}
  </Picker>
);
export const IsLoadingMore: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" isLoading items={flatOptions}>
    {(item) => <Item>{item.name}</Item>}
  </Picker>
);
export const Focus: Story<ValencePickerProps<object>> = (args) => (
  <div style={{ display: "flex", width: "auto", margin: "250px 0" }}>
    <label htmlFor="focus-before">Focus before</label>
    <input id="focus-before" />
    <Picker
      label="Focus-Test"
      items={flatOptions}
      autoFocus
      onFocus={console.log}
      onBlur={console.log}
      onKeyDown={console.log}
      onKeyUp={console.log}
    >
      {(item) => <Item>{item.name}</Item>}
    </Picker>
    <label htmlFor="focus-after">Focus after</label>
    <input id="focus-after" />
  </div>
);

export const AutoFocus: Story<ValencePickerProps<object>> = (args) => (
  <Picker label="Test" autoFocus>
    <Item key="One">One</Item>
    <Item key="Two">Two</Item>
    <Item key="Three">Three</Item>
  </Picker>
);

export const ScrollingContainer: Story<ValencePickerProps<object>> = (args) => (
  <View width="300px" height="size-500" overflow="auto">
    <View width="500px">
      <Picker label="Test" autoFocus>
        <Item key="One">One</Item>
        <Item key="Two">Two</Item>
        <Item key="Three">Three</Item>
      </Picker>
    </View>
  </View>
);

export const AsyncLoadingExample: Story<ValencePickerProps<object>> = (args) => {

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
      // The API is too fast sometimes, so make it take longer so we can see the spinner
      await new Promise((resolve) => setTimeout(resolve, cursor ? 500 : 1000));
      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  return (
    <Picker
      label="Pick a Pokemon"
      items={list.items}
      isLoading={list.isLoading}
      onLoadMore={list.loadMore}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </Picker>
  );
}


export const Resize: Story<ValencePickerProps<object>> = (args) => {
  const [state, setState] = useState(true);

  return (
    <Flex direction="column" gap="size-200" alignItems="start">
      <div style={{ width: state ? "200px" : "300px" }}>
        <Picker label="Choose A" width="100%">
          <Item key="A1">A1</Item>
          <Item key="A2">A2</Item>
          <Item key="A3">A3</Item>
        </Picker>
      </div>
      <ActionButton onPress={() => setState(!state)}>Toggle size</ActionButton>
    </Flex>
  );
}
