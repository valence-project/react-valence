import { Story as _Story } from "@ladle/react";
import { Link } from "@react-valence/link";
import React from "react";

import {ValenceLinkProps} from '@types-valence/link';

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
  title: "Link",
  component: Link
};

const ActionButtonRender: Story<ValenceLinkProps<ItemType>> = (
  args
) => (
    <Link variant={args.variant}>{args.label}</Link>
);

export const Default = ActionButtonRender.bind({});
Default.storyName = "Missing";
Default.args = {
  label: 'Missing',
  variant: 'primary'
};
