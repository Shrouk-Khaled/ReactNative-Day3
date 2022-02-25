import React from "react";
import { NativeBaseProvider, Box, StatusBar, Text, Button } from "native-base";
// import { Navig} from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./src/components/Home";
import UserList from "./src/components/UserList";
import UserDetails from "./src/components/UserDetails";

import UsersProvider from './src/context'

const defaultNavigator = createNativeStackNavigator();



export default function App() {


  return (

    <UsersProvider>
    <NativeBaseProvider>
     <NavigationContainer>
      <defaultNavigator.Navigator
        initialRouteName="home"
      >
        <defaultNavigator.Screen
          name="home"
          component={Home}
          
        />
        <defaultNavigator.Screen
          name="UserList"
          component={UserList}
        />
        <defaultNavigator.Screen
          name="UserDetails"
          component={UserDetails}
        />
    
      </defaultNavigator.Navigator>
     </NavigationContainer>
    </NativeBaseProvider>
    </UsersProvider>
   
  );
}
