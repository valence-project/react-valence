import React, { useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { mergeProps } from "@react-aria/utils";
import { useFocusRing } from "@react-aria/focus";
import { useHover } from "@react-aria/interactions";
import { useTag } from "@react-aria/tag";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  SlotProvider,
  useSlotProps,
  useStyleProps,
} from "@react-valence/utils";
import { ClearButton } from "@react-valence/button";
import { Text } from "@react-valence/text";

// @types-valence
import { ValenceTagProps } from "@types-valence/tag";

// @valence-styles
import styles from "@valence-styles/components/tags/vars.module.scss";

export function Tag<T>(props: ValenceTagProps<T>) {
  const {
    children,
    isDisabled,
    isRemovable,
    item,
    state,
    onRemove,
    ...otherProps
  } = props;

  // @ts-ignore
  let { styleProps } = useStyleProps(otherProps);
  let { hoverProps, isHovered } = useHover({ isDisabled });
  let { isFocused, isFocusVisible, focusProps } = useFocusRing({
    within: true,
  });
  let tagRef = useRef();
  let tagRowRef = useRef();
  let { clearButtonProps, labelProps, tagProps, tagRowProps } = useTag(
    {
      ...props,
      isDisabled,
      isFocused,
      isRemovable,
      item,
      onRemove,
      tagRef,
      tagRowRef,
    },
    state
  );

  return (
    <div {...tagRowProps} ref={tagRowRef}>
      <div
        {...mergeProps(tagProps, hoverProps, focusProps)}
        className={classNames(
          styles,
          "Tags-item",
          {
            "is-disabled": isDisabled,
            "focus-ring": isFocusVisible,
            "is-focused": isFocused,
            "not-removable": !isRemovable,
            "is-hovered": isHovered,
          },
          styleProps.className
        )}
        ref={tagRef}
      >
        <SlotProvider
          slots={{
            icon: {
              UNSAFE_className: classNames(styles, "Tag-icon"),
              size: "XS",
            },
            text: {
              UNSAFE_className: classNames(styles, "Tag-content", {
                "tags-removable": isRemovable,
              }),
              ...labelProps,
            },
          }}
        >
          {typeof children === "string" ? <Text>{children}</Text> : children}
          {isRemovable && (
            <TagRemoveButton
              item={item}
              {...clearButtonProps}
              UNSAFE_className={classNames(styles, "Tag-action")}
            />
          )}
        </SlotProvider>
      </div>
    </div>
  );
}

function TagRemoveButton(props) {
  props = useSlotProps(props, "tagRemoveButton");
  let { styleProps } = useStyleProps(props);
  let clearBtnRef = useRef();

  return (
    <span {...styleProps} ref={clearBtnRef}>
      <ClearButton preventFocus {...props} />
    </span>
  );
}
