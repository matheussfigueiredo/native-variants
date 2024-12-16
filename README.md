
<h1 align='center'>native-variants</h1>

Simplify and streamline style management in React 
Native with TypeScript support

 
<h4>Installation</h4>


Install `native-variants` using npm or yarn:


```bash
npm install native-variants
//or
yarn add native-variants
```

<h4>Overview</h4>

`native-variants` provides a powerful utility to define, organize, and apply component styling for React Native. It supports multiple slots, variants, default settings, and compound variants, enabling a clean and reusable way to manage styles.

<h3>Getting Started</h3>

Here’s a quick example of how to use `native-variants` to style a button component.


<h4>Defining Variants</h4>

```tsx
import { nv, type VariantProps } from "native-variants";

const buttonVariants = nv({
  slots: ["root", "text"], // Define slots for styling
  base: {
    root: { paddingHorizontal: 16, paddingVertical: 12 }, // Base styles for root
    text: { color: "white", textAlign: "center" }, // Base styles for text
  },
  variants: {
    variant: {
      solid: {
        root: { backgroundColor: "#ff0006" },
        text: { color: "white" },
      },
      ghost: {
        root: { backgroundColor: "transparent" },
        text: { color: "#ff0006" },
      },
    },
  },
  defaultVariants: {
    variant: "solid", // Default variant configuration
  },
  compoundVariants: [
    {
      variant: "ghost",
      css: {
        root: { borderWidth: 1, borderColor: "#fff006" },
      },
    },
  ],
});
```

<h4>Using the Variants</h4>

Create a styled `Button` component:

```tsx
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<
  React.ComponentRef<typeof TouchableOpacity>,
  ButtonProps
>(({ children, variant, ...props }, ref) => {
  const { root, text } = buttonVariants({ variant });

  return (
    <TouchableOpacity {...props} ref={ref} style={root}>
      <Text style={text}>{children}</Text>
    </TouchableOpacity>
  );
});

Button.displayName = "Button";
```

<h4>Usage Example</h4>


```tsx
import { Button } from "./Button";

export default function App() {
  return (
    <>
      <Button variant="solid">Solid Button</Button>
      <Button variant="ghost">Ghost Button</Button>
    </>
  );
}
```

<h3>Features</h3>

1. **Multi-Slot Styling**: Define styles for multiple slots (e.g., `root`, `text`).
2. **Variant Management**: Easily handle variations like `solid` or `ghost`.
3. **Default Variants**: Define fallback styles for missing configurations.
4. **Compound Variants**: Apply conditional styles based on combined properties.

<h3>Contributing</h3>

Feel free to contribute by submitting issues or pull requests. For questions, reach out to the maintainer:

Email: matheussdev3@gmail.com
Maintainer: [matheussatoshi](https://github.com/matheussatoshi)

<h3>License</h3>

This library is licensed under the MIT License.