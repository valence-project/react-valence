import { useSpring as _useSpring, animated as _animated } from "@react-spring/web";

import { useProvider } from "@react-valence/provider";

export function useSpring(args:any, type: string ): any {
    
    // let { scale } = useProvider();

    // let distances = {
    //   tooltip: {
    //     medium: 10,
    //     large: 12
    //   },
    // };

    // let positionMap = {
    //   top: `translateY(-${distances[type][scale]}px)`,
    //   right: `translateY(${distances[type][scale]}px)`,
    //   bottom: `translateY(${distances[type][scale]}px)`,
    //   left: `translateX(-${distances[type][scale]}px)`,
    // };

    const spring = _useSpring;

    return spring(args);   
}

export {_animated as animated};

export function combineMotion(still: any, transition: object) {
    return {
      ...still,
      style: {
        ...still.style,
        ...transition,
      },
    };
};