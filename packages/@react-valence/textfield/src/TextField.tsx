import React, { forwardRef, Ref, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useTextField } from "@react-aria/textfield";

// @react-valence https://valence.austinpittman.net
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { ValenceTextFieldProps, TextFieldRef } from "@types-valence/textfield";

import { TextFieldBase } from "./TextFieldBase";

function TextField(props: ValenceTextFieldProps, ref: Ref<TextFieldRef>) {
  props = useProviderProps(props);

  let inputRef = useRef<HTMLInputElement>(null);
  let { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, inputRef);

  if (props.placeholder) {
    console.warn(
      "Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/TextField.html#help-text"
    );
  }

  return (
    <TextFieldBase
      {...{
        ...props,
        labelProps,
        inputProps,
        descriptionProps,
        errorMessageProps,
        ref,
        inputRef,
      }}
    />
  );
}

/**
 * TextFields are text inputs that allow users to input custom text entries
 * with a keyboard. Various decorations can be displayed around the field to
 * communicate the entry requirements.
 */
const _TextField = forwardRef(TextField);
export { _TextField as TextField };
