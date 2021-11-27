import React, {useState} from 'react';
import {View,Modal, StyleSheet, Pressable, Button, Text, Dimensions} from 'react-native';

const AlramModal = props => {
    //알람 명칭을 관리하기 위한것, 끄고 키는 건 아님.
    const [selectedAlram, setSelectedAlram]=useState('없음');

        
    const completeHandler = () =>{
        props.onChange(selectedAlram);
    };

    return (
        <Modal transparent={true} visible={props.visible} animationType="slide">
        <View style={styles.screen}> 
        <View style={styles.alramContainer}>
            <View style={styles.head} >
                <View><Pressable onPress={props.onCancel} ><Text style={{color:'grey'}}>취소</Text></Pressable></View>
                <Text style={{fontWeight:"700"}}>알림</Text>
                <View><Pressable onPress={completeHandler}><Text style={{color:'grey'}}>완료</Text></Pressable></View>
            </View>
    
            <View style={styles.firstLists}>
                <View style={styles.alramBox}>
                    <Pressable onPress={()=>{setSelectedAlram("1년 마다")}}>    
                        <View style={styles.image}></View>
                        <Text style={styles.textButton}>1년 마다</Text>
                    </Pressable>
                </View>
                <View style={styles.alramBox}>
                    <Pressable onPress={()=>{setSelectedAlram("6개월 마다")}}>    
                        <View style={styles.image}></View>
                        <Text style={styles.textButton}>6개월 마다</Text>
                    </Pressable>
                </View>

                <View style={styles.alramBox}>
                    <Pressable onPress={()=>{setSelectedAlram("한 달 마다")}}>    
                        <View style={styles.image}></View>
                        <Text style={styles.textButton}>한 달 마다</Text>
                    </Pressable>
                </View>

            </View>
    
            <View style={styles.secondLists}>
                <View style={styles.alramBox}>
                    <Pressable onPress={()=>{setSelectedAlram("2주 마다")}}>    
                        <View style={styles.image}></View>
                        <Text style={styles.textButton}>2주 마다</Text>
                    </Pressable>
                </View>
                <View style={styles.alramBox}>
                    <Pressable onPress={()=>{setSelectedAlram("1주 마다")}}>    
                        <View style={styles.image}></View>
                        <Text style={styles.textButton}>1주 마다</Text>
                    </Pressable>
                </View>

                <View style={styles.alramBox}>
                    <Pressable onPress={()=>{setSelectedAlram("없음")}}>    
                        <View style={styles.image}></View>
                        <Text style={styles.textButton}>없음</Text>
                    </Pressable>
                </View>

            </View>
        </View>
        </View>
        </Modal>
        );
        
    
};



const styles=StyleSheet.create({
    screen:{
        flex:1,
        //이렇게 하면 안됨
        //width:'100%',
        //height: Dimensions.get('window').height / 3, 
    },
    //이게 진짜 레이아웃하는 컨테이너.
    alramContainer:{
        //width:'100%',
        //height:Dimensions.get('window').height /3,
        marginTop:Dimensions.get('window').height / 3 * 1.6,
        backgroundColor:'white',
        //윗 부분 경계
        paddingTop:20,
        borderTopColor:'blue',
        borderTopWidth:0.5,
        borderLeftWidth:0.5,
        borderRightWidth:0.5,
        borderLeftColor:'blue',
        borderRightColor:'blue',
        borderTopRightRadius:15,
        borderTopLeftRadius:15,

    },
    head:{
        flexDirection:'row',
        width:'100%',
        justifyContent:"space-around",
        marginBottom:20,
    },
    firstLists:{
        flexDirection:'row',
        width:'100%',
        justifyContent:"space-around",
        marginBottom:10,
        marginLeft:10,
    },
    secondLists:{
        flexDirection:'row',
        width:'100%',
        justifyContent:"space-around",
        marginBottom:10,
        marginLeft:10,
    },
    image:{
        width:80,
        height:80,
        backgroundColor:'gainsboro',
    },
    button:{
        width: 100,
        
    },
    alramBox:{  
       width:80,
    },
    textButton:
    {
        color:'blue',
        textAlign:'center'
    },
});

export default AlramModal;