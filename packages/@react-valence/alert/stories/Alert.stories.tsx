import _123 from "@valence-icons/ui/NumbersFill";
import { Alert } from "../";
import CalendarCheckColor from "@valence-icons/ui/Calendar2Fill";
import React from "react";
import { Story as _Story } from "@ladle/react";

import { ValenceAlertProps } from "@types-valence/alert";

/**
 * Helper type so `bind` returns the actual Story type.
 */
 interface Story<T> extends _Story<T> {
  bind: (
    this: ThisParameterType<typeof Function.bind>,
    thisArg: Parameters<typeof Function.bind>[0],
    ...argArray: Parameters<typeof Function.bind>[1][]
  ) => _Story<T>;
}

export default {
  title: "Alert",
  component: Alert,
};

export const Default: Story<ValenceAlertProps> = (args) => (
    <Alert {...args}>
      {args.children}
    </Alert>
);
Default.args = { title: "Info Variant Title", variant: "info", children: "Nesciunt qui veritatis eligendi et quia reiciendis similique qui." };
Default.storyName = 'Info';

export const Warning = Default.bind({});
Warning.args = { variant: 'warning', title: 'Warning Variant Title', children: 'Facere at distinctio animi sunt accusamus similique nihil.'}

export const Help = Default.bind({});
Help.args = { variant: 'help', title: 'Help Variant Title', children: 'Eum id quibusdam neque quidem quod inventore vero voluptas.'}

export const Error = Default.bind({});
Error.args = { variant: 'error', title: 'Error Variant Title', children: 'A tempora hic fugit et eos praesentium.'}

export const AriaLivePolite = Default.bind({});
AriaLivePolite.args = { variant: 'error', title: 'Aria-Live Polite', children: 'Tempore est cupiditate nam qui optio eos accusantium non ipsa.', 'aria-live': 'polite'}
AriaLivePolite.storyName = "AriaLive:Polite";

export const AriaLiveOff = Default.bind({});
AriaLiveOff.storyName = "AriaLive:Off";
AriaLiveOff.args = { variant: 'error', title: 'Aria-Live Off', children: 'Excepturi praesentium vitae necessitatibus eius voluptate delectus voluptatum.', 'aria-live': 'off'}