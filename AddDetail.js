import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard, TouchableWithoutFeedback, Button, ScrollView, Modal, TouchableOpacity } from 'react-native';
import Birthday from './components/Birthday';
import NameInput from './components/NameInput';
import Cell from './components/Cell';
import MBTI from './components/MBTI';
import Group from './components/Group';
import RelatedPpl from './components/RelatedPpl';
import Contents from './screens/tab';

//엑스포 아이콘
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
//빈거 <Feather name="star" size={24} color="black" />
//찬거 <FontAwesome name="star" size={24} color="yellow" />
const EditDetail=(props)=> {
  const [goBack,setGoBack]=useState(false);
  const goBackHandler=()=>{
      setGoBack(true);
  }

  if (goBack)
  {
      return <Contents/>   
   }
  const [enteredName, setEnteredName] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [finalName, setFinalName] = useState('');
  const enteredNameHandler = enteredText => {
    setEnteredName(enteredText);
  };
  const [isVisible, setIsVisible] = useState(false);
  const addExtraHandler = () => {
    setIsVisible(false);
  }
  const cancelExtraHandler = () => {
    setClickedState1(false)
    setClickedState2(false)
    setClickedState3(false)
    setClickedState4(false)
    setClickedState5(false)
    setClickedState6(false)
    setClickedState7(false)
    setClickedModalBox1(false)
    setIsVisible(false);
  }
  // const [finalName, setFinalName] = useState('');
  const [clickedBox1, setClickedBox1] = useState(false);
  const [clickedBox2, setClickedBox2] = useState(false);
  const [clickedBox3, setClickedBox3] = useState(false);
  const [clickedBox4, setClickedBox4] = useState(false);
  const [clickedBox5, setClickedBox5] = useState(false);
  const [clickedBox6, setClickedBox6] = useState(false);
  const [clickedModalBox1, setClickedModalBox1] = useState(false);

  const clickedBoxHandler1 = () => {
    setClickedBox1(clickedBox1 == false ? true : false);
    setClickedBox2(false);
    setClickedBox3(false);
    setClickedBox4(false);
    setClickedBox5(false);
    setClickedBox6(false);
  };
  const clickedBoxHandler2 = () => {
    setClickedBox2(clickedBox2 == false ? true : false);
    setClickedBox1(false);
    setClickedBox3(false);
    setClickedBox4(false);
    setClickedBox5(false);
    setClickedBox6(false);
  };
  const clickedBoxHandler3 = () => {
    setClickedBox3(clickedBox3 == false ? true : false);
    setClickedBox1(false);
    setClickedBox2(false);
    setClickedBox4(false);
    setClickedBox5(false);
    setClickedBox6(false);
  };
  const clickedBoxHandler4 = () => {
    setClickedBox4(clickedBox4 == false ? true : false);
    setClickedBox1(false);
    setClickedBox2(false);
    setClickedBox3(false);
    setClickedBox5(false);
    setClickedBox6(false);
  };
  const clickedBoxHandler5 = () => {
    setClickedBox5(clickedBox5 == false ? true : false);
    setClickedBox1(false);
    setClickedBox2(false);
    setClickedBox3(false);
    setClickedBox4(false);
    setClickedBox6(false);
  };
  const clickedBoxHandler6 = () => {
    setClickedBox6(clickedBox6 == false ? true : false);
    setClickedBox1(false);
    setClickedBox2(false);
    setClickedBox3(false);
    setClickedBox4(false);
    setClickedBox5(false);
  };
  const clickedModalBoxHandler1 = () => {
    setClickedModalBox1(clickedModalBox1 == false ? true : false);
  };
  const [clickedState1, setClickedState1] = useState(false);
  const [clickedState2, setClickedState2] = useState(false);
  const [clickedState3, setClickedState3] = useState(false);
  const [clickedState4, setClickedState4] = useState(false);
  const [clickedState5, setClickedState5] = useState(false);
  const [clickedState6, setClickedState6] = useState(false);
  const [clickedState7, setClickedState7] = useState(false);


  const clickedButtonHandler1 = () => {
    setClickedState1(clickedState1 == false ? true : false);
    setClickedState2(false)
    setClickedState3(false)
    setClickedState4(false)
    setClickedState5(false)
    setClickedState6(false)
    setClickedState7(false)
  };
  const clickedButtonHandler2 = () => {
    setClickedState2(clickedState2 == false ? true : false);
    setClickedState1(false)
    setClickedState3(false)
    setClickedState4(false)
    setClickedState5(false)
    setClickedState6(false)
    setClickedState7(false)
  };
  const clickedButtonHandler3 = () => {
    setClickedState3(clickedState3 == false ? true : false);
    setClickedState1(false)
    setClickedState2(false)
    setClickedState4(false)
    setClickedState5(false)
    setClickedState6(false)
    setClickedState7(false)
  };
  const clickedButtonHandler4 = () => {
    setClickedState4(clickedState4 == false ? true : false);
    setClickedState1(false)
    setClickedState2(false)
    setClickedState3(false)
    setClickedState5(false)
    setClickedState6(false)
    setClickedState7(false)
  };
  const clickedButtonHandler5 = () => {
    setClickedState5(clickedState5 == false ? true : false);
    setClickedState1(false)
    setClickedState2(false)
    setClickedState3(false)
    setClickedState4(false)
    setClickedState6(false)
    setClickedState7(false)
  };
  const clickedButtonHandler6 = () => {
    setClickedState6(clickedState6 == false ? true : false);
    setClickedState1(false)
    setClickedState2(false)
    setClickedState3(false)
    setClickedState4(false)
    setClickedState5(false)
    setClickedState7(false)
  };
  const clickedButtonHandler7 = () => {
    setClickedState7(clickedState7 == false ? true : false);
    setClickedState1(false)
    setClickedState2(false)
    setClickedState3(false)
    setClickedState4(false)
    setClickedState5(false)
    setClickedState6(false)
  };

  const alarmHandler = () => {
    if (clickedState1 == false && clickedState2 == false && clickedState3 == false && clickedState4 == false &&
      clickedState5 == false && clickedState6 == false && clickedState7 == false) {
      alert('아직 형식을 정하지 않으셨어요!');
    }
    else {
      addExtraHandler();
    }
  }

  const saveInputHandler = () => {
    setConfirmed(true);
    setFinalName(enteredName);
  }


  const [isStarClicked, setIsStarClicked]=useState(false);
  const clickStarHandler=()=>{
    isStarClicked?setIsStarClicked(false):setIsStarClicked(true);
  }
  //빈거 <Feather name="star" size={24} color="black" />
//찬거 <FontAwesome name="star" size={24} color="yellow" />
let star;
if(isStarClicked){
  star=<FontAwesome name="star" size={24} color="#ecce00"  />
}
else{
  star=<Feather name="star" size={24} color="black" />;
}


  return (
 
      
        <View style={styles.screen}>
          {/* <View>
        <View><Image style={styles.image} source={Back} /></View>
        <View><Image style={styles.image} source ={Star}/></View>
        <Pressable><Text style={{color:'blue'}}>저장</Text></Pressable>
      </View> */}
          <View style={styles.horizontal}>
              <TouchableOpacity onPress={()=>props._goBack(false) }>
                <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
              </TouchableOpacity>
              <Pressable onPress={clickStarHandler}>
                
                <Text style={styles.leftpadding}>{star}</Text>
              </Pressable>
              <Pressable
                onPress={saveInputHandler}>
                <Text style={styles.blue}>저장</Text>
              </Pressable>

            </View>
            <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
            <ScrollView>
          <View style={styles.contentBox}>
            
            <View>
              <Text style={styles.textTitle}>
                어떤 분과의 관계를{"\n"}
                기록하고 싶으신가요?
              </Text>
            </View>
          </View>
          <View style={styles.contentBox}>

            <View>
              <Text style={styles.middleTitle}>프로필</Text>
              <Pressable onPress={clickedBoxHandler1}>
                <NameInput
                  blurOnSubmit
                  onChange={clickedBoxHandler1}
                  placeholder="이름"
                  onChangeText={enteredNameHandler}
                  value={enteredName}
                  clickedBox1={clickedBox1}
                />
              </Pressable>
            </View>
            <Pressable onPress={clickedBoxHandler2}>
              <Group
                clickedBox2={clickedBox2} />
            </Pressable>
          </View>
          <View style={styles.contentBox}>
            <Text style={styles.middleTitle}>기본정보</Text>
            <Pressable onPress={clickedBoxHandler4}>
              <Birthday
                clickedBox4={clickedBox4}
              />       
            </Pressable>
            <Pressable onPress={clickedBoxHandler3}>
              <Cell
                placeholder="010-0000-0000"
                keyboardType="number-pad"
                clickedBox3={clickedBox3} />
            </Pressable>
            
            <Pressable onPress={clickedBoxHandler5}>
              <MBTI
                clickedBox5={clickedBox5} />
            </Pressable>
            <Pressable onPress={clickedBoxHandler6}>
              <RelatedPpl
                clickedBox6={clickedBox6} />
            </Pressable>

            <TouchableOpacity
              onPress={() => setIsVisible(true)}
              style={{ alignItems: 'center', marginTop: 30 }}>
              <View style={styles.roundButton}>
                <Text>+</Text>
              </View>
            </TouchableOpacity>
            <Modal
              visible={isVisible}
              animationType="slide">
              <View style={styles.ExtraModal}>
                <View style={styles.horizontal}>
                  <Pressable onPress={cancelExtraHandler} >
                    <Text
                      style={styles.gray}>취소</Text>
                  </Pressable>
                  <Pressable>
                    <Text style={styles.middle}>직접등록</Text>
                  </Pressable>
                  <Pressable onPress={alarmHandler}>
                    <Text style={styles.gray}>완료</Text>
                  </Pressable>
                </View>
                <View style={styles.left}>
                  <Pressable onPress={clickedModalBoxHandler1}>
                    <View >
                      <Text>제목을 입력해주세요</Text>
                      <TextInput style={{
                        ...styles.inputBox, borderColor: clickedModalBox1 ? 'blue' : 'gray'
                        , color: clickedModalBox1 ? 'blue' : 'gray'
                      }}
                      />
                    </View>
                  </Pressable>
                  <View>
                    <Text>형식을 골라주세요</Text>
                    <View style={styles.buttonContainer}>
                      <Pressable
                        style={[styles.groupButton, {
                          backgroundColor: clickedState1 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler1}
                      ><Text style={{ color: clickedState1 ? 'white' : 'gray' }}>텍스트</Text>
                      </Pressable>
                      <Pressable
                        style={[styles.groupButton, {
                          backgroundColor: clickedState2 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler2}
                      ><Text style={{ color: clickedState2 ? 'white' : 'gray' }}>날짜</Text>
                      </Pressable>
                      <Pressable
                        style={[styles.groupButton, {
                          backgroundColor: clickedState3 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler3}
                      ><Text style={{ color: clickedState3 ? 'white' : 'gray' }}>시간</Text>
                      </Pressable>
                      <Pressable
                        style={[styles.groupButton, {
                          backgroundColor: clickedState4 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler4}
                      ><Text style={{ color: clickedState4 ? 'white' : 'gray' }}>링크</Text>
                      </Pressable>
                    </View>
                    <View style={styles.buttonContainer}>
                      <Pressable
                        style={[styles.groupButton, {
                          backgroundColor: clickedState5 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler5}
                      ><Text style={{ color: clickedState5 ? 'white' : 'gray' }}>번호</Text>
                      </Pressable>
                      <Pressable
                        style={[styles.groupButton, {
                          backgroundColor: clickedState6 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler6}
                      ><Text style={{ color: clickedState6 ? 'white' : 'gray' }}>이메일</Text>
                      </Pressable>
                      <Pressable
                        style={[styles.groupButton, {
                          backgroundColor: clickedState7 ? 'blue' : 'white'
                        }]}
                        onPress={clickedButtonHandler7}
                      ><Text style={{ color: clickedState7 ? 'white' : 'gray' }}>인물</Text>
                      </Pressable>
                      <Pressable
                        style={[styles.groupButton, {
                          backgroundColor: 'white',
                          borderColor: 'white'
                        }]}
                      ><Text style={{ color: 'white' }}></Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          </ScrollView>
    </TouchableWithoutFeedback>
        </View>
   
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 70,
    padding: 40,
  },
  leftpadding: {
    paddingLeft: 130
  },
  image: {
    width: 100,
    height: 10,

  },
  horizontal: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 30
  },
  blue: {
    color: 'blue'
  },

  textTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  middleTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  contentBox: {
    marginBottom: 30,
  },
  gray: {
    color: 'gray',
    width: 70,
    fontSize: 16,
  },
  middle: {
    marginLeft: 80,
    marginRight: 120
  },
  roundButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#4285F4',
    color: 'white',
    fontSize: 20,
  },
  ExtraModal: {
    flex: 1,
    marginTop: '110%',

  },
  inputBox: {
    borderWidth: 1,
    width: 200,
    height: 40,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 10,
    paddingLeft: 8,

  },
  left: {
    marginLeft: 30
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '75%',
    margin: 5

  },
  groupButton: {

    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingLeft: 8,
    height: 30,
    fontSize: 10,
    flex: 1,
    marginLeft: 2,
  }
});
export default EditDetail;