import React, { ReactElement, useCallback, useRef, useState } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { DismissButton, useOverlayPosition } from "@react-aria/overlays";
import { FocusScope } from "@react-aria/focus";
import { HiddenSelect, useSelect } from "@react-aria/select";
import {
  mergeProps,
  useLayoutEffect,
  useResizeObserver,
} from "@react-aria/utils";
import { PressResponder, useHover } from "@react-aria/interactions";
import { useLocalizedStringFormatter } from "@react-aria/i18n";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useSelectState } from "@react-stately/select";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  dimensionValue,
  SlotProvider,
  useDOMRef,
  useIsMobileDevice,
  useSlotProps,
  useUnwrapDOMRef,
} from "@react-valence/utils";
import { Field } from "@react-valence/label";
import { FieldButton } from "../../button/src";
import { ListBoxBase, useListBoxLayout } from "@react-valence/listbox";
import { Popover, Tray } from "@react-valence/overlays";
import { ProgressCircle } from "@react-valence/progress";
import { Text } from "@react-valence/text";
import { useProvider, useProviderProps } from "@react-valence/provider";

// @types-valence
import {
  DOMRef,
  DOMRefValue,
  FocusableRefValue,
  LabelPosition,
} from "@types-valence/shared";
import { Placement } from "@types-valence/overlays";
import { ValencePickerProps } from "@types-valence/select";

// @valence-icons
import ExclamationTriangleFill from "@valence-icons/ui/AlertFill";
import CaretDown from "@valence-icons/ui/ArrowDownSLine";

// @valence-styles
import styles from "@valence-styles/components/dropdown/vars.module.scss";

import intlMessages from "../intl";

