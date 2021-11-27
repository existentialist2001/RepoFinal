import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Modal} from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';
//import Modal from "react-native-modal";

function TypeAdd() {
    const [index, setIndex] = useState(0);

    const [tag, setTag] = useState('')
        return (
          <View style={styles.TagInput}>
              <TextInput 
              placeholder = "직접입력"
              placeholderTextColor="#fff"
              value = {tag}
              onChangeText = {(e) => setTag(e)}
              onpress = {() => setIndex(1)}
              style={index === 1 ? styles.ActiveTagInput : styles.TagInput}
              ></TextInput>
          </View>
        );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 10,
    },


    TagInput: {
        fontSize: 15,
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        width: 70,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#C3C3C3",
        marginRight: 3,
        marginVertical: 3,
        backgroundColor: "#C3C3C3",
    },
    ActiveTagInput: {
        fontSize: 15,
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        width: 70,
        borderRadius: 25,
        borderWidth: 2,
        color : "#8299F6",
        borderColor: "#C3C3C3",
        marginRight: 3,
        marginVertical: 3,
        backgroundColor: "#E1E7FE",
    },
});

export default TypeAdd;