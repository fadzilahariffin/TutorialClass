import React, { useState } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from "react-native";


 function App() {

    const [name, setName] = useState(['fadzilah']);

    function changeName(){
      if(name == 'fadzilah')
      setName('ahmad')
      else
      setName('fadzilah')
    }

    return (
      <SafeAreaView style={styles.container}>
        <Text> {name} </Text>
        <TouchableOpacity style={{backgroundColor:'blue'}} onPress={()=>changeName()}>
          <Text style={{color:'white'}}>Change Name</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
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