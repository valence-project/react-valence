import React, {
  HTMLAttributes,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { DismissButton } from "@react-aria/overlays";
import { FocusRing, FocusScope } from "@react-aria/focus";
import { focusSafely } from "@react-aria/focus";
import { mergeProps, useId } from "@react-aria/utils";
import { setInteractionModality, useHover } from "@react-aria/interactions";
import { useButton } from "@react-aria/button";
import { useComboBox } from "@react-aria/combobox";
import { useDialog } from "@react-aria/dialog";
import { useField } from "@react-aria/label";
import { useFilter } from "@react-aria/i18n";
import { useLocalizedStringFormatter } from "@react-aria/i18n";
import { useOverlayTrigger } from "@react-aria/overlays";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { ComboBoxState, useComboBoxState } from "@react-stately/combobox";

// @react-valence https://valence.austinpittman.net
import { classNames, unwrapDOMRef } from "@react-valence/utils";
import { ClearButton } from "@react-valence/button";
import { Field } from "@react-valence/label";
import { ListBoxBase, useListBoxLayout } from "@react-valence/listbox";
import { ProgressCircle } from "@react-valence/progress";
import { TextFieldBase } from "@react-valence/textfield";
import { Tray } from "@react-valence/overlays";
import { useFocusableRef } from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { AriaButtonProps } from "@types-valence/button";
import {
  FocusableRef,
  FocusableRefValue,
  ValidationState,
} from "@types-valence/shared";
import { ValenceComboBoxProps } from "@types-valence/combobox";

// @valence-icons
import Alert from "@valence-icons/ui/AlertFill";
import Check from "@valence-icons/ui/CheckFill";
import ChevronDown from "@valence-icons/ui/ArrowDownSLine";

// @valence-styles
import buttonStyles from "@valence-styles/components/button/vars.module.scss";
import labelStyles from "@valence-styles/components/fieldlabel/vars.module.scss";
import searchStyles from "@valence-styles/components/search/vars.module.scss";
import styles from "@valence-styles/components/inputgroup/vars.module.scss";
import textfieldStyles from "@valence-styles/components/textfield/vars.module.scss";

import comboboxStyles from "./combobox.scss";
import intlMessages from "../intl";

export const MobileComboBox = React.forwardRef(function MobileComboBox<
  T extends object
>(props: ValenceComboBoxProps<T>, ref: FocusableRef<HTMLElement>) {
  props = useProviderProps(props);

  let { isQuiet, isDisabled, validationState, isReadOnly } = props;

  let { contains } = useFilter({ sensitivity: "base" });
  let state = useComboBoxState({
    ...props,
    defaultFilter: contains,
    allowsEmptyCollection: true,
    // Needs to be false here otherwise we double up on commitSelection/commitCustomValue calls when
    // user taps on underlay (i.e. initial tap will call setFocused(false) -> commitSelection/commitCustomValue via onBlur,
    // then the closing of the tray will call setFocused(false) again due to cleanup effect)
    shouldCloseOnBlur: false,
  });

  let buttonRef = useRef<HTMLElement>();
  let domRef = useFocusableRef(ref, buttonRef);
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "listbox" },
    state,
    buttonRef
  );

  let { labelProps, fieldProps } = useField({
    ...props,
    labelElementType: "span",
  });

  // Focus the button and show focus ring when clicking on the label
  labelProps.onClick = () => {
    if (!props.isDisabled) {
      buttonRef.current.focus();
      setInteractionModality("keyboard");
    }
  };

  let onClose = () => state.commit();

  return (
    <>
      <Field
        {...props}
        labelProps={labelProps}
        elementType="span"
        ref={domRef}
        includeNecessityIndicatorInAccessibilityName
      >
        <ComboBoxButton
          {...mergeProps(triggerProps, fieldProps, {
            autoFocus: props.autoFocus,
          })}
          ref={buttonRef}
          isQuiet={isQuiet}
          isDisabled={isDisabled}
          isPlaceholder={!state.inputValue}
          validationState={validationState}
          onPress={() => !isReadOnly && state.open(null, "manual")}
        >
          {state.inputValue || props.placeholder || ""}
        </ComboBoxButton>
      </Field>
      <Tray
        isOpen={state.isOpen}
        onClose={onClose}
        isFixedHeight
        isNonModal
        {...overlayProps}
      >
        <ComboBoxTray
          {...props}
          onClose={onClose}
          overlayProps={overlayProps}
          state={state}
        />
      </Tray>
    </>
  );
});

