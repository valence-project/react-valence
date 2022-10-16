import { test, expect } from "@playwright/experimental-ct-react";

import { Accordion, Item } from "../src";
import { Provider } from "@react-valence/provider";
import { theme } from "@react-valence/theme-default";

let items = [
  { key: "one", title: "one title", children: "one children" },
  { key: "two", title: "two title", children: "two children" },
  { key: "three", title: "three title", children: "three children" },
];

function RenderComponent(props) {
  return (
    <Provider theme={theme}>
      <Accordion {...props} defaultExpandedKeys={["one"]} items={items}>
        {(item) => (
          <Item key={item.key} title={item.title}>
            {item.children}
          </Item>
        )}
      </Accordion>
    </Provider>
  );
}

test("should work", async ({ mount }) => {
  const component = await mount(<RenderComponent />);
  await expect(component.locator("button")).toContainText([
    "one title",
    "two title",
    "three title",
  ]);
});