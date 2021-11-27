import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Pressable, } from 'react-native';

const NameInput = props => {


    return (
        <View style={styles.flexbox}  >
            <Text style={[styles.gray,{color:props.clickedBox1?'blue':'gray'}]}>이름</Text>
            <TextInput {...props} style={{ ...styles.inputBox, ...props.style,borderColor:props.clickedBox1?'blue':'gray'
        ,color: props.clickedBox1?'blue':'gray'}} />

        </View>

        // <Pressable onPress={clickedBoxHandler1}>
        // <View style={styles.flexbox}  >
        //     <Text style={[styles.gray,{color:clickedBox1?'blue':'gray'} ]}>이름</Text>
        //     <TextInput onPress={clickedBoxHandler1}
        //         placeholder="이름"
        //         style={[styles.inputBox,{borderColor:clickedBox1?'blue':'gray'}]}
        //         onChangeText={enteredNameHandler}
        //         value={enteredName}
        //     />
        // </View>
        // </Pressable>


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
    contentBox: {
        marginBottom: 30,
    },
    flexbox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:5

    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    middleTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%',
        margin: 5

    },
    button: {
        width: '40%',
        justifyContent: 'space-around',
    },

});
export default NameInput;