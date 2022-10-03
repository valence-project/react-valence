import { Radio, RadioGroup } from "@react-valence/radio";
import { Story, action } from "@ladle/react";
import { ValenceRadioGroupProps } from "@types-valence/radio";

const RadioGroupRender: Story<ValenceRadioGroupProps> = (
  props,
  radioProps = [{}, {}, {}]
) => (
  <RadioGroup
    label="Favorite pet"
    {...props}
    onChange={console.log}
    name="favorite-pet-group"
  >
    <Radio value="dogs" {...radioProps[0]}>
      Dogs
    </Radio>
    <Radio value="cats" {...radioProps[1]}>
      Cats
    </Radio>
    <Radio value="dragons" {...radioProps[2]}>
      Dragons
    </Radio>
  </RadioGroup>
);

const RadioLongLabelRender: Story<ValenceRadioGroupProps> = (
  props,
  radioProps = [{}, {}, {}]
) => {
  return (
    <RadioGroup
      aria-label="Favorite pet"
      {...props}
      onChange={action("onChange")}
    >
      <Radio value="dogs" {...radioProps[0]}>
        Dogs Dogs Dogs Dogs Dogs Dogs Dogs Dogs Dogs Dogs Dogs Dogs Dogs Dogs
        Dogs Dogs Dogs Dogs Dogs Dogs Dogs Dogs Dogs
      </Radio>
      <Radio value="cats" {...radioProps[1]}>
        Cats
      </Radio>
      <Radio value="dragons" {...radioProps[2]}>
        Dragons
      </Radio>
    </RadioGroup>
  );
};

export const Default: Story<ValenceRadioGroupProps> = RadioGroupRender.bind({});
Default.storyName = "Default";
Default.args = {};

export const LongLabel: Story<ValenceRadioGroupProps> = RadioLongLabelRender.bind({});
LongLabel.storyName = "LongLabel";
LongLabel.args = {};

export const DefaultValue: Story<ValenceRadioGroupProps> =
  RadioGroupRender.bind({});
DefaultValue.storyName = "DefaultValue";
DefaultValue.args = { defaultValue: "dragons" };

export const ControlledValue: Story<ValenceRadioGroupProps> =
  RadioGroupRender.bind({});
ControlledValue.storyName = "ControlledValue";
ControlledValue.args = { value: "dragons" };

export const LabelPositionSide: Story<ValenceRadioGroupProps> =
  RadioGroupRender.bind({});
LabelPositionSide.storyName = "Label:PositionSide";
LabelPositionSide.args = { labelPositon: "side" };

export const LabelAlignEnd: Story<ValenceRadioGroupProps> =
  RadioGroupRender.bind({});
LabelAlignEnd.storyName = "Label:AlignEnd";
LabelAlignEnd.args = { labelAlign: "end" };

export const LabelNoneVisible: Story<ValenceRadioGroupProps> =
  RadioGroupRender.bind({});
LabelNoneVisible.storyName = "Label:NoneVisible";
LabelNoneVisible.args = { label: null, "aria-label": "Favorite pet" };

export const Horizontal: Story<ValenceRadioGroupProps> = RadioGroupRender.bind(
  {}
);
Horizontal.storyName = "Horizontal:Default";
Horizontal.args = { orientation: "horizontal" };

export const HorizontalLabelPositionSide: Story<ValenceRadioGroupProps> =
  RadioGroupRender.bind({});
HorizontalLabelPositionSide.storyName = "Horizontal:LabelPositionSide";
HorizontalLabelPositionSide.args = {
  orientation: "horizontal",
  labelPosition: "side",
};

export const HorizontalLabelAlignEnd: Story<ValenceRadioGroupProps> =
  RadioGroupRender.bind({});
HorizontalLabelAlignEnd.storyName = "Horizontal:LabelAlignEnd";
HorizontalLabelAlignEnd.args = { orientation: "horizontal", labelAlign: "end" };

export const Disabled: Story<ValenceRadioGroupProps> = RadioGroupRender.bind(
  {}
);
Disabled.storyName = "Disabled";
Disabled.args = { isDisabled: true };

export const Required: Story<ValenceRadioGroupProps> = RadioGroupRender.bind(
  {}
);
Required.storyName = "Required:Default";
Required.args = { isRequired: true };

export const RequiredLabel: Story<ValenceRadioGroupProps> =
  RadioGroupRender.bind({});
RequiredLabel.storyName = "Required:TextLabel";
RequiredLabel.args = { isRequired: true, necessityIndicator: "label" };

export const RequiredHorizontalLabelSide: Story<ValenceRadioGroupProps> =
  RadioGroupRender.bind({});
RequiredHorizontalLabelSide.storyName = "Required:HorizontalLabelSide";
RequiredHorizontalLabelSide.args = { isRequired: true, labelPosition: "side" };

export const RequiredLabelSide: Story<ValenceRadioGroupProps> =
  RadioGroupRender.bind({});
RequiredLabelSide.storyName = "Required:HorizontalTextLabelSide";
RequiredLabelSide.args = {
  isRequired: true,
  necessityIndicator: "label",
  labelPosition: "side",
};

export const ReadOnly: Story<ValenceRadioGroupProps> = RadioGroupRender.bind(
  {}
);
ReadOnly.storyName = "ReadOnly";
ReadOnly.args = { isReadOnly: true };

export const Emphasized: Story<ValenceRadioGroupProps> = RadioGroupRender.bind(
  {}
);
Emphasized.storyName = "Emphasized";
Emphasized.args = { isEmphasized: true };

export const ValidationStateInvalid: Story<ValenceRadioGroupProps> =
  RadioGroupRender.bind({});
ValidationStateInvalid.storyName = "ValidationStateInvalid";
ValidationStateInvalid.args = { validationState: "invalid" };
