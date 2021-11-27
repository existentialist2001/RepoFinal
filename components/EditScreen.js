import React, { useEffect, useState } from 'react';
import { Button ,Image, StyleSheet, TextInput, View, Text, Platform } from 'react-native';
import { TouchableOpacity,Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Type from "./Type"
import TypeAdd from './TypeAdd';
import People from "./People"
import { Ionicons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import DetailScreen from "./Screen/DetailScreen";

Date.prototype.format = function(f) {
  if (!this.valueOf()) return " ";

  var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  var d = this;
   
  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
      switch ($1) {
          case "yyyy": return d.getFullYear();
          case "yy": return (d.getFullYear() % 1000).zf(2);
          case "MM": return (d.getMonth() + 1).zf(2);
          case "dd": return d.getDate().zf(2);
          case "E": return weekName[d.getDay()];
          case "HH": return d.getHours().zf(2);
          case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
          case "mm": return d.getMinutes().zf(2);
          case "ss": return d.getSeconds().zf(2);
          case "a/p": return d.getHours() < 12 ? "오전" : "오후";
          default: return $1;
      }
  });
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

function EditScreen(props){
  //날짜
    const placeholder = "";

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [text, onChangeText] = useState();
    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("dateFormat: ", date.format("yyyy/MM/dd"));
        hideDatePicker();
        onChangeText(date.format("yyyy.MM.dd"))
    };

  //이미지
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  
  //저장
  const [txt, setTxt] = useState('')
  const [place, setPlace] = useState('')
  const [tag, setTag] = useState('')

  //뒤로가기
    //detailScreen
    const [detailScreen, setDetailScreen] = useState(false);

    if (detailScreen) {
      return (<DetailScreen donBack={setDetailScreen} 
        tag = {tag} place = {place} img = {image} content = {txt} date={text}/>)
    }

    return (
            <View style={styles.container}>
            <View style={styles.header}>
            <View style={styles.title}>
              <Ionicons 
              name="chevron-back-outline" 
              size={24} 
              color="black"
              onPress= {() => props.goback  (false)}
              />
              <Text style={{fontSize: 20 , marginLeft:15}}>히스토리</Text>
            </View>
            <Button onPress={() => setDetailScreen(true)}
            style={styles.submit} 
            title="저장"
            >
            저장
            </Button>
          </View>

              {image && <Image source={{ uri: image }} style={{ width: "100%" , height: 300}} />}
            <Text style={styles.Count}>
                기록 ({txt.length}/1500자)
            </Text>
            <KeyboardAvoidingView
             behavior={Platform.OS === 'IOS' ? "padding" : "height"}
             >
             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                 <View style={styles.container}>
                     <TextInput
                        placeholder="히스토리에 기록할 내용을 입력해주세요." 
                        style={{marginTop: 20, marginBottom: 250}}
                        maxLength = {1500}
                        value = {txt}
                        onChangeText = {(text) => setTxt(text)}       
                      />
              <View style={styles.img}>
              <Ionicons name="image-outline" size={26} color="#667EE5" onPress={pickImage}></Ionicons>
              </View>

          <View style={styles.ItemContainer}>
            <Text style={styles.LeftItems}>일시</Text>
            <View style={styles.RightItems}>
            <View style={styles.date}>
            <TouchableOpacity onPress={showDatePicker}>
                <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder={placeholder}
                    placeholderTextColor='#C9C9C9'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={text}
                />
                <DateTimePickerModal
                    headerTextIOS={placeholder}
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </TouchableOpacity>
        </View>
            </View>
          </View>

          <View style={styles.ItemContainer}>
            <Text style={styles.LeftItems}>장소</Text>
            <View style={styles.RightItems}>
              <TextInput
                style={{
                  paddingLeft: 10,
                  borderWidth: 1,
                  borderColor:"#C9C9C9",
                  height: 35,
                  borderRadius: 7,
                  width:"100%",
                  display: "flex",
                  alignItems: "center",
          }}
          value = {place}    
          onChangeText = {(e) => setPlace(e)}
              />
            </View>
          </View>
          <View style={styles.ItemContainer}>
            <Text style={styles.LeftItems}>종류</Text>
            <View style={styles.RightItems}>
              <Type />
            </View>
          </View>
          <View style={styles.ItemContainer}>
            <Text style={styles.LeftItems}>태그</Text>
            <View style={styles.RightItems}>
            <View style={styles.TagInput}>
              <TextInput 
              placeholder = "직접입력"
              placeholderTextColor="#fff"
              value = {tag}
              onChangeText = {(e) => setTag(e)}
              ></TextInput>
          </View>
            </View>
          </View>
          <View style={styles.ItemContainer}>
            <Text style={styles.LeftItems}>누구랑</Text>
            <View style={styles.RightItems}>
              <People />
            </View>
          </View>
        </View>    
             </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            </View>
        )
  }

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 15,
    },

    Count: {
       marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 11,
    },

    img: {
        marginLeft: 310,
        marginBottom: 10,
        display: "flex",
        justifyContent:"flex-end"
    },
    header: {
      paddingTop: 48,
      paddingLeft: 32,
      paddingRight: 32,
      paddingBottom: 24,
      borderBottomWidth: 1, 
      borderBottomColor: "#e9ecef",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      },
  
  title: {
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
  },

  submit: {
      color: "#5B7DF4",
      fontSize: 20,
      marginLeft: "auto",
      fontWeight: "bold",
      },
    
    ItemContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },

    LeftItems: {
        maxWidth: 55,
        fontSize: 15,
        color: "#C9C9C9",
        fontWeight: "bold",
        fontSize: 17,
    },

    RightItems: {
        flexDirection:"row",
        flexWrap: "wrap",
        paddingHorizontal: 25,
        color: "#C9C9C9",
    },

    CheckedRightItems: {
        flexDirection:"row",
        flexWrap: "wrap",
        paddingHorizontal: 25,
        color: "#5B7DF4",
    },
    
    date: {
      borderWidth: 1,
      borderColor: "#C3C3C3",
      height: 35,
      borderRadius: 7,
      width:"100%",
  },
  textInput: {
      display: "flex",
      marginLeft: 10,
      alignItems: "center",
      width: "100%",
      height: "100%",
      fontSize: 16,
      color: '#5B7DF4',
  },

  TagInput: {
    fontSize: 15,
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 70,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#C3C3C3",
    marginRight: 3,
    marginVertical: 3,
    backgroundColor: "#C3C3C3",
},




});

export default EditScreen;
