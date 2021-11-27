import React, {useState} from 'react';
import { Image, StyleSheet, View, Text, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import EditDeleteModal from '../EditDeleteModal';
import EditScreen from '../EditScreen';
import Planet from "../images/history_icon_default_2x.png"


//정보
function DetailScreen(props) {
    const [isModalVisible, setModalVisible] = useState(false);

    return(
        <View styles={styles.container}>
            <View style={styles.header}>
            <View style={styles.title}>
              <Ionicons 
              name="chevron-back-outline" 
              size={24} 
              color="black"
              />
              <Text style={{fontSize: 20 , marginLeft:15}}>히스토리</Text>
            </View>
            </View>

            <View style = {styles.info}>
              <Image
                  style = {{
                      width: 40,
                      height: 40,
                  }}
                  source={require("../images/history_icon_default_2x.png")}
                  />

             <View style={styles.info1}>
              <Text style = {{
                  fontWeight : "bold",
                  fontSize: 18
              }}>{props.date}</Text>
              <Text style={{
                  color: "#5B7DF4",
                  fontWeight : "bold",
                  fontSize: 18,
                  paddingTop : 4,
                }}>{props.place}</Text>
             </View>
             <Ionicons size = {20} title = "edit-button" name="ellipsis-vertical-outline" onPress = {()=>setModalVisible(true)}/>
             <EditDeleteModal visible={isModalVisible} goback={props.onBack} />
            </View>

            <View style={styles.content}>
            <View>
            {props.img && <Image source={{ uri: props.img }} style={{ width: "100%", height: 300 }} />}
            </View>
            <Text style = {{
                marginTop: 10,
                fontSize : 16,
                color : "#9D9D9D",
            }}>{props.content}</Text>
            <Text style = {{
                color:"#5B7DF4",
                marginTop: 10,
                fontSize:15,
                fontWeight: "bold",
            }}> {props.tag}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        paddingHorizontal: 30,
    },

    content: {
        paddingTop : 20,
        fontSize: 15,
        paddingHorizontal: 20,
    },

    header: {
        paddingTop: 48,
        paddingLeft: 32,
        paddingRight: 32,
        paddingBottom: 24,
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

    info : {
        display: "flex",
        flexDirection: "row",
        marginTop: 2,
        marginHorizontal: 30,
        justifyContent: "space-between",
        alignItems: "center",  
    },

    info1: {
        marginLeft: -160,
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
    }
  });


export default DetailScreen;
