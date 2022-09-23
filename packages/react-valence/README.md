# [react-valence](https://github.com/valence-project/react-valence)

A component library for generating accesssible, progressive, and flexible user interfaces.

## Features

- **Accessible** – react-valence components are designed with accessibility top-of-mind and include full screen reader and keyboard navigation support.
- **Adaptive** – react-valence components are designed to work with mouse, touch, and keyboard interactions. They’re built with responsive design principles to deliver a great experience, no matter the device.
- **International** – react-valence components are designed to support over 30 languages, including support for right-to-left languages, date and number formatting, and more.
- **Customizable theming** – react-valence supports custom themes and icons to match your brand, including automatic support for dark mode.

## Example

Here is a very basic example of using react-valence.

```jsx
import { Provider, defaultTheme, Button } from "react-valence";

// Render it in your app!
function App() {
  return (
    <Provider theme={theme}>
      <Button variant="cta" onPress={() => alert("Hey there!")}>
        Hello World!
      </Button>
    </Provider>
  );
}
```

## Learn more

react-valence began as fork of Adobe's design system [React Spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html). It uses hooks from Adobe's opensource libraries: [React Aria](https://react-spectrum.adobe.com/react-aria/index.html) and [React Stately](https://react-spectrum.adobe.com/react-stately/index.html). The goal of this project is to provide a clear path to creating accessible, customizable user interfaces.
