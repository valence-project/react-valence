import { action, Story } from "@ladle/react";
import { chain } from "@react-aria/utils";
import { Flex } from "@react-valence/layout";
import { Form } from "@react-valence/form";
import { Item, Picker } from "@react-valence/picker";
import { NumberField } from "../src";
import React, { useState } from "react";

import { ValenceNumberFieldProps } from "@types-valence/numberfield";

const NumberFieldRender: Story<ValenceNumberFieldProps> = (props) => {
  return (
    <NumberField
      onChange={action("onChange")}
      UNSAFE_className="custom_classname"
      label="Width"
      {...props}
    />
  );
};

export const MaximumFractionDigits_0: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
MaximumFractionDigits_0.args = { formatOptions: { maximumFractionDigits: 0 } };

export const Currency: Story<ValenceNumberFieldProps> = NumberFieldRender.bind(
  {}
);
Currency.args = {
  formatOptions: { style: "currency", currency: "EUR" },
  label: "Price",
};

export const Percent: Story<ValenceNumberFieldProps> = NumberFieldRender.bind(
  {}
);
Percent.args = { formatOptions: { style: "percent" }, label: "Tax" };

export const PercentMaxFractionDigits_2NoMinFractionDigits: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
PercentMaxFractionDigits_2NoMinFractionDigits.args = {
  formatOptions: { style: "percent", maximumFractionDigits: 2 },
  label: "Tax",
};

