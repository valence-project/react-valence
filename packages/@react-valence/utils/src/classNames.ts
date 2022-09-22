import _clsx from "clsx";

export let shouldKeepValenceClassNames = false;

export function keepValenceClassNames() {
  // Delete this once verified
  // shouldKeepValenceClassNames = true;
  // console.warn(
  //   "Legacy valence-prefixed class names enabled for backward compatibility. " +
  //     "We recommend replacing instances of CSS overrides targeting spectrum selectors " +
  //     "in your app with custom class names of your own, and disabling this flag."
  // );
}

export function classNames(
  cssModule: { [key: string]: string },
  ...values: Array<string | Object | undefined>
): string {
  let classes = [];
  for (let value of values) {
    if (typeof value === "object" && value) {
      let mapped = {};
      for (let key in value) {
        if (cssModule[key]) {
          mapped[cssModule[key]] = value[key];
        }

        if (shouldKeepValenceClassNames || !cssModule[key]) {
          mapped[key] = value[key];
        }
      }

      classes.push(mapped);
    } else if (typeof value === "string") {
      if (cssModule[value]) {
        classes.push(cssModule[value]);
      }

      if (shouldKeepValenceClassNames || !cssModule[value]) {
        classes.push(value);
      }
    } else {
      classes.push(value);
    }
  }

  return _clsx(...classes);
}

export {_clsx as clsx};