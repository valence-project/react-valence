import React from "react";

// @react-valence https://valence.austinpittman.net
import { classNames, SlotProvider } from "@react-valence/utils";
import { Grid } from "@react-valence/layout";
import { Text } from "@react-valence/text";

// @types-valence
import { GridNode } from "@types-valence/grid";

import listStyles from "./styles.scss";

interface DragPreviewProps {
  item: GridNode<any>;
  itemCount: number;
  itemHeight: number;
}

export function DragPreview(props: DragPreviewProps) {
  let { item, itemCount, itemHeight } = props;

  let isDraggingMultiple = itemCount > 1;

  return (
    <div
      style={{ height: itemHeight }}
      className={classNames(
        listStyles,
        "react-spectrum-ListViewItem",
        "react-spectrum-ListViewItem-dragPreview",
        {
          "react-spectrum-ListViewItem-dragPreview--multiple":
            isDraggingMultiple,
        }
      )}
    >
      <Grid UNSAFE_className={listStyles["react-spectrum-ListViewItem-grid"]}>
        <SlotProvider
          slots={{
            text: {
              UNSAFE_className:
                listStyles["react-spectrum-ListViewItem-content"],
            },
            description: {
              UNSAFE_className:
                listStyles["react-spectrum-ListViewItem-description"],
            },
            illustration: {
              UNSAFE_className:
                listStyles["react-spectrum-ListViewItem-thumbnail"],
            },
            image: {
              UNSAFE_className:
                listStyles["react-spectrum-ListViewItem-thumbnail"],
            },
            actionButton: {
              UNSAFE_className:
                listStyles["react-spectrum-ListViewItem-actions"],
              isQuiet: true,
            },
            actionGroup: {
              UNSAFE_className:
                listStyles["react-spectrum-ListViewItem-actions"],
              isQuiet: true,
              density: "compact",
            },
            actionMenu: {
              UNSAFE_className:
                listStyles["react-spectrum-ListViewItem-actionmenu"],
              isQuiet: true,
            },
          }}
        >
          {typeof item.rendered === "string" ? (
            <Text>{item.rendered}</Text>
          ) : (
            item.rendered
          )}
          {isDraggingMultiple && (
            <div
              className={classNames(
                listStyles,
                "react-spectrum-ListViewItem-badge"
              )}
            >
              {itemCount}
            </div>
          )}
        </SlotProvider>
      </Grid>
    </div>
  );
}
