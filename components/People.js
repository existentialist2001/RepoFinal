import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

class Type extends Component {
  state = [
    { text: '홍길동' },
  ]

    render() {
        return this.state.map((data) => (
            <View style={styles.People}>
              <View style={styles.IconContainer}>
                <Ionicons name="ios-person" size={24} color="#5A7DF4" />
              </View>
              <Text style={styles.Name}>{data.text}</Text>
            </View>
          ));
      }
  }

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection:"row",
    },

    IconContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        borderColor: "#667EE5",
        borderWidth: 1,
        borderRadius: 25,
        marginBottom: 10,
    },

    People: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: 18,
    },

    Name: {
      color:"#667EE5",
      fontWeight: "bold",
    }
});

export default Type;