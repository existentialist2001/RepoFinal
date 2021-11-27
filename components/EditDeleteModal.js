import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal, Image, Dimensions, Pressable,} from 'react-native';

//아이콘
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import EditScreen from './EditScreen';
//삭제아이콘 <MaterialCommunityIcons name="delete" size={24} color="black" />
//초대아이콘 <MaterialIcons name="local-post-office" size={24} color="black" />

//기능 1의 초대하기와 삭제하기를 위한 모달
//버튼 두 개라서, 따로 컴포넌트 하지 않고 그냥 두 개 직접 다 작성할 것.
//<Image source={require('../images/초대하기_무색.svg')} style={{width:30, height:30}} />
//<Image source={require('../images/삭제하기_무색.svg')} style={{width:30, height:30}}/>

const InviteDeleteModal =(props) => {

    //삭제, 초대 버튼 클릭 시 색 바뀌게, 기본 값 회색, 
    let inviteIcon=<MaterialIcons name="local-post-office" size={24} color="gray" />;
    let delIcon=<MaterialCommunityIcons name="delete" size={24} color="gray" />;
    //색 변경 가능하게할 useState
    const [inviteColor, setInviteColor]=useState(false);
    const [delColor, setDelColor]=useState(false);
    const inviteHandler = () => {
        setInviteColor(true);
    };
    //삭제하기 눌렀을 때, 색 변하는 것 뿐 아니라, prop으로 받아온 삭제카드모달 뜨게하기 위한 함수 실행(true로 바꿔 줌), + 삭제초대 모달 끄게
    const delHandler = () => {
        //색 변경
        setDelColor(true);
        //기존에 떠있던 초대 삭제 모달 지우고, 삭제카드모달뜨도록
        props.onCancel();
        props.onDelete(true);
    };
    if (inviteColor){
        inviteIcon=<MaterialIcons name="local-post-office" size={24} color="black" />;
    }
    if (delColor){
        delIcon=<MaterialCommunityIcons name="delete" size={24} color="black" />;
    }

    const editHandler = () => {
        props.goback(false);
        setEditScreen(true)
      
    }
    const [editScreen, setEditScreen] = useState(false);

    if (editScreen) {
      return (<EditScreen onBack={setEditScreen}/>)
    }

    return (
        <Modal visible={props.visible} animationType="none" transparent={true}>
            <View style={styles.screen}>
                <View style={styles.buttonsContainer}>
                   
                    <TouchableOpacity 
                    onPress={inviteHandler}>
                        <View style={styles.inviteButton}>
                            {inviteIcon}
                            <Text
                            onPress = {editHandler}>편집하기</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={delHandler}>
                        <View style={styles.deleteButton}>
                            {delIcon}
                            <Text>삭제하기</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
)};  

const styles=StyleSheet.create({
    screen: {
        flex: 1,
        //backgroundColor:'black',
        //버튼 컨테이너를 오른쪽으로 붙이기 위해서
        alignItems:'flex-end',
        backgroundColor:'#00000050'
    },
    //두 버튼 다 감싼 커네이너
    buttonsContainer:{  
        //backgroundColor:'red',
        width:Dimensions.get('window').width /2,
        height:Dimensions.get('window').height /4,
        //버튼 두 개를 중간에 위치시키기 위해
        justifyContent:'center',
        paddingLeft:'10%',
        //점 버튼 겹쳐서 렌더링되게 하기 위해
        paddingBottom:25,
    },
    headerButtonContainer:{
        alignItems:'flex-end',
    },
    inviteButton:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:15,
        width:'80%',
        height:35,
        justifyContent:'space-evenly',
        alignItems:'center',
        borderWidth:0.5,
    },
    deleteButton:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:15,
        width:'80%',
        height:35,
        justifyContent:'space-evenly',
        alignItems:'center',
        
    },
});

export default InviteDeleteModal; 