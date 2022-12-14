import { action, Story } from "@ladle/react";
import { ActionButton } from "@react-valence/button";
import Filter from "@spectrum-icons/workflow/Filter";
import { Flex } from "@react-valence/layout";
import { Item, Picker } from "@react-valence/picker";
import React, { useState } from "react";
import { SearchField } from "@react-valence/searchfield";
import { SearchWithin } from "../";
import { ValencePickerProps } from "@types-valence/select";
import { ValenceSearchFieldProps } from "@types-valence/searchfield";
import { ValenceSearchWithinProps } from "@types-valence/searchwithin";

export default {
  title: "SearchWithin",
};

function render(
  props: Omit<ValenceSearchWithinProps, "children"> = {},
  searchFieldProps: ValenceSearchFieldProps = {},
  pickerProps: Omit<ValencePickerProps<object>, "children"> = {}
) {
  return (
    <SearchWithin label="This is label" {...props}>
      <SearchField
        {...searchFieldProps}
        onChange={action("change")}
        onSubmit={action("submit")}
      />
      <Picker
        defaultSelectedKey="all"
        {...pickerProps}
        onSelectionChange={action("selectionChange")}
      >
        <Item key="all">All</Item>
        <Item key="campaigns">Campaigns</Item>
        <Item key="audiences">Audiences</Item>
        <Item key="tags">Tags</Item>
        <Item key="long">This item is very long and word wraps poorly</Item>
      </Picker>
    </SearchWithin>
  );
}

function renderReverse(
  props: Omit<ValenceSearchWithinProps, "children"> = {},
  searchFieldProps: ValenceSearchFieldProps = {},
  pickerProps: Omit<ValencePickerProps<object>, "children"> = {}
) {
  return (
    <SearchWithin label="Test label" {...props}>
      <Picker
        defaultSelectedKey="all"
        {...pickerProps}
        onSelectionChange={action("selectionChange")}
      >
        <Item key="all">All</Item>
        <Item key="campaigns">Campaigns</Item>
        <Item key="audiences">Audiences</Item>
        <Item key="tags">Tags</Item>
        <Item key="long">This item is very long and word wraps poorly</Item>
      </Picker>
      <SearchField
        {...searchFieldProps}
        onChange={action("change")}
        onSubmit={action("submit")}
      />
    </SearchWithin>
  );
}

function ResizeSearchWithinApp(props) {
  const [state, setState] = useState(true);

  return (
    <Flex direction="column" gap="size-200" alignItems="start">
      <div style={{ width: state ? "300px" : "400px" }}>
        <SearchWithin label="Test label" {...props} width="100%">
          <SearchField
            onChange={action("change")}
            onSubmit={action("submit")}
          />
          <Picker
            defaultSelectedKey="all"
            onSelectionChange={action("selectionChange")}
          >
            <Item key="all">All</Item>
            <Item key="campaigns">Campaigns</Item>
            <Item key="audiences">Audiences</Item>
            <Item key="tags">Tags</Item>
            <Item key="long">This item is very long and word wraps poorly</Item>
          </Picker>
        </SearchWithin>
      </div>
      <ActionButton onPress={() => setState(!state)}>Toggle size</ActionButton>
    </Flex>
  );
}

export const Default = () => render({});

export const ValueControlled = () => render({}, { value: "Controlled" });
ValueControlled.storyName = "value (controlled) ";

export const isDisabled = () => render({ isDisabled: true });
isDisabled.storyName = "isDisabled: true";

export const isRequired = () => render({ isRequired: true });
isRequired.storyName = "isRequired: true";

export const isReadOnly = () =>
  render({}, { isReadOnly: true, value: "Read Only" });
isReadOnly.storyName = "isReadOnly: true";

export const searchfieldDefaultValue = () =>
  render({}, { defaultValue: "Default Value" });
searchfieldDefaultValue.storyName = "Default value for Searchfield";

export const pickerDefaultValue = () =>
  render({}, {}, { defaultSelectedKey: "tags" });
pickerDefaultValue.storyName = "Default value for Picker";

export const isRequiredNecessityIndicatorLabel = () =>
  render({ isRequired: true, necessityIndicator: "label" });
isRequiredNecessityIndicatorLabel.storyName =
  'isRequired: true, necessityIndicator "label"';

export const isRequiredFalse_necessityIndicator = () =>
  render({ isRequired: false, necessityIndicator: "label" });
isRequiredFalse_necessityIndicator.storyName =
  'isRequired: false, necessityIndicator "label"';

export const InputValidationSateInvalid = () =>
  render({}, { validationState: "invalid" });
InputValidationSateInvalid.storyName = "input validationState: invalid";

export const PickerValidationSateInvalid = () =>
  render({}, {}, { validationState: "invalid" });
PickerValidationSateInvalid.storyName = "picker validationState: invalid";

export const PickerDisabled = () => render({}, {}, { isDisabled: true });

export const CustomWidth300 = () => render({ width: 300 });
CustomWidth300.storyName = "Custom width: 300";

export const CustomWidth30 = () => render({ width: 30 });
CustomWidth30.storyName = "Custom width: 30";

export const LabelPositionSide = () => render({ labelPosition: "side" });
LabelPositionSide.storyName = "labelPosition: side";

export const NoVisibleLabel = () =>
  render({ label: undefined, "aria-label": "Test aria label" });

export const NoLabels = () => render({ label: undefined });

export const ExternalLabel = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <span id="foo">External label</span>
    {render({ label: undefined, "aria-labelledby": "foo" })}
  </div>
);

export const AutoFocusSearchField = () => render({}, { autoFocus: true });
AutoFocusSearchField.storyName = "autoFocus: true on SearchField";

export const AutoFocusPicker = () => render({}, {}, { autoFocus: true });
AutoFocusPicker.storyName = "autoFocus: true on Picker";

export const ReverseChildrenOrder = () => renderReverse({});

export const ResizeSearchWithin = () => <ResizeSearchWithinApp />;

export const ResizeSearchWithinNoLabel = () => (
  <ResizeSearchWithinApp label={null} />
);

export const iconFilter = () => render({}, { icon: <Filter /> });
iconFilter.storyName = "icon: Filter";

export const iconNull = () => render({}, { icon: null });
iconNull.storyName = "icon: null";
