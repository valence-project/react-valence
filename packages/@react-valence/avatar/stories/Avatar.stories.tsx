import { Avatar } from "../src";
import { Story, StoryDecorator } from "@ladle/react";
import React from "react";
import { ValenceAvatarProps } from "@types-valence/avatar";
import { Provider} from "@react-valence/provider";
import { theme } from "@react-valence/theme-default";
import { Meta } from "@types-valence/shared";

const SRC_URL_1 = "https://i.imgur.com/wpc67V5.png";
const SRC_URL_2 = "https://i.imgur.com/wpc67V5.png";

export default {
  title: "Avatar",
  component: Avatar
};

const AvatarTemplate: Story<ValenceAvatarProps> = (args) => (
  <Avatar {...args} />
);

export const Default = AvatarTemplate.bind({});
Default.args = { src: SRC_URL_1 };
Default.storyName = "default";

export const Disabled = AvatarTemplate.bind({});
Disabled.args = { isDisabled: true, src: SRC_URL_1 };
Disabled.storyName = "isDisabled";

export const WithAltText = AvatarTemplate.bind({});
WithAltText.args = { alt: "Cartoon Character", src: SRC_URL_2 };
WithAltText.storyName = "with alt text";

export const CustomSize = AvatarTemplate.bind({});
CustomSize.args = { ...WithAltText.args, size: "150px" };
CustomSize.storyName = "with custom size";
