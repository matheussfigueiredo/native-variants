import { merge } from "@/utils/merge";
import { nv } from "@/utils/nv";
import { VariantProps } from "@/utils/props";
import { Text, TouchableOpacity } from "react-native";

const buttonVariants = nv({
  slots: ["root", "text"],
  base: {
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
    },
    text: {
      fontSize: 16,
      fontWeight: "500",
    },
  },
  variants: {
    variant: {
      primary: {
        root: {
          backgroundColor: "#040404",
        },
        text: {
          color: "#dedede",
        },
      },
      blank: {
        root: {
          backgroundColor: "#dedede",
        },
        text: {
          color: "#040404",
        },
      },
      outline: {
        root: {
          borderWidth: 1,
          borderColor: "#242424",
          backgroundColor: "transparent",
        },
        text: {
          color: "#dedede",
        },
      },
      link: {
        root: {
          backgroundColor: "transparent",
          borderBottomColor: "#dedede",
          borderBottomWidth: 0.4,
        },
        text: {
          color: "#dedede",
        },
      },
    },
    size: {
      default: {
        root: {
          height: 40,
          paddingHorizontal: 14,
        },
        text: {
          fontSize: 16,
        },
      },
      sm: {
        root: {
          height: 30,
          paddingHorizontal: 12,
        },
        text: {
          fontSize: 14,
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

function Button({
  style,
  size,
  variant,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<typeof TouchableOpacity> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const { root, text } = buttonVariants({ size, variant });

  return (
    <TouchableOpacity style={merge(root, style)} {...props}>
      {asChild ? children : <Text style={text}>{children}</Text>}
    </TouchableOpacity>
  );
}

export { Button, buttonVariants };
