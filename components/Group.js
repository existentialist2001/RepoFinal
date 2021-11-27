import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Pressable } from 'react-native';




const Group = props => {
 
  const [clickedState1, setClickedState1] = useState(false);
  const [clickedState2, setClickedState2] = useState(false);
  const [clickedState3, setClickedState3] = useState(false);
  const [clickedState4, setClickedState4] = useState(false);
  const [clickedState5, setClickedState5] = useState(false);
  const [clickedState6, setClickedState6] = useState(false);
  const [clickedState7, setClickedState7] = useState(false);


  const clickedButtonHandler1 = () => {
    setClickedState1(clickedState1 == false ? true : false);
  };
  const clickedButtonHandler2 = () => {
    setClickedState2(clickedState2 == false ? true : false);
  };
  const clickedButtonHandler3 = () => {
    setClickedState3(clickedState3 == false ? true : false);
  };
  const clickedButtonHandler4 = () => {
    setClickedState4(clickedState4 == false ? true : false);
  };
  const clickedButtonHandler5 = () => {
    setClickedState5(clickedState5 == false ? true : false);
  };
  const clickedButtonHandler6 = () => {
    setClickedState6(clickedState6 == false ? true : false);
  };
  const clickedButtonHandler7 = () => {
    setClickedState7(clickedState7 == false ? true : false);
  };

const longPressHandler=()=>{
  alert('Button Long Pressed');
};

  return (
    
      <View style={styles.flexbox}>
        <Text style={[styles.gray, { color: props.clickedBox2 ? 'blue' : 'gray' }]}>그룹</Text>
        <View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.groupButton, {
                backgroundColor: props.clickedBox2?clickedState1?'blue':'white':clickedState1?'gray':'white',
                borderColor: props.clickedBox2 ? 'blue' : 'gray' 
              }]}
              onLongPress={longPressHandler}
              onPress={clickedButtonHandler1}
            ><Text style={{
              color: props.clickedBox2?clickedState1?'white':'blue':clickedState1?'white':'gray'
            }}>#가족</Text>
            </Pressable>
            <Pressable
              style={[styles.groupButton, {
                backgroundColor: props.clickedBox2?clickedState2?'blue':'white':clickedState2?'gray':'white',
                borderColor:props.clickedBox2 ? 'blue' : 'gray' 
              }]}
              onLongPress={longPressHandler}
              onPress={clickedButtonHandler2}
            ><Text style={{
              color: props.clickedBox2?clickedState2?'white':'blue':clickedState2?'white':'gray'
            }}>#친구</Text>
            </Pressable>
            <Pressable
              style={[styles.groupButton, {
                backgroundColor: props.clickedBox2?clickedState3?'blue':'white':clickedState3?'gray':'white',
                borderColor: props.clickedBox2 ? 'blue' : 'gray' 
              }]}
              onLongPress={longPressHandler}
              onPress={clickedButtonHandler3}
            ><Text style={{
              color: props.clickedBox2?clickedState3?'white':'blue':clickedState3?'white':'gray'
            }}>#동료</Text>
            </Pressable>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.groupButton, {
                backgroundColor: props.clickedBox2?clickedState4?'blue':'white':clickedState4?'gray':'white',
                borderColor: props.clickedBox2 ? 'blue' : 'gray' 
              }]}
              onLongPress={longPressHandler}
              onPress={clickedButtonHandler4}
            ><Text style={{
              color: props.clickedBox2?clickedState4?'white':'blue':clickedState4?'white':'gray'
            }}>#회사</Text>
            </Pressable>
            <Pressable
              style={[styles.groupButton, {
                backgroundColor: props.clickedBox2?clickedState5?'blue':'white':clickedState5?'gray':'white',
                borderColor: props.clickedBox2 ? 'blue' : 'gray' 
              }]}
              onLongPress={longPressHandler}
              onPress={clickedButtonHandler5}
            ><Text style={{
              color: props.clickedBox2?clickedState5?'white':'blue':clickedState5?'white':'gray'
            }}>#학교</Text>
            </Pressable>
            <Pressable
              style={[styles.groupButton, {
                backgroundColor: props.clickedBox2?clickedState6?'blue':'white':clickedState6?'gray':'white',
                borderColor:props.clickedBox2 ? 'blue' : 'gray' 
              }]}
              onLongPress={longPressHandler}
              onPress={clickedButtonHandler6}
            ><Text style={{
              color: props.clickedBox2?clickedState6?'white':'blue':clickedState6?'white':'gray'
            }}>#직장</Text>
            </Pressable>
          </View>
          <View style={styles.buttonContainer2}>
            <Pressable
              style={[styles.groupButton, {
                backgroundColor: props.clickedBox2?clickedState7?'blue':'white':clickedState7?'gray':'white',
                borderColor: props.clickedBox2 ? 'blue' : 'gray' 
              }]}
              onLongPress={longPressHandler}
              onPress={clickedButtonHandler7}
            ><Text style={{
              color: props.clickedBox2?clickedState7?'white':'blue':clickedState7?'white':'gray'
              
            }}>#직접입력</Text>
            </Pressable>
          </View>
        </View>

      </View>
    
  )
};

const styles = StyleSheet.create({

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

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '75%',
    margin: 5

  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
    margin: 5

  },

  button: {
    width: '40%',
    justifyContent: 'space-around',
    borderWidth: 1,
  },
  groupButton: {

    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingLeft: 8,
    height: 30,
    fontSize: 10,
    flex: 1,
    marginLeft: 2,
  }


});


export default Group;