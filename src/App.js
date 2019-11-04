import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from "react-native";


class App extends Component {
  constructor(){
    super()
    this.state ={
      name: 'ahmad',
      class:'mobile app development'
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <Text>{this.state.name}</Text>
          <Text>{this.state.class}</Text>
      </SafeAreaView>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textinput: {
    borderColor: 'black'
  }
});