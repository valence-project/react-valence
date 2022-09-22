import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useLocale, useLocalizedStringFormatter } from "@react-aria/i18n";
import { usePagination } from "@react-aria/pagination";

// @react-valence https://valence.austinpittman.net
import { ActionButton } from "@react-valence/button";
import { classNames } from "@react-valence/utils";
import { TextField } from "@react-valence/textfield";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { PaginationBase } from "@types-valence/pagination";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { usePaginationState } from "@valence-stately/pagination";

// @valence-icons
import ChevronLeft from "@valence-icons/ui/ArrowLeftSLine";
import ChevronRight from "@valence-icons/ui/ArrowRightSLine";

// @valence-styles
import styles from "@valence-styles/components/pagination/vars.module.scss";
import typographyStyles from "@valence-styles/components/typography/vars.module.scss";

// @ts-ignore
import intlMessages from "../intl";

export function PaginationInput(props: PaginationBase) {
  props = Object.assign({}, { defaultValue: 1 }, props);
  props = useProviderProps(props);
  let state = usePaginationState(props);
  let { prevButtonProps, nextButtonProps, textProps } = usePagination(
    props,
    state
  );
  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  let { direction } = useLocale();
  const { maxValue } = props;

  return (
    <nav
      className={classNames(
        styles,
        "Pagination",
        "Pagination--explicit"
      )}
    >
      <ActionButton {...prevButtonProps} isQuiet>
        {direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
      </ActionButton>
      <TextField
        {...textProps}
        value={state.value}
        onChange={state.onChange}
        UNSAFE_className={classNames(styles, "Pagination-input")}
      />
      <span
        className={classNames(
          typographyStyles,
          "Body--secondary",
          classNames(styles, "Pagination-counter")
        )}
      >
        {stringFormatter.format("page_count", { n: maxValue })}
      </span>
      <ActionButton {...nextButtonProps} isQuiet>
        {direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
      </ActionButton>
    </nav>
  );
}
