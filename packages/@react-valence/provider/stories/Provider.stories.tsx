import { Button } from "@react-valence/button";
import { Checkbox, CheckboxGroup } from "@react-valence/checkbox";
import { ComboBox } from "@react-valence/combobox";
import customTheme from "./custom-theme.scss";
import { Flex } from "@react-valence/layout";
import { Form } from "@react-valence/form";
import { Item, Picker } from "@react-valence/picker";
import { NumberField } from "@react-valence/numberfield";
import { Provider } from "../";
import { Radio, RadioGroup } from "@react-valence/radio";
import React from "react";
import scaleLarge from "@valence-styles/vars/large.module.scss";
import scaleMedium from "@valence-styles/vars/medium.module.scss";
import { SearchField } from "@react-valence/searchfield";
import { SearchWithin } from "@react-valence/searchwithin";
import { Story } from "@ladle/react";
import { Switch } from "@react-valence/switch";
import { TextField } from "@react-valence/textfield";
import { useBreakpoint } from "@react-valence/utils";

import { ProviderProps } from "@react-valence/provider";

const THEME = {
  light: customTheme,
  medium: scaleMedium,
  large: scaleLarge,
};

const ProviderRender: Story<ProviderProps> = (props) => {
  return (
    <Provider {...props} UNSAFE_style={{ padding: "20px 100px" }}>
      <Form>
        <Flex>
          {" "}
          {/* Extra div via Flex so that the button does not expand to 100% width */}
          <Button variant="primary">I am a button</Button>
        </Flex>
        <CheckboxGroup defaultValue={["dragons"]} label="Pets">
          <Checkbox value="dogs">Dogs</Checkbox>
          <Checkbox value="cats">Cats</Checkbox>
          <Checkbox value="dragons">Dragons</Checkbox>
        </CheckboxGroup>
        <ComboBox label="More Animals">
          <Item key="red panda">Red Panda</Item>
          <Item key="aardvark">Aardvark</Item>
          <Item key="kangaroo">Kangaroo</Item>
          <Item key="snake">Snake</Item>
        </ComboBox>
        <NumberField label="Years lived there" />
        <RadioGroup label="A radio group">
          <Radio value="dogs">Dogs</Radio>
          <Radio value="cats">Cats</Radio>
          <Radio value="horses">Horses</Radio>
        </RadioGroup>
        <SearchField label="Search" />
        <SearchWithin label="Search">
          <SearchField />
          <Picker name="favorite-color3" label="Favorite color searchwithin">
            <Item key="red">Red</Item>
            <Item key="orange">Orange</Item>
            <Item key="yellow">Yellow</Item>
            <Item key="green">Green</Item>
            <Item key="blue">Blue</Item>
            <Item key="purple">Purple</Item>
          </Picker>
        </SearchWithin>
        <Switch isSelected>Dogs!</Switch>
        <TextField
          label="A text field"
          marginTop="size-100"
          necessityIndicator="label"
          value="dummy value"
        />
      </Form>
    </Provider>
  );
};

export const Default: Story<ProviderProps> = ProviderRender.bind({});

export const ColorSchemeDark: Story<ProviderProps> = ProviderRender.bind({});
ColorSchemeDark.args = { colorScheme: "dark" };
ColorSchemeDark.storyName = "ColorScheme:Dark";

export const ColorSchemeLight: Story<ProviderProps> = ProviderRender.bind({});
ColorSchemeLight.args = { colorScheme: "light" };
ColorSchemeLight.storyName = "ColorScheme:Light";

export const ScaleLarge: Story<ProviderProps> = ProviderRender.bind({});
ScaleLarge.args = { scale: "large" };
ScaleLarge.storyName = "Scale:Large";

export const ScaleMedium: Story<ProviderProps> = ProviderRender.bind({});
ScaleMedium.args = { scale: "medium" };
ScaleMedium.storyName = "Scale:Medium";

export const Quiet: Story<ProviderProps> = ProviderRender.bind({});
Quiet.args = { isQuiet: true };
Quiet.storyName = "Quiet";

