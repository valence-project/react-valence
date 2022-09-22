import { useContext } from "react";

import { DialogContext } from "./context";

export interface DialogContainerValue {
  type: "modal" | "popover" | "tray" | "fullscreen" | "fullscreenTakeover";
  dismiss(): void;
}

export function useDialogContainer(): DialogContainerValue {
  let context = useContext(DialogContext);
  if (!context) {
    throw new Error(
      "Cannot call useDialogContext outside a <DialogTrigger> or <DialogContainer>."
    );
  }

  return {
    type: context.type,
    dismiss() {
      context.onClose();
    },
  };
}
