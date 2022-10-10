import { Checkbox } from "@react-valence/checkbox";
import { Story } from "@ladle/react";
import { ValenceCheckboxProps } from "@types-valence/checkbox";

import { Link } from "@react-valence/link";
import { Flex } from "@react-valence/layout";
import _ContactsBookLine from "@valence-icons/ui/ContactsBookLine";

export default {
  title: "Checkbox",
  component: Checkbox,
};

const CheckboxRender: Story<ValenceCheckboxProps> = (args) => (
  <Checkbox {...args}>Checkbox Text</Checkbox>
);

export const Default = CheckboxRender.bind({});
Default.storyName = "Default";
Default.args = {};

export const DefaultSelected = CheckboxRender.bind({});
DefaultSelected.storyName = "DefaultSelected";
DefaultSelected.args = {
  defaultSelected: true,
};

export const IsDisabled = CheckboxRender.bind({});
IsDisabled.storyName = "IsDisabled";
IsDisabled.args = {
  isDisabled: true,
};

export const IsEmphasized = CheckboxRender.bind({});
IsEmphasized.storyName = "IsEmphasized";
IsEmphasized.args = {
  isEmphasized: true,
};

export const IsEmphasizedDisabled = CheckboxRender.bind({});
IsEmphasizedDisabled.storyName = "IsEmphasizedDisabled";
IsEmphasizedDisabled.args = {
  isEmphasized: true,
  isDisabled: true,
};

export const IsSelectedTrue = CheckboxRender.bind({});
IsSelectedTrue.storyName = "IsSelected:True";
IsSelectedTrue.args = {
  isSelected: true,
};

export const IsSelectedFalse = CheckboxRender.bind({});
IsSelectedFalse.storyName = "IsSelected:False";
IsSelectedFalse.args = {
  isSelected: false,
};

export const IsIndeterminateTrue = CheckboxRender.bind({});
IsIndeterminateTrue.storyName = "IsIndeterminateTrue";
IsIndeterminateTrue.args = {
  isIndeterminate: true,
};

export const ValidationStateInvalid = CheckboxRender.bind({});
ValidationStateInvalid.storyName = "ValidationState:Invalid";
ValidationStateInvalid.args = {
  validationState: "invalid",
};
export const ValidationStateInvalidIndeterminate: Story<ValenceCheckboxProps> =
  CheckboxRender.bind({});
ValidationStateInvalidIndeterminate.storyName = "ValidationState:InvalidIndetermindate";
ValidationStateInvalidIndeterminate.args = {
  validationState: "invalid",
  isIndeterminate: true,
};

export const ValidationStateValidIndeterminate: Story<ValenceCheckboxProps> =
  CheckboxRender.bind({});
ValidationStateValidIndeterminate.storyName = "ValidationState:ValidIndetermindate";
ValidationStateValidIndeterminate.args = {
  validationState: "valid",
  isIndeterminate: true,
};

export const ValidationStateValid = CheckboxRender.bind({});
ValidationStateValid.storyName = "ValidationState:Valid";
ValidationStateValid.args = {
  validationState: "valid",
};

export const IsEmphasizedTrueIsIndeterminateTrue: Story<ValenceCheckboxProps> =
  CheckboxRender.bind({});
IsEmphasizedTrueIsIndeterminateTrue.args = {
  isEmphasized: true,
  isIndeterminate: true,
};

export const IsEmphasizedTrueIsDisabledTrue: Story<ValenceCheckboxProps> =
  CheckboxRender.bind({});
IsEmphasizedTrueIsDisabledTrue.args = { isEmphasized: true, isDisabled: true };

export const IsReadOnlyTrueIsSelectedTrue: Story<ValenceCheckboxProps> =
  CheckboxRender.bind({});
IsReadOnlyTrueIsSelectedTrue.args = { isReadOnly: true, isSelected: true };

export const AutoFocusTrue: Story<ValenceCheckboxProps> = CheckboxRender.bind(
  {}
);
AutoFocusTrue.args = { autoFocus: true };

export const WCHMTest: Story<ValenceCheckboxProps> = () => {
  const major: ValenceCheckboxProps = {
  }

  console.log(Checkbox)

  return (
    <Flex direction="column" gap="size-200">
      <CheckboxRender />
      <CheckboxRender />
      <CheckboxRender isSelected isEmphasized />
      <CheckboxRender isSelected isEmphasized={false} />
      <CheckboxRender isIndeterminate isEmphasized />
      <CheckboxRender isIndeterminate isEmphasized={false} />
      <CheckboxRender {...{ validationState: "invalid" }} />
      <CheckboxRender isSelected {...{ validationState: "invalid" }} />
    </Flex>
  );
};

export const CustomLabel: Story<ValenceCheckboxProps> = (args) => {
  return (
    <Checkbox onChange={console.log} {...args}>
      <span>
        <i>Italicized</i> Checkbox Label
      </span>
    </Checkbox>
  );
}

export const LongLabel: Story<ValenceCheckboxProps> = (args) => {
  return (
    <Checkbox onChange={console.log}>
      Super long checkbox label. Sample text. Arma virumque cano, Troiae qui
      primus ab oris. Italiam, fato profugus, Laviniaque venit.
    </Checkbox>
  );
}

export const NoLabel: Story<ValenceCheckboxProps> = (args) => {
  return <Checkbox onChange={console.log} {...{ "aria-label": "This checkbox has no visible label" }} />;
}

export const InRow: Story<ValenceCheckboxProps> = (args) => {
  return (
    <Flex gap="size-200">
      <Checkbox onChange={console.log} {...args}>
        Option
      </Checkbox>
      <Checkbox isDisabled onChange={console.log} {...args}>
        Option
      </Checkbox>
    </Flex>
  );
}
