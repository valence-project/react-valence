import { Story as _Story } from "@ladle/react";
import { Accordion, Item } from "@react-valence/accordion";
import React, { useState } from "react";
import { ValenceAccordionProps } from "@types-valence/accordion";
import { Well } from "@react-valence/well";

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
  title: "Accordion",
  component: Accordion
};

export const Default: Story<ValenceAccordionProps<ItemType>> = (
  args
) => (
  <Well>
    <Accordion {...args}>
        {(item) => (
          <Item key={item.key} title={item.title}>
            {item.key}
          </Item>
        )}
    </Accordion>
  </Well>
);

Default.storyName = "Default";
Default.args = {
  items: [
    { key: "files", title: "Your files" },
    { key: "shared", title: "Shared with you" },
    { key: "last", title: "Last item" },
  ],
};

const AccordionTemplate: Story<ValenceAccordionProps<ItemType>> = (args) => (
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

const ControlledAccordionTemplate: Story<ValenceAccordionProps<ItemType>> = (
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

export const DefaultExpandedKeys = AccordionTemplate.bind({});
DefaultExpandedKeys.storyName = "defaultExpandedKeys: files";
DefaultExpandedKeys.args = { defaultExpandedKeys: ["files"] };

export const ControlledExpandedKeys = ControlledAccordionTemplate.bind({});
ControlledExpandedKeys.storyName = "controlled ExpandedKeys";
ControlledExpandedKeys.args = {};

export const DisabledKeys = AccordionTemplate.bind({});
DisabledKeys.storyName = "disabledKeys: files, shared";
DisabledKeys.args = { disabledKeys: ["files", "shared"] };

export const DisabledDefaultExpandedKeys = AccordionTemplate.bind({});
DisabledDefaultExpandedKeys.storyName =
  "defaultExpandedKeys: files, disabledKeys: files, shared";
DisabledDefaultExpandedKeys.args = {
  defaultExpandedKeys: ["files"],
  disabledKeys: ["files", "shared"],
};
