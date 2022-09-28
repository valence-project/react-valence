import { action, Story, StoryDecorator } from "@ladle/react";
import { Flex } from "@react-valence/layout";
import React from "react";
import Refresh from "@valence-icons/ui/RefreshFill";
import { SearchField } from "@react-valence/searchfield";

import { ValenceSearchFieldProps } from "@react-valence/searchfield";

const info =
  <p>A containing element with `role="search"` has been added to define a **search** landmark region.</p>;

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

export const DefaultValue: Story<ValenceSearchFieldProps> = SearchFieldRender.bind(
  {}
);
DefaultValue.args = { defaultValue: "React" };

// .add(
//   "defaultValue (uncontrolled)",
//   () => renderSearchLandmark(render({ defaultValue: "React" })),
//   { info }
// )
// .add(
//   "value (controlled)",
//   () => renderSearchLandmark(render({ value: "React" })),
//   { info }
// )
// .add("isQuiet: true", () => renderSearchLandmark(render({ isQuiet: true })), {
//   info,
// })
// .add(
//   "isDisabled: true",
//   () =>
//     renderSearchLandmark(render({ defaultValue: "React", isDisabled: true })),
//   { info }
// )
// .add(
//   "isQuiet, isDisabled",
//   () =>
//     renderSearchLandmark(
//       render({ defaultValue: "React", isQuiet: true, isDisabled: true })
//     ),
//   { info }
// )
// .add(
//   "isReadOnly",
//   () =>
//     renderSearchLandmark(render({ defaultValue: "React", isReadOnly: true })),
//   { info }
// )
// .add("isRequired: true", () => render({ isRequired: true }))
// .add("isRequired: true, necessityIndicator: label", () =>
//   render({ isRequired: true, necessityIndicator: "label" })
// )
// .add("isRequired: false, necessityIndicator: label", () =>
//   render({ isRequired: false, necessityIndicator: "label" })
// )
// .add(
//   "icon: refresh",
//   () =>
//     renderSearchLandmark(
//       render({ defaultValue: "React", icon: <Refresh /> })
//     ),
//   { info }  // .addParameters({ providerSwitcher: { status: "positive" } })
// .add("Default", () => renderSearchLandmark(render()), { info })
// .add(
//   "defaultValue (uncontrolled)",
//   () => renderSearchLandmark(render({ defaultValue: "React" })),
//   { info }
// )
// .add(
//   "value (controlled)",
//   () => renderSearchLandmark(render({ value: "React" })),
//   { info }
// )
// .add("isQuiet: true", () => renderSearchLandmark(render({ isQuiet: true })), {
//   info,
// })
// .add(
//   "isDisabled: true",
//   () =>
//     renderSearchLandmark(render({ defaultValue: "React", isDisabled: true })),
//   { info }
// )
// .add(
//   "isQuiet, isDisabled",
//   () =>
//     renderSearchLandmark(
//       render({ defaultValue: "React", isQuiet: true, isDisabled: true })
//     ),
//   { info }
// )
// .add(
//   "isReadOnly",
//   () =>
//     renderSearchLandmark(render({ defaultValue: "React", isReadOnly: true })),
//   { info }
// )
// .add("isRequired: true", () => render({ isRequired: true }))
// .add("isRequired: true, necessityIndicator: label", () =>
//   render({ isRequired: true, necessityIndicator: "label" })
// )
// .add("isRequired: false, necessityIndicator: label", () =>
//   render({ isRequired: false, necessityIndicator: "label" })
// )
// .add(
//   "icon: refresh",
//   () =>
//     renderSearchLandmark(
//       render({ defaultValue: "React", icon: <Refresh /> })
//     ),
//   { info }
// )
// .add(
//   "icon: null",
//   () => renderSearchLandmark(render({ defaultValue: "React", icon: null })),
//   { info }
// )
// .add(
//   "isQuiet, icon: refresh",
//   () =>
//     renderSearchLandmark(
//       render({ defaultValue: "React", icon: <Refresh />, isQuiet: true })
//     ),
//   { info }
// )
// .add(
//   "isQuiet, icon: null",
//   () =>
//     renderSearchLandmark(
//       render({ defaultValue: "React", icon: null, isQuiet: true })
//     ),
//   { info }
// )
// .add(
//   "validationState=invalid",
//   () =>
//     renderSearchLandmark(
//       render({ defaultValue: "React", validationState: "invalid" })
//     ),
//   { info }
// )
// .add(
//   "validationState=valid",
//   () =>
//     renderSearchLandmark(
//       render({ defaultValue: "React", validationState: "valid" })
//     ),
//   { info }
// )
// .add(
//   "onClear",
//   () => renderSearchLandmark(render({ onClear: action("clear") })),
//   { info }
// )
// .add("autoFocus", () => renderSearchLandmark(render({ autoFocus: true })), {
//   info,
// })
// .add("labelAlign: end", () => render({ labelAlign: "end" }))
// .add("labelPosition: side", () => render({ labelPosition: "side" }))
// .add("no visible label", () =>
//   render({ label: null, "aria-label": "Street address" })
// )
// .add("with description", () =>
//   render({ description: "Enter a search term." })
// )
// .add("with error message", () =>
//   render({
//     errorMessage: "Remove special characters.",
//     validationState: "invalid",
//   })
// )
// .add("custom width", () => render({ width: 300 }))
// .add("custom width, quiet", () => render({ width: 300, isQuiet: true }))
// .add("custom width, labelPosition: side", () =>
//   render({ width: 300, labelPosition: "side" })
// )
// .add("custom width and narrow container", () => (
//   <Flex direction="column" width="30px">
//     {render({ defaultValue: "React", validationState: "valid" })}
//     {render({ defaultValue: "React", width: 30 })}
//     {render({ defaultValue: "React", width: 30, validationState: "valid" })}
//   </Flex>
// ));
// )
// .add(
//   "isQuiet, icon: refresh",
//   () =>
//     renderSearchLandmark(
//       render({ defaultValue: "React", icon: <Refresh />, isQuiet: true })
//     ),
//   { info }
// )
// .add(
//   "isQuiet, icon: null",
//   () =>
//     renderSearchLandmark(
//       render({ defaultValue: "React", icon: null, isQuiet: true })
//     ),
//   { info }
// )
// .add(
//   "validationState=invalid",
//   () =>
//     renderSearchLandmark(
//       render({ defaultValue: "React", validationState: "invalid" })
//     ),
//   { info }
// )
// .add(
//   "validationState=valid",
//   () =>
//     renderSearchLandmark(
//       render({ defaultValue: "React", validationState: "valid" })
//     ),
//   { info }
// )
// .add(
//   "onClear",
//   () => renderSearchLandmark(render({ onClear: action("clear") })),
//   { info }
// )
// .add("autoFocus", () => renderSearchLandmark(render({ autoFocus: true })), {
//   info,
// })
// .add("labelAlign: end", () => render({ labelAlign: "end" }))
// .add("labelPosition: side", () => render({ labelPosition: "side" }))
// .add("no visible label", () =>
//   render({ label: null, "aria-label": "Street address" })
// )
// .add("with description", () =>
//   render({ description: "Enter a search term." })
// )
// .add("with error message", () =>
//   render({
//     errorMessage: "Remove special characters.",
//     validationState: "invalid",
//   })
// )
// .add("custom width", () => render({ width: 300 }))
// .add("custom width, quiet", () => render({ width: 300, isQuiet: true }))
// .add("custom width, labelPosition: side", () =>
//   render({ width: 300, labelPosition: "side" })
// )
// .add("custom width and narrow container", () => (
//   <Flex direction="column" width="30px">
//     {render({ defaultValue: "React", validationState: "valid" })}
//     {render({ defaultValue: "React", width: 30 })}
//     {render({ defaultValue: "React", width: 30, validationState: "valid" })}
//   </Flex>
// ));
