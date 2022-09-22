import { useImperativeHandle, useMemo, useRef, useState } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { createFocusManager } from "@react-aria/focus";
import { useDateFormatter } from "@react-aria/i18n";
import { useDisplayNames } from "@react-aria/datepicker";
import { useLayoutEffect } from "@react-aria/utils";

// @react-valence https://valence.austinpittman.net
import { createDOMRef } from "@react-valence/utils";
import { useProvider } from "@react-valence/provider";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceDatePickerBase } from "@types-valence/datepicker";

export function useFormatHelpText(
  props: Pick<ValenceDatePickerBase<any>, "description" | "showFormatHelpText">
) {
  let formatter = useDateFormatter({ dateStyle: "short" });
  let displayNames = useDisplayNames();
  return useMemo(() => {
    if (props.description) {
      return props.description;
    }

    if (props.showFormatHelpText) {
      return formatter
        .formatToParts(new Date())
        .map((s) => {
          if (s.type === "literal") {
            return s.value;
          }

          return displayNames.of(s.type);
        })
        .join(" ");
    }

    return "";
  }, [props.description, props.showFormatHelpText, formatter, displayNames]);
}

export function useVisibleMonths(maxVisibleMonths: number) {
  let { scale } = useProvider();
  let [visibleMonths, setVisibleMonths] = useState(getVisibleMonths(scale));
  useLayoutEffect(() => {
    let onResize = () => setVisibleMonths(getVisibleMonths(scale));
    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [scale]);

  return Math.max(1, Math.min(visibleMonths, maxVisibleMonths, 3));
}

function getVisibleMonths(scale) {
  if (typeof window === "undefined") {
    return 1;
  }
  let monthWidth = scale === "large" ? 336 : 280;
  let gap = scale === "large" ? 30 : 24;
  let popoverPadding = scale === "large" ? 32 : 48;
  return Math.floor(
    (window.innerWidth - popoverPadding * 2) / (monthWidth + gap)
  );
}

export function useFocusManagerRef(ref: FocusableRef<HTMLElement>) {
  let domRef = useRef();
  useImperativeHandle(ref, () => ({
    ...createDOMRef(domRef),
    focus() {
      createFocusManager(domRef).focusFirst({ tabbable: true });
    },
  }));
  return domRef;
}
