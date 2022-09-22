import { RefObject, useImperativeHandle, useMemo, useRef } from "react";

// @types-valence
import {
  DOMRef,
  DOMRefValue,
  FocusableElement,
  FocusableRef,
  FocusableRefValue,
} from "@types-valence/shared";

export function createDOMRef<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>
): DOMRefValue<T> {
  return {
    UNSAFE_getDOMNode() {
      return ref.current;
    },
  };
}

export function createFocusableRef<T extends HTMLElement = HTMLElement>(
  domRef: RefObject<T>,
  focusableRef: RefObject<FocusableElement> = domRef
): FocusableRefValue<T> {
  return {
    ...createDOMRef(domRef),
    focus() {
      if (focusableRef.current) {
        focusableRef.current.focus();
      }
    },
  };
}

export function useDOMRef<T extends HTMLElement = HTMLElement>(
  ref: DOMRef<T>
): RefObject<T> {
  let domRef = useRef<T>(null);
  useImperativeHandle(ref, () => createDOMRef(domRef));
  return domRef;
}

export function useFocusableRef<T extends HTMLElement = HTMLElement>(
  ref: FocusableRef<T>,
  focusableRef?: RefObject<FocusableElement>
): RefObject<T> {
  let domRef = useRef<T>(null);
  useImperativeHandle(ref, () => createFocusableRef(domRef, focusableRef));
  return domRef;
}

export function unwrapDOMRef<T extends HTMLElement>(
  ref: RefObject<DOMRefValue<T>>
): RefObject<T> {
  return {
    get current() {
      return ref.current && ref.current.UNSAFE_getDOMNode();
    },
  };
}

export function useUnwrapDOMRef<T extends HTMLElement>(
  ref: RefObject<DOMRefValue<T>>
): RefObject<T> {
  return useMemo(() => unwrapDOMRef(ref), [ref]);
}
