import { action, Story } from "@ladle/react";
import { Breadcrumbs, ValenceBreadcrumbsProps } from "../src";
import {Heading} from '@react-valence/text';
import { Item } from "@react-stately/collections";

// let styles = {
//   width: "100vw",
// };
// const CenterDecorator = (storyFn) => (
//   <div style={styles}>
//     <div>{storyFn()}</div>
//   </div>
// );

// storiesOf("Breadcrumbs", module)
//   .addDecorator(CenterDecorator)
//   .addParameters({ providerSwitcher: { status: "negative" } })
//   .add("Default (with 3 items)", () => render())
//   .add("Default (with 7 items)", () => renderMany({}))
//   .add("isMultiline", () => render({ isMultiline: true }))
//   .add("size: S", () => render({ size: "S" }))
//   .add("size: S, isMultiline", () => render({ size: "S", isMultiline: true }))
//   .add("size: M", () => render({ size: "M" }))
//   .add("size: M, isMultiline", () => render({ size: "M", isMultiline: true }))
//   .add("truncated", () => <div style={{ width: "120px" }}>{render({})}</div>)
//   .add("truncated, isMultiline", () => (
//     <div style={{ width: "100px" }}>{render({ isMultiline: true })}</div>
//   ))
//   .add("many items, showRoot: true", () => renderMany({ showRoot: true }))
//   .add("many items, isMultiline", () => renderMany({ isMultiline: true }))
//   .add("many items, isMultiline, showRoot: true", () =>
//     renderMany({ maxVisibleItems: "auto", isMultiline: true, showRoot: true })
//   )
//   .add("isDisabled: true", () => render({ isDisabled: true }))
//   .add("isDisabled: true, isMultiline", () =>
//     render({ isDisabled: true, isMultiline: true })
//   )
//   .add("resizeable", () => (
//     <div
//       style={{
//         minWidth: "100px",
//         width: "300px",
//         padding: "10px",
//         resize: "horizontal",
//         overflow: "auto",
//         backgroundColor: "var(--spectrum-global-color-gray-50)",
//       }}
//     >
//       {renderMany({})}
//     </div>
//   ))
//   // .add(
//   //   'last item Heading',
//   //   () => renderHeading()
//   // )
//   // .add(
//   //   'last item Heading, size: S',
//   //   () => renderHeading({size: 'S'})
//   // )
//   // .add(
//   //   'last item Heading, size: M',
//   //   () => renderHeading({size: 'M'})
//   // )
//   // .add(
//   //   'last item Heading, isMultiline',
//   //   () => renderHeading({isMultiline: true})
//   // )
//   // .add(
//   //   'last item Heading, size: S, isMultiline',
//   //   () => renderHeading({isMultiline: true, size: 'S'})
//   // )
//   // .add(
//   //   'last item Heading, size: M, isMultiline',
//   //   () => renderHeading({isMultiline: true, size: 'M'})
//   // )
//   .add("Only one item", () => (
//     <Breadcrumbs>
//       <Item>Root</Item>
//     </Breadcrumbs>
//   ))
//   .add("Only one item, isMultiline", () => (
//     <Breadcrumbs isMultiline>
//       <Item>Root</Item>
//     </Breadcrumbs>
//   ))
//   .add("Only one item, showRoot", () => (
//     <Breadcrumbs showRoot>
//       <Item key="Root-1">Root</Item>
//     </Breadcrumbs>
//   ))
//   .add("autoFocusCurrent", () => (
//     <div
//       style={{
//         minWidth: "100px",
//         width: "300px",
//         padding: "10px",
//         resize: "horizontal",
//         overflow: "auto",
//         backgroundColor: "var(--spectrum-global-color-gray-50)",
//       }}
//     >
//       {renderMany({ autoFocusCurrent: true })}
//     </div>
//   ));

export const HeadingDefault: Story<ValenceBreadcrumbsProps<object>> = (args) =>
(
    <Breadcrumbs {...args} onAction={action('onAction')}>
      <Item key="Folder 1">
        The quick brown fox jumps over
      </Item>
      <Item key="Folder 2">
        My Documents
      </Item>
      <Item key="Folder 3">
        <Heading level={1}>
          <>Kangaroos jump high</>
        </Heading>
      </Item>
    </Breadcrumbs>
  );
HeadingDefault.args = {
  isMultiline: true
}


export default {
  title: "Breadcrumbs",
  component: Breadcrumbs
}

export const Default: Story<ValenceBreadcrumbsProps<object>> = (args) =>
  (
    <Breadcrumbs {...args} onAction={action("onAction")}>
      <Item key="Folder 1">The quick brown fox jumps over</Item>
      <Item key="Folder 2">My Documents</Item>
      <Item key="Folder 3">Kangaroos jump high</Item>
      <Item key="Folder 4">Koalas are very cute</Item>
      <Item key="Folder 5">Wombat's noses</Item>
      <Item key="Folder 6">Wattle trees</Item>
      <Item key="Folder 7">April 7</Item>
    </Breadcrumbs>
  );
