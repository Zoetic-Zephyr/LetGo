// This ReactNative app is built with this tutorial: https://www.youtube.com/playlist?list=PLbkzKPzQTrTxbkPcxVqzw5y42Tzn2MMNV

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Authenticator } from "aws-amplify-react-native";

import { API, graphqlOperation } from "aws-amplify";
import { listTalks } from "./src/graphql/queries";

console.disableYellowBox = true;

function Home(props) {
  if (props.authState === "signedIn") return <Text>HOME</Text>;
  else return <></>;
}

type Props = {};
export default class App extends Component<Props> {
  state = { talks: [] };
  async componentDidMount() {
    const talkData = await API.graphql(graphqlOperation(listTalks));
    this.setState({ talks: talkData.data.listTalks.items });
  }

  render() {
    return (
      <View style={styles.container}>
        <Authenticator usernameAttributes="email">
          {/* <Home /> */}
          {this.state.talks.map((b, i) => (
            <Text key={i}>{b.name}</Text>
          ))}
        </Authenticator>
      </View>
    );
  }
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Authenticator usernameAttributes="email">
//         <Home />
//       </Authenticator>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
