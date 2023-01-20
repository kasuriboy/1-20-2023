import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
const Stack = createStackNavigator();
 const Navigation = props=>{
return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.screen name="Home" component={Login} option={{HeaderShown}}>

        </Stack.screen>

        </Stack.Navigator>
    </NavigationContainer>
)
 };