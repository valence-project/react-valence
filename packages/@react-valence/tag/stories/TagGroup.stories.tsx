import { action, Story } from "@ladle/react";
import Audio from "@valence-icons/ui/Music2Fill";
import { Icon } from "@react-valence/icon";
import { Item, TagGroup } from "../src";
import React from "react";
import { Text } from "@react-valence/text";

import { ValenceTagGroupProps } from "@types-valence/tag";

const TagGroupRender: Story<ValenceTagGroupProps<object>> = (args) => {
  return (
    <TagGroup {...args} aria-label="tag group">
      <Item key="1">Cool Tag 1</Item>
      <Item key="2">Cool Tag 2</Item>
      <Item key="3">Cool Tag 3</Item>
    </TagGroup>
  );
};

const TagGroupIconsRender: Story<ValenceTagGroupProps<object>> = (args) => {
  return (
    <TagGroup
      aria-label="tag group"
      items={[
        { key: "1", label: "Cool Tag 1" },
        { key: "2", label: "Cool Tag 2" },
      ]}
    >
      {(item) => (
        <Item key={item.key} textValue={item.label}>
          <Icon>
            <Audio />
          </Icon>
          <Text>{item.label}</Text>
        </Item>
      )}
    </TagGroup>
  );
};

export const Default = TagGroupRender.bind({});
Default.storyName = "Default";

export const DisabledKeys = TagGroupRender.bind({});
DisabledKeys.storyName = "DisabledKeys";
DisabledKeys.args = {
  disabledKeys: ["1"],
};

export const Disabled = TagGroupRender.bind({});
Disabled.storyName = "Disabled";
Disabled.args = {
  isDisabled: true,
};

export const WithIcons = TagGroupIconsRender.bind({});
WithIcons.storyName = "With Icons";
WithIcons.args = {};

export const Removeable = TagGroupRender.bind({});
Removeable.storyName = "Removeable";
Removeable.args = {
  isRemovable: true,
  onRemove: action("onRemove"),
};

export const RemoveableDisabledKeys = TagGroupRender.bind({});
RemoveableDisabledKeys.storyName = "RemoveableDisabledKeys";
RemoveableDisabledKeys.args = {
  disabledKeys: ["2"],
  isRemovable: true,
  onRemove: action("onRemove"),
};

const WrappingRender: Story<ValenceTagGroupProps<object>> = (args) => {
  return (
    <div style={{ width: "200px" }}>
      <TagGroup aria-label="tag group">
        <Item key="1">Cool Tag 1</Item>
        <Item key="2">Another cool tag</Item>
        <Item key="3">This tag</Item>
        <Item key="4">What tag?</Item>
        <Item key="5">This tag is cool too</Item>
        <Item key="6">Shy tag</Item>
      </TagGroup>
    </div>
  );
};

export const Wrapping = WrappingRender.bind({});
Wrapping.storyName = "Wrapping";

const TruncationRender: Story<ValenceTagGroupProps<object>> = (args) => {
  return (
    <div style={{ width: "100px" }}>
      <TagGroup aria-label="tag group">
        <Item key="1">Cool Tag 1 with a really long label</Item>
        <Item key="2">Another long cool tag label</Item>
        <Item key="3">This tag</Item>
      </TagGroup>
    </div>
  );
};

export const Truncation = TruncationRender.bind({});
Truncation.storyName = "Truncation";

const ItemPropsRender: Story<ValenceTagGroupProps<object>> = (args) => {
  return (
    <TagGroup
      aria-label="tag group"
      items={[
        { key: "1", label: "Cool Tag 1" },
        { key: "2", label: "Cool Tag 2" },
      ]}
    >
      {(item) => (
        <Item key={item.key} textValue={item.label}>
          <Text>{item.label}</Text>
        </Item>
      )}
    </TagGroup>
  );
};

export const ItemProps = ItemPropsRender.bind({});
ItemProps.storyName = "ItemProps";

const AnnouncingRender: Story<ValenceTagGroupProps<object>> = (args) => {
  let tags = ["Testing tag", "Other testing label"];

  return (
    <React.Fragment>
      <TagGroup aria-label="tag group">
        {tags.map((t, index) => (
          <Item key={index}>{t}</Item>
        ))}
      </TagGroup>
    </React.Fragment>
  );
};

export const Announcing = AnnouncingRender.bind({});
Announcing.storyName = "Announcing";
