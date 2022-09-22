import React, {
  forwardRef,
  InputHTMLAttributes,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { DismissButton, useOverlayPosition } from "@react-aria/overlays";
import { FocusRing } from "@react-aria/focus";
import { useFilter, useLocalizedStringFormatter } from "@react-aria/i18n";
import { useHover } from "@react-aria/interactions";
import { useLayoutEffect } from "@react-aria/utils";
import { useSearchAutocomplete } from "@react-aria/autocomplete";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useComboBoxState } from "@react-stately/combobox";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  useFocusableRef,
  useIsMobileDevice,
  useResizeObserver,
  useUnwrapDOMRef,
} from "@react-valence/utils";
import { ClearButton } from "@react-valence/button";
import { Field } from "@react-valence/label";
import { ListBoxBase, useListBoxLayout } from "@react-valence/listbox";
import { Popover } from "@react-valence/overlays";
import { ProgressCircle } from "@react-valence/progress";
import { TextFieldBase } from "@react-valence/textfield";
import { useProvider, useProviderProps } from "@react-valence/provider";

// @types-valence
import { AriaButtonProps } from "@types-valence/button";
import { DOMRefValue, FocusableRef } from "@types-valence/shared";
import { Placement } from "@types-valence/overlays";
import { ValenceSearchAutocompleteProps } from "@types-valence/autocomplete";

// @valence-icons
import Search from "@valence-icons/ui/SearchFill";

// @valence-styles
import searchStyles from "@valence-styles/components/search/vars.module.scss";
import styles from "@valence-styles/components/inputgroup/vars.module.scss";
import textfieldStyles from "@valence-styles/components/textfield/vars.module.scss";

import intlMessages from "../intl";

import { MobileSearchAutocomplete } from "./MobileSearchAutocomplete";

function SearchAutocomplete<T extends object>(
  props: ValenceSearchAutocompleteProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  props = useProviderProps(props);

  if (props.placeholder) {
    console.warn(
      "Placeholders are deprecated due to accessibility issues. Please use help text instead."
    );
  }

  let isMobile = useIsMobileDevice();
  if (isMobile) {
    // menuTrigger=focus/manual don't apply to mobile searchwithin
    return (
      <MobileSearchAutocomplete {...props} menuTrigger="input" ref={ref} />
    );
  } else {
    return <SearchAutocompleteBase {...props} ref={ref} />;
  }
}

const SearchAutocompleteBase = React.forwardRef(function SearchAutocompleteBase<
  T extends object
>(props: ValenceSearchAutocompleteProps<T>, ref: FocusableRef<HTMLElement>) {
  props = useProviderProps(props);

  let {
    menuTrigger = "input",
    shouldFlip = true,
    direction = "bottom",
    isQuiet,
    loadingState,
    onLoadMore,
    onSubmit = () => {},
  } = props;

  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  let isAsync = loadingState != null;
  let popoverRef = useRef<DOMRefValue<HTMLDivElement>>();
  let unwrappedPopoverRef = useUnwrapDOMRef(popoverRef);
  let listBoxRef = useRef();
  let inputRef = useRef<HTMLInputElement>();
  let domRef = useFocusableRef(ref, inputRef);

  let { contains } = useFilter({ sensitivity: "base" });
  let state = useComboBoxState({
    ...props,
    defaultFilter: contains,
    allowsEmptyCollection: isAsync,
    allowsCustomValue: true,
    onSelectionChange: (key) => key !== null && onSubmit(null, key),
    selectedKey: undefined,
    defaultSelectedKey: undefined,
  });
  let layout = useListBoxLayout(state);

  let { inputProps, listBoxProps, labelProps, clearButtonProps } =
    useSearchAutocomplete(
      {
        ...props,
        keyboardDelegate: layout,
        popoverRef: unwrappedPopoverRef,
        listBoxRef,
        inputRef,
        menuTrigger,
      },
      state
    );

  let { overlayProps, placement, updatePosition } = useOverlayPosition({
    targetRef: inputRef,
    overlayRef: unwrappedPopoverRef,
    scrollRef: listBoxRef,
    placement: `${direction} end` as Placement,
    shouldFlip: shouldFlip,
    isOpen: state.isOpen,
    onClose: state.close,
  });

  // Measure the width of the inputfield to inform the width of the menu (below).
  let [menuWidth, setMenuWidth] = useState(null);
  let { scale } = useProvider();

  let onResize = useCallback(() => {
    if (inputRef.current) {
      let inputWidth = inputRef.current.offsetWidth;
      setMenuWidth(inputWidth);
    }
  }, [inputRef, setMenuWidth]);

  useResizeObserver({
    ref: domRef,
    onResize: onResize,
  });

  useLayoutEffect(onResize, [scale, onResize]);

  // Update position once the ListBox has rendered. This ensures that
  // it flips properly when it doesn't fit in the available space.
  // TODO: add ResizeObserver to useOverlayPosition so we don't need this.
  useLayoutEffect(() => {
    if (state.isOpen) {
      requestAnimationFrame(() => {
        updatePosition();
      });
    }
  }, [state.isOpen, updatePosition]);

  let style = {
    ...overlayProps.style,
    width: isQuiet ? null : menuWidth,
    minWidth: isQuiet
      ? `calc(${menuWidth}px + calc(2 * var(--valence-dropdown-quiet-offset)))`
      : menuWidth,
  };

  return (
    <>
      <Field {...props} labelProps={labelProps} ref={domRef}>
        <SearchAutocompleteInput
          {...props}
          isOpen={state.isOpen}
          loadingState={loadingState}
          inputProps={inputProps}
          inputRef={inputRef}
          clearButtonProps={clearButtonProps}
        />
      </Field>
      <Popover
        isOpen={state.isOpen}
        UNSAFE_style={style}
        UNSAFE_className={classNames(styles, "valence-InputGroup-popover", {
          "valence-InputGroup-popover--quiet": isQuiet,
        })}
        ref={popoverRef}
        placement={placement}
        hideArrow
        isNonModal
        isDismissable={false}
      >
        <ListBoxBase
          {...listBoxProps}
          ref={listBoxRef}
          disallowEmptySelection
          autoFocus={state.focusStrategy}
          shouldSelectOnPressUp
          focusOnPointerEnter
          layout={layout}
          state={state}
          shouldUseVirtualFocus
          isLoading={loadingState === "loadingMore"}
          onLoadMore={onLoadMore}
          renderEmptyState={() =>
            isAsync && <span>{stringFormatter.format("noResults")}</span>
          }
        />
        <DismissButton onDismiss={() => state.close()} />
      </Popover>
    </>
  );
});

