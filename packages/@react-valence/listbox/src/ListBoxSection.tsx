import React, { Fragment, ReactNode, useContext, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { layoutInfoToStyle, useVirtualizerItem } from "@react-aria/virtualizer";
import { useListBoxSection } from "@react-aria/listbox";
import { useLocale } from "@react-aria/i18n";
import { useSeparator } from "@react-aria/separator";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { ReusableView } from "@react-stately/virtualizer";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @types-valence
import { Node } from "@types-valence/shared";

// @valence-styles
import styles from "@valence-styles/components/menu/vars.module.scss";

import { ListBoxContext } from "./ListBoxContext";

interface ListBoxSectionProps<T> {
  reusableView: ReusableView<Node<T>, unknown>;
  header: ReusableView<Node<T>, unknown>;
  children?: ReactNode;
}

/** @private */
export function ListBoxSection<T>(props: ListBoxSectionProps<T>) {
  let { children, reusableView, header } = props;
  let item = reusableView.content;
  let { headingProps, groupProps } = useListBoxSection({
    heading: item.rendered,
    "aria-label": item["aria-label"],
  });

  let { separatorProps } = useSeparator({
    elementType: "li",
  });

  let headerRef = useRef();
  useVirtualizerItem({
    reusableView: header,
    ref: headerRef,
  });

  let { direction } = useLocale();
  let state = useContext(ListBoxContext);

  return (
    <Fragment>
      <div
        role="presentation"
        ref={headerRef}
        style={layoutInfoToStyle(header.layoutInfo, direction)}
      >
        {item.key !== state.collection.getFirstKey() && (
          <div
            {...separatorProps}
            className={classNames(styles, "Menu-divider")}
          />
        )}
        {item.rendered && (
          <div
            {...headingProps}
            className={classNames(styles, "Menu-sectionHeading")}
          >
            {item.rendered}
          </div>
        )}
      </div>
      <div
        {...groupProps}
        style={layoutInfoToStyle(reusableView.layoutInfo, direction)}
        className={classNames(styles, "Menu")}
      >
        {children}
      </div>
    </Fragment>
  );
}
