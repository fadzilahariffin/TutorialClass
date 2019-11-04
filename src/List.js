import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet, 
    SafeAreaView,
    TouchableOpacity
} from "react-native";

class List extends Component {
    render() {
        return (
            <>
                <Text>{this.props.nama}</Text>
                <Text>{this.props.kelas}</Text>
            </>
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