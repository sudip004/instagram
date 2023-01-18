
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Homescreen from "./screens/Homescreen"
import NewPostScreen from "./screens/NewPostScreen"
import Login from "./screens/Login"
import SingUp from './screens/SingUp'

const Stack=createStackNavigator()

const screenOptions={
  headerShown:false
}

export const Navigation = () => (
  
    <NavigationContainer>
         <Stack.Navigator initialRouteName='Homescreen' screenOptions={screenOptions}>
           <Stack.Screen name='Homescreen' component={Homescreen} />
           <Stack.Screen name='newPostScreen' component={NewPostScreen} />
           
         </Stack.Navigator>
    </NavigationContainer>
  )


 export const SingOutStack = () => (
  
    <NavigationContainer>
         <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>
           <Stack.Screen name='Login' component={Login} />
           <Stack.Screen name='SingUp' component={SingUp} />
           
         </Stack.Navigator>
    </NavigationContainer>
  )

