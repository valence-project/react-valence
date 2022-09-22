export function combineSpring(still: any, transition: object) {
    return {
      ...still,
      style: {
        ...still.style,
        ...transition,
      },
    };
};