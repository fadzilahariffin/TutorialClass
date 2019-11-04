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
      name: 'john',
      class:'mobile app development',
    }
  }

  changeName(){
    if(this.state.name == 'john')
    { 
      this.setState({
        name:'johny'
      })
    }
    else{
      this.setState({
        name:'john'
      })
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <Text>{this.state.name}</Text>
          <Text>{this.state.class}</Text>
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