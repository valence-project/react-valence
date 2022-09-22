import React from "react";
import { Icon, IconPropsWithoutChildren } from "@react-valence/icon";

export default function _ExchangeFundsLine(props: IconPropsWithoutChildren) {
  return (
    <Icon {...props}>
      <svg fill="currentColor" viewBox="0 0 36 36">
        <path d="M29.063 22.654A12.002 12.002 0 0 0 12.045 7.579l-1.488 -2.606A14.994 14.994 0 0 1 25.5 5.01c6.735 3.888 9.315 12.213 6.175 19.155l2.013 1.161 -6.248 3.321 -0.247 -7.071 1.869 1.079zM6.938 13.346a12.002 12.002 0 0 0 17.018 15.075l1.488 2.606A14.994 14.994 0 0 1 10.5 30.99C3.765 27.102 1.185 18.777 4.325 11.835L2.31 10.675l6.248 -3.321 0.247 7.071 -1.869 -1.079zm13.185 8.896L15.876 18l-4.242 4.242 -2.121 -2.121 6.365 -6.363L20.121 18l4.244 -4.242 2.121 2.121 -6.365 6.363z" />
      </svg>
    </Icon>
  );
}
