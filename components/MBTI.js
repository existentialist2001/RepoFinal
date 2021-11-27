import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Modal } from 'react-native';

const MBTI = props => {
    const [isVisible, setIsVisible] = useState(false);
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
    const [MBTI, setMBTI] = useState('');
    const [preMBTI, setPreMBTI] = useState('');
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
    const [clickedState13, setClickedState13] = useState(false);
    const [clickedState14, setClickedState14] = useState(false);
    const [clickedState15, setClickedState15] = useState(false);
    const [clickedState16, setClickedState16] = useState(false);


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
        setClickedState12(false);
        setClickedState13(false);
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('ISFJ');
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
        setClickedState12(false);
        setClickedState13(false);
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('INFJ');
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
        setClickedState12(false);
        setClickedState13(false);
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('ISTJ');
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
        setClickedState12(false);
        setClickedState13(false);
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('INTJ');
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
        setClickedState12(false);
        setClickedState13(false);
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('ISTP');
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
        setClickedState12(false);
        setClickedState13(false);
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('ISFP');
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
        setClickedState12(false);
        setClickedState13(false);
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('INFP');
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
        setClickedState12(false);
        setClickedState13(false);
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('INTP');
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
        setClickedState12(false);
        setClickedState13(false);
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('ESTP');
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
        setClickedState12(false);
        setClickedState13(false);
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('ESFP');
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
        setClickedState12(false);
        setClickedState13(false);
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('ENFP');
    };
    const clickedButtonHandler12 = () => {
        setClickedState12(clickedState12 == false ? true : false);
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
        setClickedState13(false);
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('ENTP');
    };
    const clickedButtonHandler13 = () => {
        setClickedState13(clickedState13 == false ? true : false);
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
        setClickedState14(false);
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('ESFJ');
    };
    const clickedButtonHandler14 = () => {
        setClickedState14(clickedState14 == false ? true : false);
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
        setClickedState15(false);
        setClickedState16(false);
        setPreMBTI('ENFJ');
    };
    const clickedButtonHandler15 = () => {
        setClickedState15(clickedState15 == false ? true : false);
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
        setClickedState16(false);
        setPreMBTI('ESTJ');
    };
    const clickedButtonHandler16 = () => {
        setClickedState16(clickedState16 == false ? true : false);
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
        setPreMBTI('ENTJ');
    };


    return (
        <View style={styles.flexbox}>
            <Text style={[styles.gray, { color: props.clickedBox5 ? 'blue' : 'gray' }]}>MBTI</Text>
            <View>
                <Text
                    onPress={() => setIsVisible(true)}
                    style={{...styles.psudoTextInput , borderColor:props.clickedBox5?'blue':'gray',
                    color: props.clickedBox5?'blue':'gray' }}>{MBTI}</Text>
            </View>
            <Modal
                visible={isVisible}
                animationType="slide">
                <View style={styles.MBTIModal}>
                    <View style={styles.horizontal}>
                        <Pressable onPress={cancelMBTIHandler} >
                            <Text style={styles.gray}>취소</Text>
                        </Pressable>
                        <Pressable>
                            <Text style={styles.middle}>MBTI</Text>
                        </Pressable>
                        <Pressable onPress={addMBTIHandler}>
                            <Text style={styles.gray}>완료</Text>
                        </Pressable>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState1 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler1}
                        ><Text style={{ color: clickedState1 ? 'white' : 'blue' }}>ISFJ</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState2 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler2}
                        ><Text style={{ color: clickedState2 ? 'white' : 'blue' }}>INFJ</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState3 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler3}
                        ><Text style={{ color: clickedState3 ? 'white' : 'blue' }}>ISTJ</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState4 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler4}
                        ><Text style={{ color: clickedState4 ? 'white' : 'blue' }}>INTJ</Text>
                        </Pressable>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState5 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler5}
                        ><Text style={{ color: clickedState5 ? 'white' : 'blue' }}>ISTP</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState6 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler6}
                        ><Text style={{ color: clickedState6 ? 'white' : 'blue' }}>ISFP</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState7 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler7}
                        ><Text style={{ color: clickedState7 ? 'white' : 'blue' }}>INFP</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState8 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler8}
                        ><Text style={{ color: clickedState8 ? 'white' : 'blue' }}>INTP</Text>
                        </Pressable>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState9 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler9}
                        ><Text style={{ color: clickedState9 ? 'white' : 'blue' }}>ESTP</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState10 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler10}
                        ><Text style={{ color: clickedState10 ? 'white' : 'blue' }}>ESFP</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState11 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler11}
                        ><Text style={{ color: clickedState11 ? 'white' : 'blue' }}>ENFP</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState12 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler12}
                        ><Text style={{ color: clickedState12 ? 'white' : 'blue' }}>ENTP</Text>
                        </Pressable>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState13 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler13}
                        ><Text style={{ color: clickedState13 ? 'white' : 'blue' }}>ESFJ</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState14 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler14}
                        ><Text style={{ color: clickedState14 ? 'white' : 'blue' }}>ENFJ</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState15 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler15}
                        ><Text style={{ color: clickedState15 ? 'white' : 'blue' }}>ESTJ</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.groupButton, {
                                backgroundColor: clickedState16 ? 'blue' : 'white'
                            }]}
                            onPress={clickedButtonHandler16}
                        ><Text style={{ color: clickedState16 ? 'white' : 'blue' }}>ENTJ</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({
    inputBox: {
        borderWidth: 1,
        width: 150,
        height: 40,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 8,

    },
    horizontal: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 80
    },
    MBTIModal: {
        flex: 1,
        marginTop: '120%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '85%',
        margin: 5

    },
    groupButton: {

        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 20,
        paddingLeft: 8,
        height: 30,
        fontSize: 10,
        flex: 1,
        marginLeft: 10,
    },
    psudoTextInput: {
        borderWidth: 1,
        width: 200,
        height: 40,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 8,
        marginLeft: 15
    },
    gray: {
        color: 'gray',
        width: 70,
        fontSize: 16,
    },
    middle: {
        marginLeft: 80,
        marginRight: 130
    },

    flexbox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },

});
export default MBTI;