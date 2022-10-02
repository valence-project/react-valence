import { action, Story } from "@ladle/react";
import { ActionButton } from "@react-valence/button/src";
import { Divider } from "../";
import Properties from "@valence-icons/ui/Settings2Fill";
import React from "react";
import Select from "@valence-icons/ui/SeedlingFill";

import { ValenceDividerProps } from "@types-valence/divider";

const RenderVertical: Story<ValenceDividerProps> = (props) => {
  return (
    <section style={{ display: "flex" }}>
      <ActionButton aria-label="Properties" isQuiet>
        <Properties />
      </ActionButton>
      <Divider orientation="vertical" {...props} />
      <ActionButton aria-label="Select" isQuiet>
        <Select />
      </ActionButton>
    </section>
  );
}

export const VerticalLarge: Story<ValenceDividerProps> = RenderVertical.bind({});
VerticalLarge.args = {};

export const VerticalMedium: Story<ValenceDividerProps> = RenderVertical.bind({});
VerticalMedium.args = { size: "M" };

export const VerticalSmall: Story<ValenceDividerProps> = RenderVertical.bind({});
VerticalSmall.args = { size: "S" };


export const DividerLarge: Story<ValenceDividerProps> = (props) => {
  return (
    <section>
      <h1>Large</h1>
      <Divider />
      <p>Page or Section Titles.</p>
    </section>
  );
}

export const DividerMedium: Story<ValenceDividerProps> = (props) => {
  return (
    <section>
      <h1>Medium</h1>
      <Divider size="M" />
      <p>
        Divide subsections, or divide different groups of elements (between
        panels, rails, etc.)
      </p>
    </section>
  );
}

export const DividerSmall: Story<ValenceDividerProps> = (props) => {
  return (
    <section>
      <h1>Small</h1>
      <Divider size="S" />
      <p>
        Divide like-elements (tables, tool groups, elements within a panel,
        etc.)
      </p>
    </section>
  );
}
