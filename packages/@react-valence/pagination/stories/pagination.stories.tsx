import { action } from "@ladle/react";
import { Story as _Story } from "@ladle/react";

import { PaginationProps } from "@types-valence/pagination";
import { PaginationInput } from "@react-valence/pagination";

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
  title: "Pagination",
  component: PaginationInput
};

const AccordionRenderPropsTemplate: Story<PaginationProps> = (
  args
) => (
    <PaginationInput {...args}/>
);

export const Default = AccordionRenderPropsTemplate.bind({});
Default.storyName = "Default";
Default.args = { maxValue: "50", onChange: action("onChange") };