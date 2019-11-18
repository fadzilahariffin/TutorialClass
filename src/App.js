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

  constructor(props){
    super(props);
    this.state = {
      weight: null,
      height: null
    }
    
  }

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
        placeholder="Enter your weight"
        onChangeText={(weight) => this.setState({weight})}
        value={this.state.weight}
        />
          
        <TextInput 
        style={[styles.textinput,{marginTop:20}]} 
        placeholder="Enter your height"
        onChangeText={(height) => this.setState({height})}
        value={this.state.height}
        />

        <TouchableOpacity style={styles.submitButton} 
        onPress={()=> this.props.navigation.navigate('Result',{
          weight: this.state.weight,
          height:this.state.height
        }) }>
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