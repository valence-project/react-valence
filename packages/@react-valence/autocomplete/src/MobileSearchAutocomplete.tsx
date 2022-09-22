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
import { focusSafely } from "@react-aria/focus";
import { FocusScope, useFocusRing } from "@react-aria/focus";
import { mergeProps, useId } from "@react-aria/utils";
import { setInteractionModality, useHover } from "@react-aria/interactions";
import { useButton } from "@react-aria/button";
import { useDialog } from "@react-aria/dialog";
import { useFilter, useLocalizedStringFormatter } from "@react-aria/i18n";
import { useLabel } from "@react-aria/label";
import { useOverlayTrigger } from "@react-aria/overlays";
import { useSearchAutocomplete } from "@react-aria/autocomplete";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { ComboBoxState, useComboBoxState } from "@react-stately/combobox";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";
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
import { FocusableRef, ValidationState } from "@types-valence/shared";
import { ValenceSearchAutocompleteProps } from "@types-valence/autocomplete";

// @valence-icons
import AlertTriangle from "@valence-icons/ui/AlertFill";
import Check from "@valence-icons/ui/CheckFill";
import Search from "@valence-icons/ui/SearchFill";

// @valence-styles
import searchStyles from "@valence-styles/components/search/vars.module.scss";
import styles from "@valence-styles/components/inputgroup/vars.module.scss";
import textfieldStyles from "@valence-styles/components/textfield/vars.module.scss";

import intlMessages from "../intl";

import searchAutocompleteStyles from "./searchautocomplete.scss";

