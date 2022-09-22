import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { clamp } from "@react-aria/utils";
import { useLocale } from "@react-aria/i18n";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceSliderProps } from "@types-valence/slider";

// @valence-styles
import styles from "@valence-styles/components/slider/vars.module.scss";

import {
  SliderBase,
  SliderBaseChildArguments,
  SliderBaseProps,
} from "./SliderBase";
import { SliderThumb } from "./SliderThumb";

function Slider(props: ValenceSliderProps, ref: FocusableRef<HTMLDivElement>) {
  let {
    onChange,
    onChangeEnd,
    value,
    defaultValue,
    isFilled,
    fillOffset,
    trackGradient,
    getValueLabel,
    ...otherProps
  } = props;

  let baseProps: Omit<SliderBaseProps, "children"> = {
    ...otherProps,
    // Normalize `value: number[]` to `value: number`
    value: value != null ? [value] : undefined,
    defaultValue: defaultValue != null ? [defaultValue] : undefined,
    onChange: (v: number[]): void => {
      onChange?.(v[0]);
    },
    onChangeEnd: (v: number[]): void => {
      onChangeEnd?.(v[0]);
    },
    getValueLabel: getValueLabel ? ([v]) => getValueLabel(v) : undefined,
  };

  let { direction } = useLocale();

  return (
    <SliderBase
      {...baseProps}
      ref={ref}
      classes={{
        "Slider--filled": isFilled && fillOffset == null,
      }}
      style={
        // @ts-ignore
        {
          "--valence-slider-track-gradient":
            trackGradient &&
            `linear-gradient(to ${
              direction === "ltr" ? "right" : "left"
            }, ${trackGradient.join(", ")})`,
        }
      }
    >
      {({ trackRef, inputRef, state }: SliderBaseChildArguments) => {
        fillOffset =
          fillOffset != null
            ? clamp(
                fillOffset,
                state.getThumbMinValue(0),
                state.getThumbMaxValue(0)
              )
            : fillOffset;
        let cssDirection = direction === "rtl" ? "right" : "left";

        let lowerTrack = (
          <div
            className={classNames(styles, "Slider-track")}
            style={{
              width: `${state.getThumbPercent(0) * 100}%`,
              // TODO not sure if it has advantages, but this could also be implemented as CSS calc():
              // .track::before {
              //    background-size: calc((1/ (var(--width)/100)) * 100%);
              //    width: calc(var(--width) * 1%)M
              // }
              // @ts-ignore
              "--valence-track-background-size": `${
                (1 / state.getThumbPercent(0)) * 100
              }%`,
              "--valence-track-background-position":
                direction === "ltr" ? "0" : "100%",
            }}
          />
        );
        let upperTrack = (
          <div
            className={classNames(styles, "Slider-track")}
            style={{
              width: `${(1 - state.getThumbPercent(0)) * 100}%`,
              // @ts-ignore
              "--valence-track-background-size": `${
                (1 / (1 - state.getThumbPercent(0))) * 100
              }%`,
              "--valence-track-background-position":
                direction === "ltr" ? "100%" : "0",
            }}
          />
        );

        let filledTrack = null;
        if (isFilled && fillOffset != null) {
          let width =
            state.getThumbPercent(0) - state.getValuePercent(fillOffset);
          let isRightOfOffset = width > 0;
          let offset = isRightOfOffset
            ? state.getValuePercent(fillOffset)
            : state.getThumbPercent(0);
          filledTrack = (
            <div
              className={classNames(styles, "Slider-fill", {
                "Slider-fill--right": isRightOfOffset,
              })}
              style={{
                [cssDirection]: `${offset * 100}%`,
                width: `${Math.abs(width) * 100}%`,
              }}
            />
          );
        }

        return (
          <>
            {lowerTrack}
            <SliderThumb
              index={0}
              isDisabled={props.isDisabled}
              trackRef={trackRef}
              inputRef={inputRef}
              state={state}
            />
            {upperTrack}
            {filledTrack}
          </>
        );
      }}
    </SliderBase>
  );
}

/**
 * Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.
 */
const _Slider = React.forwardRef(Slider);
export { _Slider as Slider };
