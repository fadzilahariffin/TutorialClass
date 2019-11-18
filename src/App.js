import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  Button,
  TouchableHighlight,
} from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import MyStyles from './Styles'

class App extends Component {
  render() {
    return (
      <View style={MyStyles.container}>
        <View style={{flexDirection:'row',backgroundColor:'yellow'}}>
          <Image source={require('./download.png')} style={{width:200,height:200}}/>
        </View>

        <Text 
        style={{fontSize:25,color:'blue',fontWeight:'bold',marginBottom:10}}>
          BMI
        </Text>

        <TextInput 
        style={styles.textinput} 
        placeholder="Enter your weight"/>
          
        <TextInput 
        style={[styles.textinput,{marginTop:20}]} 
        placeholder="Enter your height"/>

        <TouchableOpacity onPress={()=> alert('submitted')} style={styles.submitButton}>
          <Text style={{alignSelf:'center',color:'white'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  
  textinput: {
    borderWidth:1,
    borderColor:'black',
    width:width-30,
    padding:15
  },
  submitButton:{
    width:width-100,
    height:30,
    backgroundColor:'blue',
    marginTop:30,
    borderRadius:25
  }
});