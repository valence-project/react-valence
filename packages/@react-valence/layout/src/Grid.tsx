import React, { forwardRef } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { filterDOMProps } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import {
  baseStyleProps,
  dimensionValue,
  passthroughStyle,
  StyleHandlers,
  useDOMRef,
  useStyleProps,
} from "@react-valence/utils";

// @types-valence
import { DimensionValue, DOMRef } from "@types-valence/shared";
import { GridProps } from "@types-valence/layout";

const gridStyleProps: StyleHandlers = {
  ...baseStyleProps,
  autoFlow: ["gridAutoFlow", passthroughStyle],
  autoColumns: ["gridAutoColumns", gridDimensionValue],
  autoRows: ["gridAutoRows", gridDimensionValue],
  areas: ["gridTemplateAreas", gridTemplateAreasValue],
  columns: ["gridTemplateColumns", gridTemplateValue],
  rows: ["gridTemplateRows", gridTemplateValue],
  gap: ["gap", dimensionValue],
  rowGap: ["rowGap", dimensionValue],
  columnGap: ["columnGap", dimensionValue],
  justifyItems: ["justifyItems", passthroughStyle],
  justifyContent: ["justifyContent", passthroughStyle],
  alignItems: ["alignItems", passthroughStyle],
  alignContent: ["alignContent", passthroughStyle],
};

function Grid(props: GridProps, ref: DOMRef<HTMLDivElement>) {
  let { children, ...otherProps } = props;
  let { styleProps } = useStyleProps(otherProps, gridStyleProps);
  styleProps.style.display = "grid"; // inline-grid?
  let domRef = useDOMRef(ref);

  return (
    <div {...filterDOMProps(otherProps)} {...styleProps} ref={domRef}>
      {children}
    </div>
  );
}

/**
 * Can be used to make a repeating fragment of the columns or rows list.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat).
 * @param count - The number of times to repeat the fragment.
 * @param repeat - The fragment to repeat.
 */
export function repeat(
  count: number | "auto-fill" | "auto-fit",
  repeat: DimensionValue | DimensionValue[]
): string {
  return `repeat(${count}, ${gridTemplateValue(repeat)})`;
}

/**
 * Defines a size range greater than or equal to min and less than or equal to max.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax).
 * @param min - The minimum size.
 * @param max - The maximum size.
 */
export function minmax(min: DimensionValue, max: DimensionValue): string {
  return `minmax(${gridDimensionValue(min)}, ${gridDimensionValue(max)})`;
}

/**
 * Clamps a given size to an available size.
 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content).
 * @param dimension - The size to clamp.
 */
export function fitContent(dimension: DimensionValue): string {
  return `fit-content(${gridDimensionValue(dimension)})`;
}

function gridTemplateAreasValue(value) {
  return value.map((v) => `"${v}"`).join("\n");
}

function gridDimensionValue(value) {
  if (
    /^max-content|min-content|minmax|auto|fit-content|repeat|subgrid/.test(
      value
    )
  ) {
    return value;
  }

  return dimensionValue(value);
}

function gridTemplateValue(value) {
  if (Array.isArray(value)) {
    return value.map(gridDimensionValue).join(" ");
  }

  return gridDimensionValue(value);
}

/**
 * A layout container using CSS grid. Supports Valence dimensions as values to
 * ensure consistent and adaptive sizing and spacing.
 */
const _Grid = forwardRef(Grid);
export { _Grid as Grid };
