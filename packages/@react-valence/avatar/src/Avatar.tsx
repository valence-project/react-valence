import React, { forwardRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  dimensionValue,
  useDOMRef,
  useSlotProps,
  useStyleProps,
} from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceAvatarProps } from "@types-valence/avatar";

// @valence-styles
import styles from "@valence-styles/components/avatar/vars.module.scss";

const DEFAULT_SIZE = "100px";
const SIZE_RE = /^size-\d+/;

function Avatar(props: ValenceAvatarProps, ref: DOMRef<HTMLImageElement>) {
  props = useSlotProps(props, "avatar");
  const {
    alt = "",
    isDisabled,
    size,
    src,
    ...otherProps
  } = useProviderProps(props);

  const { styleProps } = useStyleProps(otherProps);
  const domRef = useDOMRef(ref);

  const domProps = filterDOMProps(otherProps);

  // Casting `size` as `any` since `isNaN` expects a `number`, but we want it
  // to handle `string` numbers; e.g. '300' as opposed to 300
  const sizeValue =
    typeof size !== "number" && (SIZE_RE.test(size) || !isNaN(size as any))
      ? dimensionValue(DEFAULT_SIZE) // override disallowed size values
      : dimensionValue(size || DEFAULT_SIZE);

  return (
    <img
      {...{
        ...styleProps,
        ...domProps,
        alt,
        className: classNames(
          styles,
          "Avatar",
          {
            "is-disabled": isDisabled,
          },
          styleProps.className
        ),
        ref: domRef,
        src,
        style: {
          ...styleProps.style,
          ...(sizeValue && { height: sizeValue, width: sizeValue }),
        },
      }}
    />
  );
}

/**
 * An avatar is a thumbnail representation of an entity, such as a user or an organization.
 */
const _Avatar = forwardRef(Avatar);
export { _Avatar as Avatar };
