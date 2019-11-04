import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import List from './List'

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
      <List nama={this.state.name} kelas={this.state.class} />
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