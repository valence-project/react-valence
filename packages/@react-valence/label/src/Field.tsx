import React, {
  ForwardedRef,
  ReactElement,
  RefObject,
  useCallback,
} from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { mergeProps, mergeRefs } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { classNames, useStyleProps } from "@react-valence/utils";
import { Flex } from "@react-valence/layout";
import { useFormProps } from "@react-valence/form";

// @types-valence
import { LabelPosition } from "@types-valence/shared";
import { ValenceFieldProps } from "@types-valence/label";

// @valence-styles
import labelStyles from "@valence-styles/components/fieldlabel/vars.module.scss";

import { HelpText } from "./HelpText";
import { Label } from "./Label";

function Field(props: ValenceFieldProps, ref: RefObject<HTMLElement>) {
  props = useFormProps(props);
  let {
    label,
    labelPosition = "top" as LabelPosition,
    labelAlign,
    isRequired,
    necessityIndicator,
    includeNecessityIndicatorInAccessibilityName,
    validationState,
    description,
    errorMessage,
    isDisabled,
    showErrorIcon,
    children,
    labelProps,
    // Not every component that uses <Field> supports help text.
    descriptionProps = {},
    errorMessageProps = {},
    elementType,
    wrapperClassName,

    ...otherProps
  } = props;
  let { styleProps } = useStyleProps(otherProps);
  let hasHelpText =
    !!description || (errorMessage && validationState === "invalid");
  let mergedRefs = useMergeRefs(
    (children as ReactElement & { ref: RefObject<HTMLElement> }).ref,
    ref
  );

  if (label || hasHelpText) {
    let labelWrapperClass = classNames(
      labelStyles,
      "Field",
      {
        "Field--positionTop": labelPosition === "top",
        "Field--positionSide": labelPosition === "side",
      },
      styleProps.className,
      wrapperClassName
    );

    children = React.cloneElement(
      children,
      mergeProps(children.props, {
        className: classNames(labelStyles, "Field-field"),
      })
    );

    let renderHelpText = () => (
      <HelpText
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
        description={description}
        errorMessage={errorMessage}
        validationState={validationState}
        isDisabled={isDisabled}
        showErrorIcon={showErrorIcon}
      />
    );

    let renderChildren = () => {
      if (labelPosition === "side") {
        return (
          <Flex
            direction="column"
            UNSAFE_className={classNames(labelStyles, "Field-wrapper")}
          >
            {children}
            {hasHelpText && renderHelpText()}
          </Flex>
        );
      }

      return (
        <>
          {children}
          {hasHelpText && renderHelpText()}
        </>
      );
    };

    return (
      <div
        {...styleProps}
        ref={ref as RefObject<HTMLDivElement>}
        className={labelWrapperClass}
      >
        {label && (
          <Label
            {...labelProps}
            labelPosition={labelPosition}
            labelAlign={labelAlign}
            isRequired={isRequired}
            necessityIndicator={necessityIndicator}
            includeNecessityIndicatorInAccessibilityName={
              includeNecessityIndicatorInAccessibilityName
            }
            elementType={elementType}
          >
            {label}
          </Label>
        )}
        {renderChildren()}
      </div>
    );
  }

  return React.cloneElement(
    children,
    mergeProps(children.props, {
      ...styleProps,
      ref: mergedRefs,
    })
  );
}

function useMergeRefs<T>(
  ...refs: ForwardedRef<T>[]
): (instance: T | null) => void {
  return useCallback(mergeRefs(...refs) as (instance: T | null) => void, [
    ...refs,
  ]);
}

let _Field = React.forwardRef(Field);
export { _Field as Field };
