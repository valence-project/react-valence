/// <reference types="css-module-types" />

import { Theme } from "@types-valence/provider";

// @valence-styles
import darkest from "@valence-styles/vars/darkest.module.scss";
import global from "@valence-styles/vars/global.module.scss";
import large from "@valence-styles/vars/large.module.scss";
import light from "@valence-styles/vars/light.module.scss";
import medium from "@valence-styles/vars/medium.module.scss";

export let theme: Theme = {
  global,
  light,
  dark: darkest,
  medium,
  large,
};
