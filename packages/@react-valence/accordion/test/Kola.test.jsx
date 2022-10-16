import { Accordion } from "@react-valence/accordion";
import { Item } from "@react-stately/collections";
import { act, fireEvent, render, within } from "@react-valence/test-utils";
import { Provider } from "@react-valence/provider";
import { theme } from "@react-valence/theme-default";
import userEvent from "@testing-library/user-event";

let items = [
  { key: "one", title: "one title", children: "one children" },
  { key: "two", title: "two title", children: "two children" },
  { key: "three", title: "three title", children: "three children" },
];

function renderComponent(props) {
  return render(
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

describe("Accordion", function () {
  it("renders properly", function () {
    let tree = renderComponent();
    let accordionItems = tree.getAllByRole("heading");
    expect(items.length).toBe(3);

    for (let item of accordionItems) {
      let button = within(item).getByRole("button");
      expect(button).toHaveAttribute("aria-expanded");
      let isExpanded = button.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        expect(button).toHaveAttribute("aria-controls");
        let region = document.getElementById(
          button.getAttribute("aria-controls")
        );
        expect(region).toBeTruthy();
        expect(region).toHaveAttribute("aria-labelledby", button.id);
        expect(region).toHaveAttribute("role", "region");
        expect(region).toHaveTextContent(items[0].children);
      }
    }
  });
});
