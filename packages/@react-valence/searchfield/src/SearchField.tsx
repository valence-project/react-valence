import React, { forwardRef, RefObject, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useSearchField } from "@react-aria/searchfield";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useSearchFieldState } from "@react-stately/searchfield";

// @react-valence https://valence.austinpittman.net
import { classNames, useSlotProps } from "@react-valence/utils";
import { ClearButton } from "@react-valence/button";
import { TextFieldBase } from "@react-valence/textfield";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { ValenceSearchFieldProps } from "@types-valence/searchfield";
import { TextFieldRef } from "@types-valence/textfield";

// @valence-icons
import Search from "@valence-icons/ui/Search2Line";

// @valence-styles
import styles from "@valence-styles/components/search/vars.module.scss";

function SearchField(
  props: ValenceSearchFieldProps,
  ref: RefObject<TextFieldRef>
) {
  props = useSlotProps(props, "searchfield");
  props = useProviderProps(props);
  let defaultIcon = <Search data-testid="searchicon" />;

  let {
    icon = defaultIcon,
    isDisabled,
    UNSAFE_className,
    placeholder,
    ...otherProps
  } = props;

  if (placeholder) {
    console.warn(
      "Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/SearchField.html#help-text"
    );
  }

  let state = useSearchFieldState(props);
  let inputRef = useRef<HTMLInputElement>();
  let {
    labelProps,
    inputProps,
    clearButtonProps,
    descriptionProps,
    errorMessageProps,
  } = useSearchField(props, state, inputRef);

  let clearButton = (
    <ClearButton
      {...clearButtonProps}
      preventFocus
      UNSAFE_className={classNames(styles, "ClearButton")}
      isDisabled={isDisabled}
    />
  );

  return (
    <TextFieldBase
      {...otherProps}
      labelProps={labelProps}
      inputProps={inputProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      UNSAFE_className={classNames(
        styles,
        "Search",
        "Textfield",
        {
          "is-disabled": isDisabled,
          "is-quiet": props.isQuiet,
          "Search--invalid": props.validationState === "invalid",
          "Search--valid": props.validationState === "valid",
        },
        UNSAFE_className
      )}
      inputClassName={classNames(styles, "Search-input")}
      ref={ref}
      inputRef={inputRef}
      isDisabled={isDisabled}
      icon={icon}
      wrapperChildren={state.value !== "" && !props.isReadOnly && clearButton}
    />
  );
}

/**
 * A SearchField is a text field designed for searches.
 */
let _SearchField = forwardRef(SearchField);
export { _SearchField as SearchField };
