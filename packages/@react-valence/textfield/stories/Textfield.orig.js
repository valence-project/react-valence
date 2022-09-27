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

import { action } from "@storybook/addon-actions";
import Info from "@spectrum-icons/workflow/Info";
import React from "react";
import { storiesOf } from "@storybook/react";
import { TextField } from "../";

storiesOf("TextField", module)
  .addParameters({ providerSwitcher: { status: "positive" } })
  .add("with description, error message and validation", () =>
    renderWithDescriptionErrorMessageAndValidation()
  )


function render(props = {}) {
  return (
    <TextField
      label="Street address"
      onChange={action("change")}
      onFocus={action("focus")}
      onBlur={action("blur")}
      UNSAFE_className="custom_classname"
      {...props}
    />
  );
}

function renderWithDescriptionErrorMessageAndValidation() {
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
}
