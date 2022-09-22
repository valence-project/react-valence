
import { StatusLight } from "@react-valence/statuslight";
import { Story as _Story } from "@ladle/react";
import {ValenceStatusLightProps} from "@types-valence/statuslight";

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
  title: "StatusLight",
  component: StatusLight
};

const AccordionRenderPropsTemplate: Story<ValenceStatusLightProps> = (
  args
) => (
    <StatusLight {...args}/>
);

export const Default = AccordionRenderPropsTemplate.bind({});
Default.storyName = "Default";
Default.args = {
  children: 'Status of love',
  variant: 'positive'
};