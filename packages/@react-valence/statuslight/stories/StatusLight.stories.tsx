import { StatusLight } from "@react-valence/statuslight";
import { Story } from "@ladle/react";
import { ValenceStatusLightProps } from "@types-valence/statuslight";

export default {
  title: "StatusLight",
  component: StatusLight
};

const StatusLightRender: Story<ValenceStatusLightProps> = (args) => (
  <StatusLight {...args} />
)

export const Default = StatusLightRender.bind({});
Default.storyName = "Default";
Default.argTypes = {
  variant: {
    options: [
      "positive",
      "negative",
      "notice",
      "info",
      "neutral",
      "celery",
      "chartreuse",
      "yellow",
      "magenta",
      "fuchsia",
      "purple",
      "indigo",
      "seafoam",
    ],
    control: { type: "select" },
  },
}
Default.args = {
  children: "Status of love",
  variant: 'positive'
};
