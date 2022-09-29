import { action, Story, StoryDecorator } from "@ladle/react";
import { Flex } from "@react-valence/layout";
import React from "react";
import Refresh from "@valence-icons/ui/RefreshFill";
import { SearchField } from "@react-valence/searchfield";

import { ValenceSearchFieldProps } from "@react-valence/searchfield";

const info = (
  <p>
    A containing element with `role="search"` has been added to define a
    **search** landmark region.
  </p>
);

export default {
  title: "SearchField",
  component: SearchField,
  decorators: [
    (Component) => (
      <div style={{ margin: "3em" }}>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
};

function renderSearchLandmark(child) {
  return <div role="search">{child}</div>;
}

const SearchFieldRender: Story<ValenceSearchFieldProps> = (props) => {
  return (
    <>
      <SearchField
        UNSAFE_className="custom_classname"
        label="Search"
        {...props}
        onChange={console.log}
        onSubmit={console.log}
      />
      {info}
    </>
  );
};

export const Default: Story<ValenceSearchFieldProps> = SearchFieldRender.bind(
  {}
);
Default.args = {};

export const DefaultValue: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
DefaultValue.args = {
  defaultValue: "React",
};

export const Value: Story<ValenceSearchFieldProps> = SearchFieldRender.bind({});
Value.args = { value: "React" };
Value.storyName = "ValueControlled";

export const Quiet: Story<ValenceSearchFieldProps> = SearchFieldRender.bind({});
Quiet.args = { isQuiet: true };
Quiet.storyName = "Quiet";

export const Disabled: Story<ValenceSearchFieldProps> = SearchFieldRender.bind(
  {}
);
Disabled.args = { isDisabled: true, defaultValue: "React" };
Disabled.storyName = "Disabled";

export const QuietDisabled: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
QuietDisabled.args = { isDisabled: true, defaultValue: "React", isQuiet: true };
QuietDisabled.storyName = "QuietDisabled";

export const ReadOnly: Story<ValenceSearchFieldProps> = SearchFieldRender.bind(
  {}
);
ReadOnly.args = { isReadOnly: true, defaultValue: "React" };
ReadOnly.storyName = "ReadOnly";

export const Required: Story<ValenceSearchFieldProps> = SearchFieldRender.bind(
  {}
);
Required.args = { isRequired: true };
Required.storyName = "Required";

export const RequiredIndicatorLabel: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
RequiredIndicatorLabel.args = { isRequired: true, necessityIndicator: "label" };
RequiredIndicatorLabel.storyName = "RequiredTextIndicatorLabel";

export const RequiredFalseIndicatorLabel: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
RequiredFalseIndicatorLabel.args = {
  isRequired: false,
  necessityIndicator: "label",
};
RequiredFalseIndicatorLabel.storyName = "RequiredFalseTextIndicatorLabel";

export const Icon: Story<ValenceSearchFieldProps> = SearchFieldRender.bind({});
Icon.args = { defaultValue: "React", icon: <Refresh /> };
Icon.storyName = "Icon:Custom";

export const IconNull: Story<ValenceSearchFieldProps> = SearchFieldRender.bind(
  {}
);
IconNull.args = { defaultValue: "React", icon: null };
IconNull.storyName = "Icon:Null";

export const IconQuiet: Story<ValenceSearchFieldProps> = SearchFieldRender.bind(
  {}
);
IconQuiet.args = { defaultValue: "React", icon: <Refresh />, isQuiet: true };
IconQuiet.storyName = "Icon:Quiet";

export const IconNullQuiet: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
IconNullQuiet.args = { defaultValue: "React", icon: null, isQuiet: true };
IconNullQuiet.storyName = "Icon:NullQuiet";

export const ValidationInvalid: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
ValidationInvalid.args = { validationState: "invalid" };
ValidationInvalid.storyName = "Validation:Invalid";

export const ValidationValid: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
ValidationValid.args = { validationState: "valid" };
ValidationValid.storyName = "Validation:Valid";

export const ActionOnClear: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
ActionOnClear.args = { onClear: action("onClear") };
ActionOnClear.storyName = "Actions:Onclear";

export const Autofocus: Story<ValenceSearchFieldProps> = SearchFieldRender.bind(
  {}
);
Autofocus.args = { autoFocus: true };
Autofocus.storyName = "Autofocus";

export const Label: Story<ValenceSearchFieldProps> = SearchFieldRender.bind({});
Label.args = { labelAlign: "end" };
Label.storyName = "Label:AlignEnd";

export const LabelPositionSide: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
LabelPositionSide.args = { labelPosition: "side" };
LabelPositionSide.storyName = "Label:PositionSide";

export const LabelNone: Story<ValenceSearchFieldProps> = SearchFieldRender.bind(
  {}
);
LabelNone.args = { label: null, "aria-label": "Street address" };
LabelNone.storyName = "Label:NoVisible";

export const Description: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
Description.args = { description: "Enter a search term." };
Description.storyName = "Description Text";

export const ErrorMessage: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
ErrorMessage.args = {
  errorMessage: "Remove special characters.",
  validationState: "invalid",
};
ErrorMessage.storyName = "ErrorMessage";

export const CustomWidth: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
CustomWidth.args = { width: '300px' };
CustomWidth.storyName = "CustomWidth:Bigger";

export const CustomWidthQuiet: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
CustomWidthQuiet.args = { width: '300px', isQuiet: true };
CustomWidthQuiet.storyName = "CustomWidth:Quiet";

export const CustomWidthLabelPositionSide: Story<ValenceSearchFieldProps> =
  SearchFieldRender.bind({});
CustomWidthLabelPositionSide.args = { width: '300px', labelPosition: 'side' };
CustomWidthLabelPositionSide.storyName = "CustomWidth:LabelPositionSide";

const NarrowContainerRender: Story<ValenceSearchFieldProps> = (props) => {
  return (
    <Flex direction="column" width="30px">
      {SearchFieldRender({ defaultValue: "React", validationState: "valid" })}
      {SearchFieldRender({ defaultValue: "React", width: 30 })}
      {SearchFieldRender({ defaultValue: "React", width: 30, validationState: "valid" })}
    </Flex>
  );
};

export const NarrowContainer: Story<ValenceSearchFieldProps> =
  NarrowContainerRender.bind({});
NarrowContainer.storyName = "NarrowContainer";