// @react-valence https://valence.austinpittman.net
import { useMediaQuery } from "@react-valence/utils";

// @types-valence
import { ColorScheme, Scale } from "@types-valence/provider";
import { Theme } from "@types-valence/provider";

export function useColorScheme(
  theme: Theme,
  defaultColorScheme: ColorScheme
): ColorScheme {
  let matchesDark = useMediaQuery("(prefers-color-scheme: dark)");
  let matchesLight = useMediaQuery("(prefers-color-scheme: light)");

  // importance OS > default > omitted

  if (theme.dark && matchesDark) {
    return "dark";
  }

  if (theme.light && matchesLight) {
    return "light";
  }

  if (theme.dark && defaultColorScheme === "dark") {
    return "dark";
  }

  if (theme.light && defaultColorScheme === "light") {
    return "light";
  }

  if (!theme.dark) {
    return "light";
  }

  if (!theme.light) {
    return "dark";
  }

  return "light";
}

export function useScale(theme: Theme): Scale {
  let matchesFine = useMediaQuery("(any-pointer: fine)");
  if (matchesFine && theme.medium) {
    return "medium";
  }

  if (theme.large) {
    return "large";
  }

  return "medium";
}
