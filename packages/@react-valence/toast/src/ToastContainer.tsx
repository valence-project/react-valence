import React, { ReactElement } from "react";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @types-valence
import { ToastState } from "@types-valence/toast";

import { Toast } from "./";
import toastContainerStyles from "./toastContainer.scss";
// import {useProvider} from '@react-spectrum/provider';

export function ToastContainer(props: ToastState): ReactElement {
  let { onRemove, toasts } = props;
  // let providerProps = useProvider();
  let toastPlacement =
    "bottom"; /* providerProps && providerProps.toastPlacement && providerProps.toastPlacement.split(' '); */
  let containerPosition = toastPlacement && toastPlacement[0];
  let containerPlacement = toastPlacement && toastPlacement[1];

  let renderToasts = () =>
    toasts.map((toast) => (
      <Toast
        {...{
          ...toast.props,
          key: toast.props.toastKey,
          onRemove,
          timer: toast.timer,
        }}
      >
        {toast.content}
      </Toast>
    ));

  return (
    <div
      {...{
        className: classNames(
          toastContainerStyles,
          "ToastContainer",
          containerPosition && `ToastContainer--${containerPosition}`,
          containerPlacement && `ToastContainer--${containerPlacement}`
        ),
      }}
    >
      {renderToasts()}
    </div>
  );
}
