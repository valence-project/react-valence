import { ListState } from "@react-stately/list";
import React from "react";

export const ListBoxContext = React.createContext<ListState<unknown>>(null);
