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
} from "react-native";

import NicknameModal from "./components/NicknameModal";
import RelationModal from "./components/RelationModal";
import AlramModal from "./components/AlramModal";
import HeaderButton from "./components/HeaderButton";
import InviteDeleteModal from "./components/InviteDeleteModal";
import MainCardModal from "./components/MainCardModal";
import TasteScreen from "./screens/TasteScreen";
import DirectInputScreen from "./screens/DirectInputScreen";
import BasicInfoScreen from "./screens/BasicInfoScreen";
import SmallTasteScreen from "./screens/SmallTasteScreen";
import HistoryScreen from "./screens/HistoryScreen";
//엑스포 아이콘
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
//엑스포 그라데이션 모둘
import { LinearGradient } from "expo-linear-gradient";
//기본정보, 히스토리 컴포넌트 임포트
import EditDetail from "./EditDetail";
import History from "./History";

/*
  -mvp에서 알람 버튼 삭제되서, 혹시 몰라서 이전에 작성했던 코드 여기 기록
 <View style={styles.roundButtonFirst}>
            <Pressable onPress={() => setAlramModal(true)}>
              <Image source={require("./images/alram.png")} style={{width:75, height:75}}/>
            </Pressable>
  </View>
  <AlramModal onCancel={cancelChangeAlram} onChange={changeAlram} visible={alramModal}/>
          
  -mvp에서 타임라인 버튼(가로로 줄 세개)삭제되어서, 여기에 기록
  <View style={styles.button}><Pressable  onPress={()=>settasteScreen(true)}><Ionicons name="menu-outline" size={24} color="white" /></Pressable></View>
*/
export default function PersonSpecific() {
  //호칭
  const [nicknameModal, setNicknameModal] = useState(false);
  const [nickname, setNickname] = useState("호칭");
  const changeNickname = (name) => {
    setNicknameModal(false);
    setNickname(name);
  };
  const cancelChangeNickname = () => {
    setNicknameModal(false);
  };

  //관계상태
  const [relationModal, setRelationModal] = useState(false);
  const [relationStatus, setRelationStatus] = useState("관계 선택");
  //릴레이션 모달 완료 버튼 함수
  const changeRelation = (relation) => {
    //호칭 setNickname함수 여기 넣어줘야함.
    setRelationModal(false);
    setRelationStatus(relation);
  };
  //릴레이션 모달 취소 버튼 함수
  const cancelChangeRelation = () => {
    setRelationModal(false);
  };
  //릴레이션 모달 손절 모달
  const [cutRelation, setCutRelation] = useState(false);
  //손절 카드 텍스트
  const cutTexts = (
    <View>
      <Text style={{ fontWeight: "900", fontSize: 18, textAlign: "center" }}>
        이지은님과 손절하시겠습니까?
      </Text>
      <Text style={{ color: "grey" }}>
        손절하시면 행성이 처음 상태로 돌아갑니다.
      </Text>
    </View>
  );
  //손절 카드에서 취소 누를경우 다시 돌아가도록(호칭모달 켜주고, 손절카드 모달 끄고)
  const cancelAtCut = () => {
    setCutRelation(false);
    setRelationModal(true);
  };

  //알람주기
  const [alram, setAlram] = useState("없음");
  const [alramModal, setAlramModal] = useState(false);

  const changeAlram = (input) => {
    setAlramModal(false);
    setAlram(input);
  };

  const changeDotMoal = () => {
    setDotModal(false);
  };

  //릴레이션(알람임) 모달 취소 버튼 함수
  const cancelChangeAlram = () => {
    setAlramModal(false);
  };

  //헤더 부분에, 버튼 눌렸을 때 점3개 가로에서 세로로 변하도록하기 위한
  //점세개
  const [dotModal, setDotModal] = useState(false);

  const [isDotClicked, setIsDotClicked] = useState(false);
  //dotButtonIcon const로 했다가 오류났는데, let으로 바꾸니까 됐다.
  let dotButtonIcon = (
    <Entypo name="dots-three-horizontal" size={24} color="white" />
  );
  //클릭 되었으면, 점 아이콘을 가로에서 세로로 바꾸어준다.
  //이거 MVP에 없어서, 점 버튼(가로) 클릭되도 세로로 바뀌게 하는 것 기능 없앰(name prop의 vertical을 horizontal로 수정)
  if (isDotClicked) {
    dotButtonIcon = (
      <Entypo name="dots-three-horizontal" size={24} color="white" />
    );
  }
  //점 버튼을 위한 이벤트 핸들러 함수
  //점 버튼 클릭하면 모달 열리는 로직까지 추가.
  const dotButtonHandler = () => {
    setIsDotClicked(true);
    setDotModal(true);
  };
  //점 버튼 클릭시 열리는 모달 끄고, 점 버튼 가로로 되돌리는 함수 추가
  const cancelDotModal = () => {
    setIsDotClicked(false);
    setDotModal(false);
  };
  //삭제하기 클릭 시 뜨는 창 로직
  const [delCardModal, setDelCardModal] = useState(false);
  //삭제하기 모달 떴을 떄, 취소하기 누르면 첫 배경으로 돌아가도록
  const cancelHandlerAtDel = () => {
    setDelCardModal(false);
  };
  const delTexts = (
    <View>
      <Text style={{ textAlign: "center", fontWeight: "700" }}>이지은님을</Text>
      <Text style={{ fontWeight: "700" }}>영구적으로 삭제하시겠습니까?</Text>
    </View>
  );

  //취향
  //연필(취향편집) 버튼 눌렀을 때, 취향 페이지 뜨도록 하는 코드
  const [tasteScreen, setTasteScreen] = useState(false);
  //취향 종류들 관리하는 useState(app.js에서 prop을 사용해서 취향 페이지로 취향 종류 전달)
  //object인 array. 나중에 key property 추가할지 고민해서 수정 필요
  const [tastes, setTastes] = useState([
    { name: "음식", key: "1", content: null, date:"" },
    { name: "취미", key: "2", content: null, date:"" },
    { name: "음악", key: "3", content: null, date:"" },
    { name: "문화생활", key: "4", content: null, date:"" },
    { name: "장소", key: "5", content: null, date:"" },
    { name: "선물", key: "6", content: null, date:"" },
  ]);
  //취향 직접 입력 페이지로 보낼, 취향 추가하는 함수 뿐 아니라 state setter함수도 직접(뒤로가기 시 직전 입력했던 취향 삭제를 위해)
  const addTaste = (taste) => {
    setTastes((currentLists) => [
      ...currentLists,
      { name: taste, key: (currentLists.length + 1).toString(), content:null },
    ]);
  };

  //기본정보, 취향, 히스토리 왔다 갔다 하기
  const [smallScreen, setSmallScreen] = useState(<SmallTasteScreen tastes={tastes} onClick={setTasteScreen} />);
  const changeInformation = (screenNum) => {
    if (screenNum === 1) {
      setSmallScreen(<BasicInfoScreen goEditDetail={setGoEditDetail}/>);
    } else if (screenNum === 2) {
      setSmallScreen(<SmallTasteScreen tastes={tastes} onClick={setTasteScreen} />);
    } else {
      setSmallScreen(<HistoryScreen onClick={setGoHistory}/>);
    }
  };

   //기본정보에서, 연필버튼 누를 시 미지누나 페이지로
  const [goEditDetail, setGoEditDetail]=useState(false);

   //히스토리에서 연필버튼 윤주누나 페이지로
   const [goHistory, setGoHistory]=useState(false);
  

  if (goEditDetail){
    //연필버튼 클릭 되었으면 미지누나 페이지 렌더링
    return (<EditDetail goback={setGoEditDetail} />)
  };
  if (goHistory){
    return (<History goback={setGoHFistory}/>)
  }


  //취향페이지에서 연필버튼 클릭
  if (tasteScreen) {
    return (
      <TasteScreen
        onBack={setTasteScreen}
        tastes={tastes}
        addTaste={addTaste}
        setTastes={setTastes}
      />
    );
  }
    
    

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={["#6a5acd", "#00bfff"]}
        start={{ x: 0.6, y: 0.6 }}
        style={styles.gradientContainer}
      >
        <View style={styles.header}>
          <HeaderButton onPress={() => {}}>
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </HeaderButton>
          <HeaderButton onPress={dotButtonHandler}>
            {dotButtonIcon}
          </HeaderButton>
          <InviteDeleteModal
            visible={dotModal}
            onCancel={cancelDotModal}
            icon={dotButtonIcon}
            onDelete={setDelCardModal}
          />
          <MainCardModal
            visible={delCardModal}
            texts={delTexts}
            onCancel={cancelHandlerAtDel}
          />
        </View>

        <View style={styles.main}>
          <View style={styles.mainTextsContainer}>
            <View style={styles.mainFirst}>
              <Text style={styles.name}>이지은</Text>
              <View style={styles.button}>
                <TouchableOpacity onPress={() => setNicknameModal(true)}>
                  <Text style={{ color: "white" }}>{nickname}</Text>
                </TouchableOpacity>
              </View>
              <NicknameModal
                onCancel={cancelChangeNickname}
                onChange={changeNickname}
                visible={nicknameModal}
              />
            </View>

            <View style={styles.mainSecond}>
              <View style={styles.relationButton}>
                <TouchableOpacity onPress={() => setRelationModal(true)}>
                  <Text style={{ color: "whitesmoke", fontWeight: "bold" }}>
                    {relationStatus}
                  </Text>
                </TouchableOpacity>
              </View>
              <RelationModal
                onCancel={cancelChangeRelation}
                onChange={changeRelation}
                visible={relationModal}
                cutRelation={setCutRelation}
              />
              <MainCardModal
                visible={cutRelation}
                texts={cutTexts}
                onCancel={cancelAtCut}
              />
            </View>
          </View>

          <View style={styles.planetContainer}>
            <Image
              source={require("./images/planet.png")}
              style={styles.planetImage}
            />
          </View>
        </View>

        <View style={styles.middleTab}>
          <View>
            <TouchableOpacity onPress={() => changeInformation(1)}>
              <Text style={{ color: "blue", fontWeight: "bold" }}>
                기본정보
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => changeInformation(2)}>
              <Text style={{ color: "blue", fontWeight: "bold" }}>취향</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => changeInformation(3)}>
              <Text style={{ color: "blue", fontWeight: "bold" }}>
                히스토리
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.information}>
        <View style={styles.specificInfo}>{smallScreen}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // opacity:0.5,
    // backgroundColor:'black' ,
  },
  gradientContainer: {
    flex: 4,
    //그라데이션 배경, z index 제일 뒤로
    zIndex: 0,
    elevation: 0,
  },
  header: {
    //MarginTop 주지 않으면 디바이스의 상태바와 겹친다.
    //4개 구획으로 나누고, 1:2:1:6의 비율로 공간 할당
    //시각적으로 나누기 위해서 borderBottom 색과 width 줌.

    //paddingTop:30,
    //paddingBottom:10,
    marginTop: Dimensions.get("window").width / 12,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor:'red',
  },
  main: {
    flex: 2,
    //paddingLeft:30,
    //paddingTop:30,
    //backgroundColor:'yellow',
    flexDirection: "row",
    //justifyContent:'space-between'
  },
  mainTextsContainer: {
    flex: 1,
    marginLeft: Dimensions.get("window").width / 12,
  },
  mainFirst: {
    flexDirection: "row",
    width: 90,
    marginBottom: 20,
    justifyContent: "space-between",
    //backgroundColor:'green',
  },
  mainSecond: {
    flexDirection: "row",
    width: 150,
    justifyContent: "space-between",
  },
  middleTab: {
    flex: 1,
    //border 관련 설정들
    borderTopColor: "grey",
    borderTopWidth: 1.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderLeftColor: "grey",
    borderRightColor: "grey",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    //그라데이션 배경을 위한 z index
    zIndex: 2,
    elevation: 2,
    backgroundColor: "white",
    //
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  information: {
    flex: 6,
    zIndex: 1,
    elevation: 1,
    backgroundColor: "white",
  },
  specificInfo: {
    flex: 1,
  },

  //연필모양 편집버튼 layout container
  roundButtonsContainer: {
    backgroundColor: "yellow",
    //flex: 4,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  roundButton: {
    backgroundColor:'blue',
    alignItems: "flex-end",
    justifyContent: "flex-end",
    //width: Dimensions.get("window").width / 4,
    //height: Dimensions.get("window").width / 4,
  },

  name: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  button: {
    marginLeft: 10,
    //backgroundColor:'dodgerblue',
    borderWidth: 1.5,
    borderColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
  },
  relationButton: {
    borderWidth: 1.5,
    borderColor: "white",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
    opacity: 0.5,
  },
  /*
  alramContainer:{
    width:'100%',
    height:Dimensions.get('window').height /3,
    justifyContent:'flex-end',
  },
  */
  //이미지 responsive하게 만들기
  planetImage: {
    width: Dimensions.get("window").width / 1,
    height: Dimensions.get("window").width / 2,
  },
  planetContainer: {
    flex: 1,
    zIndex: 1,
    elevation: 1,

    //행성 적당히 잘리게 위치시키기 위한 코드
    alignItems: "center",
    paddingLeft: Dimensions.get("window").width / 6,
  },
});
