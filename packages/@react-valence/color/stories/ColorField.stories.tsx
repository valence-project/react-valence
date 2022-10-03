import { action, Story } from "@ladle/react";
import { Color, ValenceColorFieldProps } from "@types-valence/color";
import { ColorField } from "../";
import { Flex } from "@react-valence/layout";
import { parseColor } from "@react-stately/color";
import React, { useState } from "react";
import { useId } from "@react-aria/utils";
import { View } from "@react-valence/view";
import { VisuallyHidden } from "@react-aria/visually-hidden";

const ColorFieldRender: Story<ValenceColorFieldProps> = (args) => {
  return <ColorField label="Primary Color" onChange={() => action} {...args} />;
};

export const Default: Story<ValenceColorFieldProps> = ColorFieldRender.bind({});

export const HasDefaultValue: Story<ValenceColorFieldProps> =
  ColorFieldRender.bind({});
HasDefaultValue.args = { defaultValue: "#abcdef" };

export const Value: Story<ValenceColorFieldProps> = ColorFieldRender.bind({});
Value.args = {
  value: "#FF00AA",
  onChange: console.log,
};

export const AutoFocus: Story<ValenceColorFieldProps> = ColorFieldRender.bind(
  {}
);
AutoFocus.args = { autoFocus: true };

export const IsQuiet: Story<ValenceColorFieldProps> = ColorFieldRender.bind({});
IsQuiet.args = { isQuiet: true };

export const IsReadOnly: Story<ValenceColorFieldProps> = ColorFieldRender.bind(
  {}
);
IsReadOnly.args = { isReadOnly: true };

export const IsDisabled: Story<ValenceColorFieldProps> = ColorFieldRender.bind(
  {}
);
IsDisabled.args = { isDisabled: true };

export const ValidationStateValid: Story<ValenceColorFieldProps> =
  ColorFieldRender.bind({});
ValidationStateValid.args = { validationState: "valid" };

export const ValidationStateInvalid: Story<ValenceColorFieldProps> =
  ColorFieldRender.bind({});
ValidationStateInvalid.args = { validationState: "invalid" };

export const RequiredLabelOptional: Story<ValenceColorFieldProps> = (args) => {
  return (
    <Flex direction="column" gap="size-100">
      <ColorFieldRender isRequired />
      <ColorFieldRender isRequired {...{ necessityIndicator: "label" }} />
      <ColorFieldRender {...{ necessityIndicator: "label" }} />
    </Flex>
  );
};

const ControlledColorField: Story<ValenceColorFieldProps> = (props) => {
  let [color, setColor] = useState<string | Color | null | undefined>(
    props.value
  );
  let onChange = (color: Color | null) => {
    setColor(color);
    if (props.onChange) {
      props.onChange(color);
    }
  };
  let style = color ? { backgroundColor: color.toString("rgb") } : {};
  let id = useId();
  return (
    <Flex direction="row" gap="size-100" alignItems="end">
      <ColorField
        id={id}
        label="Primary Color"
        onChange={onChange}
        value={color}
      />
      <View width="size-400" height="size-400" UNSAFE_style={style}>
        <VisuallyHidden>
          <output htmlFor={id} aria-live="off">
            {color ? color.toString("hex") : ""}
          </output>
        </VisuallyHidden>
      </View>
    </Flex>
  );
};

export const ControlledValue: Story<ValenceColorFieldProps> = (args) => {
  return (
    <ControlledColorField
      value={parseColor("#FF00AA")}
      onChange={action("change")}
    />
  );
};

const RenderNoLabel: Story<ValenceColorFieldProps> = (props) => {
  return <ColorField {...props} onChange={console.log} />;
};

export const NoVisibleLabel: Story<ValenceColorFieldProps> = RenderNoLabel.bind(
  { isRequired: true, "aria-label": "Primary Color" }
);

export const AriaLabeledBy: Story<ValenceColorFieldProps> = (args) => {
  return (
    <>
      <label htmlFor="colorfield" id="label">
        Primary Color
      </label>
      <RenderNoLabel
        {...{
          isRequired: true,
          id: "colorfield",
          "aria-labelledby": "label",
        }}
      />
    </>
  );
};

export const CustomWidthNoVisibleLabel: Story<ValenceColorFieldProps> =
  RenderNoLabel.bind({});
CustomWidthNoVisibleLabel.args = {
  width: "size-3000",
  isRequired: true,
  "aria-label": "Primary Color",
};

export const CustomWidthLabelPositionSide: Story<ValenceColorFieldProps> =
  RenderNoLabel.bind({});
CustomWidthLabelPositionSide.args = {
  width: "size-3000",
  labelPosition: "side",
};

export const CustomWidth_10pxForMinWidth: Story<ValenceColorFieldProps> = (
  args
) => {
  return (
    <Flex direction="column" gap="size-100">
      <ColorFieldRender {...{ width: "10px" }} />
      <div style={{ width: "10px" }}>
        <ColorFieldRender />
      </div>
    </Flex>
  );
};
CustomWidth_10pxForMinWidth.args = { minWidth: "10px" };

export const LabelPositionSide: Story<ValenceColorFieldProps> =
  ColorFieldRender.bind({});
LabelPositionSide.args = {
  labelPosition: "side",
};

export const CustomWidth: Story<ValenceColorFieldProps> = ColorFieldRender.bind(
  {}
);
CustomWidth.args = {
  width: "size-3000",
};
