import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          flexBasis: 100, // width or height
          flex: 1,
          // width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row", // primary is defined row
    justifyContent: "center", // primary axis
    alignItems: "center", // alignment of items within each line, secondary axis
    alignContent: "center", // alignment of the entire content, only work with wrapping
    flexWrap: "wrap",
  },
});
