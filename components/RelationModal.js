import React, {useState} from 'react';
import { Modal, View, StyleSheet, Button, Text, Dimensions, TouchableOpacity, Pressable} from 'react-native';
import MainButton from './MainButton';
import MainCardModal from './MainCardModal';

//관계상태 모달
/*
없어진 손절기능
  <View style={styles.fourthLine}>
            <TouchableOpacity onPress={cutHandler}>
                <View>
                    <Text style={{color:'red', fontWeight:'500', fontSize:15}}>이 사람과 손절하겠습니다</Text>
                </View> 
            </TouchableOpacity>
    </View>

*/
const RelationModal = props => {
    const [selectedRelation, setSelectedRelation]=useState('');

    const completeHandler = () =>{
        props.onChange(selectedRelation);

    };

    const cutHandler = () => {
        //삭제 카드 모달 열고, 기존의 모달(관계상턔) 닫기
        props.cutRelation(true);
        props.onCancel();
    }

    return (
    <Modal visible={props.visible} animationType="none" transparent={true}>
    <View style={styles.screen}>
        <View style={styles.container}>
        <View style={styles.head} >
            <View><TouchableOpacity onPress={props.onCancel} ><Text style={{color:'grey'}}>취소</Text></TouchableOpacity></View>
            <Text style={{fontWeight:'700'}}>관계</Text>
            <View><TouchableOpacity onPress={completeHandler}><Text style={{color:'grey'}}>완료</Text></TouchableOpacity></View>
        </View>

        <View style={styles.firstLists}>
            <MainButton onPress={setSelectedRelation}>절친한 사이</MainButton>
            <MainButton onPress={setSelectedRelation}>친한 사이</MainButton>
            <MainButton onPress={setSelectedRelation}>친해지는 중</MainButton>     
        </View>

        <View style={styles.secondLists}>
        <MainButton onPress={setSelectedRelation}>알아가는 중</MainButton>
        <MainButton onPress={setSelectedRelation}>함께 사는 중</MainButton>
        <MainButton onPress={setSelectedRelation}>사랑하는 중</MainButton>
        </View>

        <View style={styles.thirdLists}>
        <MainButton onPress={setSelectedRelation}>아는 사이</MainButton>
        <MainButton onPress={setSelectedRelation}>가족</MainButton>
        <MainButton onPress={setSelectedRelation}>소꿉 친구</MainButton>
        <MainButton onPress={setSelectedRelation}>절친</MainButton>
        </View>

      
        </View>
    </View>
    </Modal>)
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:'#00000050'
    },
    container:{
        width:'100%',
        height:Dimensions.get('window').height / 2.5,

        //border 관련 설정들
        backgroundColor:'white',
        borderTopColor:'grey',
        borderTopWidth:0.5,
        borderLeftWidth:0.5,
        borderLeftColor:'grey',
        borderRightWidth:0.5,
        borderRightColor:'grey',
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        //이 코드 안주면 '취소 호칭 완료' 부분이 위에 딱 붙게 됨
        paddingTop:Dimensions.get('window').width / 12,

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
        justifyContent:"space-evenly",
        marginBottom:10,
    },
    secondLists:{
        flexDirection:'row',
        width:'100%',
        justifyContent:"space-evenly",
        marginBottom:10,
    },
    thirdLists:{
        flexDirection:'row',
        width:'100%',
        justifyContent:"space-evenly",
        marginBottom:10,
    },
    fourthLine:{    
        marginTop:15,
        alignItems:'center',
    }

});

export default RelationModal;
