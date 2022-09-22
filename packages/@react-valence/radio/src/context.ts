import React, { useContext } from "react";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { RadioGroupState } from "@react-stately/radio";

interface RadioGroupContext {
  isEmphasized?: boolean;
  name?: string;
  validationState?: "valid" | "invalid";
  state: RadioGroupState;
}

export const RadioContext = React.createContext<RadioGroupContext | null>(null);

export function useRadioProvider(): RadioGroupContext {
  return useContext(RadioContext);
}