export const MobileSearchAutocomplete = React.forwardRef(
  function MobileSearchAutocomplete<T extends object>(
    props: ValenceSearchAutocompleteProps<T>,
    ref: FocusableRef<HTMLElement>
  ) {
    props = useProviderProps(props);

    let {
      isQuiet,
      isDisabled,
      validationState,
      isReadOnly,
      onSubmit = () => {},
    } = props;

    let { contains } = useFilter({ sensitivity: "base" });
    let state = useComboBoxState({
      ...props,
      defaultFilter: contains,
      allowsEmptyCollection: true,
      // Needs to be false here otherwise we double up on commitSelection/commitCustomValue calls when
      // user taps on underlay (i.e. initial tap will call setFocused(false) -> commitSelection/commitCustomValue via onBlur,
      // then the closing of the tray will call setFocused(false) again due to cleanup effect)
      shouldCloseOnBlur: false,
      allowsCustomValue: true,
      onSelectionChange: (key) => key !== null && onSubmit(null, key),
      selectedKey: undefined,
      defaultSelectedKey: undefined,
    });

    let buttonRef = useRef<HTMLElement>();
    let domRef = useFocusableRef(ref, buttonRef);
    let { triggerProps, overlayProps } = useOverlayTrigger(
      { type: "listbox" },
      state,
      buttonRef
    );

    let { labelProps, fieldProps } = useLabel({
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
          <SearchAutocompleteButton
            {...mergeProps(triggerProps, fieldProps, {
              autoFocus: props.autoFocus,
              icon: props.icon,
            })}
            ref={buttonRef}
            isQuiet={isQuiet}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            isPlaceholder={!state.inputValue}
            validationState={validationState}
            inputValue={state.inputValue}
            clearInput={() => state.setInputValue("")}
            onPress={() => !isReadOnly && state.open(null, "manual")}
          >
            {state.inputValue || props.placeholder || ""}
          </SearchAutocompleteButton>
        </Field>
        <Tray
          isOpen={state.isOpen}
          onClose={onClose}
          isFixedHeight
          isNonModal
          {...overlayProps}
        >
          <SearchAutocompleteTray
            {...props}
            onClose={onClose}
            overlayProps={overlayProps}
            state={state}
          />
        </Tray>
      </>
    );
  }
);

interface SearchAutocompleteButtonProps extends AriaButtonProps {
  icon?: ReactElement;
  isQuiet?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isPlaceholder?: boolean;
  validationState?: ValidationState;
  inputValue?: string;
  clearInput?: () => void;
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const SearchAutocompleteButton = React.forwardRef(
  function SearchAutocompleteButton(
    props: SearchAutocompleteButtonProps,
    ref: RefObject<HTMLElement>
  ) {
    let searchIcon = <Search data-testid="searchicon" />;

    let {
      icon = searchIcon,
      isQuiet,
      isDisabled,
      isReadOnly,
      isPlaceholder,
      validationState,
      inputValue,
      clearInput,
      children,
      style,
      className,
    } = props;
    let stringFormatter = useLocalizedStringFormatter(intlMessages);
    let valueId = useId();
    let invalidId = useId();
    let validationIcon =
      validationState === "invalid" ? (
        <AlertTriangle
          id={invalidId}
          aria-label={stringFormatter.format("invalid")}
        />
      ) : (
        <Check />
      );

    if (icon) {
      icon = React.cloneElement(icon, {
        UNSAFE_className: classNames(textfieldStyles, "valence-Textfield-icon"),
        size: "S",
      });
    }

    let clearButton = (
      <ClearButton
        onPress={(e) => {
          clearInput();
          props.onPress(e);
        }}
        preventFocus
        aria-label={stringFormatter.format("clear")}
        excludeFromTabOrder
        UNSAFE_className={classNames(searchStyles, "valence-ClearButton")}
        isDisabled={isDisabled}
      />
    );

    let validation = React.cloneElement(validationIcon, {
      UNSAFE_className: classNames(
        textfieldStyles,
        "valence-Textfield-validationIcon",
        classNames(styles, "valence-InputGroup-input-validationIcon")
      ),
    });

    let { hoverProps, isHovered } = useHover({});
    let { isFocused, isFocusVisible, focusProps } = useFocusRing();
    let { buttonProps } = useButton(
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
      <div
        {...mergeProps(hoverProps, focusProps, buttonProps)}
        aria-haspopup="dialog"
        ref={ref as RefObject<HTMLDivElement>}
        style={{ ...style, outline: "none" }}
        className={classNames(
          styles,
          "valence-InputGroup",
          {
            "valence-InputGroup--quiet": isQuiet,
            "is-disabled": isDisabled,
            "valence-InputGroup--invalid": validationState === "invalid",
            "is-hovered": isHovered,
            "is-focused": isFocused,
            "focus-ring": isFocusVisible,
          },
          classNames(searchAutocompleteStyles, "mobile-searchautocomplete"),
          className
        )}
      >
        <div
          className={classNames(
            textfieldStyles,
            "valence-Textfield",
            {
              "valence-Textfield--invalid": validationState === "invalid",
              "valence-Textfield--valid": validationState === "valid",
              "valence-Textfield--quiet": isQuiet,
            },
            classNames(searchStyles, "valence-Search", {
              "is-disabled": isDisabled,
              "is-quiet": isQuiet,
              "valence-Search--invalid": validationState === "invalid",
              "valence-Search--valid": validationState === "valid",
            })
          )}
        >
          <div
            className={classNames(
              textfieldStyles,
              "valence-Textfield-input",
              {
                "valence-Textfield-inputIcon": !!icon,
                "is-hovered": isHovered,
                "is-placeholder": isPlaceholder,
                "is-disabled": isDisabled,
                "is-quiet": isQuiet,
                "is-focused": isFocused,
                "focus-ring": isFocusVisible,
              },
              classNames(searchStyles, "valence-Search-input")
            )}
          >
            {icon}
            <span
              id={valueId}
              className={classNames(searchAutocompleteStyles, "mobile-value")}
            >
              {children}
            </span>
          </div>
          {validationState ? validation : null}
          {(inputValue !== "" || validationState != null) &&
            !isReadOnly &&
            clearButton}
        </div>
      </div>
    );
  }
);

interface SearchAutocompleteTrayProps
  extends ValenceSearchAutocompleteProps<unknown> {
  state: ComboBoxState<unknown>;
  overlayProps: HTMLAttributes<HTMLElement>;
  loadingIndicator?: ReactElement;
  onClose: () => void;
}

function SearchAutocompleteTray(props: SearchAutocompleteTrayProps) {
  let searchIcon = <Search data-testid="searchicon" />;

  let {
    // completionMode = 'suggest',
    state,
    icon = searchIcon,
    isDisabled,
    validationState,
    label,
    overlayProps,
    loadingState,
    onLoadMore,
    onClose,
    onSubmit,
  } = props;

  let timeout = useRef(null);
  let [showLoading, setShowLoading] = useState(false);
  let inputRef = useRef<HTMLInputElement>();
  let popoverRef = useRef<HTMLDivElement>();
  let listBoxRef = useRef<HTMLDivElement>();
  let layout = useListBoxLayout(state);
  let stringFormatter = useLocalizedStringFormatter(intlMessages);

  let { inputProps, listBoxProps, labelProps, clearButtonProps } =
    useSearchAutocomplete(
      {
        ...props,
        keyboardDelegate: layout,
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
      {...clearButtonProps}
      preventFocus
      aria-label={stringFormatter.format("clear")}
      excludeFromTabOrder
      UNSAFE_className={classNames(searchStyles, "valence-ClearButton")}
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
        "valence-Search-circleLoader",
        classNames(textfieldStyles, "valence-Textfield-circleLoader")
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
    // Close virtual keyboard, close tray, and fire onSubmit if user hits Enter w/o any focused options
    if (e.key === "Enter" && state.selectionManager.focusedKey == null) {
      popoverRef.current.focus();
      onClose();
      onSubmit(inputValue.toString(), null);
    } else {
      inputProps.onKeyDown(e);
    }
  };

  if (icon) {
    icon = React.cloneElement(icon, {
      UNSAFE_className: classNames(textfieldStyles, "valence-Textfield-icon"),
      size: "S",
    });
  }

  return (
    <FocusScope restoreFocus contain>
      <div
        {...mergeProps(overlayProps, dialogProps)}
        ref={popoverRef}
        className={classNames(searchAutocompleteStyles, "tray-dialog")}
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
          wrapperChildren={
            (state.inputValue !== "" ||
              loadingState === "filtering" ||
              validationState != null) &&
            !props.isReadOnly &&
            clearButton
          }
          icon={icon}
          UNSAFE_className={classNames(
            searchStyles,
            "valence-Search",
            "valence-Textfield",
            "valence-Search--loadable",
            {
              "valence-Search--invalid": validationState === "invalid",
              "valence-Search--valid": validationState === "valid",
            },
            classNames(searchAutocompleteStyles, "tray-textfield", {
              "has-label": !!props.label,
            })
          )}
          inputClassName={classNames(searchStyles, "valence-Search-input")}
          validationIconClassName={classNames(
            searchStyles,
            "valence-Search-validationIcon"
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
              <span
                className={classNames(searchAutocompleteStyles, "no-results")}
              >
                {stringFormatter.format("noResults")}
              </span>
            )
          }
          UNSAFE_className={classNames(
            searchAutocompleteStyles,
            "tray-listbox"
          )}
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
