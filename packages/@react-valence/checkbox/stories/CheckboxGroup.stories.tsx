import { Checkbox, CheckboxGroup } from "@react-valence/checkbox";
import { Story } from "@ladle/react";
import { useState } from 'react';
import { ValenceCheckboxGroupProps } from "@types-valence/checkbox";
import { CheckboxGroupProps } from "@react-stately/checkbox";

export default {
  title: "Checkbox Group",
  component: CheckboxGroup,
};

const CheckboxGroupRender: Story<ValenceCheckboxGroupProps> = (
  props: Omit<ValenceCheckboxGroupProps, "children"> = {}
) => {
  return (
    <CheckboxGroup label="Pets" {...props} onChange={console.log}>
      <Checkbox value="dogs">Dogs</Checkbox>
      <Checkbox value="cats">Cats</Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
    </CheckboxGroup>
  );
};

export const Default = CheckboxGroupRender.bind({});
Default.storyName = "Default";
Default.args = {
  label: "CheckboxGroup Label",
};

export const DefaultValue = CheckboxGroupRender.bind({});
DefaultValue.storyName = "DefaultValue";
DefaultValue.args = {
  defaultValue: "dragons",
};

export const ControlledValue = CheckboxGroupRender.bind({});
ControlledValue.storyName = "Controlled";
ControlledValue.args = {
  value: "dragons",
};

export const LabelPositionSide = CheckboxGroupRender.bind({});
LabelPositionSide.storyName = "LabelPositionSide";
LabelPositionSide.args = {
  labelPosition: "side",
};

export const LabelAlignEnd = CheckboxGroupRender.bind({});
LabelAlignEnd.storyName = "LabelAlignEnd";
LabelAlignEnd.args = {
  labelAlign: "end",
};

export const OrientationHorizontal = CheckboxGroupRender.bind({});
OrientationHorizontal.storyName = "OrientationHorizontal:Default";
OrientationHorizontal.args = {
  orientation: "horizontal",
};

export const OrientationHorizontalLabelPositionSide = CheckboxGroupRender.bind(
  {}
);
OrientationHorizontalLabelPositionSide.storyName =
  "OrientationHorizontal:LabelPositionSide";
OrientationHorizontalLabelPositionSide.args = {
  orientation: "horizontal",
  labelPosition: "side",
};

export const OrientationHorizontalLabelAlignEnd = CheckboxGroupRender.bind({});
OrientationHorizontalLabelAlignEnd.storyName =
  "OrientationHorizontal:LabelAlignEnd";
OrientationHorizontalLabelAlignEnd.args = {
  orientation: "horizontal",
  labelAlign: "end",
};

export const IsDisabled = CheckboxGroupRender.bind({});
IsDisabled.storyName = "IsDisabled";
IsDisabled.args = {
  isDisabled: true,
};

export const IsDisabledOneCheckbox: Story<CheckboxGroupProps> = (props) => {
  return (
    <CheckboxGroup label="Pets" {...props} onChange={console.log}>
      <Checkbox value="dogs">Dogs</Checkbox>
      <Checkbox value="cats" isDisabled>
        Cats
      </Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
    </CheckboxGroup>
  );
};
IsDisabledOneCheckbox.storyName = "IsDisabledOneCheckbox";

export const IsDisabledTwoCheckboxOneSelected: Story<CheckboxGroupProps> = (
  props
) => {
  return (
    <CheckboxGroup label="Pets" {...props} onChange={console.log}>
      <Checkbox value="dogs" isDisabled>
        Dogs
      </Checkbox>
      <Checkbox value="cats" isDisabled>
        Cats
      </Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
    </CheckboxGroup>
  );
};
IsDisabledTwoCheckboxOneSelected.storyName = "IsDisabledOneCheckboxOneSelected";
IsDisabledTwoCheckboxOneSelected.args = {
  defaultValue: "dragons",
};

export const IsEmphasizedIsDisabledTwoCheckboxOneSelected: Story<
  CheckboxGroupProps
> = (props) => {
  return (
    <CheckboxGroup label="Pets" {...props} onChange={console.log}>
      <Checkbox value="dogs" isDisabled>
        Dogs
      </Checkbox>
      <Checkbox value="cats" isDisabled>
        Cats
      </Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
    </CheckboxGroup>
  );
};
IsEmphasizedIsDisabledTwoCheckboxOneSelected.storyName =
  "IsEmphasizedIsDisabledOneCheckboxOneSelected";
IsEmphasizedIsDisabledTwoCheckboxOneSelected.args = {
  defaultValue: "dragons",
  isEmphasized: true,
};

export const IsRequired = CheckboxGroupRender.bind({});
IsRequired.storyName = "IsRequired";
IsRequired.args = {
  isRequired: true,
};

export const IsRequiredNecessityIndicatorLabel = CheckboxGroupRender.bind({});
IsRequiredNecessityIndicatorLabel.storyName = "IsRequiredNecessityIndicatorLabel";
IsRequiredNecessityIndicatorLabel.args = {
  necessityIndicator: "label",
};

export const NecessityIndicatorLabelPositionSide = CheckboxGroupRender.bind({});
NecessityIndicatorLabelPositionSide.storyName =
  "NecessityIndicatorLabelPositionSide";
NecessityIndicatorLabelPositionSide.args = {
  necessityIndicator: "label",
  labelPosition: "side",
};

export const IsEmphasized = CheckboxGroupRender.bind({});
IsEmphasized.storyName = "IsEmphasized";
IsEmphasized.args = {
  isEmphasized: true,
};

export const IsReadOnly = CheckboxGroupRender.bind({});
IsReadOnly.storyName = "IsReadOnly";
IsReadOnly.args = {
  isReadOnly: true,
};


export const ValidationStateInvalid = CheckboxGroupRender.bind({});
ValidationStateInvalid.storyName = "ValidationStateInvalid";
ValidationStateInvalid.args = {
  validationState: 'invalid',
};

export const ValidationStateValid = CheckboxGroupRender.bind({});
ValidationStateValid.storyName = "ValidationStateValid";
ValidationStateValid.args = {
  validationState: 'valid',
};

export const ValidationStateInvalidOneSelected: Story<
  CheckboxGroupProps
> = (props) => {
  return (
    <CheckboxGroup label="Pets" {...props} onChange={console.log}>
      <Checkbox value="dogs">
        Dogs
      </Checkbox>
      <Checkbox value="cats" validationState={'invalid'}>
        Cats
      </Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
    </CheckboxGroup>
  );
};

export const AutoFocusOneCheckbox: Story<
  CheckboxGroupProps
> = (props) => {
  return (
    <CheckboxGroup label="Pets" {...props} onChange={console.log}>
      <Checkbox value="dogs">
        Dogs
      </Checkbox>
      <Checkbox value="cats" autoFocus>
        Cats
      </Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
    </CheckboxGroup>
  );
};

export const LabelNoneVisible = CheckboxGroupRender.bind({});
LabelNoneVisible.storyName = "LabelNoneVisible";
LabelNoneVisible.args = {
  label: null,
  "aria-label": "Pets"
};

export const FormName = CheckboxGroupRender.bind({});
FormName.storyName = "FormName";
FormName.args = {
  name: "Pets"
};

export const ControlledGroup: Story<
  CheckboxGroupProps
> = (props) => {
  let [checked, setChecked] = useState<string[]>([]);
  return (
    <CheckboxGroup label="Pets" onChange={setChecked} value={checked}>
      <Checkbox value="dogs">Dogs</Checkbox>
      <Checkbox value="cats">Cats</Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
    </CheckboxGroup>
  );
}
