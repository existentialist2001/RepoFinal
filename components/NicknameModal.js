import React, {useState} from 'react';
import { Modal, View, StyleSheet, Button, Text, Pressable, Dimensions, TouchableOpacity, FlatList, TextInput} from 'react-native';
import MainButton from './MainButton';

/*
호칭 버튼 눌렀을떄 뜨는 모달.
1)
4번째 줄, 즉 직접 입력하고, 직접 입력하면 새로운 호칭 버튼이 생기는 것 아직 구현 못함.
미완성 코드
<View style={styles.fourthLists}>
<MainButton onPress={setSelectedNickname}>부장님</MainButton>
<MainButton onPress={setSelectedNickname}>직접 입력</MainButton>
</View>
이거, flexgrow랑 flatList 사용해야할 듯..아..
추가하는 로직도 구현해야 하고..

2) 
취소, 완료 버튼 눌렀을 때 글자 색 검은 색으로 바뀌는 것, 내부적으로 검은색으로 바뀌긴 하지만
화면이 너무 빨리 넘어가서
시각적으로 확인을 못하는 상황...

*/
const NicknameModal = (props) => {
    const [selectedNickname, setSelectedNickname]=useState('');

    //취소, 완료 색 변경하기(기본은 회색)
    let textColor='grey';

    //완료 버튼
    const completeHandler = () =>{
        props.onChange(selectedNickname);
        //setButtonColor('grey');
        //텍스트 색도 변하게
        textColor='black';
    };

    //취소 버튼
    const delHandler = () =>{
        props.onCancel();
        //텍스트 색도 변하게
        textColor='black';
    }

    //직접입력, 호칭 추가 가능하도록!
    const [nicknames, setNicknames]=useState([
        { 
            name:"호칭 없음",
            key:'1',
        },
        { 
            name:"님",
            key:'2',
        },
        { 
            name:"씨",
            key:'3',
        },
        { 
            name:"쓰",
            key:'4',
        },
        { 
            name:"언니",
            key:'5',
        },
        { 
            name:"오빠",
            key:'6',
        },
        { 
            name:"형",
            key:'7',
        },
        { 
            name:"누나",
            key:'8',
        },
        { 
            name:"선배",
            key:'9',
        },
        { 
            name:"후배",
            key:'10',
        },
        { 
            name:"선생님",
            key:'11',
        },
        { 
            name:"교수님",
            key:'12',
        },
    ])
    // 하루만 더주면 가능할,, 일단 추가하는거 실패
    // //방금 입력받은 호칭 저장할 state
    // const [inputedName,setInputedName]= useState("");

    // const inputFinished = () => {
    //     setNicknames(
    //         currentList => [...currentList, {name:inputedName, key:currentList.length.toString()}]
    //     )
    //     console.log('닉네임',nicknames);
    //     setInputedName('');
    // };


    // const footer = () =>{
    //     return (
    //     <View style={styles.inputBoxContainer}>
    //         <TextInput 
    //             onChangeText={(text)=>setInputedName(text)}
    //             placeholder="직접 입력"
    //             placeholderTextColor={"blue"}
    //             onSubmitEditing={inputFinished}
    //         />
    //     </View>
    //     )
    // };

    const renderItem = ({item}) => {
        return(
            <MainButton onPress={setSelectedNickname}>{item.name}</MainButton>
        )
    };

    return (
    <Modal visible={props.visible} animationType="none" transparent={true}>
    <View style={styles.screen} > 
        <View style={styles.container} >
        <View style={styles.head}>
            <View><TouchableOpacity onPress={delHandler}><Text style={{color:textColor}}>취소</Text></TouchableOpacity></View>
            <Text style={{fontWeight:'700'}} >호칭</Text>
            <View><TouchableOpacity onPress={completeHandler}><Text style={{color:textColor}}>완료</Text></TouchableOpacity></View>
        </View>

        <View style={styles.firstLists}>
            <FlatList
                data={nicknames}
                renderItem={renderItem} 
                numColumns={4}
                columnWrapperStyle={styles.firstLists}
                />

        </View>

        
        </View>
    </View>
    </Modal>);

};


const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:'#00000050'
        
    },
    container:{
        width:'100%',
        height:Dimensions.get('window').height /2.5,

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
        justifyContent:"space-between",
        //이 코드 안주면 '취소 호칭 완료'와 아래 호칭 버튼들 딱 붙게 됨
        marginBottom:Dimensions.get('window').width / 12,
        //이것 안주면, '취소, '완료' 버튼이 각 화면의 끝에 붙음
        paddingHorizontal:Dimensions.get('window').width / 12,
    },
    //이렇게 3개로 만들지 않고, 하나만 만들어서 일괄적으로 적용가능한데, 혹시 몰라서!
    firstLists:{
        flexDirection:'row',
        width:'100%',
        justifyContent:"space-evenly",
        //이 코드 안주면 각 줄의 호칭 버튼들 끼리 딱 붙게 됨
        marginBottom:Dimensions.get('window').width / 40,
    },
    inputBoxContainer:{
        //width, height 다 responsive하게 바꾸어야함, 그리고 mainButton도 responsive하게 바꾸어야함
        width: 90,
        backgroundColor:'white',
        borderColor:'blue',
        borderWidth:1.5,
        paddingHorizontal:7,
        paddingVertical:5,
        borderRadius:15,
        height:35, 
        marginLeft:Dimensions.get('window').width /30
    },
    secondLists:{
        flexDirection:'row',
        width:'100%',
        justifyContent:"space-evenly",
        marginBottom:Dimensions.get('window').width / 40,
    },
    thirdLists:{
        flexDirection:'row',
        width:'100%',
        justifyContent:"space-evenly",
        marginBottom:Dimensions.get('window').width / 40,
    },
    //미완성
    // fourthLists:{
    //     flexDirection:'row',
    //     width:'100%',
    //     backgroundColor:'red',
    //     marginBottom:Dimensions.get('window').width / 40,
    // },

    //버릴 것
    // button:{
    //     width: 100,
    //     backgroundColor:'white',
    //     borderWidth:1.5,
    //     borderColor:'blue',
    //     paddingHorizontal:7,
    //     paddingVertical:5,
    //     borderRadius:15
    // },
    // buttonText:{
    //     color:'blue',
    //     textAlign:'center'
    // }
});









export default NicknameModal;