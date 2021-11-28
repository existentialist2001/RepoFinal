import React,{useState} from "react";
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import MyWebtutsComponent from './screens/contact';
const App=()=>{
    const [goContact,setContactTab]=useState(false);
    const goContactHandler=()=>{
        setContactTab(true);
    }

    if (goContact)
    {
        return <MyWebtutsComponent/>   
     }
    
    return(
        <View>
            <Text>Reppot</Text>
            <View>
                <TouchableOpacity>
                <Text onPress={goContactHandler}>연락처로가기 화살표</Text>
                </TouchableOpacity>
            </View>
        </View>

    )

};

export default App;