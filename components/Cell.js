import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Pressable, } from 'react-native';

const Cell = props => {
    return (
            <View style={styles.flexbox}>
                <Text style={[styles.gray,{color:props.clickedBox3?'blue':'gray'}]}>휴대전화</Text>
                <TextInput {...props} style={{ ...styles.inputBox, ...props.style,
                    borderColor:props.clickedBox3?'blue':'gray',
                    color: props.clickedBox3?'blue':'gray' }} />
            </View>
    )
};

const styles = StyleSheet.create({
    inputBox: {
        borderWidth: 1,
        width: 200,
        height: 40,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 8,

    },
    gray: {
        color: 'gray',
        width: 70,
        fontSize: 16,
        marginRight: 15,
    },

    flexbox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:5
    },

});
export default Cell;