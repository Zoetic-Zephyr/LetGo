import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// this App is a "functional component"
// it is better to use function instead of class
export default function App() {
  x = 1;
  // delete log for production
  console.log("App executed!");

  // let x;
  // x.toString();

  // return a JSX expression
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// iOS simulator EXPO developer menu
// Ctrl+D then Cmd + D

// debugging with Chrome at 32:00 does not work
// but it is very very useful

// react-native.packager.port default is 8081

// when publishing, terminal seems stuck at Uploading JavaScript bundles
// the above error is solved using "expo publish" in terminal

// use option+esc to trigger intellisense!!
