  .add("isQuiet", () => 
    render({ isQuiet: true }
    ))
  .add("labelPosition: side", () => 
  render({ labelPosition: "side" }
  ))
  .add("labelAlign: end", () =>
    render({ labelPosition: "top", labelAlign: "end" }
    ))
  .add("required", () => render({ isRequired: true }
    ))
  .add("required with label", () =>
    render({ isRequired: true, necessityIndicator: "label" }
    ))
  .add("optional", () =>
    render({ necessityIndicator: "label" }
  ))
  .add("no visible label", () => 
    render({ "aria-label": "Date", label: null }
  ))
  .add("quiet no visible label", () =>
    render({ isQuiet: true, "aria-label": "Date", label: null }
  ))
  .add("custom width", () =>
    render({ width: "size-3000" }
  ))
  .add("quiet custom width", () =>
    render({ isQuiet: true, width: "size-3000" }
  ))
  .add("custom width no visible label", () =>
    render({ width: "size-3000", label: null, "aria-label": "Date" }
  ))
  .add("custom width, labelPosition=side", () =>
    render({ width: "size-3000", labelPosition: "side" }
  ))
  .add("description", () => 
  render({ description: "Help text" }
  ))
  .add("errorMessage", () =>
    render({
      errorMessage: "Enter a date after today",
      validationState: "invalid",
    }));