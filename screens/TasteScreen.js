import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import DirectInputScreen from "./DirectInputScreen";
import TasteInputScreen from "./TasteInputScreen";

//엑스포 그라데이션 모둘
import { LinearGradient } from "expo-linear-gradient";

import { MaterialIcons } from "@expo/vector-icons";
//화살표 아이콘  <MaterialIcons name="arrow-back-ios" size={24} color="black" />
// 연필(편집) 버튼 클릭하면 오게되는 취향 페이지
//MVP에 윤주 누나로 넘어가는 timeLine(가로로 줄 세 개)버튼 없어져서, 이 페이지 취향 페이지로 재활용
//FlatList 어짜피 여기서 한번만 사용하므로 따로 파일 안만들고 그냥 여기에다 작성


// columnWrapperStyle={{
//   flexDirection:'row',
//   justifyContent:'space-evenly',
//   alignItems:'center',
//   marginTop: Dimensions.get("window").width * 0.05,
// }}

const TasteScreen = (props) => {
  //뒤로가기 핸들러
  const goback = () => {
    props.onBack(false);
  };
  //flat list render item 여기에다 정의해놓고 jsx에 전달해주어야 성능 향상,그래도 스타일이 적용되지는 않는데..??
  // 스타일이 적용 안되는 것이 아니라, 초과해서 짤리는 듯..??
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => tasteButtonHandler(item.name)} style={styles.tasteButtonContainer}>
   
          <Image source={require("../images/whitePlanet.png")} style={{width: Dimensions.get("window").width * 0.35,
    height: Dimensions.get("window").width * 0.35,}} />
          
          <View style={styles.textContainer}>
            <Text style={{color:"white"}}>{item.name}</Text>
          </View>
        
      </TouchableOpacity>
    );
  };
  //직접입력 시 true 값으로 바꾸어서 다음 페이지로 넘어가게
  const inputButtonHandler = () => {
    setDirectInputButton(true);
  };
  const [directInputButton, setDirectInputButton] = useState(false);

  //직접입력 말고, 호칭 눌렀을 시, 곧바로 그 호칭에 대한 구체적 내용을 입력하는 페이지로 넘어가기
  const [goSpecificTaste, setGoSpecificTaste] = useState(false);
  //구체입력 페이지로, 방금 선택된 호칭의 이름을 보내주기 위해 어쩔 수 없이 useState
  const [selectedTaste, setSelectedTaste] = useState(null);
  //버튼 눌렸을 떄 실행되는 함수
  const tasteButtonHandler = (taste) => {
    //받아온 호칭 이름으로 변경, 이걸 구체 입력 페이지에 currentTaste prop으로 전달
    setSelectedTaste(taste);
    //true로 바꾸어서 페이지 이동
    setGoSpecificTaste(true);
  };
  if (goSpecificTaste) {
    return (
      <TasteInputScreen
        tastes={props.tastes}
        currentTaste={selectedTaste}
        goback={setGoSpecificTaste}
        setTastes={props.setTastes}
        fromWhere={"click"}
        turnOffTasteScreen ={props.onBack}
      />
    );
  }

  if (directInputButton) {
    return (
      <DirectInputScreen
        onBack={setDirectInputButton}
        tastes={props.tastes}
        addTaste={props.addTaste}
        setTastes={props.setTastes}
        turnOffDirectInput ={props.onBack}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.container}>
          <TouchableOpacity onPress={goback}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>취향</Text>
        </View>
      </View>

      <View style={styles.main}>
        <FlatList data={props.tastes} numColumns={2} renderItem={renderItem}
        />
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={inputButtonHandler}>
          <LinearGradient
            style={styles.inputButton}
            colors={["#6a5acd", "#00bfff"]}
            start={{ x: 0.6, y: 0.6 }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              직접 입력
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  header: {
    //flex 1로 주면 호칭 버튼들이 짤림..flatlist인데도..!
    flex: 0.5,
    marginTop: Dimensions.get("window").height / 20,
    marginLeft: Dimensions.get("window").width / 20,
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor:'green'
  },
  //뒤로가기 버튼과, 타임라인 텍스트를 감싼 컨테이너
  container: {
    flexDirection: "row",
  },
  //여기서, list들 layout이 안된다,,
  main: {
    flex: 7,
    //backgroundColor:'yellow',
  },
  tasteButtonContainer: {
    //main container가 flex box인데,  layout이 적용되지 않아서 일단 크기 설정만으로 비슷하게 구현
    width: Dimensions.get("window").width * 0.35,
    height: Dimensions.get("window").width * 0.35,
    //이 속성은 카드 끼리 간격을 위해서
    marginLeft: Dimensions.get("window").width * 0.1,
    marginTop: Dimensions.get("window").width * 0.05,
  
    //글자들 버튼 컨테이너의 바닥에 붙으면서, 어느정도 떨어져 있도록
    // justifyContent: "flex-end",
    // paddingBottom: Dimensions.get("window").width * 0.05,
    // paddingLeft: Dimensions.get("window").width * 0.05,
    //backgroundColor:'green',
    //shadow
      //border 스타일
    //borderWidth: 0.5,
    //borderColor: "black",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  textContainer:{
    position: "absolute",
    bottom:Dimensions.get("window").height / 30,
    right:Dimensions.get("window").height / 30,

  },
  bottom: {
    flex: 2,
    //backgroundColor:'green',
    //직접 입력 버튼 가운데에 배치
    alignItems: "center",
    justifyContent: "center",
  },
  inputButton: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").height / 12,
    borderRadius: 30,

    //직접 입력 글자 버튼의 가운데로 배치
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TasteScreen;
