import React, { useState } from 'react';
import { Button,onPress,StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native';


function Type(){

    const addMBTIHandler = () => {
        // setMBTI()
        setIsVisible(false);
        setMBTI(preMBTI);
    }
    const cancelMBTIHandler = () => {
        setIsVisible(false);

        setClickedState1(false);
        setClickedState2(false);
        setClickedState3(false);
        setClickedState4(false);
        setClickedState5(false);
        setClickedState6(false);
        setClickedState7(false);
        setClickedState8(false);
        setClickedState9(false);
        setClickedState10(false);
        setClickedState11(false);
        setClickedState12(false);
        setClickedState13(false);
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);

    }
    const chooseMBTIHandler = () => {

    }

    const [clickedState1, setClickedState1] = useState(false);
    const [clickedState2, setClickedState2] = useState(false);
    const [clickedState3, setClickedState3] = useState(false);
    const [clickedState4, setClickedState4] = useState(false);
    const [clickedState5, setClickedState5] = useState(false);
    const [clickedState6, setClickedState6] = useState(false);
    const [clickedState7, setClickedState7] = useState(false);
    const [clickedState8, setClickedState8] = useState(false);
    const [clickedState9, setClickedState9] = useState(false);
    const [clickedState10, setClickedState10] = useState(false);
    const [clickedState11, setClickedState11] = useState(false);
    const [clickedState12, setClickedState12] = useState(false);

    const clickedButtonHandler1 = () => {
        setClickedState1(clickedState1 == false ? true : false);
        setClickedState2(false);
        setClickedState3(false);
        setClickedState4(false);
        setClickedState5(false);
        setClickedState6(false);
        setClickedState7(false);
        setClickedState8(false);
        setClickedState9(false);
        setClickedState10(false);
        setClickedState11(false);
    };
    const clickedButtonHandler2 = () => {
        setClickedState2(clickedState2 == false ? true : false);
        setClickedState1(false);
        setClickedState3(false);
        setClickedState4(false);
        setClickedState5(false);
        setClickedState6(false);
        setClickedState7(false);
        setClickedState8(false);
        setClickedState9(false);
        setClickedState10(false);
        setClickedState11(false);
    };
    const clickedButtonHandler3 = () => {
        setClickedState3(clickedState3 == false ? true : false);
        setClickedState1(false);
        setClickedState2(false);
        setClickedState4(false);
        setClickedState5(false);
        setClickedState6(false);
        setClickedState7(false);
        setClickedState8(false);
        setClickedState9(false);
        setClickedState10(false);
        setClickedState11(false);
    };
    const clickedButtonHandler4 = () => {
        setClickedState4(clickedState4 == false ? true : false);
        setClickedState1(false);
        setClickedState2(false);
        setClickedState3(false);
        setClickedState5(false);
        setClickedState6(false);
        setClickedState7(false);
        setClickedState8(false);
        setClickedState9(false);
        setClickedState10(false);
        setClickedState11(false);
    };
    const clickedButtonHandler5 = () => {
        setClickedState5(clickedState5 == false ? true : false);
        setClickedState1(false);
        setClickedState2(false);
        setClickedState3(false);
        setClickedState4(false);
        setClickedState6(false);
        setClickedState7(false);
        setClickedState8(false);
        setClickedState9(false);
        setClickedState10(false);
        setClickedState11(false);
    };
    const clickedButtonHandler6 = () => {
        setClickedState6(clickedState6 == false ? true : false);
        setClickedState1(false);
        setClickedState2(false);
        setClickedState3(false);
        setClickedState4(false);
        setClickedState5(false);
        setClickedState7(false);
        setClickedState8(false);
        setClickedState9(false);
        setClickedState10(false);
        setClickedState11(false);
    };
    const clickedButtonHandler7 = () => {
        setClickedState7(clickedState7 == false ? true : false);
        setClickedState1(false);
        setClickedState2(false);
        setClickedState3(false);
        setClickedState4(false);
        setClickedState5(false);
        setClickedState6(false);
        setClickedState8(false);
        setClickedState9(false);
        setClickedState10(false);
        setClickedState11(false);
    };
    const clickedButtonHandler8 = () => {
        setClickedState8(clickedState8 == false ? true : false);
        setClickedState1(false);
        setClickedState2(false);
        setClickedState3(false);
        setClickedState4(false);
        setClickedState5(false);
        setClickedState6(false);
        setClickedState7(false);
        setClickedState9(false);
        setClickedState10(false);
        setClickedState11(false);
       
    };
    const clickedButtonHandler9 = () => {
        setClickedState9(clickedState9 == false ? true : false);
        setClickedState1(false);
        setClickedState2(false);
        setClickedState3(false);
        setClickedState4(false);
        setClickedState5(false);
        setClickedState6(false);
        setClickedState7(false);
        setClickedState8(false);
        setClickedState10(false);
        setClickedState11(false);
       
    };
    const clickedButtonHandler10 = () => {
        setClickedState10(clickedState10 == false ? true : false);
        setClickedState1(false);
        setClickedState2(false);
        setClickedState3(false);
        setClickedState4(false);
        setClickedState5(false);
        setClickedState6(false);
        setClickedState7(false);
        setClickedState8(false);
        setClickedState9(false);
        setClickedState11(false);
        
    };
    const clickedButtonHandler11 = () => {
        setClickedState11(clickedState11 == false ? true : false);
        setClickedState1(false);
        setClickedState2(false);
        setClickedState3(false);
        setClickedState4(false);
        setClickedState5(false);
        setClickedState6(false);
        setClickedState7(false);
        setClickedState8(false);
        setClickedState9(false);
        setClickedState10(false);
       
    };




        return  (
            <View>
                <View style={styles.buttonContainer}>
                    <Pressable
                        style={[styles.groupButton, {
                            backgroundColor: clickedState1 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler1}
                    ><Text style={{ color: clickedState1 ? 'white' : 'blue' }}>만남</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.groupButton, {
                            backgroundColor: clickedState2 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler2}
                    ><Text style={{ color: clickedState2 ? 'white' : 'blue' }}>문자/톡</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.groupButton, {
                            backgroundColor: clickedState3 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler3}
                    ><Text style={{ color: clickedState3 ? 'white' : 'blue' }}>통화</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.groupButton, {
                            backgroundColor: clickedState4 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler4}
                    ><Text style={{ color: clickedState4 ? 'white' : 'blue' }}>메일</Text>
                    </Pressable>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable
                        style={[styles.groupButton, {
                            backgroundColor: clickedState5 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler5}
                    ><Text style={{ color: clickedState5 ? 'white' : 'blue' }}>학교</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.groupButton, {
                            backgroundColor: clickedState6 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler6}
                    ><Text style={{ color: clickedState6 ? 'white' : 'blue' }}>회사</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.groupButton, {
                            backgroundColor: clickedState7 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler7}
                    ><Text style={{ color: clickedState7 ? 'white' : 'blue' }}>식당</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.groupButton, {
                            backgroundColor: clickedState8 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler8}
                    ><Text style={{ color: clickedState8 ? 'white' : 'blue' }}>카페</Text>
                    </Pressable>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable
                        style={[styles.groupButton, {
                            backgroundColor: clickedState9 ? 'blue' : 'white'
                        }]}
                    onPress={clickedButtonHandler9}
                    ><Text style={{ color: clickedState9 ? 'white' : 'blue' }}>파티</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.groupButton, {
                            backgroundColor: clickedState10 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler10}
                    ><Text style={{ color: clickedState10 ? 'white' : 'blue' }}>번개</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.groupButton, {
                            backgroundColor: clickedState11 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler11}
                    ><Text style={{ color: clickedState11 ? 'white' : 'blue' }}>기타</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.groupButton, {
                            backgroundColor:'white',borderColor:'white'
                        }]}
                    ><Text style={{ color: 'white' , }}></Text> 
                    </Pressable>
                </View>
                
            </View>
        );
    }

const styles = StyleSheet.create({
    TagItems: {
        fontSize: 15,
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        width: 63,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#C3C3C3",
        marginRight: 8,
        marginVertical: 3,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',

    },
    groupButton: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 20,
        paddingLeft: 8,
        width: 56,
        height: 32,
        fontSize: 10,
        marginLeft: 10,
    },
});

export default Type;