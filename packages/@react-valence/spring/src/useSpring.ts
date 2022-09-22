import { useSpring as _useSpring, animated as _animated } from "@react-spring/web";

import { useProvider } from "@react-valence/provider";

export {_animated as animated};

let distances = {
  tooltip: {
    medium: 10,
    large: 12
  },
};

export const transitions = () => {
  
  let { scale } = useProvider();

  return {
    tooltip: {
      top: {
        end: `translateY(-${distances.tooltip[scale]}px)`,
        start: `translateY(2px)`
      },
      right: {
        end: `translateX(${distances.tooltip[scale]}px)`,
        start: `translateY(2px)`
      },
      bottom: {
        end: `translateY(${distances.tooltip[scale]}px)`,
        start: `translateX(2px)`
      },
      left: {
        end: `translateX(-${distances.tooltip[scale]}px)`,
        start: `translateX(2px)`
      }
    }
  }
}

export function useSpring(motion: object, stillProps: any) {



  return {
    ...stillProps,
    style: {
      ...stillProps.style,
      ..._useSpring({opacity: true ? 1 : 0})
    }
  }
}