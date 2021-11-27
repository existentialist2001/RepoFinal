import React from 'react';
import {StyleSheet, Text, View, Button, Pressable, Image, TouchableOpacity, Dimensions} from 'react-native';

const BasicInfoScreen =(props)=>{
 return(
     <View style={styles.screen}>
        <Text>기본정보</Text>
        <View style={styles.roundButton}>
        <TouchableOpacity onPress={() => props.goEditDetail(true)}>
          <Image
            source={require("../images/edit.png")}
            style={{ width: 75, height: 75 }}
          />
        </TouchableOpacity>
      </View>
     </View>
 )
};

const styles=StyleSheet.create({
    screen :{
        flex:1
    },
    roundButton: {
        //연필 버튼 고정시키기
        position: "absolute",
        bottom: Dimensions.get("window").width / 50,
        right: Dimensions.get("window").width / 50,
        //default가 배경이 투명하므로, 백그라운드 주면 안됨
        //backgroundColor: "white",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        //width: Dimensions.get("window").width / 4,
        //height: Dimensions.get("window").width / 4,
      },
});

export default BasicInfoScreen;