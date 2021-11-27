import React, {useState} from 'react';
import { Button, ScrollView,StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EditScreen from './components/EditScreen';

function History(props) {
  //EditScreen
    return (
      <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <EditScreen goback={props.goback} />
      </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
  header : {
    paddingTop: 48,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 24,
    borderBottomWidth: 1, 
    borderBottomColor: "#e9ecef",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  container: {
    flexDirection: 'column',
    backgroundColor: "white",
  },

  title: {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
},

submit: {
  color: "#5B7DF4",
  fontSize: 20,
  marginLeft: "auto",
  fontWeight: "bold",
  }

});

export default History;