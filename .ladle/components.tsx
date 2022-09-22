import type { GlobalProvider } from "@ladle/react";
import React from 'react';

import { Provider as ValenceProvider } from "@react-valence/provider/src";
import { theme } from "@react-valence/theme-default/src";

import styles from './styles.module.scss';

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <ValenceProvider theme={theme} colorScheme={globalState.theme}>
    <h1 className={styles.header}>react-valence</h1>
    {children}
  </ValenceProvider>
);