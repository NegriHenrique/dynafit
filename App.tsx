import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Button } from "./src/components/Button/";
import { styles } from "./src/styles/global";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Hello, world!"  />
    </View>
  );
}
