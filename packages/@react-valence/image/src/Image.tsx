import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  useDOMRef,
  useSlotProps,
  useStyleProps,
} from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceImageProps } from "@types-valence/image";

// @valence-styles
import styles from "@valence-styles/components/image/vars.module.scss";

// incomplete component for show right now

function Image(props: ValenceImageProps, ref: DOMRef<HTMLDivElement>) {
  /* Slots should be able to pass an alt for default behavior, but in Images, the child may know better. */
  let userProvidedAlt = props.alt;
  props = useSlotProps(props, "image");
  props = useProviderProps(props);
  let { objectFit, src, alt, ...otherProps } = props;
  let { styleProps } = useStyleProps(otherProps);
  let domRef = useDOMRef(ref);

  if (alt == null) {
    console.warn(
      "The `alt` prop was not provided to an image. " +
        'Add `alt` text for screen readers, or set `alt=""` prop to indicate that the image ' +
        "is decorative or redundant with displayed text and should not be announced by screen readers."
    );
  }

  return (
    <div
      {...filterDOMProps(props)}
      {...styleProps}
      className={classNames(styles, styleProps.className)}
      style={{
        ...styleProps.style,
        overflow: "hidden",
      }}
      ref={domRef}
    >
      <img
        src={src}
        alt={userProvidedAlt || alt}
        style={{ objectFit }}
        className={classNames(styles, "Image-img")}
      />
    </div>
  );
}

/**
 * Image is used to insert and display an image within a component.
 */
const _Image = React.forwardRef(Image);
export { _Image as Image };