function Picker<T extends object>(
  props: ValencePickerProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  props = useSlotProps(props, "picker");
  props = useProviderProps(props);
  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  let {
    autoComplete,
    isDisabled,
    direction = "bottom",
    align = "start",
    shouldFlip = true,
    placeholder = stringFormatter.format("placeholder"),
    validationState,
    isQuiet,
    label,
    labelPosition = "top" as LabelPosition,
    menuWidth,
    name,
    autoFocus,
  } = props;

  let state = useSelectState(props);
  let domRef = useDOMRef(ref);

  let popoverRef = useRef<DOMRefValue<HTMLDivElement>>();
  let unwrappedPopoverRef = useUnwrapDOMRef(popoverRef);
  let triggerRef = useRef<FocusableRefValue<HTMLElement>>();
  let unwrappedTriggerRef = useUnwrapDOMRef(triggerRef);
  let listboxRef = useRef();

  // We create the listbox layout in Picker and pass it to ListBoxBase below
  // so that the layout information can be cached even while the listbox is not mounted.
  // We also use the layout as the keyboard delegate for type to select.
  let layout = useListBoxLayout(state);
  let {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    descriptionProps,
    errorMessageProps,
  } = useSelect(
    {
      ...props,
      keyboardDelegate: layout,
    },
    state,
    unwrappedTriggerRef
  );

  let isMobile = useIsMobileDevice();
  let { overlayProps, placement, updatePosition } = useOverlayPosition({
    targetRef: unwrappedTriggerRef,
    overlayRef: unwrappedPopoverRef,
    scrollRef: listboxRef,
    placement: `${direction} ${align}` as Placement,
    shouldFlip: shouldFlip,
    isOpen: state.isOpen && !isMobile,
    onClose: state.close,
  });

  let { hoverProps, isHovered } = useHover({ isDisabled });

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

  let isLoadingInitial = props.isLoading && state.collection.size === 0;
  let isLoadingMore = props.isLoading && state.collection.size > 0;

  // On small screen devices, the listbox is rendered in a tray, otherwise a popover.
  let listbox = (
    <FocusScope restoreFocus contain={isMobile}>
      <DismissButton onDismiss={() => state.close()} />
      <ListBoxBase
        {...menuProps}
        ref={listboxRef}
        disallowEmptySelection
        autoFocus={state.focusStrategy || true}
        shouldSelectOnPressUp
        focusOnPointerEnter
        layout={layout}
        state={state}
        width={isMobile ? "100%" : undefined}
        // Set max height: inherit so Tray scrolling works
        UNSAFE_style={{ maxHeight: "inherit" }}
        isLoading={isLoadingMore}
        onLoadMore={props.onLoadMore}
      />
      <DismissButton onDismiss={() => state.close()} />
    </FocusScope>
  );

  // Measure the width of the button to inform the width of the menu (below).
  let [buttonWidth, setButtonWidth] = useState(null);
  let { scale } = useProvider();

  let onResize = useCallback(() => {
    if (!isMobile && unwrappedTriggerRef.current) {
      let width = unwrappedTriggerRef.current.offsetWidth;
      setButtonWidth(width);
    }
  }, [unwrappedTriggerRef, setButtonWidth, isMobile]);

  useResizeObserver({
    ref: unwrappedTriggerRef,
    onResize: onResize,
  });

  useLayoutEffect(onResize, [scale, state.selectedKey, onResize]);

  let overlay;
  if (isMobile) {
    overlay = (
      <Tray isOpen={state.isOpen} onClose={state.close}>
        {listbox}
      </Tray>
    );
  } else {
    // If quiet, use the default width, otherwise match the width of the button. This can be overridden by the menuWidth prop.
    // Always have a minimum width of the button width. When quiet, there is an extra offset to add.
    // Not using style props for this because they don't support `calc`.
    let width = isQuiet ? null : buttonWidth;
    let style = {
      ...overlayProps.style,
      width: menuWidth ? dimensionValue(menuWidth) : width,
      minWidth: isQuiet
        ? `calc(${buttonWidth}px + calc(2 * var(--valence-dropdown-quiet-offset)))`
        : buttonWidth,
    };

    overlay = (
      <Popover
        isOpen={state.isOpen}
        UNSAFE_style={style}
        UNSAFE_className={classNames(styles, "Dropdown-popover", {
          "Dropdown-popover--quiet": isQuiet,
        })}
        ref={popoverRef}
        placement={placement}
        hideArrow
        shouldCloseOnBlur
        onClose={state.close}
      >
        {listbox}
      </Popover>
    );
  }

  let contents = state.selectedItem ? state.selectedItem.rendered : placeholder;
  if (typeof contents === "string") {
    contents = <Text>{contents}</Text>;
  }

  let picker = (
    <div
      className={classNames(styles, "Dropdown", {
        "is-invalid": validationState === "invalid",
        "is-disabled": isDisabled,
        "Dropdown--quiet": isQuiet,
      })}
    >
      <HiddenSelect
        autoComplete={autoComplete}
        isDisabled={isDisabled}
        state={state}
        triggerRef={unwrappedTriggerRef}
        label={label}
        name={name}
      />
      <PressResponder {...mergeProps(hoverProps, triggerProps)}>
        <FieldButton
          ref={triggerRef}
          isActive={state.isOpen}
          isQuiet={isQuiet}
          isDisabled={isDisabled}
          validationState={validationState}
          autoFocus={autoFocus}
          UNSAFE_className={classNames(styles, "Dropdown-trigger", {
            "is-hovered": isHovered,
          })}
        >
          <SlotProvider
            slots={{
              icon: {
                UNSAFE_className: classNames(styles, "Icon"),
                size: "S",
              },
              text: {
                ...valueProps,
                UNSAFE_className: classNames(styles, "Dropdown-label", {
                  "is-placeholder": !state.selectedItem,
                }),
              },
              description: {
                isHidden: true,
              },
            }}
          >
            {contents}
          </SlotProvider>
          {isLoadingInitial && (
            <ProgressCircle
              isIndeterminate
              size="S"
              aria-label={stringFormatter.format("loading")}
              UNSAFE_className={classNames(
                styles,
                "Dropdown-progressCircle"
              )}
            />
          )}
          {validationState === "invalid" && !isLoadingInitial && (
            <ExclamationTriangleFill
              UNSAFE_className={classNames(
                styles,
                "Dropdown-invalidIcon"
              )}
            />
          )}
          <CaretDown
            UNSAFE_className={classNames(styles, "Dropdown-chevron")}
          />
        </FieldButton>
      </PressResponder>
      {state.collection.size === 0 ? null : overlay}
    </div>
  );

  let wrapperClassName = label
    ? classNames(styles, "Field", {
        "Dropdown-fieldWrapper--quiet": isQuiet,
        "Dropdown-fieldWrapper--positionSide": labelPosition === "side",
      })
    : "";

  return (
    <Field
      {...props}
      ref={domRef}
      wrapperClassName={wrapperClassName}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      showErrorIcon={false}
      includeNecessityIndicatorInAccessibilityName
      elementType="span"
    >
      {picker}
    </Field>
  );
}

/**
 * Pickers allow users to choose a single option from a collapsible list of options when space is limited.
 */
// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const _Picker = React.forwardRef(Picker) as <T>(
  props: ValencePickerProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReactElement;
export { _Picker as Picker };
