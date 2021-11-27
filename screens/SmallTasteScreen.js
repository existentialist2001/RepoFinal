import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Touchable,
} from "react-native";

const SmallTasteScreen = (props) => {
  /*
        이미지 변수에 담아서 넣어야함. 0,1,2,3,4,5까지는 custom 이미지 쓰고,
        그 이후부터는 그 통일된 이미지 넣는 로직 만들어야함ㅋㅋ
    */
  //const [resource, setResource]=useState('');

  const renderItem = ({ item }) => {
    //개별 이미지 넣기(실패)
     //console.log("프린트",parseInt(item.key));

    // if (parseInt(item.key) == 1) {
    //   setResource(require("../images/food.png"));
    // } else if (parseInt(item.key) == 2) {
    //   setResource(require("../images/hobby.png"));
    // } else if (parseInt(item.key) == 3) {
    //   setResource(require("../images/music.png"));
    // } else if (parseInt(item.key) == 4) {
    //   setResource(require("../images/culture.png"));
    // } else if (parseInt(item.key) == 5) {
    //   setResource(require("../images/place.png"));
    // } else if (parseInt(item.key) == 6) {
    //   setResource(require("../images/present.png"));
    // } else {
    //   setResource(require("../images/custom.png"));
    // };



    return (
      <View style={styles.tasteContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../images/custom.png")}
            style={styles.imageStyle}
          />
        </View>

        <View style={styles.textsContainer}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ color: "grey" }}>{item.content}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList data={props.tastes} renderItem={renderItem} />

      <View style={styles.roundButton}>
        <TouchableOpacity onPress={() => props.onClick(true)}>
          <Image
            source={require("../images/edit.png")}
            style={{ width: 75, height: 75 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  tasteContainer: {
    flexDirection: "row",
    width: "100%",
    height: Dimensions.get("window").height / 6,
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    //backgroundColor:'yellow',
  },
  imageContainer: {
    width: (Dimensions.get("window").width * 1) / 3,
    justifyContent: "center",
    alignItems: "center",
  },
  textsContainer: {
    width: (Dimensions.get("window").width * 2) / 3,
    justifyContent: "center",
  },
  //   buttonContainer: {
  //     zIndex: 1,
  //     elevation: 1,
  //   },
  //연필모양 편집버튼 layout container
  //   roundButtonsContainer: {
  //     backgroundColor: "yellow",
  //     //flex: 4,
  //     alignItems: "flex-end",
  //     justifyContent: "flex-end",
  //   },
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
  imageStyle: {
    width: (Dimensions.get("window").width * 1) / 6,
    height: (Dimensions.get("window").width * 1) / 6,
  },
});

export default SmallTasteScreen;
