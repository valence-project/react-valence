import React, { forwardRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { classNames, useDOMRef, useStyleProps } from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceStatusLightProps } from "@types-valence/statuslight";

// @valence-styles
import styles from "@valence-styles/components/statuslight/vars.module.scss";

function StatusLight(
  props: ValenceStatusLightProps,
  ref: DOMRef<HTMLDivElement>
) {
  let { variant, children, isDisabled, role, ...otherProps } =
    useProviderProps(props);
  let domRef = useDOMRef(ref);
  let { styleProps } = useStyleProps(otherProps);

  if (!children && !props["aria-label"]) {
    console.warn(
      "If no children are provided, an aria-label must be specified"
    );
  }

  if (!role && (props["aria-label"] || props["aria-labelledby"])) {
    console.warn("A labelled StatusLight must have a role.");
  }

  return (
    <div
      {...filterDOMProps(otherProps, { labelable: !!role })}
      {...styleProps}
      role={role}
      className={classNames(
        styles,
        "StatusLight",
        `StatusLight--${variant}`,
        {
          "is-disabled": isDisabled,
        },
        styleProps.className
      )}
      ref={domRef}
    >
      {children}
    </div>
  );
}

/**
 * Status lights are used to color code categories and labels commonly found in data visualization.
 * When status lights have a semantic meaning, they should use semantic variant colors.
 */
let _StatusLight = forwardRef(StatusLight);
export { _StatusLight as StatusLight };