interface ComboBoxButtonProps extends AriaButtonProps {
  isQuiet?: boolean;
  isDisabled?: boolean;
  isPlaceholder?: boolean;
  validationState?: ValidationState;
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const ComboBoxButton = React.forwardRef(function ComboBoxButton(
  props: ComboBoxButtonProps,
  ref: RefObject<HTMLElement>
) {
  let {
    isQuiet,
    isDisabled,
    isPlaceholder,
    validationState,
    children,
    style,
    className,
  } = props;
  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  let valueId = useId();
  let invalidId = useId();
  let validationIcon =
    validationState === "invalid" ? (
      <Alert
        id={invalidId}
        aria-label={stringFormatter.format("invalid")}
      />
    ) : (
      <Check />
    );

  let validation = React.cloneElement(validationIcon, {
    UNSAFE_className: classNames(
      textfieldStyles,
      "Textfield-validationIcon",
      classNames(styles, "InputGroup-input-validationIcon")
    ),
  });

  let { hoverProps, isHovered } = useHover({});
  let { buttonProps, isPressed } = useButton(
    {
      ...props,
      "aria-labelledby": [
        props["aria-labelledby"],
        props["aria-label"] && !props["aria-labelledby"] ? props.id : null,
        valueId,
        validationState === "invalid" ? invalidId : null,
      ]
        .filter(Boolean)
        .join(" "),
      elementType: "div",
    },
    ref
  );

  return (
    <FocusRing
      focusClass={classNames(styles, "is-focused")}
      focusRingClass={classNames(styles, "focus-ring")}
    >
      <div
        {...mergeProps(hoverProps, buttonProps)}
        aria-haspopup="dialog"
        ref={ref as RefObject<HTMLDivElement>}
        style={{ ...style, outline: "none" }}
        className={classNames(
          styles,
          "InputGroup",
          {
            "InputGroup--quiet": isQuiet,
            "is-disabled": isDisabled,
            "InputGroup--invalid": validationState === "invalid",
            "is-hovered": isHovered,
          },
          classNames(comboboxStyles, "mobile-combobox"),
          className
        )}
      >
        <div
          className={classNames(
            textfieldStyles,
            "Textfield",
            {
              "Textfield--invalid": validationState === "invalid",
              "Textfield--valid": validationState === "valid",
              "Textfield--quiet": isQuiet,
            },
            classNames(styles, "InputGroup-field")
          )}
        >
          <div
            className={classNames(
              textfieldStyles,
              "Textfield-input",
              {
                "is-hovered": isHovered,
                "is-placeholder": isPlaceholder,
                "is-disabled": isDisabled,
              },
              classNames(
                styles,
                "InputGroup-input",
                classNames(labelStyles, "Field-field")
              ),
              classNames(comboboxStyles, "mobile-input")
            )}
          >
            <span
              id={valueId}
              className={classNames(comboboxStyles, "mobile-value")}
            >
              {children}
            </span>
          </div>
          {validationState ? validation : null}
        </div>
        <div
          className={classNames(
            buttonStyles,
            "FieldButton",
            {
              "FieldButton--quiet": isQuiet,
              "is-active": isPressed,
              "is-disabled": isDisabled,
              "FieldButton--invalid": validationState === "invalid",
              "is-hovered": isHovered,
            },
            classNames(styles, "FieldButton")
          )}
        >
          <ChevronDown
            UNSAFE_className={classNames(styles, "Dropdown-chevron")}
          />
        </div>
      </div>
    </FocusRing>
  );
});

interface ComboBoxTrayProps extends ValenceComboBoxProps<unknown> {
  state: ComboBoxState<unknown>;
  overlayProps: HTMLAttributes<HTMLElement>;
  loadingIndicator?: ReactElement;
  onClose: () => void;
}

function ComboBoxTray(props: ComboBoxTrayProps) {
  let {
    // completionMode = 'suggest',
    state,
    isDisabled,
    validationState,
    label,
    overlayProps,
    loadingState,
    onLoadMore,
    onClose,
  } = props;

  let timeout = useRef(null);
  let [showLoading, setShowLoading] = useState(false);
  let inputRef = useRef<HTMLInputElement>();
  let buttonRef = useRef<FocusableRefValue<HTMLElement>>();
  let popoverRef = useRef<HTMLDivElement>();
  let listBoxRef = useRef<HTMLDivElement>();
  let layout = useListBoxLayout(state);
  let stringFormatter = useLocalizedStringFormatter(intlMessages);

  let { inputProps, listBoxProps, labelProps } = useComboBox(
    {
      ...props,
      // completionMode,
      keyboardDelegate: layout,
      buttonRef: unwrapDOMRef(buttonRef),
      popoverRef: popoverRef,
      listBoxRef,
      inputRef,
    },
    state
  );

  React.useEffect(() => {
    focusSafely(inputRef.current);

    // When the tray unmounts, set state.isFocused (i.e. the tray input's focus tracker) to false.
    // This is to prevent state.isFocused from being set to true when the tray closes via tapping on the underlay
    // (FocusScope attempts to restore focus to the tray input when tapping outside the tray due to "contain")
    // Have to do this manually since React doesn't call onBlur when a component is unmounted: https://github.com/facebook/react/issues/12363
    return () => {
      state.setFocused(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let { dialogProps } = useDialog(
    {
      "aria-labelledby": useId(labelProps.id),
    },
    popoverRef
  );

  // Override the role of the input to "searchbox" instead of "combobox".
  // Since the listbox is always visible, the combobox role doesn't really give us anything.
  // VoiceOver on iOS reads "double tap to collapse" when focused on the input rather than
  // "double tap to edit text", as with a textbox or searchbox. We'd like double tapping to
  // open the virtual keyboard rather than closing the tray.
  inputProps.role = "searchbox";
  inputProps["aria-haspopup"] = "listbox";
  delete inputProps.onTouchEnd;

  let clearButton = (
    <ClearButton
      preventFocus
      aria-label={stringFormatter.format("clear")}
      excludeFromTabOrder
      onPress={() => {
        state.setInputValue("");
        inputRef.current.focus();
      }}
      UNSAFE_className={classNames(searchStyles, "ClearButton")}
      isDisabled={isDisabled}
    />
  );

  let loadingCircle = (
    <ProgressCircle
      aria-label={stringFormatter.format("loading")}
      size="S"
      isIndeterminate
      UNSAFE_className={classNames(
        searchStyles,
        "Search-circleLoader",
        classNames(textfieldStyles, "Textfield-circleLoader")
      )}
    />
  );

  // Close the software keyboard on scroll to give the user a bigger area to scroll.
  // But only do this if scrolling with touch, otherwise it can cause issues with touch
  // screen readers.
  let isTouchDown = useRef(false);
  let onTouchStart = () => {
    isTouchDown.current = true;
  };

  let onTouchEnd = () => {
    isTouchDown.current = false;
  };

  let onScroll = useCallback(() => {
    if (
      !inputRef.current ||
      document.activeElement !== inputRef.current ||
      !isTouchDown.current
    ) {
      return;
    }

    popoverRef.current.focus();
  }, [inputRef, popoverRef, isTouchDown]);

  let inputValue = inputProps.value;
  let lastInputValue = useRef(inputValue);
  useEffect(() => {
    if (loadingState === "filtering" && !showLoading) {
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
    } else if (loadingState !== "filtering") {
      // If loading is no longer happening, clear any timers and hide the loading circle
      setShowLoading(false);
      clearTimeout(timeout.current);
      timeout.current = null;
    }

    lastInputValue.current = inputValue;
  }, [loadingState, inputValue, showLoading]);

  let onKeyDown = (e) => {
    // Close virtual keyboard if user hits Enter w/o any focused options
    if (e.key === "Enter" && state.selectionManager.focusedKey == null) {
      popoverRef.current.focus();
    } else {
      inputProps.onKeyDown(e);
    }
  };

  return (
    <FocusScope restoreFocus contain>
      <div
        {...mergeProps(overlayProps, dialogProps)}
        ref={popoverRef}
        className={classNames(comboboxStyles, "tray-dialog")}
      >
        <DismissButton onDismiss={onClose} />
        <TextFieldBase
          label={label}
          labelProps={labelProps}
          inputProps={{ ...inputProps, onKeyDown }}
          inputRef={inputRef}
          isDisabled={isDisabled}
          isLoading={showLoading && loadingState === "filtering"}
          loadingIndicator={loadingState != null && loadingCircle}
          validationState={validationState}
          labelAlign="start"
          labelPosition="top"
          wrapperChildren={
            (state.inputValue !== "" ||
              loadingState === "filtering" ||
              validationState != null) &&
            !props.isReadOnly &&
            clearButton
          }
          UNSAFE_className={classNames(
            searchStyles,
            "Search",
            "Textfield",
            "Search--loadable",
            {
              "Search--invalid": validationState === "invalid",
              "Search--valid": validationState === "valid",
            },
            classNames(comboboxStyles, "tray-textfield", {
              "has-label": !!props.label,
            })
          )}
          inputClassName={classNames(
            comboboxStyles,
            "tray-textfield-input",
            classNames(searchStyles, "Search-input")
          )}
          validationIconClassName={classNames(
            searchStyles,
            "Search-validationIcon"
          )}
        />
        <ListBoxBase
          {...listBoxProps}
          domProps={{ onTouchStart, onTouchEnd }}
          disallowEmptySelection
          shouldSelectOnPressUp
          focusOnPointerEnter
          layout={layout}
          state={state}
          shouldUseVirtualFocus
          renderEmptyState={() =>
            loadingState !== "loading" && (
              <span className={classNames(comboboxStyles, "no-results")}>
                {stringFormatter.format("noResults")}
              </span>
            )
          }
          UNSAFE_className={classNames(comboboxStyles, "tray-listbox")}
          ref={listBoxRef}
          onScroll={onScroll}
          onLoadMore={onLoadMore}
          isLoading={
            loadingState === "loading" || loadingState === "loadingMore"
          }
        />
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  );
}
