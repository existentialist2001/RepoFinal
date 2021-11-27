import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,} from 'react-native';
//기능 2, 3 둘다 쓸 custom버튼
/*
지역 전역 변수 꼼꼼하지 못해서,
일단 stylesheet 객체 사용하지 않고 
그냥 style에 변수객체 바로 적용했다.
+조건문으로 색 변경하게 하기는 했다.

그리고, 그 MainButton 사용하는 곳으로부터 버튼 width 받게 해서 더 customize한 버튼 만들어야함.ㄴ
*/

//이유는 모르겠는데, 이 두 변 수 컴포넌트 안에 쓰면 찾을 수 없다고 뜨면서 에러 발생. 왜지??
// let buttonStyle = {
//     width: 100,
//     backgroundColor:'white',
//     borderColor:'blue',
//     borderWidth:1.5,
//     paddingHorizontal:7,
//     paddingVertical:5,
//     borderRadius:15
// };

// let textColor ={
//     color:'blue',
//     textAlign:'center'
// };

const MainButton =(props)=> {
    //색 바꾸는 걸 가능하게 해 줄 hook
    const [isClicked, setIsClicked]=useState(false);

    const buttonHandler = () =>{
        //true로 바꿔줘서 색 변경
        setIsClicked(true);
        //호칭바꾸는 함수
        props.onPress(props.children);
    };
    //눌려지면 배경, 텍스트 색 바꿈

    let buttonStyle = {
        width: 90,
        backgroundColor:'white',
        borderColor:'blue',
        borderWidth:1.5,
        paddingHorizontal:7,
        paddingVertical:5,
        borderRadius:15,
        
    };
    
    let textColor ={
        color:'blue',
        textAlign:'center'
    };
    if (isClicked){
        
        buttonStyle={
            width: 90,
            backgroundColor:'blue',
            borderColor:'blue',
            borderWidth:1.5,
            paddingHorizontal:7,
            paddingVertical:5,
            borderRadius:15
        };
        textColor ={
            color:'white',
            textAlign:'center'
        }
    }

    return (
        <TouchableOpacity onPress={buttonHandler}>
        <View style={buttonStyle}>
            <Text style={textColor}>{props.children}</Text>
        </View>
        </TouchableOpacity>
    )

};
//styles 컴포넌트 밖에 정의되어 있는 것
const styles=StyleSheet.create({
    //배경, 글자 색 바꿈을 위해 조건에 따라 스타일을 다르게 적용
    // buttonContainer: {
    //     width: 100,
    //     backgroundColor:isClicked? 'blue':'white',
    //     borderColor:'blue',
    //     borderWidth:1.5,
    //     paddingHorizontal:7,
    //     paddingVertical:5,
    //     borderRadius:15
    // },
    // textStyle:{
    //     color: isClicked? 'white': 'blue',
    //     textAlign:'center'
    // },
});


export default MainButton;