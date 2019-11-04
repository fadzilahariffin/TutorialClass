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
    this.state = {
      name:'ahmad',
      class:'mobile application development'
    }
  }

  changeName(){
    if(this.state.name == 'ahmad'){
      this.setState({
          name: 'firdaus'
      })
    }
    else{
      this.setState({
          name: 'ahmad'
      })
    }
}
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <List nama={this.state.name} kelas={this.state.class}/>
        <TouchableOpacity style={{backgroundColor:'blue'}} onPress={()=>this.changeName()}>
          <Text style={{color:'white'}}>Change Name</Text>
        </TouchableOpacity>
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