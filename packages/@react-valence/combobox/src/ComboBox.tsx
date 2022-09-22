import React, {
  InputHTMLAttributes,
  ReactElement,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { DismissButton, useOverlayPosition } from "@react-aria/overlays";
import { FocusRing } from "@react-aria/focus";
import { PressResponder, useHover } from "@react-aria/interactions";
import { useComboBox } from "@react-aria/combobox";
import { useFilter } from "@react-aria/i18n";
import { useLayoutEffect } from "@react-aria/utils";
import { useLocalizedStringFormatter } from "@react-aria/i18n";

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
import { Field } from "@react-valence/label";
import { FieldButton } from "@react-valence/button";
import { ListBoxBase, useListBoxLayout } from "@react-valence/listbox";
import { Popover } from "@react-valence/overlays";
import { ProgressCircle } from "@react-valence/progress";
import { TextFieldBase } from "@react-valence/textfield";
import { useProvider, useProviderProps } from "@react-valence/provider";

// @types-valence
import { AriaButtonProps } from "@types-valence/button";
import {
  DOMRefValue,
  FocusableRef,
  FocusableRefValue,
} from "@types-valence/shared";
import { Placement } from "@types-valence/overlays";
import { ValenceComboBoxProps } from "@types-valence/combobox";

// @valence-icons
import ChevronDown from "@valence-icons/ui/ArrowDownSLine";

// @valence-styles
import styles from "@valence-styles/components/inputgroup/vars.module.scss";
import textfieldStyles from "@valence-styles/components/textfield/vars.module.scss";

import comboboxStyles from "./combobox.scss";
import intlMessages from "../intl";
import { MobileComboBox } from "./MobileComboBox";

function ComboBox<T extends object>(
  props: ValenceComboBoxProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  props = useProviderProps(props);

  if (props.placeholder) {
    console.warn(
      "Placeholders are deprecated due to accessibility issues. Please use help text instead. See the docs for details: https://react-spectrum.adobe.com/react-spectrum/ComboBox.html#help-text"
    );
  }

  let isMobile = useIsMobileDevice();
  if (isMobile) {
    // menuTrigger=focus/manual don't apply to mobile combobox
    return <MobileComboBox {...props} menuTrigger="input" ref={ref} />;
  } else {
    return <ComboBoxBase {...props} ref={ref} />;
  }
}

const ComboBoxBase = React.forwardRef(function ComboBoxBase<T extends object>(
  props: ValenceComboBoxProps<T>,
  ref: FocusableRef<HTMLElement>
) {
  let {
    menuTrigger = "input",
    shouldFlip = true,
    direction = "bottom",
    isQuiet,
    loadingState,
    onLoadMore,
  } = props;

  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  let isAsync = loadingState != null;
  let popoverRef = useRef<DOMRefValue<HTMLDivElement>>();
  let unwrappedPopoverRef = useUnwrapDOMRef(popoverRef);
  let buttonRef = useRef<FocusableRefValue<HTMLElement>>();
  let unwrappedButtonRef = useUnwrapDOMRef(buttonRef);
  let listBoxRef = useRef();
  let inputRef = useRef<HTMLInputElement>();
  let domRef = useFocusableRef(ref, inputRef);

  let { contains } = useFilter({ sensitivity: "base" });
  let state = useComboBoxState({
    ...props,
    defaultFilter: contains,
    allowsEmptyCollection: isAsync,
  });
  let layout = useListBoxLayout(state);

  let {
    buttonProps,
    inputProps,
    listBoxProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
  } = useComboBox(
    {
      ...props,
      keyboardDelegate: layout,
      buttonRef: unwrappedButtonRef,
      popoverRef: unwrappedPopoverRef,
      listBoxRef,
      inputRef: inputRef,
      menuTrigger,
    },
    state
  );

  let { overlayProps, placement, updatePosition } = useOverlayPosition({
    targetRef: unwrappedButtonRef,
    overlayRef: unwrappedPopoverRef,
    scrollRef: listBoxRef,
    placement: `${direction} end` as Placement,
    shouldFlip: shouldFlip,
    isOpen: state.isOpen,
    onClose: state.close,
  });

  // Measure the width of the inputfield and the button to inform the width of the menu (below).
  let [menuWidth, setMenuWidth] = useState(null);
  let { scale } = useProvider();

  let onResize = useCallback(() => {
    if (unwrappedButtonRef.current && inputRef.current) {
      let buttonWidth = unwrappedButtonRef.current.offsetWidth;
      let inputWidth = inputRef.current.offsetWidth;
      setMenuWidth(buttonWidth + inputWidth);
    }
  }, [unwrappedButtonRef, inputRef, setMenuWidth]);

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
      <Field
        {...props}
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
        labelProps={labelProps}
        ref={domRef}
      >
        <ComboBoxInput
          {...props}
          isOpen={state.isOpen}
          loadingState={loadingState}
          inputProps={inputProps}
          inputRef={inputRef}
          triggerProps={buttonProps}
          triggerRef={buttonRef}
        />
      </Field>
      <Popover
        isOpen={state.isOpen}
        UNSAFE_style={style}
        UNSAFE_className={classNames(styles, "InputGroup-popover", {
          "InputGroup-popover--quiet": isQuiet,
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
            isAsync && (
              <span className={classNames(comboboxStyles, "no-results")}>
                {loadingState === "loading"
                  ? stringFormatter.format("loading")
                  : stringFormatter.format("noResults")}
              </span>
            )
          }
        />
        <DismissButton onDismiss={() => state.close()} />
      </Popover>
    </>
  );
});

interface ComboBoxInputProps extends ValenceComboBoxProps<unknown> {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>;
  triggerProps: AriaButtonProps;
  triggerRef: RefObject<FocusableRefValue<HTMLElement>>;
  style?: React.CSSProperties;
  className?: string;
  isOpen?: boolean;
}

const ComboBoxInput = React.forwardRef(function ComboBoxInput(
  props: ComboBoxInputProps,
  ref: RefObject<HTMLElement>
) {
  let {
    isQuiet,
    isDisabled,
    validationState,
    inputProps,
    inputRef,
    triggerProps,
    triggerRef,
    autoFocus,
    style,
    className,
    loadingState,
    isOpen,
    menuTrigger,
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
        "Textfield-circleLoader",
        classNames(styles, "InputGroup-input-circleLoader")
      )}
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
          "InputGroup",
          {
            "InputGroup--quiet": isQuiet,
            "is-disabled": isDisabled,
            "InputGroup--invalid": validationState === "invalid",
            "is-hovered": isHovered,
          },
          className
        )}
      >
        <TextFieldBase
          inputProps={inputProps}
          inputRef={inputRef}
          UNSAFE_className={classNames(styles, "InputGroup-field")}
          inputClassName={classNames(styles, "InputGroup-input")}
          validationIconClassName={classNames(
            styles,
            "InputGroup-input-validationIcon"
          )}
          isDisabled={isDisabled}
          isQuiet={isQuiet}
          validationState={validationState}
          // loading circle should only be displayed if menu is open, if menuTrigger is "manual", or first time load (to stop circle from showing up when user selects an option)
          // TODO: add special case for completionMode: complete as well
          isLoading={
            showLoading &&
            (isOpen || menuTrigger === "manual" || loadingState === "loading")
          }
          loadingIndicator={loadingState != null && loadingCircle}
        />
        <PressResponder preventFocusOnPress isPressed={isOpen}>
          <FieldButton
            {...triggerProps}
            ref={triggerRef}
            UNSAFE_className={classNames(styles, "FieldButton")}
            isQuiet={isQuiet}
            validationState={validationState}
          >
            <ChevronDown
              UNSAFE_className={classNames(styles, "Dropdown-chevron")}
            />
          </FieldButton>
        </PressResponder>
      </div>
    </FocusRing>
  );
});

/**
 * ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.
 */
const _ComboBox = React.forwardRef(ComboBox) as <T>(
  props: ValenceComboBoxProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement;
export { _ComboBox as ComboBox };
