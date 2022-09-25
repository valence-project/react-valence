import React, { Fragment, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useBreadcrumbItem } from "@react-aria/breadcrumbs";
import { useHover } from "@react-aria/interactions";
import { useLocale } from "@react-aria/i18n";

// @react-valence https://valence.austinpittman.net
import { classNames, getWrappedElement } from "@react-valence/utils";

// @types-valence
import { BreadcrumbItemProps } from "@types-valence/breadcrumbs";

// @valence-icons
import ChevronRight from "@valence-icons/ui/ArrowRightSLine";

// @valence-styles
import styles from "@valence-styles/components/breadcrumb/vars.module.scss";

export function BreadcrumbItem(props: BreadcrumbItemProps) {
  let { children, isCurrent, isDisabled } = props;

  let { direction } = useLocale();
  let ref = useRef();
  let { itemProps } = useBreadcrumbItem(
    {
      ...props,
      elementType: typeof children === "string" ? "span" : "a",
    },
    ref
  );
  let { hoverProps, isHovered } = useHover(props);

  let element = React.cloneElement(getWrappedElement(children), {
    ...mergeProps(itemProps, hoverProps),
    ref,
    className: classNames(styles, "Breadcrumbs-itemLink", {
      "is-disabled": !isCurrent && isDisabled,
      "is-hovered": isHovered,
    }),
  });

  return (
    <Fragment>
      <FocusRing focusRingClass={styles["focus-ring"]}>
        {element}
      </FocusRing>
      {isCurrent === false && (
        <ChevronRight
          {...{
            UNSAFE_className: classNames(styles, "Breadcrumbs-itemSeparator", {
              "is-reversed": direction === "rtl",
            }),
          }}
        />
      )}
    </Fragment>
  );
}
