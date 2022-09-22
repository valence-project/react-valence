import React, { Ref, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useColorField } from "@react-aria/color";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useColorFieldState } from "@react-stately/color";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";
import { TextFieldBase } from "@react-valence/textfield";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { ValenceColorFieldProps } from "@types-valence/color";
import { TextFieldRef } from "@types-valence/textfield";

import styles from "./colorfield.scss";

function ColorField(props: ValenceColorFieldProps, ref: Ref<TextFieldRef>) {
  props = useProviderProps(props);
  let {
    // These disabled props are handled by the state hook
    value, // eslint-disable-line @typescript-eslint/no-unused-vars
    defaultValue, // eslint-disable-line @typescript-eslint/no-unused-vars
    onChange, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...otherProps
  } = props;
  let state = useColorFieldState(props);
  let inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
  let { labelProps, inputProps } = useColorField(otherProps, state, inputRef);

  if (props.placeholder) {
    console.warn(
      "Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/ColorField.html#help-text"
    );
  }

  return (
    <TextFieldBase
      {...otherProps}
      ref={ref}
      inputRef={inputRef}
      labelProps={labelProps}
      inputProps={inputProps}
      inputClassName={classNames(styles, "ColorField-input")}
    />
  );
}

/**
 * ColorFields allow users to enter a color in #rrggbb hexadecimal format.
 */
const _ColorField = React.forwardRef(ColorField);
export { _ColorField as ColorField };
