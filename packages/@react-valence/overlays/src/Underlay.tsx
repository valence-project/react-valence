import React from "react";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @valence-styles
import underlayStyles from "@valence-styles/components/underlay/vars.module.scss";

interface UnderlayProps {
  isOpen?: boolean;
}

export function Underlay({ isOpen }: UnderlayProps) {
  return (
    <div
      className={classNames(underlayStyles, "Underlay", {
        "is-open": isOpen,
      })}
    />
  );
}
