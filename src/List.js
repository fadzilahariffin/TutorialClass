import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet, 
    SafeAreaView
} from "react-native";

class List extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>{this.props.nama}</Text>
                <Text>{this.props.kelas}</Text>
            </SafeAreaView>
        );
    }
}
export default List;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});