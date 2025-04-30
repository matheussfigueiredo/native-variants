import { merge } from "@/utils/merge";
import { nv } from "@/utils/nv";
import { VariantProps } from "@/utils/props";
import React from "react";
import { Text, View } from "react-native";

type Variant = "disc" | "decimal" | "none";

function getListSymbol(variant: Variant, index: number): string {
  if (variant === "disc") {
    return "•";
  }

  if (variant === "decimal") {
    return `${index + 1}.`;
  }

  return "";
}

const listVariants = nv({
  slots: ["root", "item", "item_text"],
  base: {
    root: {
      display: "flex",
      gap: 10,
      paddingVertical: 12,
    },
    item: {
      display: "flex",
      flexDirection: "row",
      gap: 4,
    },
    item_text: {
      fontSize: 14,
      color: "#dedede",
    },
  },
  variants: {
    orientation: {
      vertical: {
        root: {
          flexDirection: "column",
        },
      },
      horizontal: {
        root: {
          flexDirection: "row",
        },
      },
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

const ListContext = React.createContext<{
  variant: Variant;
  index: number;
}>({ variant: "disc", index: 0 });

function List({
  style,
  children,
  orientation,
  variant = "disc",
  ...props
}: React.ComponentProps<typeof View> &
  VariantProps<typeof listVariants> & {
    variant?: Variant;
  }) {
  const { root } = listVariants({ orientation });

  const wrappedItems = React.Children.map(children, (child, index) => (
    <ListContext.Provider value={{ variant, index }}>
      <View>{child}</View>
    </ListContext.Provider>
  ));

  return (
    <View style={merge(root, style)} {...props}>
      {wrappedItems}
    </View>
  );
}

function ListItem({
  children,
  asChild = false,
  style,
  ...props
}: React.ComponentProps<typeof View> & {
  asChild?: boolean;
}) {
  const { item, item_text } = listVariants();
  const { variant, index } = React.useContext(ListContext);

  return (
    <View style={merge(item, style)} {...props}>
      <Text style={item_text}>{getListSymbol(variant, index)}</Text>
      {asChild ? children : <Text style={item_text}>{children}</Text>}
    </View>
  );
}

export { List, ListItem };
