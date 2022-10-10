import { Story as _Story } from "@ladle/react";
import { Accordion, Item } from "@react-valence/accordion";
import React, { useState } from "react";
import { ValenceAccordionProps } from "@types-valence/accordion";
import { Text } from "@react-valence/text";

import { Section } from "@react-stately/collections";

type ItemType = {
  key: React.Key;
  title: string;
};

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
  title: "Accordion (Alpha)",
  component: Accordion,
};

export const Default: Story<ValenceAccordionProps<ItemType>> = (args) => (
  <Accordion {...args}>
    {(item) => (
      <Item key={item.key} title={item.title}>
        {item.key}
      </Item>
    )}
  </Accordion>
);
Default.storyName = "Default";
Default.args = {
  items: [
    { key: "files", title: "Your files" },
    { key: "shared", title: "Shared with you" },
    { key: "last", title: "Last item" },
  ],
};

export const DefaultExpandedKeys: Story<ValenceAccordionProps<ItemType>> = (
  args
) => {
  return (
    <Accordion {...args}>
      <Item key="files" title="Your files">
        files
      </Item>
      <Item key="shared" title="Shared with you">
        shared
      </Item>
      <Item key="last" title="Fox and Stork">
        At one time the Fox and the Stork were on visiting terms and seemed very
        good friends. So the Fox invited the Stork to dinner, and for a joke put
        nothing before her but some soup in a very shallow dish. This the Fox
        could easily lap up, but the Stork could only wet the end of her long
        bill in it, and left the meal as hungry as when she began. "I am sorry,"
        said the Fox, "the soup is not to your liking." "Pray do not apologise,"
        said the Stork. "I hope you will return this visit, and come and dine
        with me soon." So a day was appointed when the Fox should visit the
        Stork; but when they were seated at table all that was for their dinner
        was contained in a very long-necked jar with a narrow mouth, in which
        the Fox could not insert his snout, so all he could manage to do was to
        lick the outside of the jar. "I will not apologise for the dinner," said
        the Stork: "One bad turn deserves another."
      </Item>
    </Accordion>
  );
};
DefaultExpandedKeys.storyName = "defaultExpandedKeys: files";
DefaultExpandedKeys.args = { defaultExpandedKeys: ["files"] };

export const ControlledExpandedKeys: Story<ValenceAccordionProps<ItemType>> = (
  args
) => {
  let [openKeys, setOpenKeys] = useState<Set<React.Key>>(new Set(["files"]));
  return (
    <Accordion {...args} expandedKeys={openKeys} onExpandedChange={setOpenKeys}>
      <Item key="files" title="Your files">
        files
      </Item>
      <Item key="shared" title="Shared with you">
        shared
      </Item>
      <Item key="last" title="Last item">
        last
      </Item>
    </Accordion>
  );
};
ControlledExpandedKeys.storyName = "controlled ExpandedKeys";
ControlledExpandedKeys.args = {};

export const DisabledKeys: Story<ValenceAccordionProps<ItemType>> = (args) => {
  return (
    <Accordion {...args}>
      <Item key="files" title="Your files">
        files
      </Item>
      <Item key="shared" title="Shared with you">
        shared
      </Item>
      <Item key="last" title="Last item">
        last
      </Item>
    </Accordion>
  );
};
DisabledKeys.storyName = "disabledKeys: files, shared";
DisabledKeys.args = { disabledKeys: ["files", "shared"] };

export const DisabledDefaultExpandedKeys: Story<
  ValenceAccordionProps<ItemType>
> = (args) => {
  return (
    <Accordion {...args}>
      <Item key="files" title="Your files">
        files
      </Item>
      <Item key="shared" title="Shared with you">
        shared
      </Item>
      <Item key="last" title="Last item">
        last
      </Item>
    </Accordion>
  );
};
DisabledDefaultExpandedKeys.storyName =
  "defaultExpandedKeys: files, disabledKeys: files, shared";
DisabledDefaultExpandedKeys.args = {
  defaultExpandedKeys: ["files"],
  disabledKeys: ["files", "shared"],
};
