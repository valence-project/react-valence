import { Flex } from "@react-valence/layout";
import { Story as _Story } from "@ladle/react";
import { Switch } from "@react-valence/switch";
import {ValenceSwitchProps} from "@types-valence/switch";

type SwitchStory = any;

export default {
  title: "Switch",
  component: Switch,
}


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

const SwitchRenderPropsTemplate: Story<ValenceSwitchProps> = (
  args
) => (
  <Flex direction={'column'}>
    <Switch {...args}>Hello</Switch>
    <Switch {...args}>Hello</Switch>
    <Switch {...args} isEmphasized>Hello</Switch>
  </Flex>
);

export const Default = SwitchRenderPropsTemplate.bind({});
Default.storyName = "Default";
Default.args = {
};