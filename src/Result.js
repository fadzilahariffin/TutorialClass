import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Result extends Component {
    render() {
        const weight = this.props.navigation.getParam('weight')
        const height = this.props.navigation.getParam('height')


        return (
            <View style={styles.container}>
                <Text>Weight : {weight} </Text>
                <Text>Height : {height} </Text>
                <Text>BMI: {weight/(height*height)} </Text>
            </View>
        );
    }
}
export default Result;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});