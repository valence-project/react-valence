import { Story } from "@ladle/react";
import { TextField } from "@react-valence/textfield";
import React from "react";

import { ValenceTextFieldProps } from "@types-valence/textfield";
import Robot from "@valence-icons/ui/AliensFill";

export default {
  title: "TextField",
  component: TextField,
};

const TextFieldRender: Story<ValenceTextFieldProps> = (args) => {
  args = {
    label: "Field Label",
    ...args,
  };
  return <TextField {...args} />;
};

export const Default = TextFieldRender.bind({});
Default.storyName = "Default";
Default.argTypes = {
  validationState: {
    options: [undefined, "valid", "invalid"],
    control: { type: "select" },
  },
};
Default.args = {
  validationState: undefined,
};

export const ValueControlled = TextFieldRender.bind({});
ValueControlled.storyName = "Value: Controlled";
ValueControlled.args = {
  value: "controlled value",
};

export const ValueUncontrolled = TextFieldRender.bind({});
ValueUncontrolled.storyName = "Value: Uncontrolled";
ValueUncontrolled.args = {
  defaultValue: "uncontrolled defaultValue",
};

export const Disabled = TextFieldRender.bind({});
Disabled.storyName = "Disabled";
Disabled.args = {
  isDisabled: true,
};

export const Quiet = TextFieldRender.bind({});
Quiet.storyName = "Quiet: Default";
Quiet.args = {
  isQuiet: true,
};

export const QuietDisabled = TextFieldRender.bind({});
QuietDisabled.storyName = "Quiet: Disabled";
QuietDisabled.args = {
  isQuiet: true,
  isDisabled: true,
};

export const ValidationInvalid = TextFieldRender.bind({});
ValidationInvalid.storyName = "Validation State: Invalid";
ValidationInvalid.args = {
  validationState: "invalid",
};

export const ValidationValid = TextFieldRender.bind({});
ValidationValid.storyName = "Validation State: Valid";
ValidationValid.args = {
  validationState: "valid",
};

export const Email = TextFieldRender.bind({});
Email.storyName = "Type: Email";
Email.args = {
  type: "email",
};

export const Pattern = TextFieldRender.bind({});
Pattern.storyName = "Type: Pattern";
Pattern.args = {
  pattern: "[0-9]+",
};

export const Password = TextFieldRender.bind({});
Password.storyName = "Type: Password";
Password.args = {
  type: "password",
  defaultValue: "password",
};

export const ReadOnly = TextFieldRender.bind({});
ReadOnly.storyName = "Read Only: Default";
ReadOnly.args = {
  isReadOnly: true,
};

export const ReadOnlyDefaultValue = TextFieldRender.bind({});
ReadOnlyDefaultValue.storyName = "Read Only: Default Value";
ReadOnlyDefaultValue.args = {
  isReadOnly: true,
  value: "read only value",
};

export const IsRequired = TextFieldRender.bind({});
IsRequired.storyName = "Required: Default";
IsRequired.args = {
  isRequired: true,
};

export const IsRequiredLabel = TextFieldRender.bind({});
IsRequiredLabel.storyName = "Required: True Necessity Indicator Label";
IsRequiredLabel.args = {
  isRequired: true,
  necessityIndicator: "label",
};

export const IsRequiredFalseLabel = TextFieldRender.bind({});
IsRequiredFalseLabel.storyName = "Required: False Necessity Indicator Label";
IsRequiredFalseLabel.args = {
  isRequired: false,
  necessityIndicator: "label",
};

export const CustomWidth = TextFieldRender.bind({});
CustomWidth.storyName = "Custom Width: Default";
CustomWidth.args = {
  icon: <Robot />,
  validationState: "invalid",
  width: "300px",
};

export const CustomWidthSmall = TextFieldRender.bind({});
CustomWidthSmall.storyName = "Custom Width: Small";
CustomWidthSmall.args = {
  icon: <Robot />,
  validationState: "invalid",
  width: "150px",
};

export const CustomWidthQuiet = TextFieldRender.bind({});
CustomWidthQuiet.storyName = "Custom Width: Quiet";
CustomWidthQuiet.args = {
  icon: <Robot />,
  validationState: "invalid",
  width: "300px",
  isQuiet: true,
};

export const CustomWidthLabelSide = TextFieldRender.bind({});
CustomWidthLabelSide.storyName = "Custom Width: Label Side";
CustomWidthLabelSide.args = {
  icon: <Robot />,
  validationState: "invalid",
  width: "500px",
  labelPosition: "side",
};

export const AutoFocus = TextFieldRender.bind({});
AutoFocus.storyName = "Autofocus";
AutoFocus.args = {
  autoFocus: true,
};

export const IconRobot = TextFieldRender.bind({});
IconRobot.storyName = "Icon: Default";
IconRobot.args = {
  icon: <Robot />,
};

export const IconRobotQuiet = TextFieldRender.bind({});
IconRobotQuiet.storyName = "Icon: Quiet";
IconRobotQuiet.args = {
  icon: <Robot />,
  isQuiet: true,
};

export const IconRobotDisabled = TextFieldRender.bind({});
IconRobotDisabled.storyName = "Icon: Disabled";
IconRobotDisabled.args = {
  icon: <Robot />,
  isDisabled: true,
};

export const IconRobotQuietInvalid = TextFieldRender.bind({});
IconRobotQuietInvalid.storyName = "Icon: QuietInvalid";
IconRobotQuietInvalid.args = {
  icon: <Robot />,
  isQuiet: true,
  validationState: "invalid",
};

export const LabelAlignEnd = TextFieldRender.bind({});
LabelAlignEnd.storyName = "Label: LabelAlign End";
LabelAlignEnd.args = {
  labelAlign: "end",
};

export const LabelPositionSide = TextFieldRender.bind({});
LabelPositionSide.storyName = "Label: LabelPosition Side";
LabelPositionSide.args = {
  labelPosition: "side",
};

export const LabelNoVisible = TextFieldRender.bind({});
LabelNoVisible.storyName = "Label: No Visible Label";
LabelNoVisible.args = {
  label: null,
};

export const WithDescription = TextFieldRender.bind({});
WithDescription.storyName = "With Description";
WithDescription.args = {
  description: "This is the field description text",
};

export const WithErrorMessage = TextFieldRender.bind({});
WithErrorMessage.storyName = "With Error Message";
WithErrorMessage.args = {
  errorMessage: "This is the field error message",
  validationState: "invalid",
};

const TextFieldDescriptionErrorRender: Story<ValenceTextFieldProps> = (
  args
) => {
  function Example() {
    let [value, setValue] = React.useState("0");
    let isValid = React.useMemo(() => /^\d$/.test(value), [value]);

    return (
      <TextField
        validationState={isValid ? "valid" : "invalid"}
        value={value}
        onChange={setValue}
        label="Favorite number"
        maxLength={1}
        description="Enter a single digit number."
        errorMessage={
          value === ""
            ? "Empty input not allowed."
            : "Single digit numbers are 0-9."
        }
      />
    );
  }

  return <Example />;
};

export const ExampleValidation = TextFieldDescriptionErrorRender.bind({});
ExampleValidation.storyName = "Validation Example";
ExampleValidation.args = {};
