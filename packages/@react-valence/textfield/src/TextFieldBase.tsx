import React, {
  cloneElement,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactElement,
  Ref,
  RefObject,
  TextareaHTMLAttributes,
  useImperativeHandle,
  useRef,
} from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { FocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useHover } from "@react-aria/interactions";

// @react-valence https://valence.austinpittman.net
import { classNames, createFocusableRef } from "@react-valence/utils";
import { Field } from "../../label/src";

// @types-valence
import { PressEvents } from "@types-valence/shared";
import { ValenceTextFieldProps, TextFieldRef } from "@types-valence/textfield";

// @valence-icons
import AlertIcon from "@valence-icons/ui/AlertFill";
import Check from "@valence-icons/ui/CheckFill";

// @valence-styles
import styles from "@valence-styles/components/textfield/vars.module.scss";

interface TextFieldBaseProps
  extends Omit<ValenceTextFieldProps, "onChange">,
    PressEvents {
  wrapperChildren?: ReactElement | ReactElement[];
  inputClassName?: string;
  validationIconClassName?: string;
  multiLine?: boolean;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  inputProps:
    | InputHTMLAttributes<HTMLInputElement>
    | TextareaHTMLAttributes<HTMLTextAreaElement>;
  descriptionProps?: HTMLAttributes<HTMLElement>;
  errorMessageProps?: HTMLAttributes<HTMLElement>;
  inputRef?: RefObject<HTMLInputElement | HTMLTextAreaElement>;
  loadingIndicator?: ReactElement;
  isLoading?: boolean;
}

function TextFieldBase(props: TextFieldBaseProps, ref: Ref<TextFieldRef>) {
  let {
    validationState,
    icon,
    isQuiet = false,
    isDisabled,
    multiLine,
    autoFocus,
    inputClassName,
    wrapperChildren,
    labelProps,
    inputProps,
    descriptionProps,
    errorMessageProps,
    inputRef: userInputRef,
    isLoading,
    loadingIndicator,
    validationIconClassName,
  } = props;
  let { hoverProps, isHovered } = useHover({ isDisabled });
  let domRef = useRef<HTMLDivElement>(null);
  let defaultInputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  let inputRef = userInputRef || defaultInputRef;

  // Expose imperative interface for ref
  useImperativeHandle(ref, () => ({
    ...createFocusableRef(domRef, inputRef),
    select() {
      if (inputRef.current) {
        inputRef.current.select();
      }
    },
    getInputElement() {
      return inputRef.current;
    },
  }));

  let ElementType: React.ElementType = multiLine ? "textarea" : "input";
  let isInvalid = validationState === "invalid";

  if (icon) {
    let UNSAFE_className = classNames(
      styles,
      icon.props && icon.props.UNSAFE_className,
      "Textfield-icon"
    );

    icon = cloneElement(icon, {
      UNSAFE_className,
      size: "S",
    });
  }

  let validationIcon = isInvalid ? <AlertIcon /> : <Check />;
  let validation = cloneElement(validationIcon, {
    className: styles['Textfield-validationIcon']
  });

  let textField = (
    <div
      className={classNames(styles, "Textfield", {
        "Textfield--invalid": isInvalid,
        "Textfield--valid": validationState === "valid",
        "Textfield--loadable": loadingIndicator,
        "Textfield--quiet": isQuiet,
        "Textfield--multiline": multiLine,
      })}
    >
      <FocusRing
        focusRingClass={classNames(styles, "focus-ring")}
        isTextInput
        autoFocus={autoFocus}
      >
        <ElementType
          {...mergeProps(inputProps, hoverProps)}
          ref={inputRef as any}
          rows={multiLine ? 1 : undefined}
          className={classNames(
            styles,
            "Textfield-input",
            {
              "Textfield-inputIcon": icon,
              "is-hovered": isHovered,
            },
            inputClassName
          )}
        />
      </FocusRing>
      {icon}
      {validationState && !isLoading ? validation : null}
      {isLoading && loadingIndicator}
      {wrapperChildren}
    </div>
  );

  return (
    <Field
      {...props}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      wrapperClassName={classNames(styles, "Textfield-wrapper")}
      showErrorIcon={false}
      ref={domRef}
    >
      {textField}
    </Field>
  );
}

const _TextFieldBase = forwardRef(TextFieldBase);
export { _TextFieldBase as TextFieldBase };
