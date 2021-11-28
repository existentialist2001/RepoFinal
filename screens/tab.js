import React, { Component,useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity, Image, ScrollView, ImageBackground, SafeAreaView, Linking, FlatList } from 'react-native';
import { Provider ,Appbar,Card,IconButton,Avatar, Title} from 'react-native-paper';
import * as Contacts from 'expo-contacts';
import Icon from 'react-native-vector-icons/Entypo';
import EditDetail from "../AddDetail";
import PersonSpecific from "../PersonSpecific";


 const Contents = () => {
    const [AddContact,setAddContact]=useState(false);
    const AddContactHandler=()=>{
        setAddContact(true);
    }
   
    const [data, setData] = React.useState([]);

    const picture = (props) =>    <Icon name="user"  style={styles.iconBox} size={27} color="black" />;
    
    const [PhoneNumber, setPhoneNumber] = React.useState([]);
    const [goLookSpecific,setGoLookSpecific]=useState(false);
    const goLookSpecificHandler=()=>{
        setContactTab(true);
    }

    


    const handleClick = async (number) => {
       Linking.openURL(`tel:${number}`)
    };
    //
    const renderItem = ({item}) => {
        return(
                  
                    <TouchableOpacity onPress={()=>console.log("클릭")} style={styles.blocks}>   
             
                        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 100, height: 100, borderRadius: 100}} />
                        <Text style={{paddingTop: 10,
                            fontWeight: '700', color: "#6B6A6A", textAlign:'center'}}>{item.name}</Text>
          
                        </TouchableOpacity> 
                       
                    );
    }

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
      if (AddContact)
      {
          return <EditDetail _goBack={setAddContact}/>   
       }
       if (goLookSpecific)
    {
        return <PersonSpecific/>   
     }
    return (
        <View style={[styles.container, styles.contents]}>
            <View style={{height: 230}}>
                <TouchableOpacity>
                <Text onPress={AddContactHandler}>plus</Text>
                </TouchableOpacity>
            <Text style = {styles.title}>Relationship</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator ={false}
             contentContainerStyle={{
                 alignItems: 'flex-start',
                 paddingStart: 10,
             }}
             style={styles.tap}>
            <TouchableOpacity style= {styles.tapButton}>
                <Text style= {styles.tapText}>전체</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.tapButton}>
                <Text style= {styles.tapText}>별</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.tapButton}>
                <Text style= {styles.tapText}>가족</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.tapButton}>
                <Text style= {styles.tapText}>학교</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.tapButton}>
                <Text style= {styles.tapText}>친구</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.tapButton}>
                <Text style= {styles.tapText}>직원</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.tapButtonLast}>
                <Text style= {styles.tapTextLast}>+</Text>
            </TouchableOpacity>
            </ScrollView>
            </View>

            <View style={styles.mainbox}>
            <FlatList
                    data={data}
                    columnWrapperStyle={{justifyContent:'space-around'}}
                    keyExtractor={index => index.toString()}
                    numColumns={3}
                    renderItem={renderItem}

                


                />

        </View>

            
        </View>
    );

};


const styles = StyleSheet.create({
    blocks:{
        width: 100,
        height: 130,
        margin: 25,


    },
    tapTextLast:{
        color: '#686868',
        fontSize: 30,
        fontWeight: '300',

    },
    tapText: {
        color: '#686868',
        fontWeight: '900',

    },
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20
    },
    header: {
        alignItems: 'flex-end',
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingRight: 35,

    },
    contents: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 3,
        backgroundColor: 'white',
    },
    footer: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        shadowColor: '#000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowOpacity: 0.3,
        shadowRadius: 7,
        flex: 0,
        backgroundColor: 'white',
    },
    title: {
        paddingTop: 70,
        fontSize: 30,
        fontWeight: '700',
        margin: 25,
    },
    tap: {
        margin: 10,
        height: 40,
        flexDirection: 'row',
        overflow: 'hidden',


    },
    tapButton:{
        backgroundColor: '#EAEAEA',
        borderRadius: 60,
        height: 40,
        width: 55,
        paddingTop: 13,
        paddingStart: 15,
        marginLeft: 7,
        marginRight: 7,
    },
    tapButtonLast:{
        backgroundColor: '#EAEAEA',
        borderRadius: 60,
        height: 40,
        width: 45,
        paddingLeft:14,
        marginLeft: 7,
        marginRight: 7,
    },
    tapButtonStar:{
        marginLeft: 7,
        marginRight: 7,

    },
    plusButton:{
        marginTop: -60,
    },
    mainbox:{
        // display: 'flex',
        // width: "95%",
        // textAlign:'center',
        // marginLeft:10,
        // marginRight:10,
        // marginBottom:10,
        // justifyContent: 'space-evenly',       
        // flexDirection: 'row',
        flex: 1,
    },
    iconBox:{
        width: 50,
        height:50,
        backgroundColor: '#e2e2e2',
        paddingTop: 10,
        textAlign:'center'
    },
    cardbox:{
        width: 100,
        height: 130,
        margin: 10,
        borderColor: 'white',
    },

})
export default Contents;