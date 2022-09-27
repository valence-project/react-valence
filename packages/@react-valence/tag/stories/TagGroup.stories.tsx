import { action, Story } from "@ladle/react";
import Audio from "@valence-icons/ui/RobotFill";
import { Icon } from "@react-valence/icon";
import { Item, TagGroup } from "../src";
import React from "react";
import { Text } from "@react-valence/text";

storiesOf("TagGroup", module)
  .add("default", () => render({}))
  .add("disabledKeys", () =>
    render({
      disabledKeys: ["1"],
    })
  )
  .add("icons", () => (
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
  ))
  .add("isDisabled", () =>
    render({
      isDisabled: true,
    })
  )
  .add("onRemove", () =>
    render({
      isRemovable: true,
      onRemove: action("onRemove"),
    })
  )
  .add("onRemove + disabledKeys", () =>
    render({
      disabledKeys: ["2"],
      isRemovable: true,
      onRemove: action("onRemove"),
    })
  )
  .add("onRemove + isDisabled", () =>
    render({
      isDisabled: true,
      isRemovable: true,
      onRemove: action("onRemove"),
    })
  )
  .add("wrapping", () => (
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
  ))
  .add("truncation", () => (
    <div style={{ width: "100px" }}>
      <TagGroup aria-label="tag group">
        <Item key="1">Cool Tag 1 with a really long label</Item>
        <Item key="2">Another long cool tag label</Item>
        <Item key="3">This tag</Item>
      </TagGroup>
    </div>
  ))
  .add("using items prop", () => (
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
  ))
  .add("with announcing", () => <WithAnnouncing />);

function render(props: any = {}) {
  return (
    <TagGroup {...props} aria-label="tag group">
      <Item key="1">Cool Tag 1</Item>
      <Item key="2">Cool Tag 2</Item>
      <Item key="3">Cool Tag 3</Item>
    </TagGroup>
  );
}

function WithAnnouncing() {
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
}
