import { Story, ArgTypes } from "@ladle/react";
import { Link } from "@react-valence/link";
import React from "react";

import { ValenceLinkProps } from "@types-valence/link";

export default {
  title: "Link",
  component: Link,
};

const LinkRender: Story<ValenceLinkProps> = (args) => (
  <Link {...args}>{args.children}</Link>
);

export const Default: Story<ValenceLinkProps> = LinkRender.bind({});
Default.storyName = "Default";
Default.args = {
  children: "This is a React Valence Link",
};

export const Primary: Story<ValenceLinkProps> = LinkRender.bind({});
Primary.args = { ...Default.args, variant: "primary" };
Primary.storyName = "Variant:Primary";

export const Secondary: Story<ValenceLinkProps> = LinkRender.bind({});
Secondary.args = { ...Default.args, variant: "secondary" };
Secondary.storyName = "Variant:Secondary";

export const OverBackground: Story<ValenceLinkProps> = LinkRender.bind({});
OverBackground.storyName = "Variant:OverBackground";
OverBackground.args = { ...Default.args, variant: "overBackground" };
OverBackground.decorators = [
  (ComponentStory) => (
    <div
      style={{
        backgroundColor: "rgb(15, 121, 125)",
        color: "rgb(15, 121, 125)",
        padding: "15px 20px",
        borderRadius: "var(--sandia-input-border-radius)",
        display: "inline-block",
      }}
    >
      <ComponentStory />
    </div>
  ),
];

export const IsQuiet: Story<ValenceLinkProps> = LinkRender.bind({});
IsQuiet.args = { ...Default.args, isQuiet: true };
IsQuiet.storyName = "isQuiet:Default";

export const IsQuietSecondary: Story<ValenceLinkProps> = LinkRender.bind({});
IsQuietSecondary.args = { ...IsQuiet.args, ...Secondary.args };
IsQuietSecondary.storyName = "isQuiet:Secondary";

export const IsQuietOverBackground: Story<ValenceLinkProps> = LinkRender.bind({});
IsQuietOverBackground.args = { ...IsQuiet.args, variant: 'overBackground' };
IsQuietOverBackground.storyName = "isQuiet:OverBackground";
IsQuietOverBackground.decorators = OverBackground.decorators;

export const WithChildren: Story<ValenceLinkProps> = LinkRender.bind({});
WithChildren.args = {
  children: (
    <a href="//example.com" target="_self">
      This is a React Valence Link
    </a>
  ),
};
WithChildren.storyName = "Children:A";

export const OnClick: Story<ValenceLinkProps> = LinkRender.bind({});
OnClick.args = { ...Default.args };
OnClick.storyName = "Events:DeprecatedOnClick";
OnClick.argTypes = {
  onClick: {
    action: "deprecatedOnClick",
  },
} as ArgTypes & { onClick: any };
