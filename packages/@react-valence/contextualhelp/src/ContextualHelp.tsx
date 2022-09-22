import React from "react";

// @react-aria https://react-spectrum.adobe.com/react-aria/
import { useLocalizedStringFormatter } from "@react-aria/i18n";

// @react-valence https://valence.austinpittman.net
import { ActionButton } from "@react-valence/button";
import { Dialog, DialogTrigger } from "@react-valence/dialog";
import { SlotProvider } from "@react-valence/utils";

// @types-valence
import { FocusableRef } from "@types-valence/shared";
import { ValenceContextualHelpProps } from "@types-valence/contextualhelp";

// @valence-icons
import QuestionCircle from "@valence-icons/ui/QuestionFill";
import InfoCircle from "@valence-icons/ui/InformationFill";

import helpStyles from "./contextualhelp.scss";
import intlMessages from "../intl";

function ContextualHelp(
  props: ValenceContextualHelpProps,
  ref: FocusableRef<HTMLButtonElement>
) {
  let {
    variant = "help",
    placement = "bottom start",
    children,
    ...otherProps
  } = props;

  let stringFormatter = useLocalizedStringFormatter(intlMessages);

  let icon = variant === "info" ? <InfoCircle /> : <QuestionCircle />;

  let slots = {
    content: { UNSAFE_className: helpStyles["ContextualHelp-content"] },
    footer: { UNSAFE_className: helpStyles["ContextualHelp-footer"] },
  };

  let ariaLabel = otherProps["aria-label"];
  if (!ariaLabel && !otherProps["aria-labelledby"]) {
    ariaLabel = stringFormatter.format(variant);
  }

  return (
    <DialogTrigger
      {...otherProps}
      type="popover"
      placement={placement}
      hideArrow
    >
      <ActionButton
        {...otherProps}
        ref={ref}
        UNSAFE_className={helpStyles["ContextualHelp-button"]}
        isQuiet
        aria-label={ariaLabel}
      >
        {icon}
      </ActionButton>
      <SlotProvider slots={slots}>
        <Dialog UNSAFE_className={helpStyles["ContextualHelp-dialog"]}>
          {children}
        </Dialog>
      </SlotProvider>
    </DialogTrigger>
  );
}

/**
 * Contextual help shows a user extra information about the state of an adjacent component, or a total view.
 */
let _ContextualHelp = React.forwardRef(ContextualHelp);
export { _ContextualHelp as ContextualHelp };
