import React, { CSSProperties, ReactNode, RefObject, useRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useNumberFormatter } from "@react-aria/i18n";
import { useSlider } from "@react-aria/slider";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { SliderState, useSliderState } from "@react-stately/slider";

// @react-valence https://valence.austinpittman.net
import {
  classNames,
  useFocusableRef,
  useStyleProps,
} from "@react-valence/utils";
import { useProviderProps } from "@react-valence/provider";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceBarSliderBase } from "@types-valence/slider";

// @valence-styles
import styles from "@valence-styles/components/slider/vars.module.scss";

export interface SliderBaseChildArguments {
  inputRef: RefObject<HTMLInputElement>;
  trackRef: RefObject<HTMLElement>;
  state: SliderState;
}

export interface SliderBaseProps<T = number[]> extends ValenceBarSliderBase<T> {
  children: (opts: SliderBaseChildArguments) => ReactNode;
  classes?: string[] | Object;
  style?: CSSProperties;
}

function SliderBase(props: SliderBaseProps, ref: FocusableRef<HTMLDivElement>) {
  props = useProviderProps(props);
  let {
    isDisabled,
    children,
    classes,
    style,
    labelPosition = "top",
    getValueLabel,
    showValueLabel = !!props.label,
    formatOptions,
    minValue = 0,
    maxValue = 100,
    ...otherProps
  } = props;

  let { styleProps } = useStyleProps(otherProps);

  // `Math.abs(Math.sign(a) - Math.sign(b)) === 2` is true if the values have a different sign.
  let alwaysDisplaySign =
    Math.abs(Math.sign(minValue) - Math.sign(maxValue)) === 2;
  if (alwaysDisplaySign) {
    if (formatOptions != null) {
      if (!("signDisplay" in formatOptions)) {
        formatOptions = {
          ...formatOptions,
          // @ts-ignore
          signDisplay: "exceptZero",
        };
      }
    } else {
      // @ts-ignore
      formatOptions = { signDisplay: "exceptZero" };
    }
  }

  const formatter = useNumberFormatter(formatOptions);
  const state = useSliderState({
    ...props,
    numberFormatter: formatter,
    minValue,
    maxValue,
  });
  let trackRef = useRef();
  let { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef
  );

  let inputRef = useRef();
  let domRef = useFocusableRef(ref, inputRef);

  let displayValue = "";
  let maxLabelLength = undefined;

  if (typeof getValueLabel === "function") {
    displayValue = getValueLabel(state.values);
    switch (state.values.length) {
      case 1:
        maxLabelLength = Math.max(
          getValueLabel([minValue]).length,
          getValueLabel([maxValue]).length
        );
        break;
      case 2:
        // Try all possible combinations of min and max values.
        maxLabelLength = Math.max(
          getValueLabel([minValue, minValue]).length,
          getValueLabel([minValue, maxValue]).length,
          getValueLabel([maxValue, minValue]).length,
          getValueLabel([maxValue, maxValue]).length
        );
        break;
      default:
        throw new Error("Only sliders with 1 or 2 handles are supported!");
    }
  } else {
    maxLabelLength = Math.max(
      [...formatter.format(minValue)].length,
      [...formatter.format(maxValue)].length
    );
    switch (state.values.length) {
      case 1:
        displayValue = state.getThumbValueLabel(0);
        break;
      case 2:
        // This should really use the NumberFormat#formatRange proposal...
        // https://github.com/tc39/ecma402/issues/393
        // https://github.com/tc39/proposal-intl-numberformat-v3#formatrange-ecma-402-393
        displayValue = `${state.getThumbValueLabel(
          0
        )} – ${state.getThumbValueLabel(1)}`;
        maxLabelLength =
          3 +
          2 *
            Math.max(
              maxLabelLength,
              [...formatter.format(minValue)].length,
              [...formatter.format(maxValue)].length
            );
        break;
      default:
        throw new Error("Only sliders with 1 or 2 handles are supported!");
    }
  }

  let labelNode = (
    <label {...{ className: styles["Slider-label"], ...labelProps }}>
      {props.label}
    </label>
  );

  let valueNode = (
    <output
      {...{
        ...outputProps,
        className: styles["Slider-value"],
        style: maxLabelLength && {
          width: `${maxLabelLength}ch`,
          minWidth: `${maxLabelLength}ch`,
        },
      }}
    >
      {displayValue}
    </output>
  );

  return (
    <div
      {...{
        ref: domRef,
        className: classNames(
          styles,
          "Slider",
          {
            "Slider--positionTop": labelPosition === "top",
            "Slider--positionSide": labelPosition === "side",
            "is-disabled": isDisabled,
          },
          classes,
          styleProps.className
        ),
        style: {
          ...style,
          ...styleProps.style,
        },
        ...groupProps,
      }}
    >
      {props.label && (
        <div
          {...{
            className: styles["Slider-labelContainer"],
            role: "presentation",
          }}
        >
          {props.label && labelNode}
          {labelPosition === "top" && showValueLabel && valueNode}
        </div>
      )}
      <div
        {...{
          className: styles["Slider-controls"],
          ref: trackRef,
          ...trackProps,
          role: "presentation",
        }}
      >
        {children({
          trackRef,
          inputRef,
          state,
        })}
      </div>
      {labelPosition === "side" && (
        <div
          {...{
            className: styles["Slider-valueLabelContainer"],
            role: "presentation",
          }}
        >
          {showValueLabel && valueNode}
        </div>
      )}
    </div>
  );
}

const _SliderBase = React.forwardRef(SliderBase);
export { _SliderBase as SliderBase };
