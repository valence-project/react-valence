/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

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

export const ariaLivePolite = Default.bind({});
ariaLivePolite.args = { variant: 'error', title: 'Aria-Live Polite', children: 'Tempore est cupiditate nam qui optio eos accusantium non ipsa.', 'aria-live': 'polite'}

export const ariaLiveOff = Default.bind({});
ariaLiveOff.args = { variant: 'error', title: 'Aria-Live Off', children: 'Excepturi praesentium vitae necessitatibus eius voluptate delectus voluptatum.', 'aria-live': 'off'}


// storiesOf("Alert", module)
//   .addParameters({ providerSwitcher: { status: "negative" } })
//   .add("header", () => render({ title: "info", variant: "info" }))
//   .add("variant: info", () => render({ title: "info", variant: "info" }))
//   .add("variant: help", () => render({ title: "help", variant: "help" }))
//   .add("variant: success", () =>
//     render({ title: "success", variant: "success" })
//   )
//   .add("variant: error", () => render({ title: "error", variant: "error" }))
//   .add("variant: warning", () =>
//     render({ title: "warning", variant: "warning" })
//   )
//   .add("aria-live: polite", () =>
//     render({ title: "error", variant: "error", "aria-live": "polite" })
//   )
//   .add("aria-live: off", () =>
//     render({ title: "error", variant: "error", "aria-live": "off" })
//   );

// function render(props = {}, children = "This is a React Spectrum alert") {
//   return (
//     <Alert {...props}>
//       {children}
//       <_123 />
//       <CalendarCheckColor />
//     </Alert>
//   );
// }
