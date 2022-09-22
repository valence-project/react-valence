
import { Story as _Storyaction } from "@ladle/react";
import { ColorWheel } from "../src";
import { Well } from '@react-valence/well';
import React from "react";

/**
 * Helper type so `bind` returns the actual Story type.
 */
 interface Story<T> extends _Story<T> {
  bind: (
    this: ThisParameterType<typeof Function.bind>,
    thisArg: Parameters<typeof Function.bind>[0],
    ...argArray: Parameters<typeof Function.bind>[1][]
  ) => _Story<T>;
}

export default {
  title: "Colorwheel",
  component: ColorWheel
};

const AccordionRenderPropsTemplate: Story<ValenceButtonProps<ItemType>> = (
  args
) => (
  <Well>
    <ColorWheel {...args}/>
  </Well>
    
);

export const Size = AccordionRenderPropsTemplate.bind({});
Size.storyName = "Regular";
Size.args = {
  defaultValue: "hsl(0, 100%, 50%)",
  size: "size-2400"
};


// storiesOf("ColorWheel", module)
//   .add("default", () => (
//     <ColorWheel
//       defaultValue="hsl(0, 100%, 50%)')"
//       onChange={action("change")}
//     />
//   ))
//   .add("disabled", () => (
//     <ColorWheel isDisabled defaultValue="hsl(0, 100%, 50%)" />
//   ))
//   .add("custom size", () => {
//     let [size, setSize] = useState("size-2400");
//     return (
//       <Flex direction="column" alignItems="center" gap="size-200">
//         <Flex direction="row">
//           <button onClick={() => setSize("size-2400")}>size-2400</button>
//           <button onClick={() => setSize("size-5000")}>size-5000</button>
//           <button onClick={() => setSize("50vh")}>50vh</button>
//         </Flex>
//         <ColorWheel defaultValue="hsl(0, 100%, 50%)" size={size} />
//       </Flex>
//     );
//   })
//   .add("controlled", () => {
//     let [color, setColor] = useState(parseColor("hsl(0, 100%, 50%)"));
//     let colorCSS = color?.toString("css");
//     return (
//       <Flex gap={"size-500"} direction="row" alignItems="center">
//         <ColorWheel onChange={setColor} value={color} />
//         <div
//           style={{
//             width: "50px",
//             height: "50px",
//             backgroundColor: colorCSS,
//             border: "1px solid black",
//           }}
//         />
//       </Flex>
//     );
//   })
//   .add("controlled hsl", () => (
//     <Flex gap={"size-500"} direction="row" alignItems="center">
//       <ControlledHSL onChangeEnd={action("onChangeEnd")} />
//     </Flex>
//   ));

// export function ControlledHSL(props) {
//   let [color, setColor] = useState(
//     props.defaultValue || parseColor("hsl(0, 100%, 50%)")
//   );
//   let colorCSS = color.toString("css");
//   let onChangeEnd = (color) => {
//     props.onChangeEnd && props.onChangeEnd(color);
//     setColor(color);
//   };
//   let onChange = (color) => {
//     props.onChange && props.onChange(color);
//     setColor(color);
//   };
//   return (
//     <>
//       <ColorWheel
//         onChange={onChange}
//         onChangeEnd={onChangeEnd}
//         value={color.toString("hsl")}
//       />
//       <div
//         style={{
//           width: "50px",
//           height: "50px",
//           backgroundColor: colorCSS,
//           border: "1px solid black",
//         }}
//       />
//     </>
//   );
// }