interface SearchAutocompleteInputProps
  extends ValenceSearchAutocompleteProps<unknown> {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>;
  style?: React.CSSProperties;
  className?: string;
  isOpen?: boolean;
  clearButtonProps: AriaButtonProps;
}

const SearchAutocompleteInput = React.forwardRef(
  function SearchAutocompleteInput(
    props: SearchAutocompleteInputProps,
    ref: RefObject<HTMLElement>
  ) {
    let searchIcon = <Search data-testid="searchicon" />;

    let {
      icon = searchIcon,
      isQuiet,
      isDisabled,
      isReadOnly,
      validationState,
      inputProps,
      inputRef,
      autoFocus,
      style,
      className,
      loadingState,
      isOpen,
      menuTrigger,
      clearButtonProps,
    } = props;
    let { hoverProps, isHovered } = useHover({});
    let stringFormatter = useLocalizedStringFormatter(intlMessages);
    let timeout = useRef(null);
    let [showLoading, setShowLoading] = useState(false);

    let loadingCircle = (
      <ProgressCircle
        aria-label={stringFormatter.format("loading")}
        size="S"
        isIndeterminate
        UNSAFE_className={classNames(
          textfieldStyles,
          "valence-Textfield-circleLoader",
          classNames(styles, "valence-InputGroup-input-circleLoader")
        )}
      />
    );

    let clearButton = (
      <ClearButton
        {...clearButtonProps}
        preventFocus
        UNSAFE_className={classNames(searchStyles, "valence-ClearButton")}
        isDisabled={isDisabled}
      />
    );

    let isLoading = loadingState === "loading" || loadingState === "filtering";
    let inputValue = inputProps.value;
    let lastInputValue = useRef(inputValue);
    useEffect(() => {
      if (isLoading && !showLoading) {
        if (timeout.current === null) {
          timeout.current = setTimeout(() => {
            setShowLoading(true);
          }, 500);
        }

        // If user is typing, clear the timer and restart since it is a new request
        if (inputValue !== lastInputValue.current) {
          clearTimeout(timeout.current);
          timeout.current = setTimeout(() => {
            setShowLoading(true);
          }, 500);
        }
      } else if (!isLoading) {
        // If loading is no longer happening, clear any timers and hide the loading circle
        setShowLoading(false);
        clearTimeout(timeout.current);
        timeout.current = null;
      }

      lastInputValue.current = inputValue;
    }, [isLoading, showLoading, inputValue]);

    return (
      <FocusRing
        within
        isTextInput
        focusClass={classNames(styles, "is-focused")}
        focusRingClass={classNames(styles, "focus-ring")}
        autoFocus={autoFocus}
      >
        <div
          {...hoverProps}
          ref={ref as RefObject<HTMLDivElement>}
          style={style}
          className={classNames(
            styles,
            "valence-InputGroup",
            {
              "valence-InputGroup--quiet": isQuiet,
              "is-disabled": isDisabled,
              "valence-InputGroup--invalid": validationState === "invalid",
              "is-hovered": isHovered,
            },
            className
          )}
        >
          <TextFieldBase
            inputProps={inputProps}
            inputRef={inputRef}
            UNSAFE_className={classNames(
              searchStyles,
              "valence-Search",
              "valence-Textfield",
              {
                "is-disabled": isDisabled,
                "is-quiet": isQuiet,
                "valence-Search--invalid": validationState === "invalid",
                "valence-Search--valid": validationState === "valid",
              }
            )}
            inputClassName={classNames(searchStyles, "valence-Search-input")}
            isDisabled={isDisabled}
            isQuiet={isQuiet}
            validationState={validationState}
            isLoading={
              showLoading &&
              (isOpen || menuTrigger === "manual" || loadingState === "loading")
            }
            loadingIndicator={loadingState != null && loadingCircle}
            icon={icon}
            wrapperChildren={inputValue !== "" && !isReadOnly && clearButton}
          />
        </div>
      </FocusRing>
    );
  }
);

/**
 * A SearchAutocomplete is a searchfield that supports a dynamic list of suggestions.
 */
let _SearchAutocomplete = forwardRef(SearchAutocomplete);
export { _SearchAutocomplete as SearchAutocomplete };