export const Emphasized: Story<ProviderProps> = ProviderRender.bind({});
Emphasized.args = { isEmphasized: true };
Emphasized.storyName = "Emphasized";

export const Disabled: Story<ProviderProps> = ProviderRender.bind({});
Disabled.args = { isDisabled: true };
Disabled.storyName = "Disabled";

export const ReadOnly: Story<ProviderProps> = ProviderRender.bind({});
ReadOnly.args = { isReadOnly: true };
ReadOnly.storyName = "ReadOnly";

export const Required: Story<ProviderProps> = ProviderRender.bind({});
Required.args = { isRequired: true };
Required.storyName = "Required";

const NestedColorSchemesRender: Story<ProviderProps> = (props) => {
  return (
    <Provider
      colorScheme="dark"
      UNSAFE_style={{ padding: 50, textAlign: "center", width: 500 }}
    >
      <Button variant="primary">I am a dark button</Button>
      <Provider
        colorScheme="light"
        UNSAFE_style={{ padding: 50, margin: 50, textAlign: "center" }}
      >
        <Button variant="primary">I am a light button</Button>
      </Provider>
    </Provider>
  );
};
export const NestedColorSchemes: Story<ProviderProps> =
  NestedColorSchemesRender.bind({});

export const NestedPropsRender: Story<ProviderProps> = (props) => {
  return (
    <Provider isDisabled>
      <Button variant="primary">I am disabled</Button>
      <Provider isQuiet>
        <Button variant="primary">I am disabled and quiet</Button>
      </Provider>
    </Provider>
  );
};
NestedPropsRender.storyName = "NestedProps";

export const CustomTheme: Story<ProviderProps> = ProviderRender.bind({});
CustomTheme.args = { theme: THEME };

export const ResponsiveStyleProps: Story<ProviderProps> = (props) => {
  return (
    <Provider UNSAFE_style={{ padding: 50 }}>
      <div>
        <TextField
          label="A text field"
          width={{
            base: "size-800",
            S: "size-1000",
            M: "size-2000",
            L: "size-3000",
          }}
        />
      </div>
      <Button
        isHidden={{ base: false, S: false, M: false, L: true }}
        marginTop={{ base: "size-100", M: "size-1000" }}
        variant="primary"
      >
        This button is hidden in large display.
      </Button>
    </Provider>
  );
};

export const ResponsiveCustomStyleProps: Story<ProviderProps> = (props) => {
  let Breakpoint = () => {
    let { matchedBreakpoints } = useBreakpoint();
    let breakpoint = matchedBreakpoints[0];
    let width = {
      base: "size-1600",
      XS: "size-2000",
      S: "size-2400",
      M: "size-3000",
      L: "size-3400",
      XL: "size-4600",
      XXL: "size-6000",
    };
    return (
      <>
        <Button variant="primary" width={width}>
          Button with {breakpoint} breakpoint.
        </Button>
        <div>width: {width[breakpoint]}</div>
      </>
    );
  };
  return (
    <Provider
      breakpoints={{ S: 480, M: 640, L: 1024 }}
      UNSAFE_style={{ padding: 50 }}
    >
      <Breakpoint />
    </Provider>
  );
};
ResponsiveCustomStyleProps.storyName = "ResponsiveCustomStyleProps";

export const BreakpointOmitted: Story<ProviderProps> = (props) => {
  let Breakpoint = () => {
    let { matchedBreakpoints } = useBreakpoint();
    let breakpoint = matchedBreakpoints[0];
    let width = { base: "size-1600", S: "size-2400", L: "size-3400" };
    return (
      <>
        <p>button's width will be S: 'size-2400' at M viewport.</p>
        <Button variant="primary" width={width}>
          Button with {breakpoint} breakpoint.
        </Button>
      </>
    );
  };
  return (
    <Provider UNSAFE_style={{ padding: 50 }}>
      <Breakpoint />
    </Provider>
  );
};
