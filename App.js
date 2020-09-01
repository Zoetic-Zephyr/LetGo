// This ReactNative app is built with this tutorial: https://www.youtube.com/playlist?list=PLbkzKPzQTrTxbkPcxVqzw5y42Tzn2MMNV

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
