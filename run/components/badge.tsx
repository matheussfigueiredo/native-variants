import { merge } from "@/utils/merge";
import { nv } from "@/utils/nv";
import { VariantProps } from "@/utils/props";
import { Text, View } from "react-native";

const badgeVariants = nv({
  slots: ["root", "text"],
  base: {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
    },
    text: {
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
      blank: {
        root: {
          backgroundColor: "#dedede",
        },
        text: {
          color: "#040404",
        },
      },
    },
    size: {
      default: {
        root: {
          height: 24,
          paddingHorizontal: 8,
        },
        text: {
          fontSize: 12,
          fontWeight: "600",
        },
      },
      sm: {
        root: {
          height: 36,
          paddingHorizontal: 8,
        },
        text: {
          fontSize: 10,
          fontWeight: "400",
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

function Badge({
  size,
  style,
  variant,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<typeof View> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  }) {
  const { root, text } = badgeVariants({ variant, size });

  return (
    <View style={merge(root, style)} {...props}>
      {asChild ? children : <Text style={text}>{children}</Text>}
    </View>
  );
}

export { Badge, badgeVariants };
