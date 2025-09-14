import { styled } from "@/lib/nva";
import React, { ComponentProps } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const baseVariants = styled((ctx, t) => ctx({
  slots: ['root', 'label'],
  base: {
    root: {
      backgroundColor: t.colors.primary,
      paddingHorizontal: t.spacing['4'],
      paddingVertical: t.spacing['2.5'],
      borderRadius: t.radii['lg']
    },
    label: {
      color: t.colors.white,
      fontSize: 16
    }
  },
}))

const buttonVariants = styled((ctx, t) => ctx({
  slots: ['icon'],
  extends: [baseVariants],
  base: {
    icon: {
      width: 24,
      height: 24
    }
  },
}))


function ButtonExample({ children, ...props }: ComponentProps<typeof TouchableOpacity>) {
  const styles = buttonVariants()

  return <TouchableOpacity style={styles.root} {...props} >
    <SearchIcon style={styles.icon} />
    <Text style={styles.label}>
      {children}
    </Text>
  </TouchableOpacity>
}

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ButtonExample>
        Click Me!
      </ButtonExample>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

