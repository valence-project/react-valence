import { Story } from "@ladle/react";
import { Meter } from "@react-valence/meter";
import { ValenceMeterProps } from "@types-valence/meter";
import React from "react";

/**
 * Helper type so `bind` returns the actual Story type.
 */

export default {
  title: "Meter",
  component: Meter,
};

const MeterRender: Story<ValenceMeterProps> = (args) => <Meter {...args} />;

const formatOptions = {
  style: "currency",
  currency: "JPY",
};

const argTypes = {
  variant: {
    options: ["critical", "positive", "warning", "neutral"],
    control: {
      type: "select",
    },
  },
  size: {
    options: ["S", "L"],
    control: {
      type: "radio",
    },
  },
  labelPosition: {
    options: ["top", "side"],
    control: { type: "radio" },
  },
};

export const Default: Story<ValenceMeterProps> = MeterRender.bind({});
Default.argTypes = argTypes;
Default.args = {
  value: 90,
  variant: "critical",
  label: "meter",
  showValueLabel: true,
};

export const ValueLabel1Of4: Story<ValenceMeterProps> = MeterRender.bind({});
ValueLabel1Of4.args = { ...Default.args, value: 25, valueLabel: "1 of 4" };

export const UsingNumberFormatOptionsWithCurrencyStyle: Story<ValenceMeterProps> =
  MeterRender.bind({});
UsingNumberFormatOptionsWithCurrencyStyle.args = {
  ...Default.args,
  showValueLabel: true,
  formatOptions,
};

export const NoVisibleLabel: Story<ValenceMeterProps> = MeterRender.bind({});
NoVisibleLabel.args = { ...Default.args, label: null, "aria-label": "Meter" };

export const ParentWidth100: Story<ValenceMeterProps> = MeterRender.bind({});
(ParentWidth100.args = { ...Default.args, value: 32 }),
  (ParentWidth100.decorators = [
    (Story) => (
      <span style={{ width: "100%" }}>
        <Story />
      </span>
    ),
  ]);

export const ParentWidth100Px: Story<ValenceMeterProps> = MeterRender.bind({});
(ParentWidth100Px.args = { ...Default.args, value: 32 }),
  (ParentWidth100Px.decorators = [
    (Story) => (
      <span style={{ width: "100px" }}>
        <Story />
      </span>
    ),
  ]);

export const Width300Px: Story<ValenceMeterProps> = MeterRender.bind({});
Width300Px.args = { ...Default.args, value: 32, width: "300px" };

export const Width30Px: Story<ValenceMeterProps> = MeterRender.bind({});
Width30Px.args = { ...Default.args, value: 32, width: "30px" };

export const UsingRawValuesForMinValueMaxValueAndValue: Story<ValenceMeterProps> =
  MeterRender.bind({});
UsingRawValuesForMinValueMaxValueAndValue.args = {
  ...Default.args,
  showValueLabel: true,
  labelPosition: "top",
  maxValue: 2147483648,
  value: 715827883,
};

export const UsingRawValuesWithNumberFormatter: Story<ValenceMeterProps> =
  MeterRender.bind({});
UsingRawValuesWithNumberFormatter.args = {
  ...Default.args,
  showValueLabel: true,
  labelPosition: "top",
  maxValue: 2147483648,
  value: 715827883,
  formatOptions,
};
