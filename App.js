import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import AvatarProvider from './screens/AvatarProvider';
import Avatar from './screens/Avatar';
import Usuario from './screens/Usuario';
import Menu from './screens/Menu';
import Navigation from './Navigation';
import "react-native-gesture-handler";

//const Stack = createStackNavigator();

function App() {
    console.log('Avatar:', Avatar);
    console.log('Usuario:', Usuario);
    console.log('Menu:', Menu);
    console.log('AvatarProvider:', AvatarProvider);

    return (
        <AvatarProvider>
            <Navigation/>
        </AvatarProvider>
    );
}

export default App;
