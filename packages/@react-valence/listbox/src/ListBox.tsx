import React, { ReactElement } from "react";

// @react-stately https://react-spectrum.adobe.com/react-stately/
import { useListState } from "@react-stately/list";

// @react-valence https://valence.austinpittman.net
import { useDOMRef } from "@react-valence/utils";

// @types-valence
import { DOMRef } from "@types-valence/shared";
import { ValenceListBoxProps } from "@types-valence/listbox";

import { ListBoxBase, useListBoxLayout } from "./ListBoxBase";

function ListBox<T extends object>(
  props: ValenceListBoxProps<T>,
  ref: DOMRef<HTMLDivElement>
) {
  let state = useListState(props);
  let layout = useListBoxLayout(state);
  let domRef = useDOMRef(ref);

  return <ListBoxBase {...props} ref={domRef} state={state} layout={layout} />;
}

// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref

/**
 * A list of options that can allow selection of one or more.
 */
const _ListBox = React.forwardRef(ListBox) as <T>(
  props: ValenceListBoxProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReactElement;
export { _ListBox as ListBox };
