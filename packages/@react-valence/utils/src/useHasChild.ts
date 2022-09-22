import { RefObject, useState } from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useLayoutEffect } from "@react-aria/utils";

export function useHasChild(query: string, ref: RefObject<HTMLElement>) {
  let [hasChild, setHasChild] = useState(true);
  useLayoutEffect(() => {
    setHasChild(!!(ref.current && ref.current.querySelector(query)));
  }, [setHasChild, query, ref]);
  return hasChild;
}
