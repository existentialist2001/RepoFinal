import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//윗 부분의 뒤로가기, 점 세게 버튼을 위한 컴포넌트
//TouchableOpacity는 감싸주어 터치가 가능하게 해주는 것이고, 진짜 컨테이너는 View. 
const HeaderButton = (props) => {
    return(
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.button}>
            {props.children}
        </View>
    </TouchableOpacity>
    )};

const styles=StyleSheet.create({
    button: {
        //backgroundColor:'dodgerblue',
        width:45,
        height:45,
        paddingHorizontal:10,
    }
})

export default HeaderButton;