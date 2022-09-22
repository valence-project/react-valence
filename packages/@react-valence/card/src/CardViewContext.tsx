import React, { useContext } from "react";

export const CardViewContext = React.createContext(null);

export function useCardViewContext() {
  return useContext(CardViewContext);
}
