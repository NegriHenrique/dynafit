import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

type IButton = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: IButton) {
  return (
    <TouchableOpacity {...rest}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
