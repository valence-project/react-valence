import React, { useCallback, useRef, useState } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useId } from "@react-aria/utils";
import { useLabel } from "@react-aria/label";
import { useLayoutEffect } from "@react-aria/utils";
import { useLocalizedStringFormatter } from "@react-aria/i18n";
import { VisuallyHidden } from "@react-aria/visually-hidden";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  SlotProvider,
  useFocusableRef,
  useResizeObserver,
  useStyleProps,
} from "@react-valence/utils";
import { Field } from "@react-valence/label";
import { useFormProps } from "@react-valence/form";
import { useProvider, useProviderProps } from "@react-valence/provider";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceSearchWithinProps } from "@types-valence/searchwithin";

// @valence-styles
import styles from "@valence-styles/components/searchwithin/vars.module.scss";

import intlMessages from "../intl";

function SearchWithin(
  props: ValenceSearchWithinProps,
  ref: FocusableRef<HTMLElement>
) {
  props = useProviderProps(props);
  props = useFormProps(props);
  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  let { styleProps } = useStyleProps(props);
  let { children, isDisabled, isRequired, label } = props;

  let defaultAriaLabel = stringFormatter.format("search");
  if (!label && !props["aria-label"] && !props["aria-labelledby"]) {
    props["aria-label"] = defaultAriaLabel;
  }
  // Get label and group props (aka fieldProps)
  let { labelProps, fieldProps } = useLabel(props);

  // Grab aria-labelledby for the search input. Will need the entire concatenated aria-labelledby if it exists since pointing at the group id doesn’t
  // suffice if there is a external label
  let labelledBy =
    fieldProps["aria-labelledby"] ||
    (fieldProps["aria-label"] !== defaultAriaLabel ? fieldProps.id : "");
  let pickerId = useId();

  let domRef = useFocusableRef(ref);
  let groupRef = useRef<HTMLDivElement>();

  // Measure the width of the field to inform the width of the menu.
  let [menuWidth, setMenuWidth] = useState(null);
  let { scale } = useProvider();

  let onResize = useCallback(() => {
    let shouldUseGroup = !!label;
    let width = shouldUseGroup
      ? groupRef.current?.offsetWidth
      : domRef.current?.offsetWidth;

    if (!isNaN(width)) {
      setMenuWidth(width);
    }
  }, [groupRef, domRef, setMenuWidth, label]);

  useResizeObserver({
    ref: domRef,
    onResize: onResize,
  });

  useLayoutEffect(onResize, [scale, onResize]);

  let defaultSlotValues = {
    isDisabled,
    isRequired,
    label: null,
    isQuiet: false,
    validationState: null,
    description: null,
    errorMessage: null,
    descriptionProps: null,
    errorMessageProps: null,
    "aria-label": null,
  };

  let searchFieldClassName = classNames(
    styles,
    "SearchWithin-searchfield"
  );
  let pickerClassName = classNames(styles, "SearchWithin-picker");
  let visuallyHiddenId = useId();

  let slots = {
    searchfield: {
      ...defaultSlotValues,
      UNSAFE_className: searchFieldClassName,
      // Apply aria-labelledby of group or the group id to searchfield. No need to pass the group id (we want a new one) and aria-label (aria-labelledby will suffice)
      "aria-labelledby": `${labelledBy} ${visuallyHiddenId} ${pickerId}`,
      // When label is provided, input should have id referenced by htmlFor of label, instead of group
      id: label && fieldProps.id,
    },
    picker: {
      ...defaultSlotValues,
      id: pickerId,
      UNSAFE_className: pickerClassName,
      menuWidth,
      align: "end",
      "aria-labelledby": `${labelledBy} ${visuallyHiddenId}`,
    },
  };

  if (label) {
    // When label is provided, input should have id referenced by htmlFor of label, instead of group
    delete fieldProps.id;
  }

  return (
    <Field
      {...props}
      labelProps={labelProps}
      ref={domRef}
      wrapperClassName={classNames(styles, "SearchWithin-container")}
    >
      <div
        {...fieldProps}
        role="group"
        className={classNames(
          styles,
          "SearchWithin",
          styleProps.className
        )}
        ref={groupRef}
      >
        <VisuallyHidden id={visuallyHiddenId}>
          {stringFormatter.format("searchWithin")}
        </VisuallyHidden>
        <SlotProvider slots={slots}>{children}</SlotProvider>
      </div>
    </Field>
  );
}

/**
 * A SearchWithin combines a SearchField and a Picker into a single group. This allows a user to constrain the scope of their search to a particular category, for example.
 */
const _SearchWithin = React.forwardRef(SearchWithin);
export { _SearchWithin as SearchWithin };
