// @types-valence
import {
  AriaProgressBarBaseProps,
  ProgressBarBaseProps,
  ValenceProgressBarBaseProps,
} from "@types-valence/progress";

export type MeterProps = ProgressBarBaseProps;
export interface AriaMeterProps extends AriaProgressBarBaseProps {}
export interface ValenceMeterProps extends ValenceProgressBarBaseProps {
  /** The [visual style](https://spectrum.adobe.com/page/meter/#-Options) of the Meter. */
  variant: "positive" | "warning" | "critical";
}
