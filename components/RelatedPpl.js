import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal, Pressable, } from 'react-native';

const RelatedPpl = props => {
    const [isVisible, setIsVisible] = useState(false);
    const [clickedModalBox1, setClickedModalBox1] = useState(false);
    const addRelatedPplHandler =()=>{
        // setMBTI()
        setIsVisible(false);
    }
    const cancelRelatedPplHandler =()=>{
        setIsVisible(false);
    }
    const clickedModalBoxHandler1 = () => {
        setClickedModalBox1(clickedModalBox1 == false ? true : false);
      };
    return (
        <View style={styles.flexbox}>
            <View  >
                <Text style={[styles.gray, { color: props.clickedBox6 ? 'blue' : 'gray' }]} >관련인물</Text>
            </View>
            <Pressable onPress={() => setIsVisible(true)}>
            <View {...props} style={{ ...styles.littleButton, ...props.style,
                    borderColor:props.clickedBox6?'blue':'gray'}}>
                <Text style={{color: props.clickedBox6?'blue':'gray'}}>+</Text>
            </View>
            <Modal
              visible={isVisible}
              animationType="slide">
              <View style={styles.ExtraModal}>
                <View style={styles.horizontal}>
                  <Pressable onPress={cancelRelatedPplHandler} >
                    <Text
                      style={styles.gray}>취소</Text>
                  </Pressable>
                  <Pressable>
                    <Text style={styles.middle}>관련 인물</Text>
                  </Pressable>
                  <Pressable onPress={addRelatedPplHandler}>
                    <Text style={styles.gray}>완료</Text>
                  </Pressable>
                </View>
                <View style={styles.left}>
                  <Pressable onPress={clickedModalBoxHandler1}>
                    <View >
                      <TextInput 
                        placeholder="이름 검색"style={{
                        ...styles.inputBox, borderColor: clickedModalBox1 ? 'blue' : 'gray'
                        , color: clickedModalBox1 ? 'blue' : 'gray'
                      }}
                      />
                    </View>
                  </Pressable>
                </View>
              </View>
            </Modal>
            </Pressable>
        </View >

    )
};

const styles = StyleSheet.create({
    inputBox: {
        borderWidth: 1,
        width: 330,
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
      },
      middle: {
        marginLeft: 80,
        marginRight: 120
      },
    littleButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'white',
        color: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 20,
    },
    flexbox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    horizontal: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 30
      },
      ExtraModal: {
        flex: 1,
        marginTop: '80%',
    
      },
      left: {
        marginLeft: 30
      },

});
export default RelatedPpl;