import React from 'react';
import {View, Text} from 'react-native'
import { viewStyles, textStyles } from './styles';
import { Header, Contents, Footer} from '../screens/tab';

const App = () => {
    return (
        <View style={viewStyles.container}>
            <Contents/>
        </View>
    );
};


export default App;