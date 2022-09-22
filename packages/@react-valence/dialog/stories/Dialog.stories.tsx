import { Story as _Story } from "@ladle/react";
import { Calendar } from "@react-valence/calendar";
import { DateValue, ValenceCalendarProps } from "@types-valence/calendar";

import { action } from "@ladle/react";
import { ActionButton, Button } from "@react-valence/button";
import { AlertDialog, Dialog, DialogTrigger } from "../";
import { ButtonGroup } from "@react-valence/buttongroup";
import { Checkbox } from "@react-valence/checkbox";
import { Content, Footer, Header } from "@react-valence/view";
import { Divider } from "@react-valence/divider";
import { Flex } from "@react-valence/layout";
import { Form } from "@react-valence/form";
import { Heading, Text } from "@react-valence/text";
import { Image } from "@react-valence/image";
import { Item, Picker } from "@react-valence/picker";
import { Radio, RadioGroup } from "@react-valence/radio";
import React, { useState } from "react";
import { ValenceAlertDialogProps } from "@types-valence/dialog";
import { TextField } from "@react-valence/textfield";

/**
 * Helper type so `bind` returns the actual Story type.
 * From Adobe, might not need
 */

interface Story<T> extends _Story<T> {
  bind: (
    this: ThisParameterType<typeof Function.bind>,
    thisArg: Parameters<typeof Function.bind>[0],
    ...argArray: Parameters<typeof Function.bind>[1][]
  ) => _Story<T>;
}

export default {
  title: "Dialog",
  component: Dialog
};

const AccordionRenderPropsTemplate: Story<ValenceCalendarProps<DateValue>> = (
  args
) => (
<div style={{ display: "flex", maxWidth:'400px', margin: "100px 0" }}>
      <DialogTrigger defaultOpen>
        <ActionButton>Trigger</ActionButton>
        {(close) => (
          <Dialog {...args} maxWidth={'900px'}>
            <Heading>The Heading</Heading>
            <Header>The Header</Header>
            <Divider />
            <Content>
              <Flex UNSAFE_style={{ padding: "10px" }}>
                <Text flexGrow={1} flexBasis={0}>
                  Column number one. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </Text>
                <Divider
                  flexShrink={0}
                  marginStart={10}
                  marginEnd={10}
                  orientation="vertical"
                  size="S"
                />
                <Text flexGrow={1} flexBasis={0}>
                  Column number two. Eleifend quam adipiscing vitae proin
                  sagittis nisl. Diam donec adipiscing tristique risus.
                </Text>
              </Flex>
            </Content>
            <ButtonGroup>
              <Button variant="primary" onPress={close}>
                Primary
              </Button>
              <Button variant="cta" onPress={close} autoFocus>
                CTA
              </Button>
            </ButtonGroup>
          </Dialog>
        )}
      </DialogTrigger>
    </div>
);

export const Default = AccordionRenderPropsTemplate.bind({});
Default.storyName = "Default";
Default.args = {
};