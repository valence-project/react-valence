import { action } from "@ladle/react";
import { Example } from "./Example";
import React from "react";
import { storiesOf } from "@ladle/react";
import { useViewportSize } from "@react-aria/utils";

storiesOf("ActionBar", module)
  .add("default", () => <Example onAction={action("onAction")} />)
  .add("isEmphasized", () => (
    <Example isEmphasized onAction={action("onAction")} />
  ))
  .add("full width", () => {
    let viewport = useViewportSize();
    return (
      <Example
        isEmphasized
        tableWidth="100vw"
        containerHeight={viewport.height}
        isQuiet
        onAction={action("onAction")}
      />
    );
  });