export const PercentMin_2Max_2FractionDigits: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
PercentMin_2Max_2FractionDigits.args = {
  formatOptions: {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  label: "Tax",
};

export const PercentMin_2Max_3FractionDigits: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
PercentMin_2Max_3FractionDigits.args = {
  formatOptions: {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  },
  label: "Tax",
};

export const MinValue_0_0FractionDigits: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
MinValue_0_0FractionDigits.args = {
  minValue: 0,
  formatOptions: { maximumFractionDigits: 0 },
};

export const PercentUsingSign: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
PercentUsingSign.args = {
  formatOptions: { style: "percent", signDisplay: "always" },
  label: "Tax",
};

export const QuietDisabled: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
QuietDisabled.args = { isQuiet: true, isDisabled: true, defaultValue: 10 };

export const QuietReadonly: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
QuietReadonly.args = { isQuiet: true, isReadOnly: true, defaultValue: 10 };

export const ValidationStateInvalidIsQuiet: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
ValidationStateInvalidIsQuiet.args = {
  validationState: "invalid",
  isQuiet: true,
};

export const ValidationStateValidIsQuiet: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
ValidationStateValidIsQuiet.args = { validationState: "valid", isQuiet: true };

export const MinValue_0MaxValue_20: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
MinValue_0MaxValue_20.args = { minValue: 0, maxValue: 20 };

export const MinValue_0MaxValue_20Quiet: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
MinValue_0MaxValue_20Quiet.args = { isQuiet: true, minValue: 0, maxValue: 20 };

export const MinValue_50MaxValue_20: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
MinValue_50MaxValue_20.args = { minValue: -50, maxValue: -20 };

export const MinValue_20MaxValue_50: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
MinValue_20MaxValue_50.args = { minValue: 20, maxValue: 50 };

export const MinValue_0DefaultValue_0: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
MinValue_0DefaultValue_0.args = { minValue: 0, defaultValue: 0 };

export const Step_3WithMin_2Max_21: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
Step_3WithMin_2Max_21.args = { step: 3, minValue: 2, maxValue: 21 };

export const IsQuietHideStepper: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
IsQuietHideStepper.args = { isQuiet: true, hideStepper: true };

export const RequiredWithLabel: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
RequiredWithLabel.args = { isRequired: true, necessityIndicator: "label" };

export const LabelTopEnd: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
LabelTopEnd.args = {
  isRequired: true,
  labelPosition: "top",
  labelAlign: "end",
};

export const WithErrorMessageLabelPositionSide: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
WithErrorMessageLabelPositionSide.args = {
  labelPosition: "side",
  errorMessage: "Please enter a positive number.",
  validationState: "invalid",
};

export const QuietCustomWidth: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
QuietCustomWidth.args = { isQuiet: true, width: "size-3000" };

export const CustomWidthLabelPositionSide: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
CustomWidthLabelPositionSide.args = {
  width: "size-3000",
  labelPosition: "side",
};

export const FocusEvents: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
FocusEvents.args = {
  onBlur: action("onBlur"),
  onFocus: action("onFocus"),
  onFocusChange: action("onFocusChange"),
  onKeyDown: action("onKeyDown"),
  onKeyUp: action("onKeyUp"),
};

export const InputDomEvents: Story<ValenceNumberFieldProps> =
  NumberFieldRender.bind({});
InputDomEvents.args = {
  onCopy: action("onCopy"),
  onCut: action("onCut"),
  onPaste: action("onPaste"),
  onCompositionStart: action("onCompositionStart"),
  onCompositionEnd: action("onCompositionEnd"),
  onCompositionUpdate: action("onCompositionUpdate"),
  onSelect: action("onSelect"),
  onBeforeInput: action("onBeforeInput"),
  onInput: action("onInput"),
};

// storiesOf("NumberField", module)
//   .addParameters({ providerSwitcher: { status: "notice" } })
//   .addDecorator((story) => <ErrorBoundary>{story()}</ErrorBoundary>)
//   .add("default", () => render({}
//     ))
//   .add("defaultValue: 10", () => render({ defaultValue: 10 }
//     ))
//   .add("value: 10", () => render({ value: 10 }
//     ))
//   .add("maximumFractionDigits = 0", () =>
//     render({ formatOptions: { maximumFractionDigits: 0 } }
//     ))
//   .add("currency", () =>
//     render({
//       formatOptions: { style: "currency", currency: "EUR" },
//       label: "Price",
//     }
//     ))
//   .add("percent", () =>
//     render({ formatOptions: { style: "percent" }, label: "Tax" }
//     ))
//   .add("percent, max fraction digits: 2, no min fraction digits", () =>
//     render({
//       formatOptions: { style: "percent", maximumFractionDigits: 2 },
//       label: "Tax",
//     }
//   ))
//   .add("percent min = 2 max = 2 fraction digits", () =>
//     render({
//       formatOptions: {
//         style: "percent",
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2,
//       },
//       label: "Tax",
//     }
//     ))
//   .add("percent min = 2 max = 3 fraction digits", () =>
//     render({
//       formatOptions: {
//         style: "percent",
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 3,
//       },
//       label: "Tax",
//     }
//   ))
//   .add("minValue = 0, 0 fraction digits", () =>
//     render({ minValue: 0, formatOptions: { maximumFractionDigits: 0 } }
//       ))
//   .add("percent using sign", () =>
//     render({
//       formatOptions: { style: "percent", signDisplay: "always" },
//       label: "Tax",
//     }
//     ))
//   .add("disabled", () => render({ isDisabled: true }
//     ))
//   .add("readonly", () => render({ defaultValue: 10, isReadOnly: true }
//     ))
//   .add("isQuiet", () => render({ isQuiet: true }
//   ))
//   .add("quiet disabled", () =>
//     render({ isQuiet: true, isDisabled: true, defaultValue: 10 }
//   ))
//   .add("quiet readonly", () =>
//     render({ isQuiet: true, isReadOnly: true, defaultValue: 10 }
//   ))
//   .add("validationState: invalid", () => render({ validationState: "invalid" }
//   ))
//   .add("validationState: valid", () => render({ validationState: "valid" }
//   ))
//   .add("validationState: invalid, isQuiet", () =>
//     render({ validationState: "invalid", isQuiet: true }
//   ))
//   .add("validationState: valid, isQuiet", () =>
//     render({ validationState: "valid", isQuiet: true }
//   ))
//   .add("minValue = 0, maxValue = 20", () =>
//     render({ minValue: 0, maxValue: 20 }
//   ))
//   .add("minValue = 0, maxValue = 20, quiet", () =>
//     render({ isQuiet: true, minValue: 0, maxValue: 20 }
//   ))
//   .add("minValue = -50, maxValue = -20", () =>
//     render({ minValue: -50, maxValue: -20 }
//   ))
//   .add("minValue = 20, maxValue = 50", () =>
//     render({ minValue: 20, maxValue: 50 }
//   ))
//   .add("minValue = 0, defaultValue = 0", () =>
//     render({ minValue: 0, defaultValue: 0 }
//   ))
//   .add("step = 5", () => render({ step: 5 }
//   ))
//   .add("step = 3 with min = 2, max = 21", () =>
//     render({ step: 3, minValue: 2, maxValue: 21 }
//   ))
//   .add("autoFocus", () => render({ autoFocus: true }
//   ))
//   .add("hideStepper", () => render({ hideStepper: true }
//   ))
//   .add("isQuiet, hideStepper", () =>
//     render({ isQuiet: true, hideStepper: true }
//   ))
//   .add("required", () => render({ isRequired: true }
//   ))
//   .add("optional", () => render({ necessityIndicator: "label" }
//   ))
//   .add("required with label", () =>
//     render({ isRequired: true, necessityIndicator: "label" }
//   ))
//   .add("label top end", () =>
//     render({ isRequired: true, labelPosition: "top", labelAlign: "end" }
//   ))
//   .add("label side", () => render({ isRequired: true, labelPosition: "side" }
//   ))
//   .add("no visible label", () =>
//     renderNoLabel({ isRequired: true, "aria-label": "Width" }
//   ))
//   .add("quiet no visible label", () =>
//     renderNoLabel({ isQuiet: true, isRequired: true, "aria-label": "Width" }
//   ))
//   .add("quiet no visible label hidestepper", () =>
//     renderNoLabel({
//       hideStepper: true,
//       isQuiet: true,
//       isRequired: true,
//       "aria-label": "Width",
//     }
//   ))
//   .add("aria-labelledby", () => (
//     <>
//       <label htmlFor="numberfield" id="label">
//         Width
//       </label>
//       {renderNoLabel({
//         isRequired: true,
//         id: "numberfield",
//         "aria-labelledby": "label",
//       })}
//     </>
//   ))
//   .add("with description, no visible label", () =>
//     renderNoLabel({
//       "aria-label": "Age",
//       description: "Please select your age.",
//     }
//     ))
//   .add("with error message, labelPosition: side", () =>
//     render({
//       labelPosition: "side",
//       errorMessage: "Please enter a positive number.",
//       validationState: "invalid",
//     }
//     ))
//   .add("custom width", () => render({ width: "size-3000" }))
//   .add("quiet custom width", () =>
//     render({ isQuiet: true, width: "size-3000" }
//     ))
//   .add("custom width no visible label", () =>
//     renderNoLabel({
//       width: "size-3000",
//       isRequired: true,
//       "aria-label": "Width",
//     }
//     ))
//   .add("custom width, labelPosition=side", () =>
//     render({ width: "size-3000", labelPosition: "side" }
//     ))
//   .add("controlled", () => (<NumberFieldControlled />
//   ))
//   .add("currency switcher", () => (<NumberFieldWithCurrencySelect />
//   ))
//   .add("flexed", () => (renderSet()
//   ))
//   .add("min width", () => render({ width: 0 }
//     ))
//   .add("focus events", () =>
//     render({
//       onBlur: action("onBlur"),
//       onFocus: action("onFocus"),
//       onFocusChange: action("onFocusChange"),
//       onKeyDown: action("onKeyDown"),
//       onKeyUp: action("onKeyUp"),
//     }
//     ))
//   .add("input dom events", () =>
//     render({
//       onCopy: action("onCopy"),
//       onCut: action("onCut"),
//       onPaste: action("onPaste"),
//       onCompositionStart: action("onCompositionStart"),
//       onCompositionEnd: action("onCompositionEnd"),
//       onCompositionUpdate: action("onCompositionUpdate"),
//       onSelect: action("onSelect"),
//       onBeforeInput: action("onBeforeInput"),
//       onInput: action("onInput"),
//     }
//   ));

// function renderNoLabel(props: any = {}) {
//   return (
//     <NumberField
//       {...props}
//       onChange={action("onChange")}
//       UNSAFE_className="custom_classname"
//     />
//   );
// }

// function renderSet() {
//   return (
//     <Flex width="100%" gap="size-200" alignItems="end">
//       <NumberField label="Grows" flexGrow={1} />
//       <NumberField label="Static" />
//       <NumberField aria-label="Grows" flexGrow={1} />
//       <NumberField aria-label="Static" />
//     </Flex>
//   );
// }

// function NumberFieldControlled(props) {
//   let [value, setValue] = useState(10);
//   return (
//     <NumberField
//       {...props}
//       formatOptions={{ style: "currency", currency: "EUR" }}
//       value={value}
//       onChange={chain(setValue, action("onChange"))}
//       label="Price"
//     />
//   );
// }

// function NumberFieldWithCurrencySelect(props) {
//   let [value, setValue] = useState(10);
//   let [currency, setCurrency] = useState("EUR");
//   let [currencySign, setCurrencySign] = useState("standard");
//   let [currencyDisplay, setCurrencyDisplay] = useState("symbol");
//   return (
//     <Form>
//       <NumberField
//         label="Price"
//         {...props}
//         formatOptions={{
//           style: "currency",
//           currency,
//           currencySign,
//           currencyDisplay,
//         }}
//         value={value}
//         onChange={chain(setValue, action("onChange"))}
//       />
//       <Picker
//         onSelectionChange={(item) => setCurrency(String(item))}
//         label="Choose Currency"
//         selectedKey={currency}
//         items={[
//           { label: "Euro", value: "EUR" },
//           { label: "US Dollar", value: "USD" },
//           { label: "Japanese Yen", value: "JPY" },
//           { label: "Saudi Riyal", value: "SAR" },
//         ]}
//       >
//         {(item) => <Item key={item.value}>{item.label}</Item>}
//       </Picker>
//       <Picker
//         onSelectionChange={(item) => setCurrencySign(String(item))}
//         label="Currency Sign"
//         selectedKey={currencySign}
//         items={[
//           { label: "Standard", value: "standard" },
//           { label: "Accounting", value: "accounting" },
//         ]}
//       >
//         {(item) => <Item key={item.value}>{item.label}</Item>}
//       </Picker>
//       <Picker
//         onSelectionChange={(item) => setCurrencyDisplay(String(item))}
//         label="Currency Display"
//         selectedKey={currencyDisplay}
//         items={[
//           { label: "Symbol", value: "symbol" },
//           { label: "Narrow Symbol", value: "narrowSymbol" },
//           { label: "Code", value: "code" },
//           { label: "Name", value: "name" },
//         ]}
//       >
//         {(item) => <Item key={item.value}>{item.label}</Item>}
//       </Picker>
//     </Form>
//   );
// }

// class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return (
//         <div>Your browser may not support this set of Intl.Format options.</div>
//       );
//     }

//     return this.props.children;
//   }
// }
