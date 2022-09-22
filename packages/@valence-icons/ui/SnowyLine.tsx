import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _SnowyLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M19.5 24.402l2.946 -1.701 1.5 2.598L21 27l2.946 1.701 -1.5 2.598L19.5 29.598V33h-3v-3.402l-2.946 1.701 -1.5 -2.598L15 27l-2.946 -1.701 1.5 -2.598L16.5 24.402V21h3v3.402zM25.5 27v-3h0.75a5.25 5.25 0 1 0 -3.75 -8.925V15a9 9 0 1 0 -12 8.489v3.133a12 12 0 1 1 14.187 -15.975A8.25 8.25 0 1 1 26.25 27l-0.75 0.002z" />
      </svg>
    </Icon>
  );
}
