import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal, Button, Dimensions} from 'react-native';
//이지은 부분, 나중에 외부로부터 prop으로 받아와야 한다.


const MainCardModal =(props) => {
    return (
        <Modal visible={props.visible} animationType="none" transparent={true}>        
            <View style={styles.screen}>
                <View style={styles.cardContainer}>
                    {props.texts}
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity onPress={props.onCancel}>
                            <View style={styles.firstButton}>
                                <Text style={{color:'black'}}>취소</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{}}>
                            <View style={styles.secondButton}>
                                <Text style={{color:'white'}}>삭제</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </Modal>

    );
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00000050'
    },
    cardContainer:{
        borderColor:'grey',
        backgroundColor:'white',
        width:'90%',
        height:Dimensions.get('window').height /4,
        justifyContent:'space-evenly',
        alignItems:'center',

        //??
        borderRadius:10,
        borderWidth:0.5,

    },
    buttonsContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        //responsive하게 만들기 위해 주석처리
        //paddingHorizontal:20,
 

    },
    firstButton:{
        backgroundColor:'lightgray',
        width:Dimensions.get('window').width * 0.35,
        height:Dimensions.get('window').width * 0.12,
        //??
        borderRadius:25,
        //텍스트 위치
        justifyContent:'center',
        alignItems:'center',
    },
    secondButton:{
        //?? 색 dodgerblue보다는 아래 색이 더 MVP에 가깝고, blue쓰면 MVP랑 완전 달라서..
        backgroundColor:'cornflowerblue',
        width:Dimensions.get('window').width * 0.35,
        height:Dimensions.get('window').width * 0.12,
        //??
        borderRadius:25,
        //텍스트 위치
        justifyContent:'center',
        alignItems:'center',
    },
});

export default MainCardModal;