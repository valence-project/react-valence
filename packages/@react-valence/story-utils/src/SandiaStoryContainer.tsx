import React from "react";

// @valence-styles
import styles from "@valence-styles/components/SandiaStoryContainer/vars.module.scss";

/**
 * A container with a dashed border to show the component boundaries.
 */
export function SandiaStoryContainer(props: any) {
  return (
    <div className={styles.StoryContainer}>
      {props.children}
    </div>
  );
}
