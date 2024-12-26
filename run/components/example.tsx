/* eslint-disable @typescript-eslint/no-require-imports */

import { nv } from "@/native-variants/functions/nv";
import React from "react";
import { Image, Text, View } from "react-native";

const cardVariants = nv({
  slots: [
    "root",
    "avatar",
    "wrapper",
    "description",
    "info_wrapper",
    "name",
    "role",
  ],
  base: {
    root: {
      flexDirection: "row",
      backgroundColor: "#f1f5f9",
      borderRadius: 16,
      padding: 32,
      paddingHorizontal: 0,
    },
    avatar: {
      width: 96,
      height: 96,
      borderRadius: 48,
      marginHorizontal: "auto",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    wrapper: {
      flex: 1,
      paddingTop: 24,
      paddingHorizontal: 32,
      textAlign: "center",
    },
    description: {
      fontSize: 16,
      fontWeight: "500",
    },
    info_wrapper: {
      fontWeight: "500",
    },
    name: {
      fontSize: 14,
      color: "#0ea5e9",
    },
    role: {
      fontSize: 14,
      color: "#4b5563",
    },
  },
});

export const Card = () => {
  const { root, avatar, wrapper, description, info_wrapper, name, role } =
    cardVariants();

  return (
    <View style={root}>
      <Image style={avatar} src={require("/intro-avatar.png") as any} />
      <View style={wrapper}>
        <Text style={description}>
          “Tailwind variants allows you to reduce repeated code in your project
          and make it more readable. They fixed the headache of building a
          design system with TailwindCSS.”
        </Text>
        <View style={info_wrapper}>
          <View style={name}>Zoey Lang</View>
          <View style={role}>Full-stack developer, NextUI</View>
        </View>
      </View>
    </View>
  );
};
