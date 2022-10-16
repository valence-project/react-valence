import '@testing-library/jest-dom';
import { render } from "@react-valence/test-utils";

describe("Accordion", function () {
  it("renders properly", function () {
    let tree = render(<div>Hello</div>);
    expect(tree).toHaveTextContent("Hello");
  });
});
