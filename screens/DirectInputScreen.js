import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import TasteInputScreen from "./TasteInputScreen";
//엑스포 그라데이션 모둘
import { LinearGradient } from "expo-linear-gradient";

// -> 아이콘
import { AntDesign } from "@expo/vector-icons";
//<AntDesign name="arrowright" size={24} color="black" />

import { MaterialIcons } from "@expo/vector-icons";
//화살표 아이콘  <MaterialIcons name="arrow-back-ios" size={24} color="black" />

//직접 입력 눌렀을 시, 취향 입력할 수 있는 페이지
const DirectInputScreen = (props) => {
  /*
입력받은 취향을, useState를 사용하여 변수에 저장하고, 그 변수를 app.js로부터 받아온 호칭 array state setter함수를 사용하여, 호칭 array에 추가할 것이다.
구체적으로,
박스 안에 취향을 쓰고, 화살표 버튼을 누르면 함수가 발동됨, 이 함수는 
1) array state setter함수 사용해서 추가
2) 다음 페이지(취향에 대한 구체적 내용을 입력)로 넘어가는 것
*/
  //input 에서 입력받은 취향을 저장할 변수
  const [inputTexts, setInputTexts] = useState(null);

  //화살표 버튼 눌렀을 시 로직
  const arrowRightHandler = () => {
    //prop으로 두 단계 거쳐서(이렇게 안해도 다른 기능있는거 알지만 일단,,)받아온 state setter함수에, 입력받은 추가할 취향(inputTexts)를 인자로 전달
    props.addTaste(inputTexts);
    //전달한 다음, 기존 변수는 다시 초기화
    setInputTexts(null);
    //구체적 입력 페이지로 이동하기 위한 state setter함수
    setGoTasteInput(true);
  };

  //input box border 색 파란색으로 바꾸는 코드
  //useRef를 쓰는데 실패해서, useState로 결국..
  const [inputBorderColor, setInputBorderColor] = useState("grey");

  //onfocus될 시, 이 함수가 실행되어서 box 색을 blue로 바꿈
  const onFocusedHandler = () => {
    setInputBorderColor("blue");
  };

  //뒤로가기 핸들러
  const goback = () => {
    props.onBack(false);
  };
  //취향 추가하면 잘 반영된다!!,,
  console.log("방금 추가한 취향", props.tastes[props.tastes.length - 1]);

  //직적입력에서 취향 입력하고, 구체적 취향 내용 입력하는 페이지로 가기 위한,,
  const [goTasteInput, setGoTasteInput] = useState(null);

  //구체적 입력 페이지로 들어가는 로직(위 arrowRightHandler함수 관련있음)
  //prop으로 뒤 돌아가기 함수 뿐 아니라, 방금 입력받은 호칭도 넘겨주어야함. /호칭 array의 state setter함수도 넘겨주어야함(뒤로가기 누를 시 삭제되게)
  // array에 인덱스로 가장 최근에 입력받은 취향을 가리킬 건데, 0부터 시작하는 것 감안해서 -1 (제대로 작동 됨)
  if (goTasteInput) {
    return (
      <TasteInputScreen
        tastes={props.tastes}
        goback={setGoTasteInput}
        currentTaste={props.tastes[props.tastes.length - 1].name}
        setTastes={props.setTastes}
        fromWhere={"input"}
        turnOffDirectInput ={props.turnOffDirectInput}
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
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>직접 입력</Text>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.mainTextContainer}>
          <Text style={{ fontWeight: "bold" }}>이지은님의</Text>
          <Text style={{ fontWeight: "bold" }}>
            어떤 취향을 기록하실건가요?
          </Text>
        </View>
        <TextInput
          onFocus={onFocusedHandler}
          style={{ ...styles.inputStyle, borderColor: inputBorderColor }}
          onChangeText={(text) => setInputTexts(text)}
          value={inputTexts}
          placeholder="  (예)독서"
        />
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={arrowRightHandler}>
          <LinearGradient
            style={styles.arrowRightButton}
            colors={["#6a5acd", "#00bfff"]}
            start={{ x: 0.6, y: 0.6 }}
          >
            <AntDesign name="arrowright" size={24} color="white" />
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
    flex: 1,
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
  main: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor:'yellow'
  },
  //이거 안쓸듯
  inputStyle: {
    borderWidth: 1,
    width: "80%",
  },
  mainTextContainer: {
    width: "80%",
    //글자랑 취향입력받는 박스 사이 거리 벌리기 위한 코드
    marginBottom: Dimensions.get("window").width / 10 / 3,
    //backgroundColor:'red'
  },

  bottom: {
    flex: 2,
    //backgroundColor:'green',
    //직접 입력 버튼 가운데에 배치
    alignItems: "center",
    justifyContent: "center",
  },
  arrowRightButton: {
    width: Dimensions.get("window").width / 6,
    height: Dimensions.get("window").height / 12,
    borderRadius: 30,

    //직접 입력 글자 버튼의 가운데로 배치
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DirectInputScreen;
