import { action, Story } from "@ladle/react";
import { Button } from "@react-valence/button";
import { Flex } from "@react-valence/layout";
import { Link } from "@react-valence/link";
import { Heading, Text } from "@react-valence/text";
import { Content, Footer } from "@react-valence/view";
import { ContextualHelp } from "@react-valence/contextualhelp";
import React from "react";

import { ValenceHelpTextProps as _ValenceHelpTextProps } from "@types-valence/shared";

declare interface ValenceHelpTextProps extends _ValenceHelpTextProps {
  link: any;
  heading: any;
}

const helpText = () => (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
    tristique risus. In sit amet suscipit lorem.
  </Text>
);

const HelpTextRender: Story<ValenceHelpTextProps> = (props) => {
  let { heading, description, link, ...otherProps } = props;

  return (
    <ContextualHelp {...otherProps}>
      {heading && <Heading>{heading}</Heading>}
      {description && <Content>{description}</Content>}
      {link && <Footer>{link}</Footer>}
    </ContextualHelp>
  );
};

export const WithButtonRender: Story<ValenceHelpTextProps> = (props) => {
  let { heading, description, link, ...otherProps } = props;

  return (
    <Flex alignItems="center">
      <Button variant="primary" isDisabled>
        Create
      </Button>
      <ContextualHelp marginStart="size-100">
        <Heading>Help title</Heading>
        <Content>{helpText()}</Content>
      </ContextualHelp>
    </Flex>
  );
};

export const Default: Story<ValenceHelpTextProps> = HelpTextRender.bind({});
Default.args = { heading: "Help title", description: helpText() };

export const TypeInfo: Story<ValenceHelpTextProps> = HelpTextRender.bind({});
TypeInfo.args = {
  heading: "Help title",
  description: helpText(),
  variant: "info",
};

export const WithLink: Story<ValenceHelpTextProps> = HelpTextRender.bind({});
WithLink.args = {
  heading: "Help title",
  description: helpText(),
  link: <Link>Learn more</Link>,
};

export const TriggerEvents: Story<ValenceHelpTextProps> = HelpTextRender.bind(
  {}
);
TriggerEvents.args = {
  heading: "Help title",
  description: helpText(),
  onOpenChange: action("open change"),
};

export const PlacementBottom: Story<ValenceHelpTextProps> = HelpTextRender.bind(
  {}
);
PlacementBottom.args = {
  heading: "Help title",
  description: helpText(),
  placement: "bottom",
};

export const PlacementBottomStart: Story<ValenceHelpTextProps> =
  HelpTextRender.bind({});
PlacementBottomStart.args = {
  heading: "Help title",
  description: helpText(),
  placement: "bottom start",
};
