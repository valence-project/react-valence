import { Icon } from "@react-valence/icon";
import { Story } from "@ladle/react";

export const IconRender: Story<any> = () => {
  return (
    <Icon>
      <svg viewBox="0 0 25 25">
        <rect x="0" y="0" width="25" height="25" />
      </svg>
    </Icon>
  );
};
