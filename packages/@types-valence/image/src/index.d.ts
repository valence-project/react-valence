// @types-valence
import { DOMProps, StyleProps } from "@types-valence/shared";

export interface ImageProps {
  /**
   * The URL of the image.
   */
  src: string;
  /**
   * Text description of the image.
   */
  alt?: string;
  /**
   * Sets the Image [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) style.
   */
  objectFit?: any; // move to styleProps for images and type better
}

export interface ValenceImageProps extends ImageProps, DOMProps, StyleProps {
  /**
   * A slot to place the image in.
   * @default 'image'
   */
  slot?: string;
}
