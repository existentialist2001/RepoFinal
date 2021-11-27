import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Platform, Pressable, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';



const Birthday = props => {
    const [isVisible, setIsVisible] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
  
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    let confirmedDate;
    let Byear = date.getFullYear();
    let Bmonth = date.getMonth()+1;
    let Bdate = date.getDate();
    if(confirmed){
      confirmedDate = <Text>{Byear}년{Bmonth}월{Bdate}일</Text>;
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setShow(false);
        setConfirmed(true);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };



    return (

        <View style={styles.flexbox}>
            <Text style={[styles.gray, { color: props.clickedBox4 ? 'blue' : 'gray' }]}>생일</Text>
            <Text 
            onPress={showDatepicker}
            style={{...styles.psudoTextInput , borderColor:props.clickedBox4?'blue':'gray',
            color: props.clickedBox4?'blue':'gray' }} >{confirmedDate}</Text>
            
            <View>
              


            </View>
            <View>
           
            {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

            </View>
        </View>

    )
};

const styles = StyleSheet.create({

    gray: {
        color: 'gray',
        width: 70,
        fontSize: 16,
    },
    middle: {
        marginLeft: 80,
        marginRight: 130
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

    dateModal: {
        flex: 1,
        marginTop: '120%',
        alignItems: 'center',
    },
    psudoTextInput: {
        borderWidth: 1,
        width: 200,
        height: 40,
        borderStyle: 'solid',
        borderColor: 'gray',
        borderRadius: 10,
        paddingLeft: 8,
        marginLeft:15
    },

    flexbox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },

});

export default Birthday;