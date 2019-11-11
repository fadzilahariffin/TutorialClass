import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TextInput
} from "react-native";

import MyStyles from './Styles'

class App extends Component {
  render() {
    return (
      <View style={MyStyles.container}>
        <Text style={{fontSize:25}}>App</Text>
        <TextInput style={styles.textinput}></TextInput>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  
  textinput: {
    borderWidth:1,
    borderColor:'black',
    width:300
  }
});