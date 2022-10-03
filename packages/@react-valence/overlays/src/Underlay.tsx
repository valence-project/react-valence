import React from "react";

// @react-valence https://valence.austinpittman.net
import { classNames } from "@react-valence/utils";

// @valence-styles
import underlayStyles from "@valence-styles/components/underlay/vars.module.scss";

import { useSpring, animated, config } from "react-spring";
interface UnderlayProps {
  isOpen?: boolean;
}

export function Underlay({ isOpen }: UnderlayProps) {
  
  let spring = useSpring({
    opacity: isOpen ? 1 : 0,
    config: 	{ mass: 1.5, tension: 90, friction: 22 }
  });

  return (
    <animated.div
      style={{...spring}}
      className={classNames(underlayStyles, "Underlay", {
        "is-open": isOpen,
      })}
    />
  );
}
