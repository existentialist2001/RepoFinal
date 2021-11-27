import React, { Component } from "react";
import { Text, View,StyleSheet,SafeAreaView,ScrollView,FlatList,Linking, TextInput} from 'react-native';
import { Provider ,Appbar,Card,IconButton,Avatar} from 'react-native-paper';
import * as Contacts from 'expo-contacts';
import Icon from 'react-native-vector-icons/Entypo';
import { MaterialIcons } from '@expo/vector-icons';

const MyWebtutsComponent = () => {

    const [data, setData] = React.useState([]);
    
    const [PhoneNumber, setPhoneNumber] = React.useState([]);

    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    const handleClick = async (number) => {
       Linking.openURL(`tel:${number}`)
    };

    React.useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers],
            });
            
            setData(data);
          }
        })();
      }, []);

    return (
    <Provider>
      <View style={styles.header}>
        <SafeAreaView/>
        <View style ={{
          paddingLeft: 10,
          flexDirection: 'row',
          paddingBottom: 10

        }}>
        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
          <Text style={{
            fontWeight: '700', 
            color: 'black',
            paddingLeft: 10
          }}>연락처가져오기</Text>
        </View>
        
        <TextInput placeholder="이름 검색" placeholderTextColor= 'black'
        style={{
          margin: 10,
          backgroundColor: 'grey',
          height: 50,
          fontSize: 15,
          padding: 10,
          borderRadius: 10,
          borderColor: 'red',
          color: 'white',
        }}></TextInput>

      </View>
        <View style={styles.mainbox}>
            <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}>
                     { 
                    data.map((l, i) => (
                        <Card key={i} style={styles.cardbox}  onPress={() => handleClick(l.phoneNumbers ? l.phoneNumbers[0].number : '')}  >
                            <Card.Title
                                title= {l.name}
                                left={(props) =>    <Icon name="user"  style={styles.iconBox} size={27} color="#900" />}
                                subtitle={l.phoneNumbers ? l.phoneNumbers[0].number : ''}
                            />
                        </Card>
                    ))
                   }
              </ScrollView>
            </SafeAreaView>
        </View>
    </Provider>
  );
};


const styles = StyleSheet.create({
    title:{
        margin: 10,
        fontSize: 15,
        fontSize: 40,
    },
    mainbox:{
        textAlign:'center',
        marginLeft:10,
        marginRight:10,
        marginBottom:0,
        flex: 1,
        justifyContent: 'space-between',
    },
    cardbox:{
        margin: 10,
        borderColor: 'white',
    },
    header:{
        backgroundColor: '#e2e2e2',
        height: 150,
        paddingBottom: 10,
    },
    iconBox:{
        width: 50,
        height:50,
        backgroundColor: '#e2e2e2',
        paddingTop: 10,
        textAlign:'center'
    },
});


export default MyWebtutsComponent;
